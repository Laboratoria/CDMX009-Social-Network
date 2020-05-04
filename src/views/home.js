import { root } from "../main.js"
import { showP } from "../main.js"
import { editPost, clean, deletePost, counter } from "./functionsFeed.js"


// //Muestra TODOS los posts en tiempo real
export function showPosts() {

  let header = `
    <div class="container is-fluid has-background-white">
    <div >
      <!-- Main container -->
  <nav class="level">
  <!-- Left side -->
  <div class="level-left">
  <div class="level-item">
    <p class="subtitle is-5">
      <strong>10653</strong> posts
    </p>
  </div>
  <div class="level-item">
    <div class="field has-addons">
      <p class="control">
        <input class="input" type="text" placeholder="Find a post">
      </p>
      <p class="control">
        <button class="button">
          Search
        </button>
      </p>
    </div>
  </div>
  </div>
  <!-- Right side -->
  <div class="level-right">
  <p class="level-item button"><strong>All posts</strong></p>
  <p class="level-item button"><a>My posts</a></p>
  </div>
  </nav>
    </div>
  </div>`
  const newHeader = document.createElement("header")
  newHeader.innerHTML = header
  root.innerHTML = '';
  root.appendChild(newHeader)
  //Firebase
  firebase.firestore().collection("postsList").orderBy("date", "desc").onSnapshot(snap => {
    clean(showP)
    snap.forEach(doc => {
      //  Primer template  CON ILUSTRACIÓN
      if (doc.data().img != undefined) {
        let renderPosts =
          `<div class="postContainer" data-id="${doc.id}">
    <div class="tile is-ancestor">
      <div class="tile is-8 is-parent">
        <div class="tile is-child box">
          <figure class="image is-5by4">
            <img src="${doc.data().img}">
          </figure>
        </div>
      </div>
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <figure class="image is-32x32">
            <img class="is-rounded is-pulled-left" src="${doc.data().photo}">
          </figure>
          <p class="title is-pulled-right"> Template 1 ${doc.data().user}</p>
          <p id="${doc.id}-title" class="title postTitle" data-id="${doc.id}"> ${doc.data().title}</p>
          <p id="${doc.id}-text" class="postText" data-id="${doc.id}"> ${doc.data().text} </p>
          <div class="contentLikes">
            <a href="#" data-id="${doc.id}" class="likes btnLike"><i class="fas fa-heart"></i></a>
            <div class="resultCounter counter"> ${doc.data().likes}</div>
          </div>
          <button data-id="${doc.id}" class="button is-pulled-right btnComment">Comentar</button>
          <button data-id="${doc.id}" class="button icon is-medium btnEdit"><i data-id="${doc.id}"
              class="fas fa-pencil-alt"></i></button>
          <button id="${doc.id}-save" data-id="${doc.id}" class="button btnSave">Guardar</button>
          <button id="${doc.id}-delete" data-id="${doc.id}" class="button is-pulled-right btnDelete"><i
              data-id="${doc.id}" class="fas fa-times"></i></button>
      </div>
    </div>
  </div>
  </div>`
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        showP.appendChild(newNode)
      } else {
        //SEGUNDO template SIN ILUSTRACIÓN
        let renderPosts =
          `<div class="postContainer" data-id="${doc.id}">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
              <div class="tile is-child box">
                <figure class="image is-32x32">
                  <img class="is-rounded is-pulled-left" src="${doc.data().photo}">
                </figure>
                <p class="title is-pulled-right"> Template 2 ${doc.data().user}</p>
                <p id="${doc.id}-title" class="title postTitle" data-id="${doc.id}"> ${doc.data().title}</p>
                <p id="${doc.id}-text" class="postText" data-id="${doc.id}"> ${doc.data().text} </p>
                <div class="contentLikes">
                  <a href="#" data-id="${doc.id}" class="likes btnLike"><i class="fas fa-heart"></i></a>
                  <div class="resultCounter counter"> ${doc.data().likes}</div>
                </div>
                <button data-id="${doc.id}" class="button is-pulled-right btnComment">Comentar</button>
                <button data-id="${doc.id}" class="button icon is-medium btnEdit"><i data-id="${doc.id}"
                    class="fas fa-pencil-alt"></i></button>
                <button id="${doc.id}-save" data-id="${doc.id}" class="button btnSave">Guardar</button>
                <button id="${doc.id}-delete" data-id="${doc.id}" class="button is-pulled-right btnDelete"><i
                    data-id="${doc.id}" class="fas fa-times"></i></button>
              </div>
            </div>
          </div>
        </div>`
        const newNode = document.createElement("div")
        newNode.innerHTML = renderPosts
        showP.appendChild(newNode)
      }
    })
    const btnsEditPost = document.querySelectorAll(".btnEdit")
    btnsEditPost.forEach(btnEditPost => btnEditPost.addEventListener("click", editPost))

    const btnsDelete = document.querySelectorAll(".btnDelete")
    btnsDelete.forEach(btnDelete => btnDelete.addEventListener("click", deletePost))



    //LIKES
    let btnLike = document.querySelectorAll('.btnLike')
    //console.log(btnLike);
    let btnClick = btnLike[btnLike.length - 1]
    //console.log(btnClick);

    btnClick.addEventListener('click', counter)
  }
  )





  // Antes de poner el nuevo post limpia la sectionPost para evitar se dupliquen 


  //  HEADER
}