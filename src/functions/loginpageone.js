import { viewForum } from '../view/fuorum.js';
import { readPosts } from './readposts.js';
import { clickMenus } from './clickmenus.js';
import { publicPost, addNewPost } from './publicpoust.js';

// En esta parte hago la funcion que va tener mi boton al hacer click
// en entar a la aplicación en esta parte la que me hace entrar a la app (login)
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
                    localStorage.setItem('userdata', JSON.stringify(data.user)); //aquí le digo que guarde como un json formateado mi objeto. su parametro es su nombre el segundo lo que vale
                });
            document.getElementById('hideAndShow').style.display = 'block';
            movilIcon.classList.add('shown');
        })
        .catch(function(error) {
            alert('Los datos ingresados no son correctos');
            // Handle Errors here. puedo hacer algo despues del login, si salio mal
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
            // borrar o cambiar la pantalla
            //renderLogin()
        });
    let cred = firebase.auth.EmailAuthProvider.credential(email, pass);
}

export { loginPageOne }