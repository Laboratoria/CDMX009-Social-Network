import { userSigned } from '../index.js';
export let addLikes = (e) => {
  let idPost;
  idPost = e.target.name;
  const docRef = firebase.firestore().collection('publications').doc(idPost);
  docRef.get().then((doc) => {
    if (doc.exists) {
      const arrayLikes = doc.data();
      console.log(arrayLikes);

      if (arrayLikes.addLikes.includes(userSigned.uid)) {
        console.log('you already add a like');
        firebase
          .firestore()
          .collection('publications')
          .doc(idPost)
          .update({
            likes: firebase.firestore.FieldValue.increment(-1),
            addLikes: firebase.firestore.FieldValue.arrayRemove(userSigned.uid),
          });
      } else {
        console.log('this is your first like');
        firebase
          .firestore()
          .collection('publications')
          .doc(idPost)
          .update({
            likes: firebase.firestore.FieldValue.increment(+1),
            addLikes: firebase.firestore.FieldValue.arrayUnion(userSigned.uid),
          });
      }
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
  });
};
