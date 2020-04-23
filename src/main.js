import { changeView } from './views/viewcontroler.js'
import {renderHomeView} from "./views/home.js"
import {renderPostView} from "./views/post.js"
import {renderProfileView} from "./views/profile.js"
import {renderLoginView} from "./views/login.js"
import {renderExitView} from "./views/exit.js" 

// Nodos
export const root = document.querySelector('#root');
const homeButton = document.querySelector('#home');
const postButton = document.querySelector('#post');
const profileButton = document.querySelector('#profile');
const loginButton = document.querySelector('#login');
const exitButton = document.querySelector('#exit');

// listeners
homeButton.onclick = renderHomeView;
postButton.onclick = renderPostView();
profileButton.onclick = renderProfileView();
loginButton.onclick = renderLoginView();
exitButton.onclick = renderExitView();

// Función de inicio que cambia la URL
const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash))
}
window.addEventListener('load', init);