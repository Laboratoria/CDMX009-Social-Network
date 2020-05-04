import { components } from '../view/index.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.querySelector('#contentCreated');
  const sectionRoot = document.querySelector('#roots');
  sectionMain.innerHTML = '';
  sectionRoot.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    case '#/login':
      { return sectionRoot.appendChild(components.login()); }
    case '#/profile':
      { return sectionRoot.appendChild(components.profile()); }
    case '#/logup':
    case '#/home':
    case '#/reviews':
    case '#/saved':
    case '#/followers':
    case '#/follow':

      { return sectionMain.appendChild(components[id]()); }
    default:
      return sectionMain.appendChild(components.different());
  }
};
