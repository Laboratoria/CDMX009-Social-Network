const root = document.querySelector('#root');
root.innerHTML = '';

export const renderLoginView = () => {
  const mainView = `
            <form class="registerForm">
                <input type="email" required id="loginMail" placeholder= "Correo electrónico">
                <input type="password" required id="loginPassword" minlength="6" placeholder="Contraseña">
                <button type="submit" class="registerButton" id="loginButton">INICIAR SESIÓN</button>
                <p><span class="spanLink" id="forgetPassword">¿Has olvidado la contraseña?</a></p>
            </form> 
            <div class="or"><h3>o</h3></div>
            <div class="conectWithSocialMedia">
                <input type="image" src="images/facebook.PNG" id="facebookLogin" class="buttons"></button>
                <input type="image" src="images/Google.PNG" id="googleLogin" class="buttons"></button>
                <p>¿No tienes cuenta? <span class="spanLink" id='register'>Registrate</span></p>
            </div>  `;
  root.innerHTML = mainView;
};
