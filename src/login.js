import showOupladWindow from './uopladContent.js'
import welcomeView from './welcome.js'
import profile from './profile.js'
let content= document.querySelector(".root");
let staticMenu= document.querySelector("#staticMenu");

function singIn (){
        content.innerHTML='';
        let profileView= `
        <section class="container">
        <img src="images/logo.png">
        <div>
        <input id="mail" placeholder="Ingresa tu correo electrónico">
        <input id="password" placeholder="Ingresa tu contraseña">
        <button id="loginBtn">INGRESAR</button>
        <button id="loginFacebook">FACEBOOK</button>
        <button id="loginGmail">GMAIL</button>
        </div>
        </section>`
        content.innerHTML= profileView;
        // staticMenu.remove();
        document.querySelector("#oupladContent").addEventListener('click', showOupladWindow);
        document.querySelector("#profile").addEventListener('click', welcomeView);
        document.querySelector("#provisional").addEventListener('click', profile) ;
        let btnFacebook= document.querySelector("#loginFacebook");
        btnFacebook.onclick= authFacebook;
        function authFacebook () {
        let provider= new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            alert("Éxito");
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