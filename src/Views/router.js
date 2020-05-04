import { components } from './index.js';

const router = (route) => {
  const container = document.querySelector('#root');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
    case '#/login': {
      container.appendChild(components.principal());
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      break;
    }
    case '#/passwordRecovery': {
      container.appendChild(components.recoveryPass());
      break;
    }
    case '#/home': {
      container.appendChild(components.home());
      break;
    }
    case '#/profile': {
      container.appendChild(components.profile());
      break;
    }
    default: {
      break;
    }
  }
};

export { router };
