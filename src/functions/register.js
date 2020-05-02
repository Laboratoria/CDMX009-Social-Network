import { clickMenus } from './clickmenus.js';
import { viewForum } from '../view/fuorum.js';
import { publicPost } from './publicpoust.js';
import { readPosts } from './readposts.js';

function register() {
    let registerNameLogin2 = document.getElementById('registerLoginName2').value;
    let registerEmailLogin2 = document.getElementById('registerLoginEmail2').value;
    let registerPassLogin2 = document.getElementById('registerLoginPass2').value;
    let registerConfirmPassLogin2 = document.getElementById('registerLoginConfirmPass2').value;
    let movilIcon = document.getElementById('movilIcon');  

    console.log(registerNameLogin2);
    
    if (registerPassLogin2 != registerConfirmPassLogin2) {
        alert('Las contraseñas deben coincidir');
    } else {
        firebase.auth().createUserWithEmailAndPassword(registerEmailLogin2, registerPassLogin2)
            .then((data) => {
                clickMenus(data.user);
                viewForum(data.user);  
                publicPost(data.user);
                readPosts(data.user);             
                document.getElementById('hideAndShow').style.display = 'block';
                movilIcon.classList.add('shown');
            })
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                };
            });
    };
};

export { register }