const closeSesion = () =>{
  firebase.auth().signOut().then(function(){
    console.log('Cerrando sesión');

  }).catch(function(error){
    console.log(error);
  })
}

let db= firebase.firestore();
let userBD;

export const renderContent = () => {
  let currentUser = firebase.auth().currentUser;
  if (currentUser != null) {
      let uid = currentUser.uid;  
      let userRef = db.collection('users');
      userRef.where('uid', '==', uid).get()
      .then(snapshot => {
          if (snapshot.empty) {
          console.log('No matching documents.');
          return;
          }

          snapshot.forEach(doc => {
            userBD = doc.data()
                let main = document.querySelector('#main');
                let profilView = `
                <header>
                  <div class="divisor">
                    <div class="positionone">
                      <img class="logo" src="images/logo.png" alt="TripLife">
                    </div>
                    <div class="positiontwo">
                      Menu
                    </div>
                    </div>
                </header>
                <section class="">
                  <figure id="list">
                    <img id="photoUser" class="positionone" src="${doc.data().photo}" alt="">
                  </figure></br>
                  <input id="profileImage" type="file" disabled name="avatar" accept="image/png, image/jpeg">
                  <input type="text" id="nameUser" disabled  class="nameUser" placeholder="" value="${doc.data().name}">
                  <input type="text" id="description" disabled class="description" placeholder="Add description" value="${doc.data().description}">
                  <input type="button" id="btnEditar" class="btn" value="Editar">
                  <input type="button" id="logout" class="btn" value="Log out">
                </section>
                </div>`
                main.innerHTML = profilView;

                let btnEdit = document.querySelector("#btnEditar");
                let logout = document.querySelector("#logout");
                let profileImage = document.querySelector("#profileImage");
                let imageUrl='';

                btnEdit.addEventListener("click",edit,false);
                logout.addEventListener("click", closeSesion);
                
                profileImage.addEventListener("change", e => {
                  if (profileImage.files.length != 0) {
                    var reader = new FileReader();
          
                    reader.onload = (function(theFile) {
                        return function(e) {
                          document.getElementById("list").innerHTML = ['<img class="positionone" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
                        };
                    })(profileImage.files[0]);
                    reader.readAsDataURL(profileImage.files[0]);
                    }
                });
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }   
}

function edit(){
  document.getElementById('description').disabled = false;
  document.getElementById('nameUser').disabled = false;
  document.getElementById('profileImage').disabled = false;
   
  let btnSave = document.getElementById("btnEditar");
  btnSave.value = 'Guardar';

  btnSave.addEventListener("click",updateChange,false);
}

function storageChange(nameUser, description, image){

  let userCurrent = firebase.auth().currentUser;  
  let userRef = db.collection("users").doc(userCurrent.uid);

  userRef.update({
    "photo": image,
    "name": nameUser,
    "description": description  
  }).then(function() {
      alert("Registro actualizado exitosamente");

      document.getElementById('description').disabled = true;
      document.getElementById('nameUser').disabled = true;
      document.getElementById('profileImage').disabled = true;

      let btnEditar = document.getElementById("btnEditar");
      btnEditar.value = 'Editar';
   
      btnEditar.addEventListener("click",edit,false);
  }).catch(function(error) {
      console.error("Error updating document: ", error);
  });

}

function updateChange() {
  let name = document.getElementById('nameUser').value;
  let description = document.getElementById('description').value;
  let profileImage = document.querySelector("#profileImage");
  
  let img = profileImage.files[0];
  let date = new Date();
  let idImg = date.getTime();
  let imageUrl = null;
  
  if(img) {
    let token = idImg+'_'+img.name; 
    console.log("Subiendo img");  
    firebase.storage().ref("images").child(token).put(img)
      .then(snap => {
        return snap.ref.getDownloadURL();
      })
      .then(link => {
        imageUrl = link;
        storageChange(name, description, imageUrl);
    })
    .catch((error)=> {
      console.log("Error al guardar imagen: " + error);
    });
  } else{
    storageChange(name, description, userBD.photo);
  }
} 





