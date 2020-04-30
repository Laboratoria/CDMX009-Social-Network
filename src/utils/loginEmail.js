//* **************login register users********************************
export function login(email, passLogin) {
  firebase.auth().signInWithEmailAndPassword(email, passLogin)
    .then(() => {

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
