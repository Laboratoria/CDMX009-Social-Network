export { checkIn, logInFacebook, logInGoogle, close};
import {home,init} from './index.js';
const provider = new firebase.auth.GoogleAuthProvider();//proveedor del servicio

const logInGoogleButton = document.querySelector('#logInGoogle');

const logInFacebookButton = document.querySelector('#logInFacebook');



function checkIn(email, pass) {

  console.log(email);
  console.log(pass);
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    alert(errorCode);
    alert(errorMessage);
    
  });
  
  home ()
}


function logInFacebook () {

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    /// This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
   var user = result.user;
    // ...
 // console.log(user);
  
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
   var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
    // ...
  });
  home ()
}

logInFacebookButton.onclick = logInFacebook;


function logInGoogle (){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
   // console.log(user);

    // Cuando hacemos login con google ocultamos todos los input y los botones 
  document.getElementById('logInUser').style.display="none";
  document.getElementById('init').style.display="none";
  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";
  console.log(user);
 // document.getElementById("root").innerHTML="<img src= '" +user.photoURL +"' />";
  home ()
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}

logInGoogleButton.onclick = logInGoogle;


  

  /*Verificando usuarios logeados
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      //document.getElementById('home').innerHTML=
      //`<p>Bienvenido `+user.email+`</p>
      //<button onclick="close()">Cerrar sesión</button>
     // `;
    } else {
      // User is signed out.
      document.getElementById('home').innerHTML="Signed out";
    }
  });*/

  //Cerrando sesión
  function close(){
    firebase.auth().signOut()
    console.log("cerrado");
    init()
  
  };
 
  