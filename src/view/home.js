import { render } from '../firebase.js'

export default () => {
  const viewHome = 

//Print posts
  render();

  //Show header 
  let dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.remove('hide');

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;

  
}


