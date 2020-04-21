// import { loginPageOne } from './view/loginandexit.js';


document.addEventListener("DOMContentLoaded", function() {
    viewLogin()
        .then(function() {
            // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el login
            var buttonLogin = document.querySelector('#doLogin');
            buttonLogin.addEventListener('click', function(e) {
                e.preventDefault();
                loginPageOne();
            });

        })
        .then(function() {
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
            });
        })
        .then(function() {
            var ntAccount = document.getElementById('reg');
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
        .then(function() {
            var viewRedirectionForum = document.getElementById('/Foro');
            viewRedirectionForum.addEventListener('click', function(e) {
                e.preventDefault();
                viewForum();
                window.history.pushState('Foro', 'Foro', '/Foro')
            });
        }).then(function() {
            var viewRedirectionProfile = document.getElementById('/Perfil');
            viewRedirectionProfile.addEventListener('click', function(e) {
                e.preventDefault();
                viewProfile();
                window.history.pushState('perfil', 'Perfil', '/Perfil');
            });
        })
        .then(function() {
            var viewRedirectionEditProfile = document.getElementById('/editarPerfil');
            viewRedirectionEditProfile.addEventListener('click', function(e) {
                e.preventDefault();
                editionOfProfile();
                window.history.pushState('Editar Perfil', 'Editar Perfil', '/editarPerfil');
            });
        })

})


// por si quiero limpiar root: document.getElementById('root').innerHTML = '';

// Navegador en móvil

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// let currentRoute = "/"
// let navegationsButtons = document.querySelectorAll('.colorMenu');

// navegationsButtons.forEach(colorMenu => colorMenu.onclick = e => router(e.target.id))


function viewLogin() {
    return new Promise(function(resolve, rejected) {
        let homeView = `
          <div id="containerOne">
        <section id="esther">
            <main>
                <div class="description">
                    <p class="intro">Una red social pensada para los que hacemos Desarrollo Web</p>
                </div>

                <div class="iconUsers">
                    <i class="material-icons medium lines">remove</i>
                    <i class="material-icons star">stars</i>
                    <i class="material-icons medium lines">remove</i>
                </div>

                <form action="" class="form">
                    <label for="" class="fieldUser">
                    <input type="email" class="validate user boxEmail" required="" aria-required="true"
                        placeholder="Usuario" id="email">
                </label>
                    <label for="" class="fieldPassword">
                    <input type="password" placeholder="Contraseña" class="validate user password boxPassword" required=""
                        aria-required="true" id="pass">
                </label>
                    <button id="doLogin" type="submit" class="waves-effect waves-light btn-small btn-login">Login</button>
                    <!-- <button id="doLogin">Enviar</button> -->
                </form>

                <div class="register">
                    <p class="account">No tienes cuenta? <a href="#register2" class="register2" id="reg">Registrate</a> </p>
                </div>

                <div>
                    <p class="description">Sé parte de nuestra comunidad y fortalece tus ideas y conocimientos.</p>
                </div>

                <div class="loginSocialNetwork">
                    <p class="choose">Si no tienes una cuenta? <br>Ingresa con:</p>
                    <a class="waves-effect waves-light btn center iconWeb1" id="loginFacebook"><i class="fab fa-facebook"></i>Facebook</a>
                    <!-- <button id="LoginFacebook">Ingresa con Facebook</button> -->
                    <a class="waves-effect waves-light btn center iconWeb2" id="loginGoogle"><i class="fab fa-google"></i>Google</a>
                    <!-- <button id="LoginGoogle">Ingresa con Google</button> -->
                </div>
            </main>
        </section>
    </div>
    `
        root.innerHTML = homeView;
        resolve();
    })

}


// En esta parte hago la funcion que va tener mi boton al hacer click
// en entar a la aplicación en esta parte  la que me hace entrar a la app (login)
function loginPageOne() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((data) => {
            viewForum();

        })
        .catch(function(error) {
            alert('Los datos ingresados no son correctos');
            // Handle Errors here. puedo hacer algo despues del login, si salio mal
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // borrar o cambiar la pantalla
            // renderLogin()
        });

    var cred = firebase.auth.EmailAuthProvider.credential(
        email,
        password
    );
}

// **************** L O G I N     G O O G L E*******


// En esta parte hago la funcion que va tener mi boton al hacer click
// en entar a la aplicación en esta parte  la que me hace entrar a la app con google (google)
function googleButton() {
    // Aquí se crea una instancia del objeto del proveedor de Google y facebook
    // esta instancia es para que me redireccione a google o de facebook, es la parte que me lleva a ellos.
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        viewForum();


        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

// **************** L O G I N     F A C E B O O K *******



// En esta parte hago la funcion que va tener mi boton al hacer click
// en entar a la aplicación en esta parte  la que me hace entrar a la app con facebook (facebook)
function facebookButton() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        alert('bienvenido');

        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
}

