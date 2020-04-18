import { checkIn } from './firebase.js';

const logInButton = document.querySelector('#logIn');

const creatAccountButton = document.querySelector('#creatAccount');

const logInGoogleButton = document.querySelector('#logInGoogle');

const logInFacebookButton = document.querySelector('#logInFacebook');

var provider = new firebase.auth.GoogleAuthProvider(); //proveedor del servicio

function createAccount() {
  
  document.getElementById('logInUser').style.display="none";
  document.getElementById('init').style.display="none";
  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";
   let createAccountView = `
      <div class="login">
        
         <input id="email" type="email" placeholder="email" />
        <br>
        <input id="pass" type="password" placeholder="pass" />
        <button id="checkIn" >Registrarse</button>
      </div>`
     // primero se dibuja en el DOM 
    root.innerHTML = createAccountView
    // escuchar primero hay que manipular
    let checkInButton = document.querySelector('#checkIn')
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')
    checkInButton.onclick = e=>checkIn(email.value, pass.value) // listener que ejecuta la funcion de Firebase
    
  }
  creatAccountButton.onclick = createAccount


 

   
function logIn(){

  document.getElementById('logInNetwoork').style.display="none";
  document.getElementById('LogInNewUser').style.display="none";
    
  let emailLogIn = document.querySelector('#emailLogIn').value
  let passLogIn = document.querySelector('#passLogIn').value
    console.log(emailLogIn);

 
    console.log(passLogIn);
    
    
    
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passLogIn).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(errorCode);
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
     
    });

    let loginView = `
     `
  root.innerHTML = loginView
   
  }

  logInButton.onclick = logIn;

  function logInGoogle (){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(user);
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

function logInFacebook () {

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    /// This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
   var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
   var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
    // ...
  }
  );

}

  logInFacebookButton.onclick = logInFacebook;