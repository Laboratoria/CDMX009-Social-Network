/* eslint-disable no-param-reassign */
import { database } from './login.js';

export const userAccess = (username, photo) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userId = firebase.auth().currentUser.uid;
      database.collection('users').where('id', '==', userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            username.textContent = doc.data().name;
            photo.src = doc.data().photo;
            // console.log(`${doc.id} => ${doc.data().email}`);
          });
        });
      // console.log(user);
    } else {
      console.log('No user is signed in');
    }
  });
};

const dateConverter = (timeStampFormat) => {
  const date = new Date(timeStampFormat * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (`${day}-${month}-${year} / ${hour}:${minute}`);
};

const postTemplate = (templateContainer) => {
  database.collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
      const timestampFormat = doc.data().date.seconds;
      const newDateFormat = dateConverter(timestampFormat);
      const userTemplate = `
        <hr>
        <div class="postContainer">
          <div class="post">
              <img src="${doc.data().postPhotoOwner}" alt="Profile" class="postAuthor">
              <div class="postContent">
                <span id="ownerName">${doc.data().postNameOwner}</span><br>
                <span id="contentMessage">${doc.data().postContent}</span><br>
                <span id="date">${newDateFormat}</span>
              </div>
          </div>
          <div class="postOptions">
              <div class="likesCounter" class="likes">00</div>
              <img src="images/corazon (1).svg" class="likes" alt="like">
          </div>
        </div>`;
      templateContainer.innerHTML += userTemplate;
    });
  });
};

export const createNewPost = (content, container) => {
  const currentUser = firebase.auth().currentUser;
  database.collection('posts').add({
    postOwner: currentUser.uid,
    postNameOwner: currentUser.displayName,
    postPhotoOwner: currentUser.photoURL,
    postContent: content,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    likes: {},
  })
    .then(() => {
      postTemplate(container);
    });
};
