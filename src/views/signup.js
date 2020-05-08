import { loginGoogle, loginFace } from '../controller/firebase-controller.js';
import { signUp } from '../view-controller.js';
import { renderLogin } from './login.js';

export function renderRegister() {
  root.innerHTML = ' ';
  const registerView = document.createElement('div');
  registerView.innerHTML = `
  <div class ="images">
  <img src="https://gourmetdemexico.com.mx/wp-content/uploads/2019/12/postres.jpg" class="imgSignUp" >
  </div>
  <br>
  <br>
  <div class="columns is-mobile is-centered">
  <h2 class="subtitle has-text-centered">¡Registrate!</h2>
  </div>
  <div class="columns is-mobile is-centered">
  <img src="https://uxrecipe.github.io/img/uxrecipe-logo.png" class="logoSignUp">
  </div>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
  <input class="input is-rounded" type="email" placeholder="Email" id ="emailSignUp">
  <span class="icon is-small is-left">
  <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
  <i class="fas fa-check"></i>
  </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
  <input class="input is-rounded" type="text" placeholder="User name" id="userNameSignUp">
  <span class="icon is-small is-left">
  <i class="fas fa-user"></i>
  </span>
  <span class="icon is-small is-right">
  <i class="fas fa-check"></i>
  </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left">
  <input class="input is-rounded" type="password" placeholder="Password" id="passwordSignUp">
  <span class="icon is-small is-left">
  <i class="fas fa-lock"></i>
  </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left">
  <input class="input is-rounded" type="password" placeholder="Password confirm" id="confirmPasswordSignUp">
  <span class="icon is-small is-left">
  <i class="fas fa-lock"></i>
  </span>
  </p>
  </div>
  <div class="field is-grouped is-grouped-centered">
  <button class="button" id="signUp">SING UP</button>
  </div>
  <p class="subtitle2 has-text-centered">Ingresa con</p>
  <a class="level-item">
  <button class="button" id="btnface"  class="face"></button>
  <div style="width: 100px; height: 39px" ></div>
  <button class="button" id="btngoogle"  class="face"></button>
  </a>
  <div id="fin">
  <p class="subtitle2 has-text-centered">Ya tienes cuenta? <button id="liga2" class="subtitle2">Inicia sesion </button></p>
  </div>
  <br>
  </div>
  </article>`;
  root.appendChild(registerView);
  const singUpButton = document.querySelector('#liga2');
  singUpButton.onclick = renderLogin;
  const signUpBtn = document.querySelector('#signUp');
  signUpBtn.addEventListener('click', signUp);
  const btnGgle = document.querySelector('#btngoogle');
  btnGgle.addEventListener('click', loginGoogle);
  const btnFace = document.querySelector('#btnface');
  btnFace.addEventListener('click', loginFace);
  return renderRegister;
}
