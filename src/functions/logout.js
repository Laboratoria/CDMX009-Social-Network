import { viewLogin } from '../view/login.js';
import { loginPageOne } from './loginpageone.js';
import { viewRegister } from '../view/register.js';
import { register } from './register.js';

// ******** LOG OUT FUNCTION 
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
                    localStorage.setItem('userdata', null); //aquí le digo que guarde como un json formateado mi objeto
                })
                .then(function() {
                    // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el login
                    var buttonLogin = document.querySelector('#doLogin');
                    buttonLogin.addEventListener('click', function(e) {
                        e.preventDefault();
                        loginPageOne();
    
                        movilIcon.classList.add('shown');
                    });
                }).then(function() {
                    // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el ingreso con google
                    var buttonGoogle = document.querySelector('#loginGoogle');
                    buttonGoogle.addEventListener('click', function(e) {
                        e.preventDefault();
                        googleButton();
                    });
                })
                .then(function() {
                    // En esta parte creo una variable en donde voy a llamar a mi id al
                    // que quiero darle el click en este caso el ingreso con facebook
                    var buttonFacebook = document.querySelector('#loginFacebook');
                    buttonFacebook.addEventListener('click', function(e) {
                        e.preventDefault();
                        facebookButton();
                        document.getElementById('hideAndShow').style.display = 'block';
                        movilIcon.classList.add('shown');
                    });
                })
                .then(function() {
                    var ntAccount = document.querySelector('#reg');
                    ntAccount.addEventListener('click', function(e) {
                        e.preventDefault();
                        viewRegister()
                            .then(function() {
                                var buttonReg = document.querySelector('#doRegister');
                                buttonReg.addEventListener('click', function(e) {
                                    e.preventDefault();
                                    register();
                                });
                            })
                    });
                })

            window.history.pushState('cerrar sesion', 'cerrar sesion', '/');
        })
        .catch(function(error) {
            console.log(error);

        });
}

export { out }
