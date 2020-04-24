import User from "./user.js";
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
      name:result.user.displayName, 
      lastName:'', 
      email:result.user.email, 
      password:'',
      description:'',
      date: new Date(),
      photo:result.user.photoURL,
      uid:result.user.uid
      }
      let uid2 = result.user.uid; 
      usersRef.doc(uid2).set({
        "name": usuario.name,
        "lastName": usuario.lastName,
        "email": usuario.email,
        "password": usuario.password,
        "description": usuario.description, 
        "date":usuario.date,
        "photo": usuario.photo, 
        "uid":usuario.uid
      })
      router('content');
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
      name:result.user.displayName, 
      lastName:'', 
      email:result.user.email, 
      password:'',
      description:'',
      date: new Date(),
      photo:result.user.photoURL,
      uid:result.user.uid
      }
      let uid2 = result.user.uid; 
      usersRef.doc(uid2).set({
        "name": usuario.name,
        "lastName": usuario.lastName,
        "email": usuario.email,
        "password": usuario.password,
        "description": usuario.description, 
        "date":usuario.date,
        "photo": usuario.photo, 
        "uid":usuario.uid
      })  
 })
  .catch(function(error) {
  console.log('Hay un error en Facebook');
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



