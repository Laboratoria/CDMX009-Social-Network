//Read Post
import { buildComent } from '../view/coment.js';

function readPosts() {
    let emailCortado = 'No hay email';
    let postsRef = db.collection('pruebas_300420_Esther');
    postsRef.orderBy('date', 'desc').onSnapshot(snap => {
        let publishPust = document.querySelector('#showComment');
        publishPust.innerHTML = '';
        snap.forEach(doc => {
            if (typeof doc.data().mail != 'undefined') {
                let email = doc.data().mail;
                let divisiones = email.split("@");
                emailCortado = divisiones[0];
            }; 
            let nombre = doc.data().user ? doc.data().user : emailCortado;
            let image = doc.data().photo ? doc.data().photo : "images/profile-picture-green.jpg";
            let div = buildComent(image, nombre, doc.data().img, doc.data().texto, doc.id);
            let nodo = document.createElement('div')
            nodo.innerHTML = div;
            publishPust.appendChild(nodo);
        });

//Delete Post        
        let elems = document.querySelectorAll('.fixed-action-btn');
        let instances = M.FloatingActionButton.init(elems, {
            direction: 'bottom',
            hoverEnabled: false
        });

        let deleteComments = document.querySelectorAll('.deletePostUser');

        deleteComments.forEach(function(deleteComment) {
            deleteComment.addEventListener('click', function(clickedPoints) {
                db.collection('pruebas_300420_Esther').doc(clickedPoints.target.dataset.id).delete()
                    .then(function() {
                        alert('Post borrado exitosamente');
                    })
                    .catch(function(error) {
                        alert('Error removing post: ', error);
                    });
            });
        });

//Edit Post
        let editComments = document.querySelectorAll('.editPostUser');
        editComments.forEach(function(editComment) {
            editComment.addEventListener('click', function(clickedPencil) {
                let postForEdition = db.collection("pruebas_300420_Esther").doc(clickedPencil.target.dataset.id); 
                let publicEditPost = document.querySelector('#newPostPublish-' + clickedPencil.target.dataset.id);
                let box = document.querySelector('.editTextPostUser-' + clickedPencil.target.dataset.id);
                box.style.display = 'block';
                let buttonCheck = document.querySelector('.publicationedit-' + clickedPencil.target.dataset.id);
                buttonCheck.style.display = 'block';
                let fileEdit = document.querySelector('#newEditPost-' + clickedPencil.target.dataset.id);
                let imageUrl = '';
                fileEdit.onchange = answerChangeImage => {
                    let editedFile = answerChangeImage.target.files[0]
                    firebase.storage().ref("devpost").child(editedFile.name).put(editedFile)
                        .then(snap => {
                            return snap.ref.getDownloadURL();
                        })
                        .then(link => {
                            imageUrl = link
                            let img = document.createElement('img');
                            img.src = imageUrl;
                            document.body.appendChild(img);
                            document.getElementById("showComment").appendChild(img);
                        });
                };

                publicEditPost.onclick = function() {
                    return postForEdition.update({
                            texto: box.value,
                            img: imageUrl,
                        })
                        .then(function() {
                            alert("Post editado exitosamente!!");
                        })
                        .catch(function(error) {
                            console.error("Error updating document: ", error);
                        });
                };
            });
        });
        
    });
};

export { readPosts }
