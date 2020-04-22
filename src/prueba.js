
/*     e.stopPropagation();
    const el = e.target.closest('.container');
    const id = +el.dataset.id;
    db.collection('posts').doc(id).delete().then(() => {
      console.log(`${id} successfully deleted!`);
    }).catch((error) => {
      console.error('Error removing document: ', error);
    })
    render(); */
})}


deleteButtons.forEach(
  btn => btn.addEventListener('click', deleteHandler)
);

};
render();
let btnEdit = document.getElementById("button2");

btnEdit.addEventListener("click", edit);
function edit(){
alert("hola mundo");
} 
//delete documents

function deletePost(idPost){
db.collection("posts").doc(idPost).delete()
  .then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
});




//edit documents


function editPost(idUser, title, activity, location, description){
document.querySelector('#recipientTitle').value = title;
document.querySelector('#recipientActivity').value = activity;
document.querySelector('#recipientLocation').value = location;
document.querySelector('#recipientDescription').value = description;

let saveChangesPost = document.querySelector('#saveUser');
saveChangesUser.innerHTML = 'Editar';

saveChangesPost.onclick = () => {
  var post = db.collection("posts").doc(idUser);

  let title = document.querySelector('#recipientTitle').value;
  let activity = document.querySelector('#recipientActivity').value;
  let location = document.querySelector('#recipientLocation').value;
  let description = document.querySelector('#recipientDescription').value;

    return post.update({
      title: title,
      activity: activity,
      location: location,
      description: description
    })
    .then(function() {
      console.log("Document successfully updated!");
      saveChangesPost.innerHTML = 'Guardar';
      document.querySelector('#recipientTitle').value = '';
      document.querySelector('#recipientActivity').value = '';
      document.querySelector('#recipientLocation').value = '';
      document.querySelector('#recipientDescription').value = '';
    })
    .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
  }


}


//storage
// Only authenticated users can read or write to the bucket
/* service firebase.storage {
match /b/{bucket}/o {
  match /{allPaths=**} {
    allow read, write: if request.auth != null;
  }
}
} */
