
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


//Post/Firestore


//Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

//nodos
let savePost = document.querySelector('#savePost');


//Add users
savePost.onclick = () => {
  
  let title = document.querySelector('#recipientTitle').value;
  let activity = document.querySelector('#recipientActivity').value;
  let location = document.querySelector('#recipientLocation').value;
  let description = document.querySelector('#recipientDescription').value;

    db.collection("posts").add({
      titulo: title,
      actividad: activity,
      ubicacion: location,
      descripcion: description
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


//Leer documentos
let post = document.querySelector('#printInfo');
  db.collection("posts")
    .onSnapshot((querySnapshot) => {
      
      post.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
          post.innerHTML += `   
          <p id="titlePost">${doc.data().titulo}</p>
          <p id="activityPost">${doc.data().actividad}</p>
          <p id="locationPost">${doc.data().ubicacion}</p>
          <p id="descriptionPost">${doc.data().descripcion}</p>       

          `
  });
});
/* 
//borrar documentos
function deleteUser(idUser){
  db.collection("users").doc(idUser).delete()
    .then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//editar documentos
function editUser(idUser, name, lastName, date){
  document.querySelector('#name').value = name;
  document.querySelector('#lastName').value = lastName;
  document.querySelector('#date').value = date;

  let saveChangesUser = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesUser.onclick = () => {
    var user = db.collection("users").doc(idUser);

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let date = document.querySelector('#date').value;

      return user.update({
        first: name,
        last: lastName,
        born: date
      })
      .then(function() {
        console.log("Document successfully updated!");
        saveChangesUser.innerHTML = 'Guardar';
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#date').value = '';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

}
 */
 