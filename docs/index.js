import { router } from './Views/router.js';

const init = () => {
  router(window.location.hash);
  window.addEventListener('hashchange', () => router(window.location.hash));
};

window.addEventListener('load', init);
