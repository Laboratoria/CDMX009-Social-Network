//Public Post
function publicPost(user) {
    let fileInput = document.getElementById('myNewFile');
    let imageUrl = '';
    fileInput.onchange = respuestaCambioImagen => {
        let file = respuestaCambioImagen.target.files[0];
        firebase.storage().ref("devpost").child(file.name).put(file)
            .then(snap => {
                return snap.ref.getDownloadURL();
            })
            .then(link => {
                imageUrl = link;
                let img = document.createElement('img');
                img.src = imageUrl;
                document.body.appendChild(img);
                document.getElementById("showComment").appendChild(img);
            });
    };

    let publicPost = document.getElementById('publish');

    publicPost.onclick = function() {
        let text = document.getElementById('userCommit'); 
        console.log(user);
        let post = {
            texto: text.value,
            user: user.displayName,
            date: new Date(),
            img: imageUrl, 
            mail: user.email,
            photo: user.photoURL,
            uid: user.uid,
        }
        addNewPost(post)
            .then(function(post) { 
                alert('Post publicado');
            })
            .then(function() {
                text.value = "";
            })
            .then(function() {
                imageUrl = "";
            })
            .catch(err => {
                console.log(err);
            });
    };
};

function addNewPost(post) {
    console.log(post);
    let postsRef = db.collection('pruebas_300420_Esther');
    return postsRef.add(post);
};

export { publicPost, addNewPost }