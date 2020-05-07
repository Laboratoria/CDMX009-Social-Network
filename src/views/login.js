import { loginGoogle, loginFace } from '../controller/firebase-controller.js';
import { logIn } from '../view-controller.js';
import { renderRegister } from './signup.js';

export function renderLogin() {
  root.innerHTML = ' ';
  const homeView = document.createElement('div');
  homeView.innerHTML = `
  <div class ="images">
  <img src="https://gourmetdemexico.com.mx/wp-content/uploads/2019/12/postres.jpg" class="imgLogIn" >
  </div>
  <br>
  <br>
  <div class="columns is-mobile is-centered">
  <h2 class="subtitle has-text-centered">¡Bienvenidx repostero!</h2>
  </div>
  <div class="columns is-mobile is-centered">
  <img src="https://uxrecipe.github.io/img/uxrecipe-logo.png" class="logoLogIn ">
  </div>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
  <input class="input is-rounded" type="email" placeholder="Email" id= "emailLogIn">
  <span class="icon is-small is-left">
  <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
  <i class="fas fa-check"></i>
  </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left">
  <input class="input is-rounded" type="password" placeholder="Password" id= "passwordLogIn">
  <span class="icon is-small is-left">
  <i class="fas fa-lock"></i>
  </span>
  </p>
  </div>
  <div class="field is-grouped is-grouped-centered">
  <button class="button  "  id="logIn">LOG IN</button>
  </div>
  <div class="columns is-mobile is-centered">
  <p class="subtitle2">Ingresa con</p>
  </div>
  <a class="level-item">
  <button class="button" id="btnface"  class="face"></button>
  <div style="width: 100px; height: 39px" ></div>
  <button class="button" id="btngoogle"  class="face"></button>
  </a>
  <div id="fin">
  <p class="subtitle2 has-text-centered">No tienes cuenta? <button id="liga" class="subtitle2">Regístrate</button> gratis</p>
  <br>
  </div>
  </div>
  </article>`;
  root.appendChild(homeView);
  const loginButton = document.querySelector('#liga');
  loginButton.onclick = renderRegister;
  const loginBtn = document.querySelector('#logIn');
  loginBtn.addEventListener('click', logIn);
  const btnGgle = document.querySelector('#btngoogle');
  btnGgle.addEventListener('click', loginGoogle);
  const btnFace = document.querySelector('#btnface');
  btnFace.addEventListener('click', loginFace);
  return renderLogin;
}