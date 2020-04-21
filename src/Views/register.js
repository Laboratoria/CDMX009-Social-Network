import loginFunctions from '../firebase/login.js';

export default () => {
  const regView = document.createElement('div');
  regView.setAttribute('class', 'viewsStyle');
  regView.innerHTML = '';
  regView.innerHTML = `
        <h1>ABRE UNA CUENTA</h1>
        <div class="conectWithSocialMedia">
            <input type="image" src="images/facebook.PNG" id="facebookLogin" class="buttons"></button>
            <input type="image" src="images/Google.PNG" id="googleLogin" class="buttons"></button>
        </div>
        <form action="" class="registerForm">
            <input type="email" required id="registerEmail" placeholder="Correo Electronico"><br>
            <input type="password" id="registerPassword" minlength="6" required placeholder="Contraseña(mínimo 6 caracteres)"><br>
            <input type="submit" id="registerButton1" class="registerButton" value="REGISTRAR">
            <p>¿Ya tienes una cuenta? <a href="#/login">Inicia Sesión</a></p>
        </form>  `;
  // Nodos
  const registerEmail = regView.querySelector('#registerEmail');
  const registerPassword = regView.querySelector('#registerPassword');
  const registerButton1 = regView.querySelector('#registerButton1');
  const googleLogin = regView.querySelector('#googleLogin');
  const facebookLogin = regView.querySelector('#facebookLogin');

  // Listeners
  googleLogin.addEventListener('click', loginFunctions.google);
  facebookLogin.addEventListener('click', loginFunctions.facebook);

  registerButton1.addEventListener('click', (e) => {
    e.preventDefault();
    loginFunctions.email(registerEmail.value, registerPassword.value);
  });

  return regView;
};
