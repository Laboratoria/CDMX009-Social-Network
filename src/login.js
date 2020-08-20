import {router} from './index.js';
import {authGoogle, authFacebook} from './loginByProvider.js';

const getLoginData = () => {

  console.log('Obteniendo datos de logeado');  
  let loginEmail = document.querySelector("#loginEmail")
  let loginPsw = document.querySelector("#loginPsw")
  
  console.log(loginEmail.value);
  console.log(loginPsw.value);

  firebase.auth()
  .signInWithEmailAndPassword(loginEmail.value, loginPsw.value)
  .catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    let user = firebase.auth().currentUser;
    if(errorCode == 'auth/invalid-email' || errorCode == 'auth/user-not-found') {
      loginEmail.style.border = "2px solid red";
      document.querySelector('#errorMsg').style.display = "block";
      setTimeout(function(){ loginEmail.style.border = ""; document.querySelector('#errorMsg').style.display = "none";}, 2000);
    }else if(errorCode == 'auth/wrong-password'){
      loginPsw.style.border = "2px solid red";
      document.querySelector('#errorMsg').style.display = "block";
      setTimeout(function(){ loginPsw.style.border = "";document.querySelector('#errorMsg').style.display = "none";}, 2000);
    } 
  });
} 

const renderLogin = () =>{
  console.log('You are here, in login.js');
  let main = document.querySelector('#main');

  let loginView =  `
    <div class="container">
        <figure>
            <img src="images/logo.png" alt="">
        </figure>
        <input type="text" name="email" id="loginEmail" placeholder="Email">
        <input type="password" name="password" id="loginPsw" placeholder="Password">
        <span id="errorMsg"> Hay un error, verifica tus datos.</span>
        <input id="loginBtn" type="button" value="Log in">
        <p id="forgotPsw"> <span><u>¿Olvidaste tu contraseña?</u></span> </p>
        <p>O bien ingresa con...</p>
        <div class="social-media">
            <i class="fab fa-facebook-f" id="facebook"></i>
            <i class="fab fa-google"></i>
        </div>
        <p>¿No tienes una cuenta? <u id="signinLink">Regístrate</u></p>
    </div> 
  `
  main.innerHTML = loginView;
  
  let loginBtn = document.querySelector("#loginBtn");
  let forgotPsw = document.querySelector("#forgotPsw");
  let socialBtns = document.querySelectorAll(".fab");
  let signinLink = document.querySelector("#signinLink");

  loginBtn.addEventListener("click", getLoginData);
  forgotPsw.addEventListener("click", f => {
    console.log('Olvidó contraseña');
    let auth = firebase.auth();
    let emailAddress = document.querySelector("#loginEmail").value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      console.log('Enviando mail de reestablecimiento de psw');
    }).catch(function(error) {
      console.log(error.message + 'Escribe correo');
    });

  });
  socialBtns.forEach(btn => btn.onclick = e => {
    if(e.target.id == 'facebook'){
      console.log('Es Facebook');
      authFacebook();
    }else{
      console.log('Es google');
      authGoogle();
    }
  });
  signinLink.addEventListener("click", f => {
    console.log('Se va a registrar');
    router('signin');
  });

}

const login = {
  renderLogin,
  getLoginData
};

export default login;

