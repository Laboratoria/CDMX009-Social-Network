import {renderHomeView, renderPostView, renderProfileView, renderExitView } from './views.js';

// Nodos
export const container = document.querySelector('#container');
const homeButton = document.querySelector('#/Home');
const postButton = document.querySelector('#/Post');
const profileButton = document.querySelector('#/My_profile');
const exitButton = document.querySelector('#/Exit');

// listeners
homeButton.onclick = renderHomeView();
postButton.onclick = renderPostView();
profileButton.onclick = renderProfileView();
exitButton.onclick = renderExitView();



const init = () =>  {
    window.addEventListener("hashchange", () => console.log(window.location.hash))
}
window.addEventListener("load", init)


//Función para el File upload

const fileInput = document.querySelector('#file-js-example input[type=file]');
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;s
  }
}