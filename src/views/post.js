import { root } from "../main.js";
//Esto dibuja la vista donde se puede agregar un post
export  function renderPostView () {
   const posts =
    `<section id="container">
    <div class="container has-text-white">
      <h1> Escribe tu microcuento:</h1>
      <input id="title" class="input is-success" type="text" placeholder="Título">
      <textarea id="body" class="textarea is-success is-large" type="text" placeholder="Escribe acá tu cuento"></textarea>
      <div class="field is-horizontal">
        <label class="label has-text-white">Autor:</label>
      <div class="field-body">
        <input class="input is-static has-text-white" type="text" value="User.name" readonly>
        </div>
    
        <div class="file is-primary is-centered">
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
          </label>
        </div>
    
    <button id="publish" class="button  is-fullwidth is-primary is-large">Publicar</button>
    <section id="posts"></section>
    </section>`
        root.innerHTML = posts
        const fileInput = document.querySelector("#file")
        readFile(fileInput)
        }
        function readFile(fileInput){
        fileInput.onchange = (e) =>{
          console.log(e);
          let file =  e.target.files[0]
          console.log(file);

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

      //NODOS
      const text = document.querySelector('#body')
      const title = document.querySelector("#title")
      const newPost = document.querySelector("#newPost")
      //Función que trae el texto
      newPost.onclick = ()=> {
        let post = {
            title: title.value,
            text: text.value,
            // user: user.name.value,
            date: new Date(),
            img: url
        }
      addNewPost(post)
      .then (res=> {
        console.log(res)
      })
      .catch(err => {
        console.log("No hay nuevo post", err)
      })
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

//Funciones de Firebase
let db = firebase.firestore()
let postRef = db.collection("postsList")

//Esto agrega el post al storage
function addNewPost(post)
{return firebase.firestore().collection("postsList").add(post)
}
//Esto muestra el post nuevo
firebase.firestore().collection("postsList").onSnapshot(snap=>{
  const post = document.querySelector("#posts");
  post.innerHTML = ''
  snap.forEach(doc=> {
    let renderPosts = `<div>
    <p>${doc.data().title}</p>
    <p>${doc.data().body}</p>
    <p> Author:${doc.data().author}</p>
    <img max- width="200" src="${doc.data().img}" />
  </div>`
  const newNode = document.createElement("div")
  newNode.innerHTML = renderPosts
  post.appendChild(newNode)
  })
})