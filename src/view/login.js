import { emailLoginFb, facebookLogin, googleLogin } from '../firebase-auth.js';

export default () => {
  const root = document.querySelector('#roots');
  const viewLogin = `
   <section class="bg-img card-align" id="login">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-6">
              <div class="form-container control has-icons-right">
                <div class="logo-civitas">
                  <img src="img/icons/isologo.svg">
                </div>
                <h3>Inicia sesión</h3>
                <form class="login-form">
                  <input
                    class="login-input"
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
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
              <a class="forgotten-password" href='#/logup' id ='logUp'>Regístrate ahora</a>
            </p>
          </div> 
        </div>
      </div> 
</section>
         `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;
  root.appendChild(divElemt);

  const loginBtn = document.querySelector('#login-submit');
  loginBtn.onclick = () => {
    const emailLogin = document.querySelector('#email-login').value;
    const passwordLogin = document.querySelector('#password-login').value;
    console.log(emailLogin, passwordLogin);
    emailLoginFb(emailLogin, passwordLogin)
      .catch((error) => {
        // Errores
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  // Hide header elements
  const dashHeader = document.querySelector('#dashboardHeader');
  const menuH = document.querySelector('#menuH');
  const postHide = document.querySelector('#contentCreated');
  postHide.classList.add('hide');
  dashHeader.classList.add('hide');
  menuH.classList.add('hide');

  // Login
  const googleBtns = document.querySelector('.google');
  googleBtns.addEventListener('click', googleLogin);

  const fbBtns = document.querySelector('.facebook');
  fbBtns.addEventListener('click', facebookLogin);

  return divElemt;
};
