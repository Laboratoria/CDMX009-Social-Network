//*********** views **********
import { viewLogin } from './view/login.js';
import { viewRegister } from './view/register.js';
import { viewForum } from './view/fuorum.js';
import { editionOfProfile } from './view/editprofile.js';
import { viewProfile } from './view/profile.js';
import { buildComent } from './view/coment.js';

//********** functions **********
import { loginPageOne } from './functions/loginpageone.js'
import { googleButton } from './functions/logingoogle.js'
import { facebookButton } from './functions/loginfacebook.js'
import { out } from './functions/logout.js'
import { register } from './functions/register.js'
import { readPosts } from './functions/readposts.js'
import { clickMenus } from './functions/clickmenus.js'
import { publicPost, addNewPost } from './functions/publicpoust.js'
import { deleteComments } from './functions/deletepost.js'
import { editComments } from './functions/editpost.js'


// *************** CODIGO DE ARRANQUE O INICIO  **************

document.addEventListener("DOMContentLoaded", function() {
    var obtainingPersistenceData = JSON.parse(localStorage.getItem('userdata')); //aquí lo obtengo.GET ITEM es para que local me muestre la data si existe dentro de ella
    if (obtainingPersistenceData == null) { //no hay localStorage
        // console.log('Keep Calm', obtainingPersistenceData);
        document.getElementById('hideAndShow').style.display = 'none';
        document.getElementById('movilIcon').style.display = 'none';
        viewLogin()
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
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


//********************* BLOQUE UNO loginPageOne ****************************/

//*********************BLOQUE DOS (????) ****************************/

// **************** L O G I N  G O O G L E googleButton *******

//*********************BLOQUE TRES (????) ****************************/

// **************** L O G I N     F A C E B O O K *******

//*********************BLOQUE      CUATRO ****************************/


//*********************BLOQUE      CINCO ****************************/

//*********************BLOQUE      SEIS ****************************/

/*************** FUNCIONALIDAD DE POSTS***************/

// ******** PUBLIC POST ***********

// ******** READ POSTS ************

// ******** CLICK MENUS ***********























//funcion pra borrar
/* 
db.collection("cities").doc("DC").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
}); */




/* BETSA

var actionComments = document.querySelectorAll('.actionsComment');
actionsComments.forEach(function(actionsComment) {
    actionsComment.addEventListener('click', function(clickedPoints) {
        consle.log(clickedPoints.target.dataset.id);
    })
})*/

// function editPost() {
// TODO: Get posts from collection to update on firebase

// TODO: Edit coment and save it on firebase

// TODO: render data on screen

/*necesitan el id
que llegue como parametro a editPost
con ese id hacen un doc(id).update({cosaQueCambio:true})*/
//}