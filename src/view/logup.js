import {
  loginGoogle, loginFb, emailLogin, observatorFirebase, emailLogup,
} from '../firebase.js';

export default () => {
  const root = document.querySelector('#roots');
  const viewLogup = `
  <section class="bg-img card-align">
  <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-6">
  <div class="card-flex-box"> 
            <div class="form-container">
              <div class="logo-civitas">
                <img src="img/icons/isologo.svg">
              </div>
              <h3>¡Únete a la comunidad!</h3>
              <form class="login-form">
                <input class="login-input" type="text" name="name" placeholder="Nombre" />
                <input class="login-input" id="email-new" type="email" name="email" placeholder="Email" />
                <div class="eye-icon">
                  <input
                  class="login-input"
                  id="password-login"
                  type="password"
                  name="email"
                  placeholder="Password"
                />
                <i class="fas fa-eye"></i>
                </div>
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
          </div>
        </section>
         `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogup;
  root.appendChild(divElemt);

  // Hide headers
  const dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.add('hide');


  // Login
  const googleBtns = document.querySelector('.google');
  googleBtns.addEventListener('click', loginGoogle);

  const fbBtns = document.querySelector('.facebook');
  fbBtns.addEventListener('click', loginFb);

  const emailBtns = document.querySelector('#email-submit');
  emailBtns.addEventListener('click', emailLogup);

  return divElemt;
};
