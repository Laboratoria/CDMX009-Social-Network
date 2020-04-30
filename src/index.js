import  login  from './login.js';
import {renderSignin} from './signin.js';
import {renderContent} from './content.js';

const appendStyleSheet = (nameSheet) => {
  let link = document.querySelector('[title="styleSheet"]');
  link.removeAttribute('href');
  link.setAttribute('href',nameSheet);
  console.log(link);
}

export const router = (route) =>{
  console.log(route)
    switch(route){
      case 'content':
        //console.log('Entre a la vista de contenido');
        // let nameSheet = 'signinStyle.css';
        renderContent();
        appendStyleSheet('contentStyle.css');
         break;
       case 'profil':
         login.profil();
         break;
       case 'signin':
         //console.log('Entre a la vista de registro');
        // let nameSheet = 'signinStyle.css';
         appendStyleSheet('signinStyle.css');
         renderSignin();
         break;
       default:
         //let nameSheet = 'loginStyle.css';
         login.renderLogin();
         appendStyleSheet('loginStyle.css');
         break;
    }
}

export const userStatus = () => {
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        router('content');
      } else {
        router();
      }
      
    });
}

userStatus();

/*

import  login  from './login.js';
import {renderSignin} from './signin.js';
import {profile} from './createPost.js';

const appendStyleSheet = (nameSheet) => {
  let link = document.querySelector('[title="styleSheet"]');
  link.removeAttribute('href');
  link.setAttribute('href',nameSheet);
  console.log(link);
}

export const router = (route) =>{
    // console.log(route)
    switch(route){
       case 'profile':
         appendStyleSheet('profileStyle.css');
         profile();
         break;
       case 'signin':
         console.log('Entre a la vista de registro');
        // let nameSheet = 'signinStyle.css';
         appendStyleSheet('signinStyle.css');
         renderSignin();
         break;
        case 'login':
          appendStyleSheet('loginStyle.css');
         login.renderLogin();
         break;
       default:
         //let nameSheet = 'loginStyle.css';
         appendStyleSheet('loginStyle.css');
         login.renderLogin();
         break;
    }
}

export const userStatus = () => {
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("Activo");
        router('profile');

      } else {
        console.log("Inactivo");
        router('login');
        // User is signed out.
        // ...
      }
      
    });
}

userStatus();*/

