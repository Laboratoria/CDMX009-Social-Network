export default () => {
    /* const viewHome = `
    <div class="container">
      <div class="categories-btn">
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/food.svg">
            </a>
          </div>
          <p>Comida</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/drug.svg">
            </a>
          </div>
          <p>Salud</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/dog.svg">
            </a>
          </div>
          <p>Mascotas</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/home-run.svg">
            </a>
          </div>
          <p>En casa</p>
        </div>
      </div>
      <div class="filters">
        <div class="search-input-container">
          <input class="search-input" type="search" name="search" placeholder="Buscar"/>
          <i class="fas fa-search"></i>
        </div>
        <div class="filters-icon">
          <a><i class="fas fa-filter"></i></a>
        </div>
      </div>
    </div>

    `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
}
 */

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
let savePost = document.querySelector('#savePost');

document.querySelector('#title').addEventListener('keyup',function(){
  let nameInput = document.querySelector('#title').value;
    if (nameInput != ''){
      document.querySelector('#savePost').removeAttribute('disabled');
    }
}
)


//Add users
savePost.onclick = () => {
  let title = document.querySelector('#title').value;
  let activity = document.querySelector('#activity').value;
  let location = document.querySelector('#location').value;
  let description = document.querySelector('#description').value;

    db.collection("post").add({
      titulo: title,
      actividad: activity,
      ubicacion: location,
      descripcion: description
    })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.querySelector('#title').value = '';
        document.querySelector('#activity').value = '';
        document.querySelector('#location').value = '';
        document.querySelector('#description').value = '';
        })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
}


//Leer documentos
let postPrint = document.querySelector('#newPost');
  db.collection("post")
    .onSnapshot((querySnapshot) => {
      
      postPrint.innerHTML = '';
      querySnapshot.forEach((doc) => {
/*         console.log(`${doc.id} => ${doc.data().title}`); */
          postPrint.innerHTML += `              
          <tr>
          <td>${doc.data().titulo}</td>
          <td>${doc.data().actividad}</td>
          <td>${doc.data().ubicacion}</td>
          <td>${doc.data().descripcion}</td>
          <td><button class="btn btn-danger" onclick="deleteUser('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-warning" onclick="editUser('${doc.id}', '${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
          </tr>
          `
  });
});
/* 
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


 */
}