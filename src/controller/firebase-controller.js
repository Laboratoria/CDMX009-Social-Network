import { postPage } from '../views/postpage.js';

export const db = firebase.firestore();
// Authentication
const usersRef = db.collection('users');
const auth = firebase.auth();

export function saveUser(user) {
  const { displayName, uid, photoURL, email } = user;
  const u = {
    displayName,
    uid,
    photoURL,
    email,
  };
  usersRef.doc(user.uid).set(u);
}
export const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((snap => {
      console.log(snap);
      postPage();
      return snap.user;
    }))
    .catch((error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`Lo sentimos : ${errorCode} ${errorMessage} `);
      return error;
    }));
};
export const signup = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then((snap => {
      console.log(snap);
      saveUser(snap.user);
      let mail = snap.user.email;
      alert(`${mail} registro exitoso!`);
      postPage();
      return snap.user;
    }))
    .catch((error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(`lo sentimos: ${errorCode} ${errorMessage}`)
      return error;
    }));
};
// Login with google
export function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(snap => {
      saveUser(snap.user);
      postPage();
      return snap.user;
    });
}
// Login with Facebook
export function loginFace() {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result => {
      saveUser(result.user);
      postPage();
      console.log(result.user);
      return result.user;
    }));
}
// Add Post
export const postsRef = db.collection('posts');
