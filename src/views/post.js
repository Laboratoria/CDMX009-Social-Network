import {addNewPost} from "./postFunctions.js"

import { root } from "../main.js";
//Esto dibuja la vista donde se puede agregar un post
export const postTemplate = () => {
    `<section id="container">
    <div class="container has-text-white">
      <h1> Escribe tu microcuento:</h1>
      <input id="title" class="input is-success" type="text" placeholder="Título">
      <textarea id="body" class="textarea is-success is-large" type="text" placeholder="Escribe acá tu cuento"></textarea>
      <div class="field is-horizontal">
        <label class="label has-text-white">Autor:</label>
      <div class="field-body">
        <input class="input is-static has-text-white" type="text" value="$Username" readonly>
        </div>
    
        <div class="file is-primary is-centered has-name">
          <label class="file-label">
            <input id="file" class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Agrega una ilustración...
              </span>
            </span>
            <span  id="imageName" class="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
          </label>
        </div>

    
    <button id="publish" class="button  is-fullwidth is-primary is-large">Publicar</button>
    <section id="feed"></section>
    </section>`
        root.innerHTML = postTemplate;
        //NODOS
        const fileInput = document.querySelector("#file");
        const text = document.querySelector('#body');
        const title = document.querySelector("#title");
        const newPost = document.querySelector("#publish");
        // Listeners
        fileInput.onchange = (e) =>{
          const file =  e.target.file
          firebase.storage().ref("postsList").child(file.name).put(file)
          .then(snap => {
            return snap.ref.getDownloadURL()
      })
          .then(link => {
          url = link
          let img= document.createElement("img")
          img.src = link
          document.body.appendChild(img)
          })
          .catch(err =>{
          alert("Error al cargar el documento");
          })
        }

//Esto agrega un post nuevo a la lista de posts

      //Función que "recupera" el texto ingresado por el usuario
      newPost.onclick = ()=> {
        let post = {
            title: title.value,
            text: text.value,
            // user: user.name.value,
            date: new Date(),
            img: url
        }
       let addNewPost;
    }
  }


// //Función para que el file upload traiga el nombre

// const fileInput = document.querySelector('#file-js-example input[type=file]');
// fileInput.onchange = () => {
//   if (fileInput.files.length > 0) {
//     const fileName = document.querySelector('#file-js-example .file-name');
//     fileName.textContent = fileInput.files[0].name;
//   }
// }

