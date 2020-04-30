import { render } from '../firebase.js';
import { logOut } from '../firebase-auth.js';


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
//Log out function
const logoutBtn = document.querySelector('#logout');
logoutBtn.onclick = () => {
  logOut.then(() => {
    window.open('#/login', '_self');
    // Sign-out successful.
  }).catch((error) => {
    alert('Ha ocurrido un error', error);
  });
};