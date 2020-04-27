import { root } from "../main.js";
import {renderHomeView} from "./home.js"; 
//import { showPosts } from "./home.js";

//Esto dibuja la vista donde se puede agregar un post

//let db = firebase.firestore();
export const renderPostView = () => {
  const posts =
    `<section id="container">
    <div class="container has-text-white">
      <h1> Escribe tu microcuento:</h1>
      <h1>Titulo:</h1>
      <input id="title" class="input is-success" type="text" placeholder="Título">
      <textarea id="body" class="textarea is-success is-large" type="text" placeholder="Escribe acá tu cuento"></textarea>
      <div class="field is-horizontal">
        <label class="label has-text-white">Autor:</label>
      <div class="field-body">
        <input class="input is-static has-text-white" type="text" value="User.name" readonly>
        </div>
    
        <div class="file is-primary is-centered">
          <label class="file-label">
            <input id="file" class="file-input" type="file" accept = "image/*" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Agrega una imagen...
              </span>
            </span>
          </label>
        </div>
    <button id="newPost" class="button  is-fullwidth is-primary is-large">Publicar</button>
    <section id="putPosts"></section>
    </section>`
  root.innerHTML = posts
  //Nodos Imagen
  const fileInput = document.querySelector("#file")
  const sectionPosts = document.querySelector("#putPosts")
  //Nodos publicación

  const newPost = document.querySelector("#newPost")
  newPost.addEventListener('click', readText)

  readFile(fileInput, sectionPosts)

  //showPosts(sectionPosts)
  renderHomeView(root)
}

 function readFile(fileInput, sectionPosts) {
  let url
  fileInput.onchange = (e) => {
     console.log(e);
     let file = e.target.files[0]
     console.log(file);
     firebase.storage().ref("postsList").child(file.name).put(file)
       .then(snap => {
         console.log(snap);
         return snap.ref.getDownloadURL()
       })
       .then(link => {
         url = link
         console.log(url);
         const img = document.createElement('img')
         img.src = url
         sectionPosts.appendChild(img)
         textImage()
       })
       .catch(err => {
         alert("Error:", err);
       })
   }
   function textImage() {
     const text = document.querySelector('#body').value
     const title = document.querySelector("#title").value
     let user = firebase.auth().currentUser;
     let post = {
       title: title,
       text: text,
       user: user.displayName,
       photo: user.photoURL,
       date: new Date(),
       img: url
     }
     addNewPost(post)
       .then(res => {
         console.log(res)
       })
       .catch(err => {
         console.log("No hay nuevo post", err)
       })
     addPostBD(post)
   }
 }

 function readText() {
   const text = document.querySelector('#body').value
   const title = document.querySelector("#title").value
   let user = firebase.auth().currentUser;
   let post = {
     title: title,
     text: text,
     user: user.displayName,
     photo: user.photoURL,
     date: new Date(),
   }
   addNewPost(post)
     .then(res => {
      console.log(res)
     })
     .catch(err => {
      console.log("No hay nuevo post", err)
     })
   addPostBD(post)
 }

//  Se agrega el post a la collección postsList en la BD 
 function addNewPost(post) {
   return firebase.firestore().collection("postsList").add(post)
 }

//  Se agregan los post al perfil del usuario 
 function addPostBD(post) {
   let user = firebase.auth().currentUser;
   const docRef = firebase.firestore().collection('datausers/').doc(user.uid);//la / y el + user.uid hace que no se duplique el usuario
   docRef.update({
     post: firebase.firestore.FieldValue.arrayUnion(post)
   })
 }

