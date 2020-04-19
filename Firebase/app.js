// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCXJUa40V6GQpvowuLcpu0V__jDl4T3ojM",
  authDomain: "proyectousuarios-5817f.firebaseapp.com",
  databaseURL: "https://proyectousuarios-5817f.firebaseio.com",
  projectId: "proyectousuarios-5817f",
  storageBucket: "proyectousuarios-5817f.appspot.com",
  messagingSenderId: "246526756852",
  appId: "1:246526756852:web:18331b1b23c6f2b6899ba1",
  measurementId: "G-T2M7BZBHRH",
});

//Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

//nodos
let saveUser = document.querySelector('#saveUser');

document.querySelector('#name').addEventListener('keyup',function(){
  let nameInput = document.querySelector('#name').value;
    if (nameInput != ''){
      document.querySelector('#saveUser').removeAttribute('disabled');
    }
}
)


//Add users
saveUser.onclick = () => {
  let name = document.querySelector('#name').value;
  let lastName = document.querySelector('#lastName').value;
  let date = document.querySelector('#date').value;

    db.collection("users").add({
      first: name,
      last: lastName,
      born: date
    })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#date').value = '';
        })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
}


//Leer documentos
let table = document.querySelector('#table');
  db.collection("users")
    .onSnapshot((querySnapshot) => {
      
      table.innerHTML = '';
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
          table.innerHTML += `              
          <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().first}</td>
          <td>${doc.data().last}</td>
          <td>${doc.data().born}</td>
          <td><button class="btn btn-danger" onclick="deleteUser('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-warning" onclick="editUser('${doc.id}', '${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
          </tr>
          `
  });
});

//borrar documentos
function deleteUser(idUser){
  db.collection("users").doc(idUser).delete()
    .then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

//editar documentos
function editUser(idUser, name, lastName, date){
  document.querySelector('#name').value = name;
  document.querySelector('#lastName').value = lastName;
  document.querySelector('#date').value = date;

  let saveChangesUser = document.querySelector('#saveUser');
  saveChangesUser.innerHTML = 'Editar';

  saveChangesUser.onclick = () => {
    var user = db.collection("users").doc(idUser);

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let date = document.querySelector('#date').value;

      return user.update({
        first: name,
        last: lastName,
        born: date
      })
      .then(function() {
        console.log("Document successfully updated!");
        saveChangesUser.innerHTML = 'Guardar';
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#date').value = '';
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

}


