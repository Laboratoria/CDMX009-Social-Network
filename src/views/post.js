import { root } from "../main.js";
import { showPosts } from "./home.js";
import { navBar } from "../main.js";

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
    <button id="newPost" class="button  is-fullwidth is-primary is-large">Publicar</button>
    <section id="putPosts" class="sectionPosts"></section>
    </section>
    `
  navBar.style.display = 'block'
  root.innerHTML = posts


  //Nodos Imagen
  const fileInput = document.querySelector("#file")
  const sectionPosts = document.querySelector("#putPosts")
  //Nodos publicación

  const newPost = document.querySelector("#newPost")
  newPost.addEventListener('click', readText)

  readFile(fileInput, sectionPosts)

  showPosts(sectionPosts)

}

function readFile(fileInput, sectionPosts) {
  let url

  //const fileInput = document.querySelector("#file")
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
  console.log(user);

  let post = {
    title: title,
    text: text,
    user: user.name,
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
function dataBD() {
  firebase.firestore().collection("postsList").get().then(function (docs) {
    docs.forEach(function (doc) {
      console.log(doc.id);
    });
  });
}
dataBD()


//Se agregan los post al perfil del usuario 
function addPostBD(post) {
  let user = firebase.auth().currentUser;
  console.log(user);
  const docRef = db.collection('datausers/').doc(user.uid);
  docRef.update({
    post: firebase.firestore.FieldValue.arrayUnion(post)
  })
}
