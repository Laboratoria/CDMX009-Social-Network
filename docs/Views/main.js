export default () => {
  const mainView = `
            <form class="registerForm">
                <input type="email" required id="loginMail" placeholder= "Correo electrónico">
                <input type="password" required id="loginPassword" minlength="6" placeholder="Contraseña">
                <button type="submit" class="registerButton" id="loginButton">INICIAR SESIÓN</button>
                <p><a href="#/passwordRecovery">¿Has olvidado la contraseña?</a></p>
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
  return views;
};
