// Views
import { viewLogin } from './view/login.js';
import { viewRegister } from './view/register.js';
import { viewForum } from './view/fuorum.js';
import { editionOfProfile } from './view/editprofile.js';
import { viewProfile } from './view/profile.js';
import { buildComent } from './view/coment.js';

// Functions
import { loginPageOne } from './functions/loginpageone.js';
import { googleButton } from './functions/logingoogle.js';
import { facebookButton } from './functions/loginfacebook.js';
import { out } from './functions/logout.js';
import { register } from './functions/register.js';
import { readPosts } from './functions/readposts.js';
import { clickMenus } from './functions/clickmenus.js';
import { publicPost, addNewPost } from './functions/publicpoust.js';
import { editProfileUser } from './functions/editprofile.js'


// Start Code

document.addEventListener("DOMContentLoaded", function() {
    let obtainingPersistenceData = JSON.parse(localStorage.getItem('userdata')); 
    if (obtainingPersistenceData == null) {
        document.getElementById('hideAndShow').style.display = 'none';
        document.getElementById('movilIcon').style.display = 'none';
        viewLogin()
            .then(function() {
                let buttonLogin = document.querySelector('#doLogin');
                buttonLogin.addEventListener('click', function(e) {
                    e.preventDefault();
                    loginPageOne();
                    movilIcon.classList.add('shown');
                });
            }).then(function() {
                let buttonGoogle = document.querySelector('#loginGoogle');
                buttonGoogle.addEventListener('click', function(e) {
                    e.preventDefault();
                    googleButton();
                });
            })
            .then(function() {
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
                //editProfileUser(obtainingPersistenceData);

            });
        document.getElementById('hideAndShow').style.display = 'block';
        movilIcon.classList.add('shown');
    };
});

// Mobile Browser
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});