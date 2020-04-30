import { postPage } from '../views/postpage.js';

const db = firebase.firestore();
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
    .then(function(snap){
     console.log(snap)
      postPage();
      return snap.user
    })
    .catch(function(error) {
     let errorCode = error.code;
     let errorMessage = error.message;
     alert(`Lo sentimos : ${errorCode} ${errorMessage} `)
    return error
  });
};
export const signup = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then(snap => {
      console.log(snap)
      saveUser(snap.user)
      let mail = snap.user.email
      alert(`${mail} registro exitoso!`)
      postPage();
      return snap.user
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(`lo sentimos: ${errorCode} ${errorMessage}`)
      return error
    });
};
