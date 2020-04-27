// LOGIN CON EMAIL Y PWD

export function emailLogin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-email"){
          alert("Email inválido")
        } if (errorCode === "auth/user-disabled"){
          alert("Usuario deshabilitado")
        } if (errorCode === "auth/user-not-found"){
          alert("Usuario no encontrado")
        } if (errorCode === "auth/wrong-password"){
          alert("Contraseña incorrecta")
        }
        console.log(`${errorCode} ${errorMessage}`)
        // ...
      });
  }
  
  export function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
  }
  
  // CREAR CUENTA MAIL Y PWD
  export function createAccount(mail, pwd) {
    firebase.auth().createUserWithEmailAndPassword(mail, pwd).then(function(){
      window.socialNetwork.verification();
    }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use"){
          alert("Correo en uso")
        } if (errorCode === "auth/invalid-email"){
          alert("Email inválido")
        } if (errorCode === "auth/weak-password"){
          alert("Contraseña tiene que tener más de 6 caracteres")
        }
        console.log(`${errorCode} ${errorMessage}`)
      });
  }