import showOupladWindow from './uopladContent.js'
import welcomeView from './welcome.js'
import profile from './profile.js'
let content= document.querySelector(".root");
let staticMenu= document.querySelector("#staticMenu");

function singIn (){
        content.innerHTML='';
        let profileView= `
        <section class="container">
        <div>
        <img id="logotype" src="images/logo.png">
        </div>
        <input class="inputUser" id="mail" placeholder="Ingresa tu correo electrónico">
        <br>
        <input class="inputUser" id="password" placeholder="Ingresa tu contraseña">
        <br>
        <button id="loginBtn" class="buttons">INGRESAR</button>
        <br>
        <p>O inicia sesión con:</p>
        <div id="containerBtns">
        <button id="loginFacebook" class="btnFbGmail">
        <img class="authSocial" src="images/facebook.png">
        </button>
        <button id="loginGmail" class="btnFbGmail">
        <img class="authSocial" src="images/gmail.png">
        </button>
        </div>
        </section>`
        content.innerHTML= profileView;
        // staticMenu.remove();
        document.querySelector("#oupladContent").addEventListener('click', showOupladWindow);
        document.querySelector("#profile").addEventListener('click', profile);
        let btnFacebook= document.querySelector("#loginFacebook");
        btnFacebook.onclick= authFacebook;
        function authFacebook () {
        let provider= new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            alert("Éxito");
            welcomeView();
            console.log(result);
        })
        .catch(function(error){
            alert("Error");
            console.log(error);
        })
        }
        let btnGmail= document.querySelector("#loginGmail");
        btnGmail.onclick= authGmail;
        function authGmail () {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                let token = result.credential.accessToken;
                console.log(token);
                let user = result.user;
                console.log(user);
                welcomeView();
              }).catch(function(error) {
                let errorCode = error.code;
                console.log(errorCode);
                let errorMessage = error.message;
                console.log(errorMessage);
                let email = error.email;
                console.log(email);
                let credential = error.credential;
                console.log(credential);
              });
        }
        let user = firebase.auth().currentUser;
        if (user != null){
        console.log(user);}
    }

export default singIn;