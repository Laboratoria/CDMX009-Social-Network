//import { example } from './example.js';
//
//example();
//import {firebase} from '@firebase/app';
//require('firebase/auth');
let allApp;
let createNewuser= document.getElementById('createUserNw');
createNewuser.addEventListener('click', () => {
  console.log('boton que funciona');
    let emailNew= document.getElementById('emailNw').value;
    let password= document.getElementById('passwordNw').value;
    document.getElementById('createUser').style.display = 'none';
    document.getElementById('logingUsers').style.display = 'block';
    firebase.auth().createUserWithEmailAndPassword(emailNew, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
      });
});

let userNew= document.getElementById('newUser');
userNew.addEventListener('click', () => {
  document.getElementById('createUser').style.display = 'block';
  document.getElementById('logingUsers').style.display = 'none';
});

let oldUser= document.getElementById('logInUser');
oldUser.addEventListener('click', () => {
  let email= document.getElementById('email').value;
  let password= document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

    // ...
  });
});

function theWatcher(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('usuario activo');
    printSite();
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('no hay usuarios');
  }
});
};

theWatcher();

function printSite() {
document.getElementById('firstPage').style.display= 'none'
allApp = ` 
<div id='header' class="my-header">
      <div class="container flex-box-horizontal">
        <div class="logo">
          <a href="index.html">
            <img src="img/LogoIPN.png">
          </a>
        </div>
        <div class="user">
          <img src="img/info.png">
        </div>
      </div>
    </div>
    <main>
      <!-- Text Box-->
      <section>
        <div class="container">
          <div class="margin-top">
            <div class="col-4">
              <div class="subtitle">
                <h3 id="sayHi"></h3>
              </div>
              <div class="text-box">
                <div class="width-data">
                  <form>
                    <input type="text" id="text-box">
                    <input type="submit" value="Compartir">
                  </form>
                </div>
              </div>
              <!-- News desktop view -->
              <div class="desktop-view">
                <div class="margin-top">
                  <div class="subtitle">
                    <h3>Test Vocacional</h3>
                  </div>
                </div>
                <a title="test" href="http://www.decidetusestudios.sep.gob.mx/vista/test-vocacional/" target="_blank"><img
                    class="card-img-bottom" src="img/testvocacional.png" alt="test" /></a>
              </div>
              <div class="desktop-view">
                <div class="margin-top">
                  <div class="subtitle">
                    <h3>Convocatoria IPN</h3>
                  </div>
                </div>
                <a title="announcement" href="https://www.admision.ipn.mx/portal/index.html" target="_blank"><img
                    class="card-img-bottom" src="img/convocatoria.png" alt="announcement" /></a>
              </div>
              <div class="desktop-view">
                <div class="margin-top">
                  <div class="subtitle">
                    <h3>Carreras con más demanda</h3>
                  </div>
                </div>
                <a title="test" href="https://ahorasipaso.com/docs/Solicitud_acceso_IPN.pdf" target="_blank"><img
                    class="card-img-bottom" src="img/demanda.png" alt="test" /></a>
              </div>
              <div class="desktop-view">
                <div class="margin-top">
                  <div class="subtitle">
                    <h3>Guía de Estudio Oficial</h3>
                  </div>
                </div>
                <a title="announcement" href="https://www.guiaestudio.ipn.mx/" target="_blank"><img
                    class="card-img-bottom" src="img/guia.png" alt="announcement" /></a>
              </div>
              <div class="desktop-view">
                <div class="margin-top">
              <div class="subtitle">
                <h3>Oficinas Centrales</h3>
              </div>
            </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8945.062786404349!2d-99.13704216401462!3d19.501405643204773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9b5d8c54c1b%3A0x954022f561b19ac8!2sInstituto%20Polit%C3%A9cnico%20Nacional!5e0!3m2!1ses-419!2smx!4v1586332955235!5m2!1ses-419!2smx" width="450" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile view -->
        <div class="col-8">
          <div class="tab">
            <ul class="tabs" role="tablist">
              <li class="mobile-view">
                <input type="radio" name="tabs" id="tab1" checked />
                <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0"> Noticias </label>
                <div id="tab-content-charts" class="tab-content" role="tabpanel" aria-labelledby="description"
                  aria-hidden="false">
                  <div class="search">
                    <input type="text" class="search-Box" id="searchT" placeholder="Buscar...">
                    <input type="button" class="search-Btn" id="search1" value="Buscar">
                  </div>
                  <div class="subtitle">
                    <h3>Test Vocacional</h3>
                    <a title="test" href="http://www.decidetusestudios.sep.gob.mx/vista/test-vocacional/"
                      target="_blank"><img class="card-img-bottom" src="img/testvocacional.png" alt="test" /></a>
                  </div>
                  <div class="subtitle">
                    <h3>Convocatoria IPN</h3>
                    <a title="announcement" href="https://www.admision.ipn.mx/portal/index.html" target="_blank"><img
                        class="card-img-bottom" src="img/convocatoria.png" alt="announcement" /></a>
                  </div>
                  <div class="subtitle">
                    <h3>Carreras con más demanda</h3>
                    <a title="test" href="https://ahorasipaso.com/docs/Solicitud_acceso_IPN.pdf" target="_blank"><img
                        class="card-img-bottom" src="img/demanda.png" alt="test" /></a>
                  </div>
                  <div class="subtitle">
                    <h3>Guía de Estudio Oficial</h3>
                    <a title="announcement" href="https://www.guiaestudio.ipn.mx/" target="_blank"><img
                        class="card-img-bottom" src="img/guia.png" alt="announcement" /></a>
                  </div>
                  <div class="subtitle">
                    <h3>Oficinas Centrales</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8945.062786404349!2d-99.13704216401462!3d19.501405643204773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9b5d8c54c1b%3A0x954022f561b19ac8!2sInstituto%20Polit%C3%A9cnico%20Nacional!5e0!3m2!1ses-419!2smx!4v1586332955235!5m2!1ses-419!2smx" width="400" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
              </li>
              <li>
                <input type="radio" name="tabs" id="tab2" />
                <label for="tab2" role="tab" aria-selected="false" aria-controls="panel2"
                  tabindex="0">Publicaciones</label>
                <div id="tab-content-table" class="tab-content cardPatient" role="tabpanel"
                  aria-labelledby="specification" aria-hidden="true">
                  <div class="search">
                    <input type="text" class="search-Box" id="search" placeholder="Buscar...">
                    <input type="button" class="search-Btn" id="search" value="Buscar">
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    `
let placeToPrint= document.getElementById('allTheSite');
placeToPrint.innerHTML= allApp;

}   

let btnGoogle = document.getElementById('loginGoogle');
btnGoogle.addEventListener('click', ()=>{
  const provedorGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provedorGoogle).then(function(result){
        console.log(result.user);
        const nameUser = result.user.displayName;
        const imgProfile = result.user.photoURL;
        console.log(nameUser);
        console.log(imgProfile);




    });
});



let btnFacebook = document.getElementById('loginFacebook');
btnFacebook.addEventListener('click', () =>{
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(providerFacebook).then(function(result){
    console.log(result.user);
  });

});