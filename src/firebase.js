//Login Google
function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
    });
}

//Login whit user and password

function createEmailPass(email, password, names) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: names,
      });
    })
    .catch((error) => {
      console.error(error);
      alert("ERROR");
    });
}

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const names = document.getElementById("names").value;

  createEmailPass(email, password, names);
}

export { loginGoogle, createEmailPass, registerUser };
