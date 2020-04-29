import { render } from '../firebase.js';

export default () => {
  const viewHome = render();
  // Show header
  const dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.remove('hide');
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
