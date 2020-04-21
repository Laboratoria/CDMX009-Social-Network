/* import { viewHome } from './view/home'; */

var firebaseConfig = {
  apiKey: "AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ",
  authDomain: "social-network-d33e4.firebaseapp.com",
  databaseURL: "https://social-network-d33e4.firebaseio.com",
  projectId: "social-network-d33e4",
  storageBucket: "social-network-d33e4.appspot.com",
  messagingSenderId: "957477248623",
  appId: "1:957477248623:web:77fed7501ea9a56198b79a",
  measurementId: "G-M3SME61YJ3"
};
firebase.initializeApp(firebaseConfig);

//Crear usuario con email
$('#email-submit').click(function(){
    let emailUser = document.querySelector('#email-new').value;
    let passwordUser = document.querySelector('#password-new').value;
    console.log(emailUser, passwordUser);

    firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
        .catch(function (error) {
            // Errores
            var errorMessage = error.message;
            console.log(errorMessage)
            if(errorMessage){
                let invalidEmail = document.querySelector('#invalid-email')
                     invalidEmail.innerHTML = errorMessage
            }
        });
});

//Ingresar usuario existente
$('#login-submit').click(function login(){
    let emailLogin = document.querySelector('#email-login').value;
    let passwordLogin = document.querySelector('#password-login').value;
    let emailError = document.querySelector('#email-error');
    console.log(emailLogin, passwordLogin);

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch(function (error) {
        //Error
        var errorMessage = error.message;
        emailError.innerHTML = errorMessage,    
        console.log(errorMessage) 
    });
});

//Login Google
$('.google').click(function loginGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider)
    .then(function(result) {
        
    console.log(result);
    }); 
});

//Login Facebook
$('.facebook').click(function loginFb(){
    let provider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithRedirect(provider)
    .then(function(result) {

        console.log(result);
    });
});

//Observador 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('estas activo', user)
        let displayName = user.displayName;
        let userName = document.querySelector('#user-displayName');
        let userPic = document.querySelector('#user-photoURL');
        let photoURL = user.photoURL;

        userName.innerHTML = displayName;
        userPic.innerHTML = `<img src="${photoURL}"/>`
      // User is signed in.
    } else {
        console.log('no activo');
      // No user is signed in.
    };
  });
  

