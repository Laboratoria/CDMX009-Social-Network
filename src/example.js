export const example = () => {
    // aquí tu código
}
// Your web app's Firebase configuration
export const firebaseConfig = {
 apiKey: "AIzaSyA1p8FeSsOXzP-VWvdJBRfvpnN1uix9e74",
 authDomain: "social-58419.firebaseapp.com",
 databaseURL: "https://social-58419.firebaseio.com",
 projectId: "social-58419",
 storageBucket: "social-58419.appspot.com",
 messagingSenderId: "15996157976",
 appId: "1:15996157976:web:0793e1a4a6a0860359036d",
 measurementId: "G-1FXE1SSQXJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const Send = () => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
  }).then(function(){
    alert("Usuario Registrado"); 
  }); 
}