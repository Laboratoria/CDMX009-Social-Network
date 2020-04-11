import { renderLoginView } from './Views/main.js';
import { renderRegisterView } from './Views/register.js';

const registerButton = document.querySelector('#register');
const loginButton = document.querySelector('#login');

const router = (route) => {
  switch (route) {
    case 'register':
      renderRegisterView();
      break;
    default:
      renderLoginView();
      break;
  }
};
window.addEventListener('DOMContentLoader', router());
loginButton.addEventListener('click', router());
registerButton.addEventListener('click', router('register'));
