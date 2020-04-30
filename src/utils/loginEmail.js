//* **************login register users********************************
export function login(email, passLogin) {
  if (!email || !passLogin) return 'esta mal lisiada';
  if (passLogin.length < 6) return 'no cumple lisiada';
  return firebase.auth().signInWithEmailAndPassword(email, passLogin)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/invalid-email':
          alert(`Correo electrónico incorrecto ${errorMessage}`);
          console.log(errorCode);
          break;
        case 'auth/wrong-password':
          alert(`Verifica tu contraseña ${errorMessage}`);
          console.log(errorCode);
          break;
        default:
          alert('sigue participando ');
      }
    });
}
