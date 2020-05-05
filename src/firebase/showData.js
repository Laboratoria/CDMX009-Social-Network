/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { database } from './login.js';

// const storage = firebase.storage();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    localStorage.setItem('uid', user.uid);
    localStorage.setItem('displayName', user.displayName);
    localStorage.setItem('photoURL', user.photoURL);
  } else {
    console.log('No user is signed in');
    localStorage.removeItem('uid');
    localStorage.removeItem('displayName');
    localStorage.removeItem('photoURL');
  }
});

const dateConverter = (timeStampFormat) => {
  const date = new Date(timeStampFormat * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (`${day}-${month}-${year} / ${hour}:${minute}`);
};

const deleteOption = (event) => {
  database.collection('posts').doc(event.target.id).delete()
    .then(() => {
      alert('Document successfully deleted!');
    })
    .catch((error) => {
      alert('Error removing document: ', error);
    });
};

const editPost = (event) => {
  const modalEdit = document.querySelector('#modalEdit');
  document.querySelector('#modalEdit').style.display = 'block';
  const closeBtn = document.querySelector('#closeBtn');
  closeBtn.addEventListener('click', () => {
    modalEdit.style.display = 'none';
  });
  document.querySelector('#editPostText').value = event.target.getAttribute('data-content');
  const btnEdit = document.querySelector('#submitEditPost');
  btnEdit.addEventListener('click', () => {
    const postsRef = database.collection('posts').doc(event.target.id);
    console.log(event.target.id);
    const newContent = document.querySelector('#newTextPost').value;
    console.log(newContent);
    return postsRef.update({
      postContent: newContent,
    })
      .then(() => {
        alert('Document successfully updated!');
        document.querySelector('#modalEdit').style.display = 'none';
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  });
};

export const createNewPost = (content) => {
  const currentUserData = firebase.auth().currentUser;
  database.collection('posts').add({
    postOwner: currentUserData.uid,
    postNameOwner: currentUserData.displayName,
    postPhotoOwner: currentUserData.photoURL,
    postContent: content,
    date: new Date(),
    likes: {},
  })
    .then(() => {
      alert('Tu post se ha guardado');
    });
};

export const postTemplate = (templateContainer) => {
  database.collection('posts').onSnapshot((querySnapshot) => {
    templateContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const timestampFormat = doc.data().date.seconds;
      const newDateFormat = dateConverter(timestampFormat);
      const userTemplate = `
        <div class="postContainer">
          <div class="post">
              <img src="${doc.data().postPhotoOwner}" alt="Profile" class="postAuthor">
              <div class="postContent">
                <span id="ownerName">${doc.data().postNameOwner}</span><br>
                <span id="contentMessage" class="content">${doc.data().postContent}</span><br>
                <span id="date">${newDateFormat}</span>
              </div>
          </div>
          <div class="postOptions">
              <div class="likes">00</div>
              <img src="images/corazon (1).svg" class="likes" alt="like">
          </div>
        </div>`;
      templateContainer.innerHTML += userTemplate;
    });
  });
};

// obtener post propios
export const currentUserPosts = (postContainer) => {
  postContainer.innerHTML = '';
  // const prueba = localStorage.getItem('uid');
  // console.log(prueba);
  const currentUserRef = database.collection('posts');
  const query = currentUserRef.where('postOwner', '==', localStorage.getItem('uid'));
  query.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const timestampFormat = doc.data().date.seconds;
        const newDateFormat = dateConverter(timestampFormat);
        const userTemplate = `
          <div class="postContainer">
            <div class="post">
                <img src="${doc.data().postPhotoOwner}" alt="Profile" class="postAuthor">
                <div class="postContent">
                  <span id="ownerName">${doc.data().postNameOwner}</span><br>
                  <span id="contentMessage" class="content">${doc.data().postContent}</span><br>
                  <span id="date">${newDateFormat}</span>
                </div>
            </div>
            <div class="postOptions">
                <div class="likes">00</div>
                <img src="images/corazon (1).svg" class="likes" alt="like">
                <img src="images/rectification.svg" class="edit likes" id="${doc.id}" alt="Editar" data-content="${doc.data().postContent}">
                <img src="images/borrar.svg" class="delete likes" id="${doc.id}" alt="Eliminar">
            </div>
          </div>`;
        postContainer.innerHTML += userTemplate;
        const DeleteBtns = postContainer.querySelectorAll('.delete');
        DeleteBtns.forEach(btn => btn.addEventListener('click', deleteOption));

        const btn = postContainer.querySelectorAll('.edit');
        btn.forEach(bt => bt.addEventListener('click', editPost));
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};
