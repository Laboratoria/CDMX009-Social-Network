/* eslint-disable no-console */
/* eslint-disable no-alert */
export const database = firebase.firestore();

export default {
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        // const user = result.user;
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        database.collection('users').doc(currentUser.uid).set({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL,
        });
        window.location.hash = '#/home';
      });
  },
  facebook: () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
      // const user = result.user;
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        database.collection('users').doc(currentUser.uid).set({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL,
        });
        window.location.hash = '#/home';
      });
  },
  emailRegister: (mail, password) => {
    firebase.auth().createUserWithEmailAndPassword(mail, password)
      .then(() => {
      // const user = result.user;
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        database.collection('users').doc(currentUser.uid).set({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL,
        });
        window.location.hash = '#/home';
      }).catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/email-already-in-use':
            alert('El email ingresado ya existe');
            break;
          case 'auth/weak-password':
            alert('La contraseña ingresada no es segura, intente de nuevo');
            break;
          default:
            alert(errorCode);
        }
      });
  },
  emailLogIn: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.hash = '#/home';
      }).catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            alert('Usuario no encontrado, intenta de nuevo o registrate');
            break;
          case 'auth/wrong-password':
            alert('La contraseña es incorrecta, intenta de nuevo');
            break;
          case 'auth/invalid-email':
            alert('El correo ingresado no es válido');
            break;
          default:
            alert('Algo salió mal. Intente de nuevo');
        }
      });
  },
  sesionLogOut: () => {
    firebase.auth().signOut()
      .then(() => {
        alert('Sesión cerrada');
        document.querySelector('header').style.display = '';
        window.location.hash = '#/login';
      }).catch(() => {
        alert('Algo salió mal. Intente de nuevo');
      });
  },
};
