export default {
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      });
  },
  email: (email, password) => {
    const emailAuth = firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(emailAuth);
  },
  facebook: () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      });
  },
};
