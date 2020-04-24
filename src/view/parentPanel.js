import { addUserPost, showPostUser } from '../firebase.js';

export default () => {
  const root = document.getElementById('root')
  const viewParentPanel = `
  <h1 class="parentPanel">PANEL DE PADRES</1>
  <textarea class="box-add-new-post" placeholder="Escribe tu tema a tratar" id="addNewPost"></textarea>
  <button class="button-add" id="btnAddPost">Agregar</button>
  <div id="allNewPost" class="allNewPost">
  </div>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewParentPanel;
  root.appendChild(divElement);

  showPostUser();

  const buttonAddPost = document.querySelector('#btnAddPost')
  buttonAddPost.addEventListener('click', addUserPost)


  return divElement;
}














/*
<textarea class="comment-box" placeholder="Escribe tu comentario" id="comment"> </textarea>
  <button class="comments" id="btnComment">Comentar</button>
  <p> 3 </p> <img class="logo-likes" src="img/like.svg">
  <div class="container__box>
    <div class="container__box--postTimeLine">
      <div class="container__box--answer">
        <div class="container__box--comment">
        </div
      </div>
    </div>
  </div>*/