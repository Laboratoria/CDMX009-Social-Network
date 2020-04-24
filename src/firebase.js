


firebase.storage();



//Crear usuario con email
$('#email-submit').click(function () {
  let emailUser = document.querySelector('#email-new').value;
  let passwordUser = document.querySelector('#password-new').value;
  console.log(emailUser, passwordUser);

  firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
    .catch(function (error) {
      // Errores
      var errorMessage = error.message;
      console.log(errorMessage)
      if (errorMessage) {
        let invalidEmail = document.querySelector('#invalid-email')
        invalidEmail.innerHTML = errorMessage
      }
    });
});

//Ingresar usuario existente
$('#login-submit').click(function login() {
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
$('.google').click(function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider)
    .then(function (result) {

      console.log(result);
    });
});

//Login Facebook
$('.facebook').click(function loginFb() {
  let provider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithRedirect(provider)
    .then(function (result) {

      console.log(result);
    });
});

let photoURL
let displayName

//Observador 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('estas activo', user)
        displayName = user.displayName;
        photoURL = user.photoURL;
        localStorage.displayName = user.displayName
        localStorage.photoURL = user.photoURL

        let userName = document.querySelector('#user-displayName');
        let userPic = document.querySelector('#user-photoURL');
        
        userName.innerHTML = displayName;
        userPic.innerHTML = `<img src="${photoURL}"/>`;


    } else {
        console.log('no activo');
      // No user is signed in.
    };
    
  });
  
