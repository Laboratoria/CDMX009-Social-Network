//Log out
import { viewLogin } from '../view/login.js';
import { loginPageOne } from './loginpageone.js';
import { viewRegister } from '../view/register.js';
import { register } from './register.js';

function out() {
    console.log('revisando out');

    firebase.auth().signOut()
        .then(function() {
            document.getElementById('movilIcon').classList.toggle('shown');
            document.getElementById('hideAndShow').style.display = 'none';
        })
        .then(function() {
            viewLogin()
                .then(function() {
                    localStorage.setItem('userdata', null); 
                })
                .then(function() {
                    let buttonLogin = document.querySelector('#doLogin');
                    buttonLogin.addEventListener('click', function(e) {
                        e.preventDefault();
                        loginPageOne();    
                        movilIcon.classList.add('shown');
                    });
                })
                .then(function() {
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
                            });
                    });
                });

            window.history.pushState('cerrar sesion', 'cerrar sesion', '/');
        })
        .catch(function(error) {
            console.log(error);
        });
};

export { out }
