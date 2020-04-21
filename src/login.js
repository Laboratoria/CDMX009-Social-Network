import showOupladWindow from './uopladContent.js'
import welcomeView from './welcome.js'
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
        document.querySelector("#oupladContent").onclick= showOupladWindow;
        document.querySelector("#profile").onclick= welcomeView;
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
    }

export default singIn;