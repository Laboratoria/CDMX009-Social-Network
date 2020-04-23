import { addUserPost } from '../firebase.js';

export default () => {
  const root = document.getElementById('root')
  const viewParentPanel = `
  <h1>PANEL DE PADRES</1>
  <div class="post">
  <textarea class="comment-box" placeholder="Escribe tu tema a tratar" id="post"> </textarea>
  <button class="button-add" id="btnPost">Agregar</button>
  </div>
  <div id="postNew"> Aqui van los postNew
  </div>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewParentPanel;
  root.appendChild(divElement);

  const buttonAddPost = document.querySelector('#btnPost')
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