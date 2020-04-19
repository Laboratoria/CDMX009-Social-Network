// import { loginPageOne } from './view/loginandexit.js';


document.addEventListener("DOMContentLoaded", function() {
    viewLogin()
        .then(function() {
            // En esta parte creo una variable en donde voy a llamar a mi id al que quiero darle el click en este caso el login
            var buttonLogin = document.querySelector('#doLogin');
            console.log(buttonLogin)
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


})


// document.getElementById('root').innerHTML = '';

// Navegador en móvil

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
// });

function viewLogin() {
    return new Promise(function(resolve, rejected) {
        let homeView = `
          <div id="containerOne">
        <section id="esther">
            <nav>
                <div class="nav-wrapper colorHeader">
                    <a href="#!" class="brand-logo center"><img class="log" src="images/logo_ok2.png" alt=""> </a>
                </div>
            </nav>

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
                    <p class="account">No tienes cuenta? <a href="#register2" class="register2">Registrate</a> </p>
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
    // alert("email=" + email + " pass=" + pass);

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((data) => {
            // document.getElementById('root').innerHTML = '';
            viewForum();

        })
        .catch(function(error) {
            console.log(error)
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
        alert('Bienvenido ' + user.email);
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
// en entar a la aplicación en esta parte  la que me hace entrar a la app con facebook (facebook
function facebookButton() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        alert('Bienvenido ' + user.email);
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

// ******** LOG OUT FUNCTION 

// var getOut = document.querySelector('#signOut');
// getOut.addEventListener('click', function(e) {
//     e.preventDefault();
//     out();
// });

// function out() {
//     firebase.auth().signOut()
//         .then(function() {
//             alert('Good Bye');
//         }).catch(function(error) {
//             console.log(error);
//         });
// }

function viewRegister() {
    return new Promise(function(resolve, rejected) {
        let registerView = `
        <!-- ************ PAGINA 2 REGISTRO ********** -->
    <div id="containerTwo">
        <nav>
            <div class="nav-wrapper colorHeader">
                <a href="#!" class="brand-logo center"><img class="log" src="images/logo_ok2.png" alt=""> </a>
            </div>
        </nav>

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
        <nav>
            <div class="nav-wrapper colorHeader">
                <a href="#!" class="brand-logo center"><img class="log" src="images/logo_ok2.png" alt=""> </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a class="navletters" href="foro" id="/forumNavD">Foro</a></li>
                    <li><a class="navletters" href="perfil" id="/profileNavD">Perfil</a></li>
                    <li><a class="navletters" href="editar perfil" id="/editProfileNavD">Editar perfil</a></li>
                    <li><a id="signOut" class="navletters" href="cerrar sesion" id="/singOutNavD">Cerrar sesión</a></li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a class="colorMenu" href="foro" id="/forumNavM">Foro</a></li>
            <li><a class="colorMenu" href="perfil" id="/ProfileNavM">Perfil</a></li>
            <li><a class="colorMenu" href="editar perfil" id="/editProfileNavM">Editar perfil</a></li>
            <li><a id="signOut" class="colorMenu" href="cerrar sesion" id="/singOutNavM">Cerrar sesión</a></li>
        </ul>

        <section class="profileInformation" id="vero y dian">
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
    </div>`
        root.innerHTML = forumView;
        resolve();
    });
}