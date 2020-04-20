import { root } from "../main.js";

export const renderPostView = () => {
    `<section id="container">
    <div class="container has-text-white">
      <h1> Escribe tu microcuento:</h1>
      <input class="input is-success" type="text" placeholder="Título">
      <textarea class="textarea is-success is-large" type="text" placeholder="Escribe acá tu cuento"></textarea>
      <div class="field is-horizontal">
        <label class="label has-text-white">Autor:</label>
      <div class="field-body">
        <input class="input is-static has-text-white" type="text" value="User.name" readonly>
        </div>
    
        <div class="file is-primary is-centered">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Agrega una ilustración...
              </span>
            </span>
          </label>
        </div>
    
    <button class="button  is-fullwidth is-primary is-large">Publicar</button>
    </section>`
    root.innerHTML = renderPostView;
};

// //Función para el file upload

// const fileInput = document.querySelector('#file-js-example input[type=file]');
// fileInput.onchange = () => {
//   if (fileInput.files.length > 0) {
//     const fileName = document.querySelector('#file-js-example .file-name');
//     fileName.textContent = fileInput.files[0].name;
//   }
// }