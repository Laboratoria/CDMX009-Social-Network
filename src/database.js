const database = {
  signUp: () => {
    
    // console.log ('diste un clic')
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
  console.log (email);
  console.log (password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
if (errorCode == 'auth/weak-password') {
  alert('The password is too weak.');
} else {
  alert(errorMessage);
}
console.log(error);
});
  
  },

};

export default database;