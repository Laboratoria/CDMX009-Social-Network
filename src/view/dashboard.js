
 import firebase from "../firebase.js"

  //Initialize Cloud Firestore through Firebase
  export default () => {



  let db = firebase.firestore();
  let st = firebase.storage(); 

  
  //nodos
  let savePost = document.querySelector('#savePost');
  let url
  let day

  let timeSnap = () => {
    let now = new Date();
    let date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    day = date.join('/') + ' ' + time.join(':');
  }

  //Add users
  savePost.onclick = () => {
    timeSnap();
    let title = document.querySelector('#recipientTitle').value;
    let activity = document.querySelector('#recipientActivity').value;
    let location = document.querySelector('#recipientLocation').value;
    let description = document.querySelector('#recipientDescription').value;


      db.collection("newPosts").add({
    /*     user: displayName,
        photoUser: photoURL, */
        title: title,
        activity: activity,
        location: location,
        description: description,
        image: url,
        date: day,
        displayName,
        photoURL
      })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          document.querySelector('#recipientTitle').value = '';
          document.querySelector('#recipientActivity').value = '';
          document.querySelector('#recipientLocation').value = '';
          document.querySelector('#recipientDescription').value = '';
          })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
  }

  //add image

  let fileInput = document.querySelector('#file');

  fileInput.onchange = e => {
      console.log(e.target.files);
      let file = e.target.files[0]
        st.ref('img').child(file.name).put(file)
            .then(snap => {
                return snap.ref.getDownloadURL()
            })
            .then(link => {
                url = link
                let img = document.createElement('img')
                img.src = link
            })
  }
  
  //Read documents
  let post = document.querySelector('#contentCreated');
    let render = () => {
      db.collection("newPosts").onSnapshot((querySnapshot) => {
        post.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().title}`);
            post.innerHTML += `   
            <div class="container">
            <div class="card-post-container">
              <div class="card-title-post">
                <div id="postImg" class="img-post">
                  <img width="100%" src="${doc.data().image}">
                </div>
                <div class="info-over-image">
                  <h4 id="titlePost">${doc.data().title}</h4>
                  <div class="subtitle-post">
                    <p id="activityPost">${doc.data().activity}</p>
                    <p id="locationPost">${doc.data().location}</p>
                  </div>
                </div>
                <div class="" id="infoUserContainer">
                  <div class="info-user">
                    <img src="${doc.data().photoURL}">
                    <h4>${doc.data().displayName}</h4>
                  </div>
                  <span class="edit-delete-icons">
                  <i class="far fa-trash-alt js-delete" id="${doc.id}"></i>
                  <i class="fas fa-pencil-alt js-edit" id="${doc.id}, ${doc.data().title}, ${doc.data().activity}, ${doc.data().location}, ${doc.data().description}"></i>
                </span>
                    <p id="descriptionPost">${doc.data().description}</p> 
                    <p>${doc.data().date}</p>
                </div>
              </div>
            </div>
          </div>     
            `
          let deletebutton = document.querySelectorAll('.js-delete');
          let deletePost = (e) => {
            console.log(e.target.id);
            db.collection('newPosts').doc(e.target.id).delete()
              .then(function(){
                console.log('Lo borraste, eres chido');
              })
              .catch(function(error){
                console.log('No pudiste, ponte chido', error);
              });
          }
            deletebutton.forEach(btn=> btn.addEventListener('click', deletePost));


            let editbutton = document.querySelectorAll('.js-edit');
            let editPost = (e) => {
              let post = db.collection("newPosts").doc(e.target.id);

              let name = document.querySelector('#name').value;
              let lastName = document.querySelector('#lastName').value;
              let date = document.querySelector('#date').value;

            }
       });
     })
     
    };


    //editar documentos
function editUser(idUser, name, lastName, date){
  document.querySelector('#name').value = name;
  document.querySelector('#lastName').value = lastName;
  document.querySelector('#date').value = date;

  let saveChangesUser = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesUser.onclick = () => {
    var user = db.collection("users").doc(idUser);

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let date = document.querySelector('#date').value;

      return user.update({
        first: name,
        last: lastName,
        born: date
      })
      .then(function() {
        console.log("Document successfully updated!");
        saveChangesUser.innerHTML = 'Guardar';
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#date').value = '';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

}
    render();

  
  }

