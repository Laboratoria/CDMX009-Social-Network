//Esto "imprime" el post nuevo


  

  //Funciones de Firebase
let db = firebase.firestore()
let postRef = db.collection("postsList")

//Esto agrega el post al storage
 export function addNewPost(post)
{return firebase.firestore().collection("postsList").add(post)
}//Lo siguiente "imprime" el post
  //   //.then {firebase.firestore().collection("postsList").onSnapshot(snap=>{
  //   let post = document.querySelector("#posts");
  //   post.innerHTML = ''
  //   snap.forEach(doc=> {
  //     let renderPosts = `<div>
  //     <p>${doc.data().title}</p>
  //     <p>${doc.data().body}</p>
  //     <p> Author:${doc.data().username}</p>
  //     <img max- width="200" src="${doc.data().img}" />
  //   </div>`
  //   const newNode = document.createElement("div")
  //   newNode.innerHTML = renderPosts
  //   post.appendChild(newNode)
  //   })
  // })
