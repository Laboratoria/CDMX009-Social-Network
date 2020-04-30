
//Nodes
let photoURL;
let displayName;

// Log up with email
function emailLogup() {
    const emaiLogup = document.querySelector('#email-new').value;
    const passwordLogup = document.querySelector('#password-new').value;
    console.log(emaiLogup, passwordLogup);
    firebase.auth().createUserWithEmailAndPassword(emaiLogup, passwordLogup)
      .catch((error) => {
        // Errors
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage) {
          const invalidEmail = document.querySelector('#invalid-email');
          invalidEmail.innerHTML = errorMessage;
        }
      });
  }
  
  // Login functions
  function emailLogin() {
    const emailUser = document.querySelector('#email-login').value;
    const passwordUser = document.querySelector('#password-login').value;
    const emailError = document.querySelector('#email-error');
    console.log(emailUser, passwordUser);
    firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
      .catch((error) => {
        // Error
        const errorMessage = error.message;
        emailError.innerHTML = errorMessage;
        console.log(errorMessage);
      });
  }
  
  function loginFb() {
    const facebookP = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(facebookP)
      .then((result) => {
        console.log(result);
      });
  }
  
  function loginGoogle() {
    const googleP = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(googleP)
      .then((result) => {
        console.log(result);
      });
  }
  
  // Log out
  const logoutBtn = document.querySelector('#logout');
  logoutBtn.onclick = function logOut() {
    firebase.auth().signOut().then(() => {
      window.open('#/login', '_self');
      // Sign-out successful.
    }).catch((error) => {
      alert('Ha ocurrido un error', error);
    });
  };
  
  // Observator
  function observatorFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
      const menu = document.querySelector('.menu');
      if (user) {
        const menuPic = document.querySelector('#user-photoURL');
        const menuName = document.querySelector('#user-displayName');
        menuName.innerHTML = user.displayName;
        menuPic.innerHTML = `<img src="${user.photoURL}"/>`;
        displayName = user.displayName;
        photoURL = user.photoURL;
        localStorage.setItem('nameStorage', displayName);
        localStorage.setItem('URLStorage', photoURL);
        window.open('#/home', '_self');
        menu.classList.remove('hide');
        console.log('estas activo dude :)', user);
      } else {
        console.log('no estas activo chavo :(');
      }
    });
  }
  observatorFirebase();

  export {
    loginGoogle, loginFb, emailLogin, observatorFirebase, emailLogup,
  };
  