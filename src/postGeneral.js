import {router } from './index.js'; 
let db= firebase.firestore();
let postRef = db.collection('posts');
let privacy = "public";
   
export const postGeneral = () => {
  postRef.where('privacy', '==', privacy).orderBy('date', 'desc').get()
  .then(snapshot => {
  if (snapshot.empty) {
     console.log('No matching documents.');
      return; 
  }
  let mypost = document.querySelector('#list-post')
      mypost.innerHTML = ''; 
      snapshot.forEach(doc => {  
      let div = `<div class="list-content">  
        <p>${doc.data().text}</p>
        <img class='imgListPost' src='${doc.data().imageUrl}' />
        <br/>
        <img  id="${doc.id}" src='iconos/corazon.png' class='iconolike' /> ${doc.data().likes}
        </div>`;
      let nodo = document.createElement('div')
          nodo.innerHTML = div;
          mypost.appendChild(nodo);
        });
        let like = document.querySelectorAll(".iconolike");
        let actionLike = (e) => {
        let  likeRef = db.collection("posts").doc(e.target.id);
              likeRef.update({
                  likes: firebase.firestore.FieldValue.increment(1)
              })
              .then(() => {
                postGeneral();
              })
              .catch((error)=> {
                console.log('No se genero el like');
              });
        };
        like.forEach((actionBtnLike) =>
          actionBtnLike.addEventListener("click", actionLike)
        );
    })
    .catch(err => {
      console.log(err); 
      //console.log('Error getting documents', err);
    });
 }
