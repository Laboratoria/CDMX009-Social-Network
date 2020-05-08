export {logIn,createAccount, checkIn, logInFacebook, logInGoogle};
import {home} from './post.js';
import {init} from './index.js';

const provider = new firebase.auth.GoogleAuthProvider();//proveedor del servicio

function logIn(emailLogIn, passLogIn){

    console.log(emailLogIn);

     console.log(passLogIn);
     //home ()
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
      
      // Handle Errors here.
      var errorCode = error.code;
      alert(errorCode);
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
     
    });
    
  }

  //const createAccountButton = document.querySelector('#creatAccount');

  function createAccount() {
    
    document.getElementById('logInUser').style.display = 'none';
    document.getElementById('init').style.display = 'none';
    document.getElementById('logInNetwoork').style.display = 'none';
    document.getElementById('LogInNewUser').style.display = 'none';
    const createAccountView = `
        <div class="login" id="createAccount">
          
           <input id="email" type="email" placeholder="email" />
          <br>
          <input id="pass" type="password" placeholder="pass" />
          <button id="checkIn" >Registrarse</button>
          <button id="back" >volver</button>
        </div>`
       // primero se dibuja en el DOM 
      root.innerHTML = createAccountView
      // escuchar primero hay que manipular
      let checkInButton = document.querySelector('#checkIn')
      let backButton = document.querySelector('#back')
      let email = document.querySelector('#email')
      let pass = document.querySelector('#pass')
      checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
      backButton.onclick = e=> init()
    }

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

}



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



function observador () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Existe Usuario activo");
      home ();
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("No existe usuario activo");
      // ...
    }
  });

}  

observador ();
