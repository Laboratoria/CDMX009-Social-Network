import { renderFeed } from './index.js';

const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
// const storage = firebase.storage().ref('profilePicture/');
const storage = firebase.storage().ref();
const imageRef = firebase.database().ref().child("image"); //Tiempo real
const imageRefPost = firebase.database().ref().child("post-image");
// const imageRef = firebase.storage().ref();



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
    .then((auth) => {
      if (!auth.user.uid) return;

    })
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
        renderFeed();
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
  getProfilePic:()=>{
    let uid = firebase.auth().currentUser.uid
    return firebase.firestore().collection('image').doc(uid).get()
    .then(doc=>{
      return doc.data()
    })
  },
  getProfileName:()=>{
    let uid = firebase.auth().currentUser.uid
    return firebase.firestore().collection('users').doc(uid).get()
    .then(doc=>{
      return doc.data()
    })
  },
  getPostPic:()=>{
    let uid = firebase.auth().currentUser.uid
    return firebase.firestore().collection('post-image').doc(uid).get()
    .then(doc=>{
      return doc.data()
    })
  },
  
  
  // getPostPic:() =>{
  //   imageRefPost.on("value", function(snapshot){
  //     let data = snapshot.val();
  //     let result = "";
  //     // console.log(data);
  //     for (var key in data){
  
  //       result += '<img src="' + data[key].url + '"/>'; 
  //     }
  //     document.getElementById("postI").innerHTML = result;
  //   });
  // },  
  uploadPicture: (file) => {
    let uploadTask = storage.child('profilePictures/' + file.name).put(file);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        database.createNodeFirebase(file.name, downloadURL);
        database.getProfilePic();
      });
    });

  },  
  uploadPicturePost: (file) => {
    let uploadTask = storage.child('postImage/' + file.name).put(file);
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        database.createNodeFirebaseForPost(file.name, downloadURL);
        database.getPostPic();
      });
    });

  }, 
  createNodeFirebase: (nameImage, url) => {
    imageRef.push({name: nameImage, url: url }) //tiempo real
    db.collection("image").doc(firebase.auth().currentUser.uid).set({ 
      name: nameImage, 
      url: url,
      uid: firebase.auth().currentUser.uid
    });
  },
  createNodeFirebaseForPost: (nameImage, url) => {
    imageRefPost.push({name: nameImage, url: url }) //tiempo real
    db.collection("post-image").add({ 
      name: nameImage, 
      url: url,
      uid: firebase.auth().currentUser.uid
    });
  },
  
  
    saveData: () => {
      const userName = document.getElementById('userName').value;
      const profileName = document.getElementById('profileName').value; 
      const biography = document.getElementById('biography').value;
      db.collection("users").doc(firebase.auth().currentUser.uid).set({ 
        uid: firebase.auth().currentUser.uid,
        userName: userName,
        profileName: profileName,
        biography: biography
      });/*
      .then(function(docRef){
        document.getElementById('userName').value = '';
        console.log("Document ID ", docRef.id);
      })
      .catch(function(error){
        console.error("Error adding document: ", error);
      })*/
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