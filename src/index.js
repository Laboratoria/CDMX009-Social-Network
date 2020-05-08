import {home, close} from './post.js'
import {logIn, createAccount, checkIn, logInFacebook, logInGoogle}from './authentication.js'
export {init};

window.onload= init();

 function init() {


  let initView =`
  <section class="container text-center">
  <h1 class="display-4 font-weight-bold pt-1">Healt & Fitness <i class="fas fa-dumbbell"></i></h1>

  <div class=" mb-4" id="init">
  <h2 class="display-5 text-black font-weight-bold">Inicia Sesión</h2 class="display-4">
  </div>

  <div id="logInUser" class="logIn pt-3 pb-3">
    <input id="emailLogIn" type="email" placeholder="Nombre de usuario" name="email" class="form-control mb-5 mr-sm-5 p-2"/>
    <input  id="passLogIn" type="password" placeholder="Contraseña" class="form-control mb-5 mr-sm-5 p-2"/>
    <button id="logIn" class="shadow btn btn-warning btn-default pl-5 pr-5" >Ingresar</button>
  </div>

  <div class="m-2"id="logInNetwoork">
  <p>Iniciar con:</p> 
  <button id="logInFacebook" class="btn btn-primary btn-circle btn-xl m-2"><i class="fab fa-facebook"></i></button>  
  <button id="logInGoogle" class="btn btn-danger btn-circle btn-xl m-2"><i class="fab fa-google"></i></button>
  </div>

  <div id="LogInNewUser" class="creatAccount">
    <p>No tienes Cuenta?</p>
    <button id="creatAccount" class="btn btn-link"> Crear Cuenta</button>
  </div>
  </section>
  `
  root.innerHTML = initView
    let logInButton = document.querySelector('#logIn')
    let emailLogIn = document.querySelector('#emailLogIn')
    let passLogIn = document.querySelector('#passLogIn')
    logInButton.onclick = e => logIn(emailLogIn.value, passLogIn.value) // listener que ejecuta la funcion de Firebase
    let logInFacebookButoon = document.querySelector('#logInFacebook')
    logInFacebookButoon.onclick = e => logInFacebook ()
    let logInGoogleButton = document.querySelector('#logInGoogle')
    logInGoogleButton.onclick = e => logInGoogle ()
    let creatAccountButton = document.querySelector('#creatAccount')
    creatAccountButton.onclick= e => createAccount()
 }


 
    

