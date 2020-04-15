import {container} from './main.js';


export const renderHomeView = () => {
    `
    `
    container.innerHTML = renderHomeView;
};

export const renderPostView = () => {
// `<div class="container has-text-white">
// <h1> Escribe tu microcuento:</h1>
// <input class="input is-success" type="text" placeholder="Título">
// <textarea class="textarea is-success is-large" type="text" placeholder="Escribe acá tu cuento"></textarea>
// <div class="field is-horizontal">
//   <label class="label has-text-white">Autor:</label>
// <div class="field-body">
//   <input class="input is-static has-text-white" type="text" value="${User.name}" readonly>
//   </div>

//   <div class="field">
//     <div class="file is-primary">
//       <div class="file has-name is-right">
//         <label class="file-label">
//           <input class="file-input" type="file" name="resume">
//           <span class="file-cta">
//           <span class="file-icon">
//             <i class="fas fa-upload"></i>
//           </span>
//           <span class="file-label">
//             Agrega una ilustración...
//           </span>
//           </span>
//           <span class="file-name has-background-white">
//             ${Nombre}
//           </span>
//         </label>
//   </div>
// </div>
// </div>
`
    container.innerHTML = renderPostView;
};

export const renderProfileView = () => {
  `
`
container.innerHTML = renderProfileView;
};

export const renderExitView = () => {
    `
    `
    container.innerHTML = renderExitView;
};
