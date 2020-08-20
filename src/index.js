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
        renderContent();
        appendStyleSheet('contentStyle.css');
         return;
       case 'signin':
         appendStyleSheet('signinStyle.css');
         renderSignin();
         return;
       default:
         login.renderLogin();
         appendStyleSheet('loginStyle.css');
         return;
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