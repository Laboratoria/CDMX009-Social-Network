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
        document.querySelector("#oupladContent").onclick= showOupladWindow;
        document.querySelector("#profile").onclick= welcomeView;
        document.querySelector("#provisional").onclick= profile;
        let btnFacebook= document.querySelector("#loginFacebook");
        btnFacebook.onclick= authFacebook;
        function authFacebook () {
        let provider= new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            alert("Éxito");
            console.log(result);
            // }
        })
        .catch(function(error){
            alert("Error");
            console.log(error);
        })
        }
        let btnGmail= document.querySelector("#loginGmail");
        btnGmail.onclick= authGmail;
        function authGmail () {
            var provider = new firebase.auth.GoogleAuthProvider();
            //ACCEDIENDO CON REDIRECCIONAMIENTO Y NO CON POPUP firebase.auth().signInWithRedirect(provider);
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                console.log(token);
                // The signed-in user info.
                let user = result.user;
                console.log(user);
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode);
                var errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                var email = error.email;
                console.log(email);
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(credential);
                // ...
              });
        }
        var user = firebase.auth().currentUser;
        if (user != null){
        console.log(user);}
        // var name, email, photoUrl, uid, emailVerified;

        // if (user != null) {
        // name = user.displayName;
        // email = user.email;
        // photoUrl = user.photoURL;
        // emailVerified = user.emailVerified;
        // uid = user.uid;}
    }

export default singIn;