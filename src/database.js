import { renderFirstProfile } from './index.js';

const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage().ref('profilePicture/');




const database = {
  signUp: () => { 
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        });
  },
  signIn: () => {
    let logEmail = document.getElementById('logEmail').value;
    let logPassword = document.getElementById('logPassword').value;
    firebase.auth().signInWithEmailAndPassword(logEmail, logPassword)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  },  
  userObserver: () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('existe usuario activo');
        renderFirstProfile();
        console.log('*****************');
        console.log(user.emailVerified);
        console.log('*****************');
        // userShow();
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
      } else {
        console.log('no existe usuario activo');
        // User is signed out.
        // ...
      }
    });
  },
  
  signInGoogle: () => {
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
      }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  },
  signInFacebook: () => {
    firebase.auth().signInWithPopup(provider1).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  },
  uploadPicture: () => {
    let image = document.getElementById('profilePicture').files[0];
    //let imageName = image.name;
    let uploadTask = storage.put(image);
    uploadTask.on('stage_changed',function (snapshot) {
      let progress = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
      console.log("upload is " + progress +" done");
    }).catch(function(error) {
      console.log(error.message)
    });
  },
    saveData: () => {
      const userName = document.getElementById('userName').value;
      const profilePicture = document.getElementById('profilePicture').value;
      db.collection("users").add({ 
        first: userName,     
      //  
        // photo: profilePicture,
      
      })
      .then(function(docRef){
        document.getElementById('userName').value = '';
        console.log("Document ID ", docRef.id);
      })
      .catch(function(error){
        console.error("Error adding document: ", error);
      })
    },
    logout: () => {
      firebase.auth().signOut().then(function() {
        // this.user = null;
        console.log('Saliendo...')
        // Sign-out successful.
      }).catch(function(error) {
        console.log(error)
        // An error happened.
      });
    }
};


database.userObserver();
export default database;