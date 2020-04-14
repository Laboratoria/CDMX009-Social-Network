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
              <div class="or"><h3>o</h3></div>
              <div class="conectWithSocialMedia">
                  <input type="image" src="images/facebook.PNG" id="facebookLogin" class="buttons"></button>
                  <input type="image" src="images/Google.PNG" id="googleLogin" class="buttons"></button>
                  <p>¿Ya tienes una cuenta? <a href="#/login">Inicia Sesión</a></p>
                  <p>¿No tienes cuenta?<a href="#/register">Registrate</a></p>
              </div>  `;
  return recView;
};
