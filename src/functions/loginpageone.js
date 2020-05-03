//Page one Login
import { viewForum } from '../view/fuorum.js';
import { readPosts } from './readposts.js';
import { clickMenus } from './clickmenus.js';
import { publicPost, addNewPost } from './publicpoust.js';

function loginPageOne() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let movilIcon = document.getElementById('movilIcon');
    firebase.auth().signInWithEmailAndPassword(email, pass,)
        .then((data) => {
            clickMenus(data.user);
            viewForum(data.user)
                .then(function() {
                    publicPost(data.user);
                    readPosts();
                })
                .then(function() {
                    localStorage.setItem('userdata', JSON.stringify(data.user));
                });

            document.getElementById('hideAndShow').style.display = 'block';
            movilIcon.classList.add('shown');
        })
        .catch(function(error) {
            alert('Los datos ingresados no son correctos');
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
        });
    let cred = firebase.auth.EmailAuthProvider.credential(email, pass);
}

export { loginPageOne }