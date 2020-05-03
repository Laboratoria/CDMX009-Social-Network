//*********** views **********
import { viewLogin } from './view/login.js';
import { viewRegister } from './view/register.js';
import { viewForum } from './view/fuorum.js';
import { editionOfProfile } from './view/editprofile.js';
import { viewProfile } from './view/profile.js';
import { buildComent } from './view/coment.js';

//********** functions **********
import { loginPageOne } from './functions/loginpageone.js';
import { googleButton } from './functions/logingoogle.js';
import { facebookButton } from './functions/loginfacebook.js';
import { out } from './functions/logout.js';
import { register } from './functions/register.js';
import { readPosts } from './functions/readposts.js';
import { clickMenus } from './functions/clickmenus.js';
import { publicPost, addNewPost } from './functions/publicpoust.js';
import { deleteComments } from './functions/deletepost.js';
import { editComments } from './functions/editpost.js';

// *************** CODIGO DE ARRANQUE O INICIO  **************

document.addEventListener("DOMContentLoaded", function() {
    let obtainingPersistenceData = JSON.parse(localStorage.getItem('userdata')); //aquí lo obtengo.GET ITEM es para que local me muestre la data si existe dentro de ella
    if (obtainingPersistenceData == null) { //no hay localStorage
        // console.log('Keep Calm', obtainingPersistenceData);
        document.getElementById('hideAndShow').style.display = 'none';
        document.getElementById('movilIcon').style.display = 'none';
        viewLogin()
            .then(function() {
                // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el login
                let buttonLogin = document.querySelector('#doLogin');
                buttonLogin.addEventListener('click', function(e) {
                    e.preventDefault();
                    loginPageOne();

                    movilIcon.classList.add('shown');
                });
            }).then(function() {
                // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el ingreso con google
                let buttonGoogle = document.querySelector('#loginGoogle');
                buttonGoogle.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleButton();
                });
            })
            .then(function() {
                // En esta parte creo una variable en donde voy a llamar a mi id al
                // que quiero darle el click en este caso el ingreso con facebook
                let buttonFacebook = document.querySelector('#loginFacebook');
                buttonFacebook.addEventListener('click', function(e) {
                    e.preventDefault();
                    facebookButton();
                    document.getElementById('hideAndShow').style.display = 'block';
                    movilIcon.classList.add('shown');
                });
            })
            .then(function() {
                let ntAccount = document.querySelector('#reg');
                ntAccount.addEventListener('click', function(e) {
                    e.preventDefault();
                    viewRegister()
                        .then(function() {
                            let buttonReg = document.querySelector('#doRegister');
                            buttonReg.addEventListener('click', function(e) {
                                e.preventDefault();
                                register();
                            });
                        })
                });
            })
    } else {
        clickMenus(obtainingPersistenceData);
        viewForum(obtainingPersistenceData)
            .then(function() {
                publicPost(obtainingPersistenceData);
                readPosts();

            })
        document.getElementById('hideAndShow').style.display = 'block';
        movilIcon.classList.add('shown');
    }
})

// Navegador en móvil
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});