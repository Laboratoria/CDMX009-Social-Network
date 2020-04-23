import { root } from "../main.js";
//Esto dibuja la vista donde se puede agregar un post

let db = firebase.firestore()

export function renderPostView() {
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
                Agrega una ilustración...
              </span>
            </span>
          </label>
        </div>
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
//Esto agrega un post nuevo a la lista de posts


//Funciones de Firebase

//Se agrega el post a la collección postsList en la BD 
function addNewPost(post) {
  return firebase.firestore().collection("postsList").add(post)
}

//Se agregan los post al perfil del usuario 
function addPostBD(post) {
  let user = firebase.auth().currentUser;
  const docRef = db.collection('datausers/').doc(user.uid);//la / y el + user.uid hace que no se duplique el usuario
  docRef.update({
    post: firebase.firestore.FieldValue.arrayUnion(post)
  })
}

//Muestra los posts en tiempo real
function showPosts(sectionPosts) {

  firebase.firestore().collection("postsList").onSnapshot(snap => {
    limpiar(sectionPosts)
    snap.forEach(doc => {
      if (doc.data().img === undefined && doc.data().photo === undefined) {
        let renderPosts = `<div>
        <p>${doc.data().user}</p>
      <p>${doc.data().title}</p>
      <p>${doc.data().text}</p>
    </div>`
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
      } if (doc.data().photo != undefined) {
        let renderPosts = `<div>
        <img max- width="70" src="${doc.data().photo}"/><p> ${doc.data().user}</p>
      <p>Titulo:${doc.data().title}</p>
      <p>${doc.data().text}</p>
      <img max- width="200" src="${doc.data().img}" />
      
    </div>`
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
      } else {
        let renderPosts = `<div>
        <p> Autor: ${doc.data().user}</p>
      <p>Titulo:${doc.data().title}</p>
      <p>${doc.data().text}</p>
      <img max- width="200" src="${doc.data().img}" />
      
    </div>`
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        sectionPosts.appendChild(newNode)
      }

    })
  })
}

//Antes de poner el nuevo post limpia la sectionPost para evitar se dupliquen 
function limpiar(sectionPosts) {
  sectionPosts.innerHTML = '';
}
