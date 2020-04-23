
var firebaseConfig = {
    apiKey: "AIzaSyBqImEvm_hfsvsj2vN8KWBn6Ewr2zFb9CQ",
    authDomain: "social-network-d33e4.firebaseapp.com",
    databaseURL: "https://social-network-d33e4.firebaseio.com",
    projectId: "social-network-d33e4",
    storageBucket: "social-network-d33e4.appspot.com",
    messagingSenderId: "957477248623",
    appId: "1:957477248623:web:77fed7501ea9a56198b79a",
    measurementId: "G-M3SME61YJ3"
  };
  firebase.initializeApp(firebaseConfig);



 
//storage
// Only authenticated users can read or write to the bucket
/* service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
} */<script type="text" src="newPost.js"></script>