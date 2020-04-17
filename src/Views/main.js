import loginFunctions from '../firebase/login.js';

export default () => {
  const mainView = `
            <form class="registerForm">
                <input type="email" required id="loginMail" placeholder= "Correo electrónico">
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

  // const loginButton = views.querySelector('#loginButton');
  // const passRec = views.querySelector('#recover');
  const facebookLogin = views.querySelector('#facebookLogin');
  const googleLogin = views.querySelector('#googleLogin');
  googleLogin.addEventListener('click', loginFunctions.google);
  facebookLogin.addEventListener('click', loginFunctions.facebook);
  return views;
};
