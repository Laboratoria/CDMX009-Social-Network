import { signUp } from '../view-controller.js';
import { renderLogin } from './login.js';

export function renderRegister() {
  root.innerHTML = ' ';
  const registerView = document.createElement('div');
  registerView.innerHTML = `
    <article class="media">
    <div class="media-center">
    <div id="mainImages" >
    <figure class="image is-2by1">
    <img src="images/imagen1.png" id="mainImage">
    </figure>
    <div class="columns is-mobile is-centered">
    <figure class="image">
    <img class="is-rounded" id="logo"  src="images/logo.png " >
    </figure>
    </div>
    </div>
    <br>
    <div class="columns is-mobile is-centered">
    <h1 class="subtitle has-text-centered">¡Registrate!</h1>
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
    <button class="button is-rounded" id="signUp">SING UP</button>
    </div>

    <p class="subtitle2 has-text-centered">Ingresa con</p>
    <a class="level-item">
    <img src="images/faceImage.png" class="face2" style="width: 43px; height: 39px">
    <div style="width: 100px; height: 39px" ></div>
    <img src="images/gmailImage.png" class="gmail" id="gmail2">
    </a>
    <div id="fin">
    <p class="subtitle2 has-text-centered">Ya tienes cuenta? <button id="liga2" class="subtitle2">Inicia sesion </button></p>
    </div>
    <br>
    </div>
    </article>
    `;
  root.appendChild(registerView);
  const singUpButton = document.querySelector('#liga2');
  singUpButton.onclick = renderLogin;
  const signUpBtn = document.querySelector('#signUp');
  signUpBtn.addEventListener('click', signUp);
  return renderRegister;
}
