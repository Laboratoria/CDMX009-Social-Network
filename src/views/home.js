 import { root } from "../main.js"

//  export const renderHomeView = () => {

 // //Muestra TODOS los posts en tiempo real
 export function showPosts() {
      firebase.firestore().collection("postsList").orderBy("date", "desc").onSnapshot(snap => {
     clean(root)
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
         root.appendChild(newNode)
       } if (doc.data().photo != undefined) {
         let renderPosts = `<div>
        <img max-width="30" src="${doc.data().photo}"><p>Autor: ${doc.data().user}</p>
        <h2 id="Title">Titulo:${doc.data().title}</h2>
        <h1 id="Tale">${doc.data().text}</h1>
        <img max-width="300" src="${doc.data().img}">
        <button id="Edit"> Editar</button>
        <button id="Delete" dataId="${doc.data().id}" class="button is-text is-primary"> Borrar</button>
         <button id="Comment" dataId="${doc.data().id}" class="button is-text is-primary"> Comentar</button>
         <button id="SavePost" class="button is-text is-warning">Guardar</button>

         <span class="icon is-medium"><i class="far fa-heart"></i></span>
         </div>`
         console.log(doc.data())
         const newNode = document.createElement("div")
         newNode.innerHTML = renderPosts
         root.appendChild(newNode)
       } else {
         let renderPosts = `<div>
       <p> Autor: ${doc.data().user}</p>
       <h2 id="Title">Titulo:${doc.data().title}</h2>
       <h1 id="Tale">${doc.data().text}</h1>
       <img max-width="300" src="${doc.data().img}">
       <button id="Edit"> Editar</button>
       <button id="Delete ${doc.id}" class="button is-text is-primary"> Borrar</button>
       <button id="Comment ${doc.id}" class="button is-text is-primary"> Comentar</button>
       <button id="SavePost ${doc.id}" class="button is-text is-warning">Guardar</button>
       <span class="icon is-medium"><i class="far fa-heart"></i></span>
       <div><section id="comments"><input id="commentBody" type="text"></input>    <p>Autor:${doc.data().user}</p>
       <p> Autor: ${doc.data().user}</p>
       </section></div>
       </div>`
       console.log(doc.data())
       const newNode = document.createElement("div")
       newNode.innerHTML = renderPosts
       root.appendChild(newNode)
       //  NODO y Listener de los botones
         const btnEditPost = document.querySelector("#Edit")
         btnEditPost.addEventListener("click", editPost)
       }
     })
   })
 }

//  Antes de poner el nuevo post limpia la sectionPost para evitar se dupliquen 
 function clean(root) {
   root.innerHTML = '';
 }

 function editPost(e) {
    console.log(e.target.id)
    alert("saludos de prueba")
  // const id= event.target.id;
  //  let Title = document.querySelector('#Title').contentEditable = "true";
  // let Tale = document.querySelector('#Tale').contentEditable = "true";
  //  let btnSave = document.querySelector('#SavePost');
  //   btnSave.style = "display:block";
  btnSave.addEventListener=("click", savePost)
  }
function savePost(e){
  console.log(e.target.id)
}
