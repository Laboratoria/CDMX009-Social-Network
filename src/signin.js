import User from "./user.js";
import {router} from './index.js';

/*
 export const firebaseConfig = {
    apiKey: "AIzaSyAxz1HP9cPkI4VO2gXoj4GVnFxZK2kKUVw",
    authDomain: "desarrolloweb-44294.firebaseapp.com",
    databaseURL: "https://desarrolloweb-44294.firebaseio.com",
    projectId: "desarrolloweb-44294",
    storageBucket: "desarrolloweb-44294.appspot.com",
    messagingSenderId: "236290236182",
    appId: "1:236290236182:web:038028ae2f66e945743a37"
  };

firebase.initializeApp(firebaseConfig);*/
let dataBase= firebase.firestore();

function send() {
  let msgError = null;

  let saveName= document.querySelector('#name').value;
  let saveLastName= document.querySelector('#lastName').value;
  let saveEmail= document.querySelector('#email').value;
  let savePassword= document.querySelector('#password').value;
  let savePassword2= document.querySelector('#password2').value;

  // Validar datos
  if(saveName == null || saveName == '' || saveName == undefined ){
    msgError ="Completa el campo name";
    showError(document.querySelector('#name'));
  }else if(saveLastName == null || saveLastName == '' || saveLastName == undefined){
    msgError ="Completa el campo Lastname";
    showError(document.querySelector('#lastName'));
  }else if(saveEmail == null || saveEmail == '' || saveEmail == undefined){
    msgError ="Completa el campo email";
    showError(document.querySelector('#email'));
  }else if(savePassword == null || savePassword == '' || savePassword == undefined){
    msgError ="Completa el campo password";
    showError(document.querySelector('#password'));
  }else if(savePassword2 == null || savePassword2 == '' || savePassword2 == undefined ||savePassword != savePassword2 ){
    msgError ="Password no coicide";
    showError(document.querySelector('#`password2'));
  }

  if(msgError == null) {
    let usuario = new User(saveName,saveLastName,saveEmail,savePassword);

    registerAuthentication(usuario);
    // Enviar correo de confirmacion
  }
}

export const renderSignin = () => {
    let main = document.querySelector('#main');
    let registerView=`<form action="" id="formNewUser" class="formNewUser">
      <figure>
        <img src="images/logo.png" alt="">
      </figure>
      <input type="text" id="name" class="input" placeholder="Name" maxlength="20">
      <input type="text" id="lastName" class="input" placeholder="Last Name" maxlength="30">
      <input type="email" id="email" class="input" placeholder="Email">
      <input type="password" id="password" class="input" placeholder="Password">
      <input type="password" id="password2" class="input" placeholder="Confirm password">
      <span id="errorMsg"> Hay un error, verifica tus datos.</span>
      <input type="button" id="send" class="button" value="Sign in">
      <p>¿Ya tienes una cuenta? <u id="loginLink">Inicia sesión</u></p>
    </form>`
    main.innerHTML = registerView
    
    let btnSend = document.getElementById("send");
    let loginLink = document.querySelector("#loginLink");

    btnSend.addEventListener("click",send,false);
    loginLink.addEventListener("click", f => {
        console.log('Regresa a login');
        router();
    });

} 

function registerAuthentication(usuario) {
  firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
  .then(function(user){
    registerUser(usuario);
  }) 
  .catch(function(error) {
      // let errorCode = error.code;
      let errorMessage = error.message;
      alert("Error: " + errorMessage);
  });
}

function showError(campo){
  campo.style.border = "2px solid red";
  document.querySelector('#errorMsg').style.display = "block";
  setTimeout(function(){ campo.style.border = ""; 
  document.querySelector('#errorMsg').style.display = "none";}, 2000);
}

function registerUser (usuario) {
  dataBase.collection("users").add({
    "name": usuario.name,
    "lastName": usuario.lastName,
    "email": usuario.email,
    "password": usuario.password
  })
  .then((data) => {
    sentEmailConfirmation(usuario.email);
    alert("Usuario registrado confirme su cuenta");
  }).catch((error)=> {
    alert("Usuario NO  registrado correctamente: " + error);
  });
} 

function sentEmailConfirmation() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    // window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    alert("Usuario NO  registrado correctamente: " + error);
  });
}

/*

function outlogin() {
  firebase.auth().signOut().then(function(){
      console.log("Deslogiado");
  }).catch(function(error){
      console.log("Error"+error);
  })
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    console.log(user);
    if(!user.emailVerified){
      // outlogin();
    }

  } else {

  }
});
*/
