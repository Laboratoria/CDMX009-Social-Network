import {renderPost} from "./createPost.js";
import {editPost} from "./editPost.js";
import {deletePost} from "./deletePost.js";


let db= firebase.firestore();

export const readerMyTrips = () => {
  let currentUser = firebase.auth().currentUser;
  if (currentUser != null) {
    let uid = currentUser.uid;
    let postRef = db.collection('posts');
        postRef.where('uid', '==', uid).orderBy('date', 'desc').get()
        .then(snapshot => {
        if (snapshot.empty) {
          let mypost = document.querySelector('#list-post')
          mypost.innerHTML = '';
          let div = `<div class="list-content">  
          <br/><br/><br/>
           <br/><br/><br/>
          </div>`
          let nodo = document.createElement('div')
            nodo.innerHTML = div
            mypost.appendChild(nodo);
             
          console.log('No matching documents.');
          //return; 
        }
       let mypost = document.querySelector('#list-post')
           mypost.innerHTML = ''
           snapshot.forEach(doc => {
            let dateuser = doc.data().date; 
            let date = new Date(dateuser*1000);
            let mes = date.getMonth()+1; //getMonth devuelve el mes empezando por 0
            let dia = date.getDate(); //getDate devuelve el dia del mes
            let anyo = date.getYear() - 69;
            let datefinal = dia + '-' + mes + '-' + anyo; 
            let div = `
           <div class="list-content">
           <div class="infoUser-post">
           <div> 
              <img class='user-photo' src='${doc.data().photoUser}'>
              <p>${doc.data().userName}</p>
            </div>
              <p>${datefinal}</p>
            
            </div>
           <p>${doc.data().text}</p>
           <div class="imgListPost-container">
             <img class='imgListPost' src='${doc.data().imageUrl}'>
           </div>
            <br/>
          <div class="iconos">
              <div>
                <img  id="${doc.id}" src='iconos/corazon.png' class='iconolike' alt="likePost"/> ${doc.data().likes}
              </div>
              <div>
                <img  id="${doc.id}" src='iconos/edit-tools.png' class='iconoedit' alt="EditPost" /> 
                <img  id="${doc.id}" src='iconos/interface.png' class='iconodelete' alt="DeletePost" /> 
              </div>
          </div>
          </div>`
           let nodo = document.createElement('div')
               nodo.innerHTML = div
               mypost.appendChild(nodo);
              });
              let like = document.querySelectorAll(".iconolike");
              let edit = document.querySelectorAll(".iconoedit");
              let idelete = document.querySelectorAll(".iconodelete");
              
              let actionLike = (e) => {
              let  likeRef = db.collection("posts").doc(e.target.id);
                    likeRef.update({
                          likes: firebase.firestore.FieldValue.increment(1)
                    })
                    .then(() => {
                      readerMyTrips();
                    })
                    .catch((error)=> {
                      console.log('No se genero el like');
                    });
              };
              like.forEach((actionBtnLike) =>
                actionBtnLike.addEventListener("click", actionLike)
              );
              edit.forEach((actionBtnEdit) =>
                actionBtnEdit.addEventListener("click", e => {
                  console.log("Edit post"); 
                  console.log(e.target.id);
                  let userName = 'usuario'; /*aquí se debe jalar el nombre del usuario*/
                  renderPost(userName, uid);
                  editPost(e.target.id);
                })
              );
              idelete.forEach((actionBtnLDelete) =>
                actionBtnLDelete.addEventListener("click", e =>{
                  console.log("Delete post"); 
                  console.log(e.target.id);
                  deletePost(e.target.id);
                })
              );
          })
          .catch(err => {
            console.log(err); 
            //console.log('Error getting documents', err);
          });
       }
}