// ******** LOG OUT FUNCTION 

var getOut = document.querySelector('#signOut');
getOut.addEventListener('click', function(e) {
    e.preventDefault();
    out();
});

function out() {
    firebase.auth().signOut()
        .then(function() {
            viewLogin();
        })
        .catch(function(error) {
            console.log(error);
        });
}

function register() {
    var registerNameLogin2 = document.getElementById('registerLoginName2').value;
    var registerEmailLogin2 = document.getElementById('registerLoginEmail2').value;
    var registerPassLogin2 = document.getElementById('registerLoginPass2').value;
    var registerConfirmPassLogin2 = document.getElementById('registerLoginConfirmPass2').value;


    if (registerPassLogin2 != registerConfirmPassLogin2) {
        alert('Las contraseñas deben coincidir');
    } else {

        firebase.auth().createUserWithEmailAndPassword(registerEmailLogin2, registerPassLogin2)
            .then((data) => {
                // alert('Bienvenido ' + data.user.email);
                viewForum();
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
            });
    }
}

function viewRegister() {
    return new Promise(function(resolve, rejected) {
        let registerView = `
        <!-- ************ PAGINA 2 REGISTRO ********** -->
    <div id="containerTwo">
      
        <main>
            <div class="loginRequired">
                <p class="description">Por favor llena los siguientes campos <br>Obligatorio *</p>
            </div>

            <div class="iconUsers">
                <i class="material-icons medium lines">remove</i>
                <i class="material-icons star">stars</i>
                <i class="material-icons medium lines">remove</i>
            </div>

            <form action="" class="form">
                <label for="" class="fieldUser">
                <input id="registerLoginName2" type="text" class="validate user boxFields" required="" aria-required="true" placeholder="Nombre Completo">
                </label>
                <label for="">
                    <input id="registerLoginEmail2" type="email" class="validate user boxFields" required="" aria-required="true" placeholder="Email">
                </label>
                <label for="" class="fieldPassword">
                    <input id="registerLoginPass2" type="password" placeholder="Contraseña" class="validate user password boxFields" required=""
                        aria-required="true">
                </label>
                <label for="" class="fieldPassword ">
                    <input id="registerLoginConfirmPass2" type="password" placeholder="Confirma Contraseña" class="validate user password confP2 boxFields"
                        required="" aria-required="true">
                </label>
                <button type="submit" class="waves-effect waves-light btn-small btn-enter" id="doRegister">Registrar</button>
            </form>

            <div class="descriptionP2">
                <p>Sé parte de nuestra comunidad y fortalece tus ideas y conocimientos.</p>
            </div>
        </main>
    </div>
    `
        root.innerHTML = registerView;
        resolve();
    });
}

function viewForum() {
    return new Promise(function(resolve, rejected) {
        let forumView = ` <!-- ***********PAGINA 3********* -->
    <div id="containerThree">
      

        <section class="profileInformation">
            <div>
                <div class="littleCircle">
                    <img src="images/foto_perfil_circulo.png" alt="foto de perfil usuario" class="responsive-img photo">
                </div>

                <div class="personalInformationPerfilUser">
                    <div class="namePerfilUser"><strong class="black-text perfilName little">Taco López<i class="material-icons center editProfileIcon">edit</i></strong></div>
                    <div class="professionDescription">Developer Sr. en Accenture</div>
                </div>
            </div>
        </section>
        <form>
            <p>
                <textarea class="comentUser" name="description" placeholder="Escribe un commit..."></textarea>
            </p>
            <div class="right-align">
                <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
                <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Publicar</button>
            </div>
        </form>
        <div>
            <div class="informationBox">

                <div class="chip boxStyle">
                    <img src="images/foto_perfil_circulo.png" alt="Contact Person">
                    <p>Taco Perez</p>
                </div>
                <i class="fas fa-globe-americas world"></i>
                <i class="material-icons center points">more_vert</i>
            </div>

            <div class="comentsAndLikes">
                <p class="coments">¿Cómo centrar texto en HTML?</p>
            </div>
            <div class="punchButtons comentsAndLikes">
                <div class="likeButton">
                    <a class="waves-effect waves-light btn-small"><i class="material-icons left like">thumb_up</i></a>
                    <span class="likeCounter">5</span>
                </div>
                <div class="commentButton">
                    <a class="waves-effect waves-light btn-small"><i class="material-icons left like">mode_comment</i></a>
                    <span class="commentCounter">2</span>
                </div>
            </div>
        </div>
        <form>
            <p>
                <textarea class="comentUser" name="description" rows="5" cols="10" placeholder="Comentar..."></textarea>
            </p>
            <div class="right-align">
                <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
                <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Comentar</button>
            </div>
        </form>
         <div class="informationBox">

                <div class="chip boxStyle">
                    <img src="images/foto_perfil_circulo.png" alt="Contact Person">
                    <p>Taco Perez</p>
                </div>
                <i class="fas fa-globe-americas world"></i>
                <i class="material-icons center points">more_vert</i>
            </div>

            <div class="comentsAndLikes">
                <p class="coments">¿Comunidad, cómo le hago para enrutar con Javascript?</p>
            </div>
            <div class="punchButtons comentsAndLikes">
                <div class="likeButton">
                    <a class="waves-effect waves-light btn-small"><i class="material-icons left like">thumb_up</i></a>
                    <span class="likeCounter">5</span>
                </div>
                <div class="commentButton">
                    <a class="waves-effect waves-light btn-small"><i class="material-icons left like">mode_comment</i></a>
                    <span class="commentCounter">2</span>
                </div>
            </div>
        </div>
        <form>
            <p>
                <textarea class="comentUser" name="description" rows="5" cols="10" placeholder="Comentar..."></textarea>
            </p>
            <div class="right-align">
                <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
                <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Comentar</button>
            </div>
        </form>
    </div>`
        root.innerHTML = forumView;
        resolve();
    });
}

