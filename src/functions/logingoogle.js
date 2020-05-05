import { clickMenus } from './clickmenus.js';
import { viewForum } from '../view/fuorum.js';
import { publicPost, addNewPost } from './publicpoust.js';


//Login with Google Acount
function googleButton() {
    let provider = new firebase.auth.GoogleAuthProvider();
    let movilIcon = document.getElementById('movilIcon');

    firebase.auth().signInWithPopup(provider)
        .then(function(data) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = data.credential.accessToken;
            // The signed-in user info.
            let user = data.user;
            clickMenus(user);
            viewForum(user)
                .then(function() {
                    publicPost();
                })
                .then(function() {
                    localStorage.setItem('userdata', JSON.stringify(user)); 
                });
            document.getElementById('hideAndShow').style.display = 'block';
            movilIcon.classList.add('shown');
            
        })
        .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
}

export { googleButton }
