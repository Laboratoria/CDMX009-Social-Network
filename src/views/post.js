import { root } from "../main.js";
// import {renderHomeView} from "./home.js"; 
import { showPosts } from "./home.js";

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
    <button id="newPost" class="button is-fullwidth is-primary is-large">Publicar</button>
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
    firebase.auth().onAuthStateChanged(function (user) {
      //console.log(user);
      const docRef = db.collection('datausers/').doc(user.uid);
      docRef.get().then(function (snapshot) {
        let userData = snapshot.data();
        console.log(userData);
        let post = {
          title: title,
          text: text,
          user: user.displayName,
          photo: user.photoURL,
          date: new Date(),
          img: url,
          uid: userData.uid
        }
        addNewPost(post)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log("No hay nuevo post", err)
          })
        addPostBD(post)
      })
    })
  }

  function readText() {
    const text = document.querySelector('#body').value
    const title = document.querySelector("#title").value
    firebase.auth().onAuthStateChanged(function (user) {
      //console.log(user);
      const docRef = db.collection('datausers/').doc(user.uid);
      docRef.get().then(function (snapshot) {
        let userData = snapshot.data();
        console.log(userData);
        let post = {
          title: title,
          text: text,
          user: user.displayName,
          photo: user.photoURL,
          date: new Date(),
          uid: userData.uid
        }
        addNewPost(post)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log("No hay nuevo post", err)
          })
        addPostBD(post)
        showPosts()
      })
    })
  };

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
}