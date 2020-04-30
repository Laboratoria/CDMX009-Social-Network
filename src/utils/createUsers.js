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
      switch (errorCode) {
        case 'auth/invalid-email':
          alert(`Correo lisiado ${errorMessage}`);
          break;
        case 'auth/weak-password':
          alert(`por tu seguridad usa una contraseña más larga ${errorMessage}`);
          break;
        default:
          alert('ingreso lisiado');
      }
    });
}
