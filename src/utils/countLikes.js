//* ***********************LIKES*********************************************
export const addLikes = (e) => {
  firebase
    .firestore()
    .collection('publications')
    .doc(e.target.name)
    .update({
      likes: firebase.firestore.FieldValue.increment(+1),
    });
};
