
var firebaseConfig = {
    apiKey: "AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ",
    authDomain: "social-network-d33e4.firebaseapp.com",
    databaseURL: "https://social-network-d33e4.firebaseio.com",
    projectId: "social-network-d33e4",
    storageBucket: "social-network-d33e4.appspot.com",
    messagingSenderId: "957477248623",
    appId: "1:957477248623:web:77fed7501ea9a56198b79a",
    measurementId: "G-M3SME61YJ3"
  };
  firebase.initializeApp(firebaseConfig);


//Crear usuario con email
$('#email-submit').click(function(){
    let emailUser = document.querySelector('#email-new').value;
    let passwordUser = document.querySelector('#password-new').value;
    console.log(emailUser, passwordUser);

    firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
        .catch(function (error) {
            // Errores
            var errorCode = error.code;
            var errorMessage = error.message;
                    //let invalidEmail = document.querySelector('#invalid-email')
                    //invalidEmail.innerHTML = 
                    //`
                    //<p>Correo ya registrado</p>
                    //`
            console.log(errorCode)
            console.log(errorMessage)
            if(errorMessage){
                let invalidEmail = document.querySelector('#invalid-email')
                    invalidEmail.innerHTML = 
                `
                <p>Correo ya registrado</p>
                `
            }
        });
});

//Ingresar usuario existente
$('#login-submit').click(function login(){
    let emailLogin = document.querySelector('#email-login').value;
    let passwordLogin = document.querySelector('#password-login').value;
    console.log(emailLogin, passwordLogin);

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function (error) {
        //Errores
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
})

//Observador 
function observer() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('activo');
         // Usuario logueado.
        /*  var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData; */
        } else {
            console.log('no activo');
            // Usuario no logueado.
        }
    });
}
observer();

//Login Google
var provider = new firebase.auth.GoogleAuthProvider();

$('.google').click(function(){
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    console.log(result.user);
    }); 
});



//Initialize Cloud Firestore through Firebase
let db = firebase.firestore();




//nodos
let savePost = document.querySelector('#savePost');
let fileInput = document.querySelector('#file');
let url


fileInput.onchange = e => {
    let file = e.target.files[0]
    firebase.storage().ref("img").child(file.name).put(file)
        .then(snap => {
            return snap.ref.getDownloadURL()
        })
        .then(link => {
            url = link
            let img = document.createElement('img')
            img.src = link
            document.body.appendChild(img)
        })
}


//Add users
savePost.onclick = () => {
  
  let title = document.querySelector('#recipientTitle').value;
  let activity = document.querySelector('#recipientActivity').value;
  let location = document.querySelector('#recipientLocation').value;
  let description = document.querySelector('#recipientDescription').value;

    db.collection("posts").add({
      title: title,
      activity: activity,
      location: location,
      description: description
    })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.querySelector('#recipientTitle').value = '';
        document.querySelector('#recipientActivity').value = '';
        document.querySelector('#recipientLocation').value = '';
        document.querySelector('#recipientDescription').value = '';
        })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
}


//Read documents
let post = document.querySelector('#contentCreated');
  db.collection("posts").onSnapshot((querySnapshot) => {
      
      post.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
          post.innerHTML += `   
          <div class="container">
            <div class="post-img">
              
            </div>
            <div class="card-post-container">
              <div class="card-title-post">
                <h4 id="titlePost">${doc.data().title}</h4>
                <span class="edit-delete-icons">
                  <p>
                    <i class="far fa-trash-alt" onclick="deletePost('${doc.id}')"></i>
                  </p>
                  <i class="fas fa-pencil-alt" onclick="editPost('${doc.id}', '${doc.data().title}','${doc.data().activity}','${doc.data().location}','${doc.data().description}')"></i>
                </span>
                <div class="subtitle-post">
                  <p id="activityPost">${doc.data().activity}</p>
                  <p id="locationPost">${doc.data().location}</p>
                </div>
              </div>
            </div>
              <p id="descriptionPost">${doc.data().description}</p>  
          </div>     
          `
  });
});


//delete documents
function deletePost(idPost){
  db.collection("posts").doc(idPost).delete()
    .then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//edit documents
function editPost(idUser, title, activity, location, description){
  document.querySelector('#recipientTitle').value = title;
  document.querySelector('#recipientActivity').value = activity;
  document.querySelector('#recipientLocation').value = location;
  document.querySelector('#recipientDescription').value = description;

  let saveChangesPost = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesPost.onclick = () => {
    var post = db.collection("posts").doc(idUser);

    let title = document.querySelector('#recipientTitle').value;
    let activity = document.querySelector('#recipientActivity').value;
    let location = document.querySelector('#recipientLocation').value;
    let description = document.querySelector('#recipientDescription').value;

      return post.update({
        title: title,
        activity: activity,
        location: location,
        description: description
      })
      .then(function() {
        console.log("Document successfully updated!");
        saveChangesPost.innerHTML = 'Guardar';
        document.querySelector('#recipientTitle').value = '';
        document.querySelector('#recipientActivity').value = '';
        document.querySelector('#recipientLocation').value = '';
        document.querySelector('#recipientDescription').value = '';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

}
 
 
//storage
// Only authenticated users can read or write to the bucket
/* service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
} */