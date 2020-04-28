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
    <section class="section">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
           <div class="profile">
                <div class= 'changeImage'>
                    <figure class='image container is-128x128'>
                         <img src="${myData.photo}"id="photoProfile" class="is-rounded">
                         <input class = "ocultEditProfile" type="file" accept="image/*" id="file">
                    </figure>
                <div id='photoProfile'></div>
                <input class = "ocultEditProfile" type="file" accept="image/*" id="file">
               </div>
               <div class="info-profile">
                    <h1 class="title has-text-centered has-text-grey-lighter title is-5" id="nameProfile">
                         ${myData.name}
                    </h1>
                    <h2 class="title has-text-centered has-text-grey-lighter title is-6" id="emailProfile">
                         ${myData.email}
                    </h2>
                    <div id="interest"></div>
                         
                         <textarea class="textarea is-primary ocultEditProfile subtitle is-6" rows="1" placeholder="***Bio*** / ¿De qué forma participarás? ¿Eres escritor?, ¿Ilustrador? o Ambos"  id="interestsProfile" maxlength="200">*****Bio*****</textarea>
                    </div>
               </div>
               
               
               <div class="centerItem">
                <div>
                  <button class = "button is-rounded 
                  btnIcon" id="editProfile" ><span class="icon is-small"><i class="fas fa-pencil-alt"></i></span></button>
                </div>
                <div>
                  <p>Editar</p>
                </div>
                </div>
                <div class="centerItem">
                    <i class= "icons fas fa-camera-retro icon is-medium has-text-light ocultEditProfile id="saveProfile"></i>
                    <i class="icons far fa-save icon is-medium has-text-light ocultEditProfile id="editPhoto"></i>
               </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
    let file = document.querySelector('#file')
    let nameProfile = document.querySelector('#nameProfile').contentEditable = 'true'
    let emailProfile = document.querySelector('#emailProfile').contentEditable = 'false'
    let prevImage = document.querySelector('#changeImage')
    let photoProfile = document.querySelector('#photoProfile')
    readFile(file, photoProfile, prevImage)

    //console.log(text.innerHTML)
    btnSaveProfile.classList.add('active');
    interestsProfile.classList.add('active');
    file.classList.add('active')
    btnEditProfile.classList.add('ocultEditProfile')
  }

  let url
  function readFile(file, photoProfile, prevImage) {


    //const fileInput = document.querySelector("#file")
    file.onchange = (e) => {
      console.log(e);
      let file = e.target.files[0]
      console.log(file);
      firebase.storage().ref("photoUsers").child(file.name).put(file)
        .then(snap => {
          console.log(snap);
          return snap.ref.getDownloadURL()

        })
        .then(link => {
          prevImage.remove()
          url = link
          console.log(url);
          const img = document.createElement('img')
          img.src = url
          photoProfile.appendChild(img)
        })
        .catch(err => {
          alert("Error:", err);
        })
    }
  }

  function saveProfile() {
    let divInterest = document.querySelector('#interest')
    let nameProfile = document.querySelector('#nameProfile')
    let emailProfile = document.querySelector('#emailProfile')
    let textareaInterest = document.querySelector('#interestsProfile')
    let interestsProfile = textareaInterest.value
    divInterest.innerHTML = interestsProfile

    //console.log(nameProfile.innerHTML)
    //console.log(emailProfile.innerHTML)
    let newNameProfile = nameProfile.innerHTML
    let newEmailProfile = emailProfile.innerHTML

    btnSaveProfile.classList.remove('active');
    textareaInterest.classList.remove('active');
    file.classList.remove('active');
    if (btnSaveProfile.classList != 'active') {
      nameProfile.contentEditable = 'false'
      emailProfile.contentEditable = 'false'
    }

    profileUpdate(newNameProfile, newEmailProfile, url)
    saveProfileBD(interestsProfile)

  }
}
function profileUpdate(newNameProfile, newEmailProfile, url) {
  var user = firebase.auth().currentUser;
  //console.log(user);

  user.updateProfile({
    email: newEmailProfile,
    displayName: newNameProfile,
    em: user.email,
    photoURL: url,
    uid: user.uid

  }).then(function () {
    console.log('los dtos se actualizaron');
    //saveProfileBD(user)

    // Update successful.
  }).catch(function (error) {
    // An error happened.
    console.log(error);

  });
}

function saveProfileBD(interestsProfile) {
  let user = firebase.auth().currentUser;
  const docRef = db.collection('datausers/').doc(user.uid);//la / y el + user.uid hace que no se duplique el usuario
  docRef.update({

    interests: interestsProfile,

  })
    .then(function () {
      saveChange.classList.add('is-active');
      console.log('Los datos se guardaron');
    })
    .catch(function (error) {
      console.log('Hubo en error:', error);
    })
}


/* function saveProfileBD(newNameProfile, newEmailProfile, interestsProfile, url) {
  let user = firebase.auth().currentUser;
  const docRef = db.collection('datausers/').doc(user.uid);//la / y el + user.uid hace que no se duplique el usuario
  docRef.set({
    name: newNameProfile,
    email: newEmailProfile,
    em: user.email,
    interests: interestsProfile,
    photo: url,
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
 */