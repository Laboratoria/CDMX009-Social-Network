//* ***************create new user start*************************
export function goToCreate() {
  document.getElementById('createUser').style.display = 'block';
  document.getElementById('logingUsers').style.display = 'none';
}

export function createUser(emailNew, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailNew, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