//Muestra TODOS los posts en tiempo real
function showPosts(sectionPosts) {
  firebase.firestore().collection("postsList").orderBy("date", "desc").limit(1).onSnapshot(snap => {
    clean(sectionPosts)
      snap.forEach(doc => {
      if (doc.data().img === undefined && doc.data().photo === undefined) {
        let renderPosts = `<div id="PostContainer" dataId="${doc.data().id}">
        <p>Autor:${doc.data().user}</p>
        <h2 id="Title">Titulo:${doc.data().title}</h2>
        <h1 id="Tale">${doc.data().text}</h1>
        <buttton id="Edit" class="button is-text is-warning"> Editar</button>
        <buttton id="Delete" dataId="${doc.data().id}" class="button is-text is-primary"> Borrar</button>
        <buttton id="Comment" dataId="${doc.data().id}" class="button is-text is-primary"> Comentar</button>
        <button id="SavePost" class="button is-text is-warning" >Guardar</button>
        <span class="icon is-medium"><i class="far fa-heart"></i></span>
        </div>`
        console.log(doc.data())
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
      } if (doc.data().photo != undefined) {
        let renderPosts = `<div>
        <img max-width="30" src="${doc.data().photo}"><p>Autor: ${doc.data().user}</p>
        <h2 id="Title">Titulo:${doc.data().title}</h2>
        <h1 id="Tale">${doc.data().text}</h1>
        <img max-width="300" src="${doc.data().img}">
        <buttton id="Edit"> Editar</button>
        <buttton id="Delete" dataId="${doc.data().id}" class="button is-text is-primary"> Borrar</button>
        <buttton id="Comment" dataId="${doc.data().id}" class="button is-text is-primary"> Comentar</button>
        <button id="SavePost" class="button is-text is-warning">Guardar</button>

        <span class="icon is-medium"><i class="far fa-heart"></i></span>
        </div>`
        console.log(doc.data())
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
      } else {
        let renderPosts = `<div>
      <p> Autor: ${doc.data().user}</p>
      <h2 id="Title">Titulo:${doc.data().title}</h2>
      <h1 id="Tale">${doc.data().text}</h1>
      <img max-width="300" src="${doc.data().img}">
      <buttton id="Edit"> Editar</button>
      <buttton id="Delete ${doc.id}" class="button is-text is-primary"> Borrar</button>
      <buttton id="Comment" class="button is-text is-primary"> Comentar</button>
      <button id="SavePost" class="button is-text is-warning">Guardar</button>
      <span class="icon is-medium"><i class="far fa-heart"></i></span>
      <div><section id="comments"><input id="commentBody" type="text"></input>    <p>Autor:${doc.data().user}</p>
      <p> Autor: ${doc.data().user}</p>
      </section></div>
      </div>`
        console.log(doc.data())
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
        //NODO y Listener de los botones
        const btnEditPost = document.querySelector("#Edit")
        btnEditPost.addEventListener("click", editPost())
      }
    })
  })
}

//Antes de poner el nuevo post limpia la sectionPost para evitar se dupliquen 
function clean(sectionPosts) {
  sectionPosts.innerHTML = '';
}

function editPost(e) {
  console.log(e.target.id)
  console.log("saludos de prueba")
  // const id= event.target.id;
  // let Title = document.querySelector('#Title').contentEditable = "true";
  // let Tale = document.querySelector('#Tale').contentEditable = "true";
  let btnSave = document.querySelector('#SavePost');
  btnSave.style = "display:block";
  }

//////////////////////////////////////////////////
// function saveEditPost(e) {
//   const id = e.target.dataset.id;
//   const saveText = document.querySelector(`#text[data-id='${id}']`);
//   const newText = saveText.textContent;
//   firebase.firestore().collection('postsList').doc(id).update({
//     text: newText,
//   });
//     saveText.setAttribute('contentEditable', 'false');

//     function deletePost(e) {
//       const id = e.target.dataset.id;
// //Esto sí lo borra-> firebase.firestore().collection('postsList').doc(id).delete();
//         postContainer = document.querySelector(`#PostContainer[data-id='${id}']`)
//         postContainer.style.display = "none";
//         //.remove();
//     };   
    // function likePost (e) {
    //   const id = e.target.dataset.id;
    //   const like= document.querySelector(`#Love[data-id='${id}']`);
    //   const likeCounter = parseInt(like.textContent) + 1;
    //   like.textContent = likeCounter
    //   firebase.firestore().collection('posts').doc(id).update({likes: likeCounter});
    //   let post = firebase.firestore().collection('posts').doc();
    // } 
//  }



// ////Prueba Edicion
// let sectionPosts = document.querySelector("#PostContainer");
// let render = document.querySelector("#renderPost")
// render = addEventListener("click", renderPostView)

// export function renderPostView(){
// let postTemplate= `<button id="EditPost">Editar</button>
// <p> Autor desconocido</p>
// <p id= 'postTitle' > cualquier Título  </p>
// <p id= 'postText'> un cuento chino </p>
// <button id="SavePost">Guardar</button>`
 
// const newNode = document.createElement("div")
//  newNode.innerHTML = postTemplate
//  root.appendChild(newNode)

// const btnEditPost = document.querySelector("#EditPost")
// btnEditPost.addEventListener("click", editPost) 
// }

// function editPost(e){
//   console.log("saludos de prueba")
//   const id= event.target.id;
//   let Title = document.querySelector('#postTitle').contentEditable = "true";
//   let Tale = document.querySelector('#postText').contentEditable = "true";
//   let btnSave = document.querySelector('#SavePost');
//   btnSave.style = "display:block";
// }
// //////////Fin de prueba