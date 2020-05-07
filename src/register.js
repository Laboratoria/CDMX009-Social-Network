const content = document.querySelector(".root");
const footer= document.querySelector("footer");


export function showRegisterWindow (){
  content.innerHTML='';
  const render= `
  <section>
  <div> Registrate </div>
  <form class= "form">
    <input class= "input" id= "signUpUser" type ="text" placeholder = "Nombre de usuario" required><br>
    <input class= "input" id= "signUpEmail" type= "email" placeholder = "Correo electrónico" required> <br>
    <input class= "input" id= "signUpPassword" type= "password" placeholder = "Nueva contraseña" required> <br>
    <input class= "btn" id= "signup" type= "submit" placeholder="ENVIAR">  
  </form>
  <button id="btnReturn">Regresar</button>
  </section>
  `;
  content.innerHTML= render;
  const renderFooter= `
  <div>
  <img src="images/logoLifestyle.png">
  </div>`
  footer.innerHTML= renderFooter;
  const data= document.querySelector(".form");
  getData(data);
}

function getData (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName= form['signUpUser'].value;
    const email= form['signUpEmail'].value;
    const password= form['signUpPassword'].value;
    console.log(userName, email, password);
    createNewUser(email, password, userName);
 })
}

function createNewUser(email, password, userName){
  const dataBase= firebase.firestore();
  firebase.auth().createUserWithEmailAndPassword(email, password).then ((function(result){
    console.log(result);
    let user = firebase.auth().currentUser;
      console.log(user);
    dataBase.collection("users").add({
      user: userName,
      id: user.uid,
      email: email,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}))
  .catch(function(error) {
        // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
        // ...
  });
}