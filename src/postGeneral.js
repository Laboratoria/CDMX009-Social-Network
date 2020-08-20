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
        let dateuser = doc.data().date; 
        let date = new Date(dateuser*1000);
        let mes = date.getMonth()+1; //getMonth devuelve el mes empezando por 0
        let dia = date.getDate(); //getDate devuelve el dia del mes
        let anyo = date.getYear() - 69;
        let datefinal = dia + '-' + mes + '-' + anyo; 
             
      let div = `<div class="list-content">
        <div class="infoUser-post">
          <div>  
           <img class='user-photo' src='${doc.data().photoUser}'>
           <p>${doc.data().userName}</p>
          </div>
          <p>${datefinal}</p>
        </div>  
        <p>${doc.data().text}</p>
        <div class="imgListPost-container">
          <img class='imgListPost' src='${doc.data().imageUrl}'">
        </div>
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
