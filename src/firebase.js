//Login Google
function loginGoogle(){
  let providerG = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(providerG)
  .then(function(result) {
    console.log(result.user);
    if (result.user.emailVerified){
      window.open('#home','_self')
    }
  });
}

//Login fb
function loginFB(){
  let providerFB = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
  .signInWithPopup(providerFB)
  .then(function(result) {
    console.log(result.user);
  });
}
export  { loginGoogle, loginFB };

//Registro de usuario
