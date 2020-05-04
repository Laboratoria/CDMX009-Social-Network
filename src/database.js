/* eslint-disable */
let authError;
let feedData;

const database = {
  signUp: (regEmail, regPassword, firebasePipo = null) => {
    console.log(regEmail);
    console.log(regPassword);
    (firebasePipo ? firebasePipo : firebase).auth().createUserWithEmailAndPassword(regEmail, regPassword)
      .catch((error) => {
        authError = error;
        return authError;
      });
  },
  signIn: (logEmail, logPassword, firebasePipo = null) => {
    (firebasePipo ? firebasePipo : firebase).auth().signInWithEmailAndPassword(logEmail, logPassword)
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
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        throw error('¡Error!');
      });
  },
  signInFacebook: () => {
    const providerFb = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(providerFb).then((result) => {      
      const token = result.credential.accessToken;
      console.log(token);
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      throw error('¡Error!');
    });
  },
  getFeedData: async (renderFunction) => {
    const imageRefPost = firebase.database().ref().child('post-image');
    imageRefPost.on('value', async (snapshot) => {
      feedData = snapshot.val();
      Object.keys(feedData).reverse().forEach((key) => {
        const timeStamp = feedData[key].postTime;
        const normalDate = new Date(timeStamp);
        const dateFormat = normalDate.toLocaleString();
        const userId = feedData[key].uid;
        const picURL = feedData[key].url;
        const picCaption = feedData[key].comment;
        let userName = 'default';
        let photoUser = '';
        const usersRef = firebase.database().ref('users');
        usersRef.child(userId).once('value', async (snapshots) => {
          userName = snapshots.val();
          const imageUser = firebase.database().ref('image');
            await imageUser.child(userId).once('value', (snap) => {
            photoUser = snap.val();
          });
          renderFunction(photoUser, userName, picURL, picCaption, dateFormat);
        });
      });
    });
  },
  userObserver: (home) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('existe usuario activo');
        await home();
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
    const imageRefPost = firebase.database().ref().child('post-image');
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
    const storage = firebase.storage().ref();
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
        default:
      }
    }, (error) => {
      console.error(error);
    },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          database.createNodeFirebase(file.name, downloadURL);
          database.getProfilePic();
        });
      });
  },
  uploadPicturePost: (file) => {
    const storage = firebase.storage().ref();
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
        default:
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
    const db = firebase.firestore();
    const userPhotoProf = { name: nameImage, url, uid: firebase.auth().currentUser.uid };
    console.log(userPhotoProf);
    firebase.database().ref(`image/${userPhotoProf.uid}`).set(userPhotoProf);
    db.collection('image').doc(firebase.auth().currentUser.uid).set({
      name: nameImage,
      url,
      uid: firebase.auth().currentUser.uid,
    });
  },
  createNodeFirebaseForPost: (nameImage, url) => {
    const db = firebase.firestore();
    const postMessage = document.getElementById('postMessage').value;
    const userImgePost = {
      name: nameImage, url, uid: firebase.auth().currentUser.uid, postTime: firebase.database.ServerValue.TIMESTAMP, comment: postMessage,
    };
    firebase.database().ref('post-image')
      .push(userImgePost);
    // console.log(userImgePost.key)
    db.collection('post-image').add({
      name: nameImage,
      url,
      uid: firebase.auth().currentUser.uid,
      postTime: new Date(),
      comment: postMessage,
    });
  },
  saveData: (user) => {
    const db = firebase.firestore();
    const userName = document.getElementById('userName').value;
    const profileName = document.getElementById('profileName').value;
    const biography = document.getElementById('biography').value;
    const userInfo = {
      userName, profileName, biography, uid: firebase.auth().currentUser.uid,
    };
    firebase.database().ref(`users/${userInfo.uid}`).set(userInfo);
    db.collection('users').doc(firebase.auth().currentUser.uid).set({
      uid: firebase.auth().currentUser.uid,
      userName,
      profileName,
      biography,
    });
  },
  deletePost: (key) => {
    let postDelet = firebase.database().ref('post-image/'+ key)
    postDelet.remove();
    
    // const db = firebase.firestore();
    // db.collection("post-image").doc(key).delete().then(function () {
    //   console.log(key);
    // }).catch(function (error) {
    //   console.error("Error removing document: ", error);
    // });
  },
  logout: () => {
    firebase.auth().signOut().then(() => {
      console.log('Saliendo...');
    }).catch((error) => {
      console.log(error);
    });
  },
};
export default database;