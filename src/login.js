import {router} from './index.js';
import {authGoogle, authFacebook} from './loginByProvider.js';

const closeSesion = () =>{
  firebase.auth().signOut().then(function(){
    console.log('Cerrando sesión');
  }).catch(function(error){
    console.log(error);
  })
}

const profil = () =>{
  let main = document.querySelector('#main');
  let user = 'Dors';

  let profilView = `
    <p>Welcome ${user}</p>
    <p> Congratulations!! This is your personal account.</p>
    <input id="logout" type="button" value="Log out">
  `
  main.innerHTML = profilView;

  let logout = document.querySelector("#logout");
  logout.addEventListener("click", closeSesion);
}


const getLoginData = () => {

  console.log('Obteniendo datos de logeado');  
  let loginEmail = document.querySelector("#loginEmail")
  let loginPsw = document.querySelector("#loginPsw")
  
  console.log(loginEmail.value);
  console.log(loginPsw.value);

  firebase.auth()
  .signInWithEmailAndPassword(loginEmail.value, loginPsw.value)
  .catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    var user = firebase.auth().currentUser;
    if(errorCode == 'auth/invalid-email') {
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
    var auth = firebase.auth();
    var emailAddress = document.querySelector("#loginEmail").value;

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
  getLoginData,
  profil
};

export default login;




















/*


const renderLogin = () => {
    let loginView = `
    <p>Welcome ${user}</p>
    <input type="text" name="email" id="loginEmail" placeholder="Email">
    <input type="password" name="password" id="loginPsw" placeholder="Password">
    <input id="loginSend" type="button" value="Log-in">
  `
  rootContainer.innerHTML = loginView;
  
  let loginBtn = document.querySelector("#loginSend");
  //loginBtn.onclick = getLoginData();
  loginBtn.addEventListener("click", getLoginData);

}

const getSigninData = () => {

  console.log("La data:");  
  let signinName = document.querySelector("#signinName").value
  let signinEmail = document.querySelector("#signinEmail").value
  let signinPsw = document.querySelector("#signinPsw").value
  
  console.log(signinName);
  console.log(signinEmail);
  console.log(signinPsw);

  firebase.auth().createUserWithEmailAndPassword(signinEmail, signinPsw).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

}

const renderSignin = () => { 
    let signinView = `
    <p >Welcome</p>
    <input type="text" name="name" id="signinName" placeholder="Name">
    <input type="text" name="email" id="signinEmail" placeholder="Email">
    <input type="password" name="password" id="signinPsw" placeholder="Password">
    <input id="signinSend" type="button" value="Sign-in"></input>
  `
  rootContainer.innerHTML = signinView;

  let signinBtn = document.querySelector("#signinSend");
  //signinBtn.onclick = getSigninData();
  signinBtn.addEventListener("click", getSigninData);
}

const clear = () => {
  let loginView = `
    
  `
  rootContainer.innerHTML = loginView;
} 



const showAccount = () =>{
  let loginView = `
    <p>Welcome ${user}</p>
    <p> Congratulations!! This is your personal account.</p>
    <input id="logout" type="button" value="Log out">
  `
  rootContainer.innerHTML = loginView;

  let logout = document.querySelector("#logout");
  logout.addEventListener("click", closeSesion);
}


const userStatus = () => {
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Activo");
      showAccount();
      // User is signed in.
      var displayName = user.displayName;
      console.log('displayName: ' + displayName);
      var email = user.email;
      console.log('email: ' + email);
      var emailVerified = user.emailVerified;
      console.log('emailVerified: ' + emailVerified);
      var photoURL = user.photoURL;
      console.log('photoURL: ' + photoURL);
      var isAnonymous = user.isAnonymous;
      console.log('isAnonymous: ' + isAnonymous);
      var uid = user.uid;
      console.log('uid: ' + uid);
      var providerData = user.providerData;
      console.log('providerData: ' + providerData);
      // ...
    } else {
      console.log("Inactivo");
      // User is signed out.
      // ...
    }
  });
}

userStatus();

const router = (route) => {
    console.log(route)
    if(route == 'login'){
        renderLogin();
    }else{
        renderSignin();
    }
}

btns.forEach(btn=>btn.onclick=e=>router(e.target.id))

*/