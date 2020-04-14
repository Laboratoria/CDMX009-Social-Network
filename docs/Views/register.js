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
            <input type="email" required id="registerMail" placeholder="Correo Electronico"><br>
            <input type="text" required id="registerUsername" placeholder="Nombre de Usuario"><br>
            <input type="password" id="registerPassword" minlength="6" required placeholder="Contraseña(mínimo 6 caracteres)"><br>
            <input type="password" id="confirmRegisterPassword" minlength="6" required placeholder="Confirmar Contraseña"><br>
            <button type="submit" id="registerButton1" class="registerButton">REGISTRAR</button>
            <p>¿Ya tienes una cuenta? <a href="#/login">Inicia Sesión</a></p>
        </form>  `;
  return regView;
};
