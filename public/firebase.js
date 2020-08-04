// Firebase init
const db = firebase.firestore();

const savePost = document.querySelector('#savePost');
const displayName = localStorage.getItem('nameStorage');
const photoURL = localStorage.getItem('URLStorage');
let url;
let day;
let post;
let comment;

// Initialize Cloud Firestore through Firebase
const st = firebase.storage();
export const collectionPost = db.collection('newPosts');
console.log(collectionPost)

const timeSnap = () => {
  const now = new Date();
  const date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
  day = `${date.join('/')} ${time.join(':')}`;
};

// Add users
savePost.onclick = () => {
  timeSnap();
  const title = document.querySelector('#recipientTitle').value;
  const activity = document.querySelector('#recipientActivity').value;
  const location = document.querySelector('#recipientLocation').value;
  const description = document.querySelector('#recipientDescription').value;

  return collectionPost.add({
    title,
    activity,
    location,
    description,
    image: url,
    date: day,
    displayName,
    photoURL,
  })
    .then(() => {
      document.querySelector('#recipientTitle').value = '';
      document.querySelector('#recipientActivity').value = '';
      document.querySelector('#recipientLocation').value = '';
      document.querySelector('#recipientDescription').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Add image
const fileInput = document.querySelector('#file');
fileInput.onchange = (e) => {
  console.log(e.target.files);
  const file = e.target.files[0];
  st.ref('img').child(file.name).put(file)
    .then(snap => snap.ref.getDownloadURL())
    .then((link) => {
      url = link;
      const img = document.createElement('img');
      img.src = link;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Necesitas iniciar sesión para poder publicar un post.');
    });
};

// Read documents
export const render = () => {
  post = document.querySelector('#contentCreated');
  db.collection('newPosts').onSnapshot((querySnapshot) => {
    post.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
      post.innerHTML
        += `     <div class="card-post-container">
        <div class="card-post">
          <div id="postImg" class="img-post">
            <img width="100%" src="${doc.data().image}">
          </div>
          <div class="info-post" id="infoUserContainer">
            <div class="info-user">
              <img src="${doc.data().photoURL}">
              <h4>${doc.data().displayName}</h4>
            </div>
            <div class="header-post">
              <h5 id="titlePost">${doc.data().title}</h5>
              <span class="edit-delete-icons">
                <i class="fas fa-pencil-alt js-edit hover-yellow" id="${doc.id}" data-title="${doc.data().title}"
                  data-activity="${doc.data().activity}" data-location="${doc.data().location}"
                  data-description="${doc.data().description}"></i>
                <i class="far fa-trash-alt js-delete hover-yellow" id="${doc.id}"></i>
              </span>
            </div>
            <div class="subtitle-post">
              <p id="activityPost">#${doc.data().activity} </p>
              <p id="locationPost"> <i class="fas fa-map-marker-alt"></i> ${doc.data().location}</p>
            </div>
            <p id="descriptionPost">${doc.data().description}</p>
            <div class="flex-row">
              <p>
                <i class="far fa-clock"> </i> ${doc.data().date}
              </p>
              <span class="flex-row-likes">
                <i class="far fa-heart like-btn" id="${doc.id}"></i>
                <p><strong><span class="clicks"> </span></strong></p>
              </span>
            </div>
            <div class="">
              <input type="text" class="form-control newPostComment"  placeholder="Escribe un comentario">
              <button class="addComment submit-button-comments hover-yellow-bg">Comentar</button>
            </div>
          </div>
        </div>
      </div>
            `;

      // delete post
      const deletebutton = document.querySelectorAll('.js-delete');
      const deletePost = (e) => {
        console.log(e.target.id);
        db.collection('newPosts').doc(e.target.id).delete()
          .then(() => {
            console.log('Lo borraste, eres chido');
          })
          .catch((error) => {
            console.log('No pudiste, ponte chido', error);
          });
      };
      deletebutton.forEach(btn => btn.addEventListener('click', deletePost));

      // edit post
      const btnEdit = document.querySelectorAll('.js-edit');
      const actionEdit = (e) => {
        const modal = document.querySelector('#exampleModal');
        modal.classList.toggle('show'); // deberiamos rellenarlo con la data actual del doc
        modal.style = 'display:inherit;';
        const titleInput = document.querySelector('#recipientTitle');
        titleInput.value = e.target.getAttribute('data-title');
        const activityInput = document.querySelector('#recipientActivity');
        activityInput.value = e.target.getAttribute('data-activity');
        const locationInput = document.querySelector('#recipientLocation');
        locationInput.value = e.target.getAttribute('data-location');
        const descriptionInput = document.querySelector('#recipientDescription');
        descriptionInput.value = e.target.getAttribute('data-description');
        const id = e.target.id;

        const btnSaveEdit = document.querySelector('#savePost');
        btnSaveEdit.onclick = () => {
          const title = document.querySelector('#recipientTitle').value;
          const activity = document.querySelector('#recipientActivity').value;
          const location = document.querySelector('#recipientLocation').value;
          const description = document.querySelector('#recipientDescription').value;

          console.log(title);
          console.log(id);
          // return
          return db.collection('newPosts')
            .doc(id)
            .update({
              title,
              activity,
              location,
              description,
            })
            .then(() => {
              console.log('Document successfully written!');
              modal.style = 'display: none'; // esto no debemos solo quitar show y poner style none
              // REcolocar el listener del boton (click) con el callback original (publicar)
              btnEdit.innerHTML = 'Guardar';
              titleInput.value = '';
              activityInput.value = '';
              locationInput.value = '';
              descriptionInput.value = '';
              btnSaveEdit.addEventListener('click', savePost);
            })
            .catch((error) => {
              console.error('Error writing document: ', error);
            });
        };
        const closeModal = document.querySelector('#modalClose');
        const actionClose = () => {
          modal.style = 'display:none';
        };
        closeModal.addEventListener('click', actionClose);
      };
      btnEdit.forEach(actionUpdate => actionUpdate.addEventListener('click', actionEdit));

      // add comment

      const addComment = document.querySelectorAll('.addComment');
      const writeComment = (e) => {
        comment = document.querySelectorAll('.newPostComment').value;
        db.collection('newPosts').doc(e.target.id).collection('comments').add({
          comment,
        })
          .then(() => {
            console.log('Document successfully written!');
          })
          .catch((error) => {
            console.error('Error writing document: ', error);
          });
      };
      addComment.forEach(write => write.addEventListener('click', writeComment));
    });
  });
};

render();
