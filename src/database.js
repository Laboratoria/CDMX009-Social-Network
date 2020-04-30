import { renderFeed } from './index.js';

let authError;
const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage().ref();
const usersRef = firebase.database().ref('users');
const imageRefPost = firebase.database().ref().child('post-image');  

const database = {
  signUp: () => {
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
      .catch((error) => {
        authError = error;
        return authError;
      });
  },
  signIn: () => {
    const logEmail = document.getElementById('logEmail').value;
    const logPassword = document.getElementById('logPassword').value;
    firebase.auth().signInWithEmailAndPassword(logEmail, logPassword)
      .catch((error) => {
        authError = error;
        return authError;
      });
  },
  errorInfo: () => {
    const errorMsg = authError;
    return errorMsg;
  },
  signInGoogle: () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  },
  signInFacebook: () => {
    firebase.auth().signInWithPopup(provider1).then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  },
  getPostFeed: async() => { 
     imageRefPost.on('value', async (snapshot) => {
      const data = snapshot.val();
      let result = '';         
      for (const key in data) {
        let timeStamp = data[key].postTime;     
        let normalDate = new Date(timeStamp);       
        let dateFormat = normalDate.toLocaleString();
        let userId = data[key].uid;
        let userName = 'default';
        await usersRef.child(userId).once('value',(snapshot) => { 
            userName = snapshot.val();
            console.log(userId);
        result += `
        <div class="file is-centered image is-square">
            <img src='${data[key].url}'/>
        </div>
          <p>${userName.userName}</p>
          <img> </img>
        <div>
          <p>${data[key].comment}</p>
          <p>${dateFormat}</p>
        </div>
        `;  
        document.getElementById('postFeed').innerHTML = result;             
        })
             }
    });
  },
  userObserver: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('existe usuario activo');
        renderFeed();
        console.log('*****************');
        console.log(user.emailVerified);
        console.log('*****************');
      } else {
        console.log('no existe usuario activo');
      }
    });
  },
  getProfilePic: () => {
    const uid = firebase.auth().currentUser.uid;
    return firebase.firestore().collection('image').doc(uid).get()
      .then(doc => doc.data());
  },
  getProfileName: () => {
    const uid = firebase.auth().currentUser.uid;
    return firebase.firestore().collection('users').doc(uid).get()
      .then(doc => doc.data());
  },
  getPostPic: () => {
      imageRefPost.on('value', (snapshot) => {
      const data = snapshot.val();
      let result = '';
        for (const key in data) {
          result = `<img width='500px' src= ${data[key].url}/>`;
      }
      document.getElementById('showNewImg').innerHTML = result;
    });
  },
  uploadPicture: (file) => {
    const uploadTask = storage.child(`profilePictures/${file.name}`).put(file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: 
          console.log('Upload is running');
          break;
      }
    }, (error) => {
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        database.createNodeFirebase(file.name, downloadURL);
        database.getProfilePic();
      });
    });
  },
  uploadPicturePost: (file) => {
    const uploadImg = document.getElementById('uploadImg').files[0];
    const uploadTask = storage.child(`postImage/${uploadImg.name}`).put(uploadImg);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
      }
    }, (error) => {
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        database.createNodeFirebaseForPost(uploadImg.name, downloadURL);
        database.getPostPic();
      });
    });
  },
  createNodeFirebase: (nameImage, url) => {
      let userPhotoProf={name: nameImage, url: url, uid: firebase.auth().currentUser.uid}
       firebase.database().ref("image/"+ userPhotoProf.uid).set(userPhotoProf)
       
      db.collection('image').doc(firebase.auth().currentUser.uid).set({
      name: nameImage,
      url,
      uid: firebase.auth().currentUser.uid,
    });
  },
  createNodeFirebaseForPost: (nameImage, url) => {  
    const postMessage = document.getElementById('postMessage').value;
    let userImgePost={name: nameImage, url: url, uid: firebase.auth().currentUser.uid, postTime: firebase.database.ServerValue.TIMESTAMP, comment: postMessage}
     firebase.database().ref("post-image")
     .push(userImgePost)

      db.collection('post-image').add({
      name: nameImage,
      url: url,
      uid: firebase.auth().currentUser.uid,
      postTime: new Date(),
      comment: postMessage
    });
  },
  saveData: (user) =>{
    const userName = document.getElementById('userName').value;
    const profileName = document.getElementById('profileName').value;
    const biography = document.getElementById('biography').value;
    let userInfo={userName: userName, profileName: profileName, biography: biography, uid: firebase.auth().currentUser.uid}
    firebase.database().ref("users/"+ userInfo.uid).set(userInfo)
     db.collection('users').doc(firebase.auth().currentUser.uid).set({
      uid: firebase.auth().currentUser.uid,
      userName,
      profileName,
      biography,
    });
  },
  logout: () => {
    firebase.auth().signOut().then(() => {
      console.log('Saliendo...');
    }).catch((error) => {
      console.log(error);
    });
  },
  
};


database.userObserver();
export default database;