function editionOfProfile() {
    return new Promise(function(resolve, rejected) {
        let editProfileVieView = ` 
    <!-- *********** PAGINA 4 EDITAR PERFIL   *********** -->
    <div id="containerFour">
        <div>
            <p class="chip boxStyle2">Editar Perfil</p>
        </div>

        <div class="littleCircle secondCircle">
            <img src="images/foto_perfil_circulo.png" alt="foto de perfil usuario" class="responsive-img photo">
            <p class="changePhoto">Cambiar foto</p>
        </div>

        <form action="" class="formPerfil">
            <label for="" class="perfilChanges">
        <input type="text" class="chageName boxFields" required="" aria-required="true" placeholder="Cambia tu nombre">
      </label>
            <label for="" class="perfilChanges">
        <input type="text" class="chageProfession boxFields" required="" aria-required="true" placeholder="Cambia tu profesión">
      </label>
            <label for="" class="changePassword">
        <input type="password" placeholder="Cambia tu contraseña" class="validatePassword boxFields" required="" aria-required="true">
      </label>
            <label for="" class="changePassword">
        <input type="password" placeholder="Confirma tu contraseña" class="validatePassword  boxFields" required="" aria-required="true">
      </label>
            <button type="submit" class="waves-effect waves-light btn-small btn-login">Guardar cambios</button>
        </form>
    </div>
        `
        root.innerHTML = editProfileVieView;
        resolve();
    });
}



function viewProfile() {
    return new Promise(function(resolve, rejected) {
        let profileView = `
       <!-- ***********PAGINA profile********* -->
<div id="profilepage"> 
      <section class="profileInformation">
        <div>
            <div class="littleCircle">
                <img src="images/foto_perfil_circulo.png" alt="foto de perfil usuario" class="responsive-img photo">
            </div>

            <div class="personalInformationPerfilUser">
                <div class="namePerfilUser"><strong class="black-text perfilName little">Taco López<i class="material-icons center editProfileIcon">edit</i></strong></div>
                <div class="professionDescription">Developer Sr. en Accenture</div>
            </div>
        </div>
    </section>
    <form>
        <p>
            <textarea class="comentUser" name="description" placeholder="Escribe un commit..."></textarea>
        </p>
        <div class="right-align">
            <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
            <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Publicar</button>
        </div>
    </form>
    <div>
        <div class="informationBox">

            <div class="chip boxStyle">
                <img src="images/foto_perfil_circulo.png" alt="Contact Person">
                <p>Taco Perez</p>
            </div>
            <i class="fas fa-globe-americas world"></i>
            <i class="material-icons center points">more_vert</i>
        </div>

        <div class="comentsAndLikes">
            <p class="coments">¿Cómo centrar texto en HTML?</p>
        </div>
        <div class="punchButtons comentsAndLikes">
            <div class="likeButton">
                <a class="waves-effect waves-light btn-small"><i class="material-icons left like">thumb_up</i></a>
                <span class="likeCounter">5</span>
            </div>
            <div class="commentButton">
                <a class="waves-effect waves-light btn-small"><i class="material-icons left like">mode_comment</i></a>
                <span class="commentCounter">2</span>
            </div>
        </div>
    </div>
    <form>
        <p>
            <textarea class="comentUser" name="description" rows="5" cols="10" placeholder="Comentar..."></textarea>
        </p>
        <div class="right-align">
            <button class="waves-effect waves-light btn-small publication"><i class="material-icons center">image</i></button>
            <button class="waves-effect waves-light btn-small imegeOfPersonalCommit publication2"><i class="material-icons right">computer</i>Comentar</button>
        </div>
    </form>
    <div> 
    `
        root.innerHTML = profileView;
        resolve();
    })

}

function hideAndShow(hide) {
    document.getElementById(hide).style.display = 'none';

}

function show(show) {
    document.getElementById(show).style.display = 'block';
}