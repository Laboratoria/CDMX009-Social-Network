// Firebase auth functions

//Login with email
export const emailLoginFb = (userEmail, userPassword) => {
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
};

// Login with google
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
// Login with facebook
export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
// Logup with email
export const emailLogup = (userEmail, userPassword) => {
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword);
};
// Sign out
export const logOut = () => {
  firebase.auth().signOut();
};

//Observator
let displayName;
let photoURL;

function observatorFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    const menu = document.querySelector('.menu');
    if (user) {
      const menuPic = document.querySelector('#user-photoURL');
      const menuName = document.querySelector('#user-displayName');
      const deskPic = document.querySelector('#userdesk-photoURL');
      const deskName = document.querySelector('#userdesk-displayName');
      menuName.innerHTML = user.displayName;
      menuPic.innerHTML = `<img src="${user.photoURL}"/>`;
      deskName.innerHTML = user.displayName;
      deskPic.innerHTML = `<img src="${user.photoURL}"/>`;
      displayName = user.displayName;
      photoURL = user.photoURL;
      localStorage.setItem('nameStorage', displayName);
      localStorage.setItem('URLStorage', photoURL);
      window.open('#/home', '_self');
      menu.classList.remove('hide');
      console.log('estas activo dude :)', user);
    } else {
      window.open('#/login', '_self')
      console.log('no estas activo chavo :(');
    }
  });
}
observatorFirebase();
