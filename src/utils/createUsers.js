//* ***************create new user start*************************
export function newUser() {
  const emailNew = document.getElementById('emailNw').value;
  const password = document.getElementById('passwordNw').value;
  document.getElementById('createUser').style.display = 'none';
  document.getElementById('logingUsers').style.display = 'block';
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

export function goToCreate() {
  document.getElementById('createUser').style.display = 'block';
  document.getElementById('logingUsers').style.display = 'none';
}
