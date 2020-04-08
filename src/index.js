//import { example } from './example.js';
//
//example();
//import {firebase} from '@firebase/app';
//require('firebase/auth');
let createNewuser= document.getElementById('createUserNw');
createNewuser.addEventListener('click', () => {
  console.log('boton que funciona');
    let emailNew= document.getElementById('emailNw').value;
    let password= document.getElementById('passwordNw').value;

    firebase.auth().createUserWithEmailAndPassword(emailNew, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
      });
});

let userNew= document.getElementById('newUser');
userNew.addEventListener('click', () => {
  document.getElementById('createUser').style.display = 'block';
});