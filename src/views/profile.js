import { root } from "../main.js";
//import { userObserver } from '/index.js'

const db = firebase.firestore();

export function userObserverProfile() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const docRef = db.collection('datausers/').doc(user.uid);
      docRef.get().then(function (snapshot) {
        let myData = snapshot.data();
        console.log(myData);
        root.innerHTML = renderProfileView(myData)
        edit()

      })
    } else {
      // No user is signed in.
      console.log('No user');
    }

  });

}

export function renderProfileView(myData) {
  //console.log(myData);
  if (myData) {
    const profile =
      `
      <button class = "button is-rounded btnIcon" id="editProfile" ><span class="icon is-small"><i class="fas fa-pencil-alt"></i></span></button>
      <h1>Mi perfil</h1>
      <img src="${myData.photo}" id="photoProfile">
      <input class = "ocultEditProfile" type="file" accept="image/*" id="file">
    <h1 id="nameProfile">${myData.name}</h1>
    <h1 id="emailProfile">${myData.email}</h1>
    <div id="interest"></div>
    <textarea class = "ocultEditProfile" id="interestsProfile" maxlength="200">Intereses</textarea>
    
    
    <button class = "button is-rounded btnIcon ocultEditProfile" id="saveProfile" >Guardar</button>
    <button class = "button is-rounded btnIcon ocultEditProfile" id="cancelEdit">Cancelar</button>

    <div class="modal" id="saveChange">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class = "containerPop">
            <button class="modal-close is-large" aria-label="close"  id="btnCloseChange"></button>
            <a href = "#" id="dataComplete" class = "imagePop"><i class="far fa-grin"></i></i></a>
            <p>Se han guardado tus cambios </p>
        </div>
    </div>
</div>
`
    return profile
  }

}



function edit() {
  //Listeners modal
  const btnCloseChange = document.querySelector('#btnCloseChange');
  btnCloseChange.addEventListener('click', closeChange);
  const saveChange = document.querySelector('#saveChange');
  function closeChange() {
    saveChange.classList.remove('is-active');
  }

  //Listeners Editar Perfil
  let btnEditProfile = document.querySelector('#editProfile')
  let btnSaveProfile = document.querySelector('#saveProfile')
  btnEditProfile.addEventListener('click', editProfile)
  btnSaveProfile.addEventListener('click', saveProfile)
  //console.log(userObserver)


  function editProfile() {
    let nameProfile = document.querySelector('#nameProfile').contentEditable = 'true'
    let emailProfile = document.querySelector('#emailProfile').contentEditable = 'true'
    let photoProfile = document.querySelector('#photoProfile').contentEditable = 'true'

    //console.log(text.innerHTML)
    btnSaveProfile.classList.add('active');
    interestsProfile.classList.add('active');


  }

  function saveProfile() {
    let divInterest = document.querySelector('#interest')
    let nameProfile = document.querySelector('#nameProfile')
    let emailProfile = document.querySelector('#emailProfile')
    let photoProfile = document.querySelector('#photoProfile')
    let textareaInterest = document.querySelector('#interestsProfile')
    let interestsProfile = textareaInterest.value
    divInterest.innerHTML = interestsProfile

    //console.log(nameProfile.innerHTML)
    //console.log(emailProfile.innerHTML)
    let newNameProfile = nameProfile.innerHTML
    let newEmailProfile = emailProfile.innerHTML

    btnSaveProfile.classList.remove('active');
    textareaInterest.classList.remove('active');
    if (btnSaveProfile.classList != 'active') {
      nameProfile.contentEditable = 'false'
      emailProfile.contentEditable = 'false'
    }

    saveProfileBD(newNameProfile, newEmailProfile, interestsProfile)

  }
  /*  function profileUpdate(newNameProfile, newEmailProfile) {
     
     console.log(user);
 
     user.updateProfile({
       displayName: newNameProfile,
       //photoURL: photoProfile,
       email: newEmailProfile
       
     }).then(function () {
       console.log('los dtos se actualizaron');
       saveProfileBD(user)
 
       // Update successful.
     }).catch(function (error) {
       // An error happened.
       console.log(error);
 
     });
   } */
  function saveProfileBD(newNameProfile, newEmailProfile, interestsProfile) {
    var user = firebase.auth().currentUser;
    const docRef = db.collection('datausers/').doc(user.uid);//la / y el + user.uid hace que no se duplique el usuario
    docRef.set({
      name: newNameProfile,
      email: newEmailProfile,
      interests: interestsProfile,
      //password: newPassword,
      uid: user.uid
    })
      .then(function () {
        saveChange.classList.add('is-active');
        console.log('Los datos se guardaron');
      })
      .catch(function (error) {
        console.log('Hubo en error:', error);
      })
  }


}
