export const addComent = (text) => 
firebase.firestore().collection('comments').add ({
    commit: text
})

export const getComments = (callback) =>
  firebase.firestore().collection('comments')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 