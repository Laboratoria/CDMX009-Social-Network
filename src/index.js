import { example } from './example.js';

//Crear usuario con email
$('#email-submit').click(function(){
    let emailUser = document.querySelector('#email-new').value;
    let passwordUser = document.querySelector('#password-new').value;
    console.log(emailUser, passwordUser);

    firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
        .catch(function (error) {
            // Errores
            var errorCode = error.code;
            var errorMessage = error.message;
                    //let invalidEmail = document.querySelector('#invalid-email')
                    //invalidEmail.innerHTML = 
                    //`
                    //<p>Correo ya registrado</p>
                    //`
            console.log(errorCode)
            console.log(errorMessage)
            if(errorMessage){
                let invalidEmail = document.querySelector('#invalid-email')
                    invalidEmail.innerHTML = 
                `
                <p>Correo ya registrado</p>
                `
            }
        });
});

//Ingresar usuario existente
$('#login-submit').click(function login(){
    let emailLogin = document.querySelector('#email-login').value;
    let passwordLogin = document.querySelector('#password-login').value;
    console.log(emailLogin, passwordLogin);

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function (error) {
        //Errores
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
})

//Observador 
function observer() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('activo');
         // Usuario logueado.
        /*  var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData; */
        } else {
            console.log('no activo');
            // Usuario no logueado.
        }
    });
}
observer();

//Login Google
var provider = new firebase.auth.GoogleAuthProvider();

$('.google').click(function(){
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    console.log(result.user);
    }); 
});


























/*  $('#loggOut').click(function logOut (){

    firebase.auth().signOut()
    .then(function(){
        console.log('saliendo...')
    })
    .catch(function(error){
        console.log(error)
    })
} )
 */

/* let bye = document.getElementById('logOut'); */
/*
logOut.onclick = */



//Mostrando elementos a usuario activo
/* function showContent() {
    let content = document.querySelector('#userActive');
    content.innerHTML =
        `
 <p>Holi usuario activo<p>
 <button onclick='logOut()' id="loggOut" class="btn">Cerrar Sesion</button>
 `;
};

 */



example();
