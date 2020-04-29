import { components } from '../view/index.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '#/home':
      container.appendChild(components.home());
      break;
    case '#/newpost':
      container.appendChild(components.newpost());
      break;
    case '#/profile':
      container.appendChild(components.profile());
      break;
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/newuser':
      container.appendChild(components.newuser());
      break;
    default:
      break;
  }
};

export { changeView };
