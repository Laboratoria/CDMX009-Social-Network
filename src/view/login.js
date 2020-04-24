/* export default () => {
    const viewFavorites = `
    <section>
    <div class="user-img">
    <img src="${localStorage.getItem('URLStorage')}" alt = 'member'/>
    </div>
    <div>
        <div>
        <h2 class="test">${localStorage.getItem('nameStorage')}</h2>
            <img class="img-edit" src="./img/icons/pen.svg">
            <img class="img-add-friend" src="./img/icons/add-friend.svg">
        </div>
        <div>
            <a href="#/followers"> 5 <br> Seguidores</a><br>
            <a href="#/follow"> 3 <br> Seguidores</a>
        </div>
    </div>
    <div>
        <a class="nav-link" href="#/favorites"><span class="menu-icons"><i class="far fa-heart"></i></span></a>    
        <a class="nav-link" href="#/reviews"><span class="menu-icons"><i class="far fa-sticky-note"></i></span> </a>
        <a class="nav-link" href="#/saved"><span class="menu-icons"><i class="far fa-bookmark"></i></span></a>
    </div>
    </section>
    <section>
    <div class="container">
    <div class="post">
      <img src="img/pictures/helado1.jpg">
      <div class="txt-post-container">
        <p class="info-post"><span class="title-post">Karina Sr</span><br>
          Los bowls
        </p>
        <p class="info-post justify-right">#comida<br>
          Hace 2 hrs
        </p>
      </div>
      <span class="stars-post">
        <i class="fas fa-star">4.4</i>
      </span>
      </div>
    </section>
    `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewFavorites;
    return divElemt;
} */

import { loginGoogle, loginFb, emailLog } from '../firebase.js';

export default () => {
  const root = document.querySelector('#roots');
  const viewLogin = 
  `
  <section class="bg-img card-align" id="login">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

          <div class="form-container control has-icons-right">
            <h3>Inicia sesión login js</h3>
            <form class="login-form">
              <input class="login-input" id="email-login" type="email" name="email" placeholder="Email" />
              <div>
                <input class="login-input" id="password-login" type="password" name="email" placeholder="Password" />
                <span class="eye-icon"><i class="fas fa-eye"></i>
                </span>
              </div>

              <div id="email-error"></div>
              <a class="forgotten-password">¿Olvidaste tu contraseña?</a>
              <input id="login-submit" class="submit-button" type="button" name="submit" value="Ingresar" />
            </form>
            <p class="scial-mdia-prgph">Puedes ingresar con:</p>
            <div class="scial-mdia-btn">
              <button class="facebook">
                <i class="fab fa-facebook-f"></i>Facebook
              </button>
              <button class="google">
                <i class="fab fa-google"></i>Google
              </button>
            </div>
            <p class="scial-mdia-prgph">
              ¿No tienes una cuenta?
              <a class="forgotten-password" id='logUp'>Regístrate ahora</a>
            </p>
          </div>
         `

         const viewLogup = 
         ` <div class="card-flex-box">
            <div class="form-container">
              <h3>¡Únete a la comunidad!</h3>
              <form class="login-form">
                <input class="login-input" type="text" name="name" placeholder="Nombre" />
                <input class="login-input" id="email-new" type="email" name="email" placeholder="Email" />
                <input class="login-input" id="password-new" type="password" name="email" placeholder="Password" />
                <div id='invalid-email'></div>

                <input class="submit-button" id="email-submit" type="button" name="submit" value="Registrar">
              </form>
              <p class="scial-mdia-prgph">O crear cuenta con:</p>
              <div class="scial-mdia-btn">
                <button class="facebook"><i class="fab fa-facebook-f"></i>Facebook</button>
                <button class="google"><i class="fab fa-google"></i>Google</button>
              </div>
              <div id="rootHome"></div>
            </div>
          </div>
        </div>
      </div> 
    </section> 
  `
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;
  root.appendChild(divElemt);
  
  
  //LoginGoogle
  const googleBtns = document.querySelector('.google');
        googleBtns.addEventListener('click', loginGoogle);

  const fbBtns = document.querySelector('.facebook');
        fbBtns.addEventListener('click', loginFb);
    
  const emailBtns = document.querySelector('#login-submit')
        emailBtns.addEventListener('click', emailLog);

      return divElemt;
}