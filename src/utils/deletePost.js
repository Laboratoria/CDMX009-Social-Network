//* *******************delete comments****************************************
export const actionDelete = (e) => {
  firebase.firestore().collection('publications').doc(e.target.id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
