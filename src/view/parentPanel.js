export default () => {
  const viewParentPanel = `
  <div class="post">
  <h1>PANEL DE PADRES</1>
  <textarea class="comment-box" placeholder="Escribe tu comentario"> </textarea>
  <button class="button-add">Agregar</button>
  </div>
  <div class="container__box>
    <div class="container__box--postTimeLine">
      <div class="container__box--answer">
        <div class="container__box--comment">
        3<img class="logo-likes" src="img/like.svg">
        <button class="comments>Comentarios</button>
        </div
      </div>
    </div>
  </div>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewParentPanel;

  return divElement;
}