import { buildComent } from '../view/coment.js';
//import { deleteComments } from './deletepost.js';
//import { editComments } from './editpost.js'

//leer coleccion de post
//AQUIII ESTAN LAS FUNCIONES DE EDITAR Y BORRAR POST EN COMENT.JS HICIMOS LOS CAMBIOS QUE TIENEN QUE VER CON ESTO
function readPosts() {
    let EmailCortado = 'No hay email';
    let postsRef = db.collection('pruebas_300420_Esther') //se llama post porque asi se llama nuestra coleccion en Database , le podemos llamar como queramos     
    postsRef.orderBy('date', 'desc').onSnapshot(snap => {
        let publishPust = document.querySelector('#showComment')
        publishPust.innerHTML = ''
        snap.forEach(doc => {
            if (typeof doc.data().mail != 'undefined') {
                let email = doc.data().mail;
                let divisiones = email.split("@");
                EmailCortado = divisiones[0];
            } //mi condicion    si, si está ponlo  si no está pon el mail
            let nombre = doc.data().user ? doc.data().user : EmailCortado;
            let image = doc.data().photo ? doc.data().photo : "images/profile-picture-green.jpg";
            let div = buildComent(image, nombre, doc.data().img, doc.data().texto, doc.id);
            let nodo = document.createElement('div')
            nodo.innerHTML = div;
            publishPust.appendChild(nodo);
        });

 /*     deleteComments();
        editComments();
 */

/******  MODULO DE EDITAR Y BORRAR COMENTARIOS *********/
        
        let elems = document.querySelectorAll('.fixed-action-btn');
        let instances = M.FloatingActionButton.init(elems, {
            direction: 'right',
            hoverEnabled: false
        });

        let deleteComments = document.querySelectorAll('.deletePostUser');

        deleteComments.forEach(function(deleteComment) {
            deleteComment.addEventListener('click', function(clickedPoints) {
                console.log(clickedPoints.target.dataset.id);
                db.collection('pruebas_300420_Esther').doc(clickedPoints.target.dataset.id).delete()
                    .then(function() {
                        alert('Post borrado exitosamente'); //AQUI VA LA COLECCION QUE TENGAS TU
                    }).catch(function(error) {
                        alert('Error removing post: ', error);
                    });
            });
        });

        let editComments = document.querySelectorAll('.editPostUser'); //vendría siendo editPostUser= a la clase del boton del icono editar
        editComments.forEach(function(editComment) {
            editComment.addEventListener('click', function(clickedPencil) {
                // console.log(clickedPoints.target.dataset.id);
                let postForEdition = db.collection("pruebas_300420_Esther").doc(clickedPencil.target.dataset.id); //AQUI VA LA COLECCION QUE TENGAS TU
                // console.log(clickedPoints.target.dataset.id)

                let publicEditPost = document.querySelector('#newPostPublish-' + clickedPencil.target.dataset.id); //este es el id del boton de checkado 
                let box = document.querySelector('.editTextPostUser-' + clickedPencil.target.dataset.id); //mi textarea
                box.style.display = 'block'; //estoy incando que cuando el usuario le de click al boton de editar se muestre la texarea
                let buttonCheck = document.querySelector('.publicationedit-' + clickedPencil.target.dataset.id); //es donde tengo los botones de la nueva foto y del check
                buttonCheck.style.display = 'block';

                let fileEdit = document.querySelector('#newEditPost-' + clickedPencil.target.dataset.id); //variable para la prueba de subir imagen
                let imageUrl = '';
                fileEdit.onchange = answerChangeImage => {
                    console.log(answerChangeImage);

                    let editedFile = answerChangeImage.target.files[0]
                    firebase.storage().ref("devpost").child(editedFile.name).put(editedFile)
                        .then(snap => {
                            return snap.ref.getDownloadURL() //conseguir el link de la imagen. Retornas la promesa y concatenas el otro then
                        })
                        .then(link => {
                            imageUrl = link
                            let img = document.createElement('img');
                            img.src = imageUrl;
                            document.body.appendChild(img);
                            document.getElementById("showComment").appendChild(img); //aquí va  el preview de mi imagen antes de dar click en publicar
                        })
                }

                publicEditPost.onclick = function() {

                    return postForEdition.update({
                            texto: box.value,
                            img: imageUrl,

                        })
                        .then(function() {
                            alert("Post editado exitosamente!!");
                        })
                        .catch(function(error) {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                };
            });
        });
        
    }); //POSTREF

}; //READPOST

export { readPosts }
