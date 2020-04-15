/*import { example } from './example.js';
example();*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkfImtzIXqG7KbK3b6Tu3MABA91hPqdFA",
    authDomain: "social-network-pruebas.firebaseapp.com",
    databaseURL: "https://social-network-pruebas.firebaseio.com",
    projectId: "social-network-pruebas",
    storageBucket: "social-network-pruebas.appspot.com",
    messagingSenderId: "327573056555",
    appId: "1:327573056555:web:38bda7ccadbd1fb70c0e6e",
    measurementId: "G-ZLRFD83MS0"
};


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var buttonLogin = document.querySelector('#doLogin');
console.log(buttonLogin)
buttonLogin.addEventListener('click', function() {
    console.log("lo clickeastesss")
    enviar();
});

var buttonReg = document.querySelector('#doRegister');
buttonReg.addEventListener('click', function() {
    registro();
});

function enviar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    // alert("email=" + email + " pass=" + pass);

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(data => console.log(data.user))
        .catch(function(error) {
            console.log(error)
                // Handle Errors here. puedo hacer algo despues del login, si salio mal
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // borrar o cambiar la pantalla
            // renderLogin()
        });

}

function registro() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    // alert("email=" + email + " pass=" + pass);

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((data) => {
            console.log(data.user)
        })
        .catch(function(error) {
            console.log(error)
                // Handle Errors here. puedo hacer algo despues del login, si salio mal
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // borrar o cambiar la pantalla
            // renderLogin()
        });

}


firebase.analytics();