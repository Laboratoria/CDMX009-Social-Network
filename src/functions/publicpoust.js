//traer la informacion del post cuando se le da clic en el boton
function publicPost(user) {
    //console.log(user)
    let fileInput = document.getElementById('myNewFile'); //variable para la prueba de subir imagen
    let imageUrl = '';
    fileInput.onchange = respuestaCambioImagen => {
        console.log(respuestaCambioImagen);
        let file = respuestaCambioImagen.target.files[0];
        firebase.storage().ref("devpost").child(file.name).put(file)
            .then(snap => { //¿Donde esta el archivo? En file.name
                return snap.ref.getDownloadURL(); //conseguir el link de la imagen. Retornas la promesa y concatenas el otro then
            })
            .then(link => {
                imageUrl = link;
                let img = document.createElement('img');
                img.src = imageUrl;
                document.body.appendChild(img);
                document.getElementById("showComment").appendChild(img); //aquí va  el preview de mi imagen antes de dar click en publicar
            });
    };

    let publicPost = document.getElementById('publish');
    publicPost.onclick = function() {
        let text = document.getElementById('userCommit'); //variable con id en donde se pintaran los post, textArea
        // traer el texto
        console.log(user);
        let post = {
            texto: text.value,
            user: user.displayName,
            date: new Date(),
            img: imageUrl, //variable global, aqui se almacena la imagen cuando ya se tiene el link que envio la funcion onchange
            mail: user.email,
            photo: user.photoURL,
            uid: user.uid,
        }
        addNewPost(post)
            .then(function(post) { //esto es la promesa
                alert('Post publicado') //este es el resultado de la promesa
            })
            .then(function() {
                text.value = "";
            })
            .then(function() {
                imageUrl = "";
            })
            .catch(err => {
                console.log(err); //esto es el error cuando la respuesta es negativa
            });
    };
};
//pasar a la funcion el objeto que se encuentra en la base de datos de firebase
function addNewPost(post) {
    console.log(post);
    let postsRef = db.collection('pruebas_300420_Esther') //se llama post porque asi se llama nuestra coleccion en Database , le podemos llamar como queramos
    return postsRef.add(post);
}

export { publicPost, addNewPost }