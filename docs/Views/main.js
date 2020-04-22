import loginFunctions from '../firebase/login.js';

export default () => {
  const mainView = `
            <form class="registerForm">
                <input type="email" required id="loginEmail" placeholder= "Correo electrónico">
                <input type="password" required id="loginPassword" minlength="6" placeholder="Contraseña">
                <button type="submit" class="registerButton" id="loginButton">INICIAR SESIÓN</button>
                <p><a href="#/passwordRecovery" id="recover">¿Has olvidado la contraseña?</a></p>
            </form> 
            <div class="or"><h3>o</h3></div>
            <div class="conectWithSocialMedia">
                <input type="image" src="images/facebook.PNG" id="facebookLogin" class="buttons"></button>
                <input type="image" src="images/Google.PNG" id="googleLogin" class="buttons"></button>
                <p>¿No tienes cuenta?<a href="#/register">Registrate</a></p>
            </div>  `;
  const views = document.createElement('div');
  views.setAttribute('class', 'viewsStyle');
  views.innerHTML = mainView;

  // Nodos
  const loginEmail = views.querySelector('#loginEmail');
  const loginPassword = views.querySelector('#loginPassword');
  const loginButton = views.querySelector('#loginButton');
  const facebookLogin = views.querySelector('#facebookLogin');
  const googleLogin = views.querySelector('#googleLogin');

  // Listeners
  googleLogin.addEventListener('click', loginFunctions.google);
  facebookLogin.addEventListener('click', loginFunctions.facebook);
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginFunctions.emailLogIn(loginEmail.value, loginPassword.value);
  });
  return views;
};
