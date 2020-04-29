import User from "./user.js";
import {router} from './index.js';

let dataBase= firebase.firestore();

function send() {
  let msgError = null;

  let saveName= document.querySelector('#name').value;
  let saveLastName= document.querySelector('#lastName').value;
  let saveEmail= document.querySelector('#email').value;
  let savePassword= document.querySelector('#password').value;
  let savePassword2= document.querySelector('#password2').value;
  let saveDescription= document.querySelector('#description').value;
  let savePhoto= document.querySelector('#photo').value;
  let saveDate = new Date; 
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
    showError(document.querySelector('#password2'));
  }

  if(msgError == null) {
    let usuario = new User(saveName,saveLastName,saveEmail,savePassword,saveDescription,saveDate,savePhoto);

    registerAuthentication(usuario);
    // Enviar correo de confirmacion
  } else{
    console.log(msgError);
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
      <input type="hidden" id="description" value="">
      <input type="hidden" id="photo" value="">
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
  .then(function(data){
    registerUser(usuario, data);
  }) 
  .catch(function(error) {
      // let errorCode = error.code;
      let errorMessage = error.message;
      console.log("Error: " + errorMessage);
  });
}

function showError(campo){
  campo.style.border = "2px solid red";
  document.querySelector('#errorMsg').style.display = "block";
  setTimeout(function(){ campo.style.border = ""; 
  document.querySelector('#errorMsg').style.display = "none";}, 2000);
}

function registerUser (usuario, data) {
  console.log(data.user.uid);
  dataBase.collection("users").doc(data.user.uid).set({
    "name": usuario.name,
    "lastName": usuario.lastName,
    "email": usuario.email,
    "password": usuario.password,
    "description": usuario.description,
    "date": usuario.date,  
    "photo": usuario.photo,
    "uid":data.user.uid
  })
  /*
  dataBase.collection("users").add({
    "name": usuario.name,
    "lastName": usuario.lastName,
    "email": usuario.email,
    "password": usuario.password
  })*/
  .then((data) => {
    sentEmailConfirmation(usuario.email);
    console.log("Usuario registrado confirme su cuenta");
  }).catch((error)=> {
    console.log("Usuario NO  registrado correctamente: " + error);
  });
} 

function sentEmailConfirmation() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    // window.localStorage.setItem('emailForSignIn', email);
  })
  .catch(function(error) {
    console.log("Usuario NO  registrado correctamente: " + error);
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