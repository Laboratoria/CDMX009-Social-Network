// // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el login
// // var buttonLogin = document.querySelector('#doLogin');
// // console.log(buttonLogin)
// // buttonLogin.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     loginPageOne();
// // });
// // En esta parte hago la funcion que va tener mi boton al hacer click
// // en entar a la aplicación en esta parte  la que me hace entrar a la app (login)
// function loginPageOne() {
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('pass').value;
//     alert("email=" + email + " pass=" + pass);

//     firebase.auth().signInWithEmailAndPassword(email, pass)D:

//         .then((data) => {
//             alert('Bienvenido ' + data.user.email);
//         })
//         .catch(function(error) {
//             console.log(error)
//                 // Handle Errors here. puedo hacer algo despues del login, si salio mal
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             alert(errorMessage);
//             // borrar o cambiar la pantalla
//             renderLogin()
//         });

//     var cred = firebase.auth.EmailAuthProvider.credential(
//         email,
//         password
//     );
// }

// // **************** L O G I N     G O O G L E*******
// En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el ingreso con google
// var buttonGoogle = document.querySelector('#loginGoogle');
// buttonGoogle.addEventListener('click', function(e) {
//     e.preventDefault();
//     googleButton();
// });

// // En esta parte hago la funcion que va tener mi boton al hacer click
// // en entar a la aplicación en esta parte  la que me hace entrar a la app con google (google)
// function googleButton() {
//     // Aquí se crea una instancia del objeto del proveedor de Google y facebook
//     // esta instancia es para que me redireccione a google o de facebook, es la parte que me lleva a ellos.
//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         alert('Bienvenido ' + user.email);
//         // ...
//     }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     });
// }

// // **************** L O G I N     F A C E B O O K *******

// // // En esta parte creo una variable en donde voy a llamar a mi id al
// // // que quiero darle el click en este caso el ingreso con facebook
// // var buttonFacebook = document.querySelector('#loginFacebook');
// // buttonFacebook.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     facebookButton();
// // });

// // // En esta parte hago la funcion que va tener mi boton al hacer click
// // // en entar a la aplicación en esta parte  la que me hace entrar a la app con facebook (facebook
// function facebookButton() {
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         console.log(user);
//         alert('Bienvenido ' + user.email);
//         // ...
//     }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     });
// }

// // // ******** LOG OUT FUNCTION 

// var getOut = document.querySelector('#signOut');
// getOut.addEventListener('click', function(e) {
//     e.preventDefault();
//     out();
// });

// function out() {
//     firebase.auth().signOut()
//         .then(function() {
//             alert('Good Bye');
//         }).catch(function(error) {
//             console.log(error);
//         });
// }

// export { buttonLogin, loginPageOne, googleButton, buttonGoogle, buttonFacebook, facebookButton, getOut, out }