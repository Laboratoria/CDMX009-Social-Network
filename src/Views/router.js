import { components } from './index.js';

const router = (route) => {
  const container = document.querySelector('#root');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
    case '#/login': {
      container.appendChild(components.principal());
      return;
    }
    case '#/register': {
      container.appendChild(components.register());
      return;
    }
    case '#/passwordRecovery': {
      container.appendChild(components.recoveryPass());
      return;
    }
    default: {
      break;
    }
  }
};

export { router };
