import { renderFeed } from './index.js';

let authError;
const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage().ref();
const usersRef = firebase.database().ref().child('users');
const imageRef = firebase.database().ref().child('image'); // referencia para subir imágenes de perfil / Tiempo real
const imageRefPost = firebase.database().ref().child('post-image'); // referencia para subir imágenes de post
const refPost = firebase.database().ref().child('user-posts'); // referencia para subir los comment del usuario en su post

// iniciar sesión con correo y contraseña
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
  // iniciar sesión
  signIn: () => {
    const logEmail = document.getElementById('logEmail').value;
    const logPassword = document.getElementById('logPassword').value;
    firebase.auth().signInWithEmailAndPassword(logEmail, logPassword)
      .then((auth) => {
        if (!auth.user.uid) return;
      })
      .catch((error) => {
        authError = error;
        return authError;
      });
  },
  errorInfo: () => {
    const errorMsg = authError;
    return errorMsg;
  },
  // función para publicar la imagen de un usuario en el feed
  getPostFeed: () => {
    imageRefPost.on('value', (snapshot) => {
      const data = snapshot.val();
      let result = '';
      for (const key in data) {
        result += `<div>
                      <img width='500px' src='${data[key].url}'/>
                    </div>
                    <div id='postComment'>
                     <p></p>
                      </div>`;
        console.log(data[key].url);
      }
      document.getElementById('postFeed').innerHTML = result;
    });
  },

/*  getPostTest: () => {
    imageRefPost.on('value'),(snapshot) => {
      const data = snapshot.val();
      return data;
    }
  },
  getTextPostFeed: () => {
    refPost.on('value',(snapshot) => {
      const data = snapshot.val();
      let result ='';
      for (const key in data) {
        result += `<div> 
                       `
      }
    });
  }, */
  // observador para ver si hay un usuario logueado
  userObserver: () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('existe usuario activo');
        database.getPostFeed();
        renderFeed();
        console.log('*****************');
        console.log(user.emailVerified);
        console.log('*****************');
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
      } else {
        console.log('no existe usuario activo');
        // User is signed out.
        // ...
      }
    });
  },
  // iniciar sesión con Google
  signInGoogle: () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
      // ...
      });
  },
  // iniciar sesión con Facebook
  signInFacebook: () => {
    firebase.auth().signInWithPopup(provider1).then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  },
  // función para obtener de FireBase la imagen de perfil
  getProfilePic: () => {
    const uid = firebase.auth().currentUser.uid;
    return firebase.firestore().collection('image').doc(uid).get()
      .then(doc => doc.data());
  },
  // función para obtener de Firebase el nombre del usuario
  getProfileName: () => {
    const uid = firebase.auth().currentUser.uid;
    return firebase.firestore().collection('users').doc(uid).get()
      .then(doc => doc.data());
  },
  getPostPic: () => {
    imageRefPost.on('value', (snapshot) => {
      const data = snapshot.val();
      let result = '';
      // console.log(data);

      for (const key in data) {
        result = `<img src= ${data[key].url}/>`;
      //  console.log(data[key].url);
      }
      document.getElementById('showNewImg').innerHTML = result;
    });
  },

  // función para obtener el pie de foto del usuario para el post
  /* getPostMessage:()=>{

  }, */

  // función para subir imagen de perfil
  uploadPicture: (file) => {
    const uploadTask = storage.child(`profilePictures/${file.name}`).put(file);
    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        database.createNodeFirebase(file.name, downloadURL);
        database.getProfilePic();
      });
    });
  },
  // función para subir imgángenes de post
  uploadPicturePost: (file) => {
    const uploadImg = document.getElementById('uploadImg').files[0];
    const uploadTask = storage.child(`postImage/${uploadImg.name}`).put(uploadImg);
    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      // Handle unsuccessful uploads
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        // url = downloadURL;
        console.log('File available at', downloadURL);
        database.createNodeFirebaseForPost(uploadImg.name, downloadURL);
        database.getPostPic();
      });
    });
  },
  // creando nodo en Firebase para subir informarción de la foto de usuario
  createNodeFirebase: (nameImage, url) => {
    imageRef.push({ name: nameImage, url, uid: firebase.auth().currentUser.uid }); // tiempo real
    db.collection('image').doc(firebase.auth().currentUser.uid).set({
      name: nameImage,
      url,
      uid: firebase.auth().currentUser.uid,
    });
  },
  // creando nodo en Firebase para subir información de la foto de un usuario para usarla en el feed
  createNodeFirebaseForPost: (nameImage, url) => {
    const postMessage = document.getElementById('postMessage').value;
    imageRefPost.push({ name: nameImage, url, uid: firebase.auth().currentUser.uid, postTime: Date}); // tiempo real
    db.collection('post-image').add({
      name: nameImage,
      url,
      uid: firebase.auth().currentUser.uid,
      postTime: new Date(),
      comment: postMessage

    });
  },
  saveData: () => {
    const userName = document.getElementById('userName').value;
    const profileName = document.getElementById('profileName').value;
    const biography = document.getElementById('biography').value;
    usersRef.push({
      uid: firebase.auth().currentUser.uid, userName, profileName, biography,
    }); // tiempo real
    db.collection('users').doc(firebase.auth().currentUser.uid).set({
      uid: firebase.auth().currentUser.uid,
      userName,
      profileName,
      biography,
    });
  },
  // guardando información del post de un usuario en Firebase
  savePostData: () => {
    const postMessage = document.getElementById('postMessage').value;
    refPost.push({ uid: firebase.auth().currentUser.uid, comment: postMessage, postTime:firebase.firestore.Timestamp.fromDate(new Date())}); //pregunar en la O.H khe berga hacer co
    console.log(firebase.firestore.FieldValue.serverTimestamp()) // tiempo real
    db.collection('user-posts').add({
      uid: firebase.auth().currentUser.uid,
      comment: postMessage,
      postTime: new Date(),
    });
  },


  // cerrar sesión
  logout: () => {
    firebase.auth().signOut().then(() => {
      // this.user = null;
      console.log('Saliendo...');
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  },
};


database.userObserver();
export default database;
