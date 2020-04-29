let db = firebase.firestore();
let usersRef = db.collection('users');
let postsRef = db.collection('posts');
let storage = firebase.storage();
let imgRef = storage.ref('images');
let main = document.querySelector('#main');

let originalPost = 'n60Red5WLbXexfrHBymd';
/*let originalPost =  

n60Red5WLbXexfrHBymd
nQG7x0vBh1fcwzsjyu6E
pgltFxUCv1UTSoltAOmZ

;*/ 

export const deletePost = () => {
  postsRef.doc(originalPost).get()
  .then(info => {
    let postInfo = info.data();
    console.log(postInfo);
    if(postInfo.imageId){
      imgRef.child(postInfo.imageId).delete()
        .then(e => {
          console.log("Imagen borada");
        }).catch((error)=> {
          console.log("Error al borrar img: " + error);
        });
    }    
  }).then(e => {
    postsRef.doc(originalPost).delete()
    .then(function() {
        console.log("Post borrado");
    }).catch(function(error) {
        console.error("Error al borrar post: ", error);
    });
  }).catch((error)=> {
    console.log("Error al traer postInfo: " + error);
  });
}