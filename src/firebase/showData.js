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
            console.log(`${doc.id} => ${doc.data().email}`);
          });
        });
      console.log(user);
    } else {
      console.log('No user is signed in');
    }
  });
};

export const createNewPost = (content) => {
  database.collection('posts').add({
    postContent: content,
    date: new Date(),
  })
    .then((docRef) => {
      console.log(docRef);
    });
};

export const postTemplate = () => {
  const docRef = database.collection('posts');
  docRef.get()
    .then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
};
