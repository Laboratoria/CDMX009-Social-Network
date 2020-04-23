/* eslint-disable no-console */
/* eslint-disable no-alert */
export const database = firebase.firestore();

export default {
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        database.collection('users').add({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
        window.location.hash = '#/home';
      });
  },
  facebook: () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        database.collection('users').add({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
        window.location.hash = '#/home';
      });
  },
  emailRegister: (mail, password) => {
    firebase.auth().createUserWithEmailAndPassword(mail, password)
      .then((result) => {
        const user = result.user;
        database.collection('users').add({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
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
        window.location.hash = '#/login';
      }).catch(() => {
        alert('Algo salió mal. Intente de nuevo');
      });
  },
};
