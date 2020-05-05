import loginFunctions from '../firebase/login.js';

export default () => {
  const regView = document.createElement('div');
  regView.setAttribute('class', 'viewsStyle');
  regView.innerHTML = '';
  regView.innerHTML = `
        <h1>Abre una cuenta:</h1>
        <form action="" class="registerForm">
            <input type="email" required id="registerEmail" placeholder="Correo Electronico"><br>
            <input type="password" id="registerPassword" minlength="6" required placeholder="Contraseña(mínimo 6 caracteres)"><br>
            <input type="submit" id="registerButton1" class="registerButton" value="REGISTRAR">
            <h5>¿Ya tienes una cuenta? <a href="#/login">Inicia Sesión</a></h5>
        </form>
        <div class="conectWithSocialMedia">
          <h4> O </h4>
          <img src="images/facebook4.png" id="facebookLogin" class="buttons">
          <img src="images/google4.png" id="googleLogin" class="buttons">
        </div>  `;
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
    loginFunctions.emailRegister(registerEmail.value, registerPassword.value);
  });

  return regView;
};
