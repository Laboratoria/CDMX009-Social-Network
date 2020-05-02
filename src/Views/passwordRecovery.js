import loginFunctions from '../firebase/login.js';

export default () => {
  const recView = document.createElement('div');
  recView.setAttribute('class', 'viewsStyle');
  recView.innerHTML = '';
  recView.innerHTML = `
              <h1>Recupera tu contraseña</h1>
              <p>Te enviaremos un correo electrónico para recuperar tu contraseña</p>
              <form class="recoveryForm">
                  <input type="email" required id="loginMail" placeholder= "Correo electrónico">
                  <button type="submit" class="registerButton" id="loginButton">ENVIAR</button>
              </form> 
              <div class="conectWithSocialMedia">
                <h4>o ingresa con tu cuenta de:</h4>
                <img src="images/facebook.png" id="facebookLogin" class="buttons">
                <img src="images/Google.png" id="googleLogin" class="buttons">
                <p>¿No tienes cuenta? <a href="#/register">Registrate</a></p>
            </div>  `;

  // Nodos
  const googleLogin = recView.querySelector('#googleLogin');
  const facebookLogin = recView.querySelector('#facebookLogin');

  // Listeners
  googleLogin.addEventListener('click', loginFunctions.google);
  facebookLogin.addEventListener('click', loginFunctions.facebook);

  return recView;
};
