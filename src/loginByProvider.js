import {router} from './index.js';  

const db = firebase.firestore();
const usersRef = db.collection('users'); 
/*
/Process to enter google
*/
export const authGoogle = () => {  
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    const usuario = {   
            uid:result.user.uid,
            nombre:result.user.displayName, 
            email:result.user.email, 
            foto:result.user.photoURL
     }
     usersRef.doc(result.user.uid)
       .set(usuario);  
 })
 .catch(function(error) {
  console.log('Hay un error en Google');
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    var email = error.email;
    console.log(email);
    var credential = error.credential;
    console.log(credential);
   
  });
} 
/**
 *Process to enter facebook
 */
export const authFacebook = () => {
  const providerFace = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(providerFace)
  .then(function(result) {
    const usuario = {   
      uid:result.user.uid,
      nombre:result.user.displayName, 
      email:result.user.email, 
       foto:result.user.photoURL
     }
     usersRef.doc(result.user.uid)
       .set(usuario);  
 })
  .catch(function(error) {
    console.log('Hay un error para Facebook');
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      console.log(email);
      var credential = error.credential;
      console.log(credential);
      // ...
    }); 
}      

