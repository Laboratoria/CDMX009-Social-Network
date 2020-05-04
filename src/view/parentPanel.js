import { addUserPost, showPostUser } from '../firebase.js';

export default () => {
  const root = document.getElementById('root')
  const viewParentPanel = `
  <h1 class="parent-Panel">PANEL DE PADRES</1>

  <div class="sectionAddPost">
  <textarea class="box-add-new-post" placeholder="Escribe tu tema a tratar..." id="addNewPost"></textarea>
  <button class="button-add" id="btnAddPost">Agregar</button>
  </div>
  <div id="allNewPost" class="allNewPost">
  </div>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewParentPanel;
  root.appendChild(divElement);

  showPostUser();

  const buttonAddPost = document.querySelector('#btnAddPost')
  buttonAddPost.addEventListener('click', addUserPost)
/*
  const buttonDeletePost = document.querySelector('#btnDeletePost')
  buttonDeletePost.addEventListener('click', deletePost)

  const buttonEditPost = document.querySelector('#btnEditPost')
  buttonEditPost.addEventListener('click', editPost)*/

  return divElement;
}
