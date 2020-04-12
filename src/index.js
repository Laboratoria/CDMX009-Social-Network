import  login  from './login.js';

const router = (route) =>{
    // console.log(route)
    switch(route){
       case 'profil':
         login.profil();
         break;
       case '':
         
         break;
       default:
         login.renderLogin();
         break;
    }
}

const userStatus = () => {
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("Activo");
        router('profil');
        // User is signed in.
        var displayName = user.displayName;
        console.log('displayName: ' + displayName);
        var email = user.email;
        console.log('email: ' + email);
        var emailVerified = user.emailVerified;
        console.log('emailVerified: ' + emailVerified);
        var photoURL = user.photoURL;
        console.log('photoURL: ' + photoURL);
        var isAnonymous = user.isAnonymous;
        console.log('isAnonymous: ' + isAnonymous);
        var uid = user.uid;
        console.log('uid: ' + uid);
        var providerData = user.providerData;
        console.log('providerData: ' + providerData);
        // ...
      } else {
        console.log("Inactivo");
        router();
        // User is signed out.
        // ...
      }
      
    });
}

userStatus();



