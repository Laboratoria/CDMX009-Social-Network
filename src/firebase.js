//Login Google
function loginGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    console.log(result.user);
  });
}

export default loginGoogle