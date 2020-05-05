/* export { user } from "../firebase-auth.js"
const db = firebase.firestore();
const st = firebase.storage();
const user = user();

const createProfile = (id, nameUser, emailUser) => {
  db.collection("user").doc(id).get()
    .then((doc) => {
      db.collection("user").doc(id).set({
        name: nameUser,
        email: emailUser,
      });
    })
};

const getName = (userName) => {
  const userData = user().uid;
  db.collection("user").doc(userData).get()
    .then((doc) => {
      if (doc.exists) {
        userName.textContent = doc.data().name;
      } else {
        userName.textContent = "";
      }
    });
};

const getData = (name, email) => {
  db.collection("user").doc(user.uid).onSnapshot((doc) => {
    name.value = doc.data().name;
    email.value = doc.data().email;
  });
};

const updateProfile({
  name: nameUser,
  email: emailUser
})

 */



export default () => {
  const root = document.querySelector("#roots");
  const viewProfile = `
    <section>
    <div class="user-img" style="margin-top:80px">
      <img src="${localStorage.getItem('URLStorage')}" alt = 'member'/>  
    </div>
  </div>
  <div class="categories-btn-">
    <div>
      <div class="categorie-btn-">
        <a class="nav-link" href="#/favorites">
          <span class="menu-icons">
            <i class="far fa-heart"></i>
          </span>
        </a>  
      </div>
    </div>
    <div>
      <div class="categorie-btn-">
        <a class="nav-link" href="#/reviews">
          <span class="menu-icons">
            <i class="far fa-sticky-note"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="categories-btn-">
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/favorites">
            <span class="profile-icons">
              <i class="far fa-heart"></i>
            </span>
          </a>  
        </div>
      </div>
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/reviews">
            <span class="profile-icons">
              <i class="far fa-sticky-note"></i>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/saved">
            <span class="profile-icons">
              <i class="far fa-bookmark"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  `;

  // Hide header elements
  const dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.add('hide');
  const cardUser = document.querySelector('.card-user-desk');
  cardUser.classList.add('hide');


  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewProfile;
  root.appendChild(divElemt);

  const editBtn = document.querySelector("#editBtn");

  const actioneditProfile = (e) => {
    const userNameInput = document.querySelector("#userName");
    const userPhotoInput = document.querySelector("#photoUser");
    userNameInput.value = e.target.getAtrribute("data-userName");
    userPhotoInput.value = e.target.getAtrribute("data-photoUser");
    const id = e.target.id;

    const btnSaveProfile = document.querySelector("#saveProfileBtn");
    btnSaveProfile.onclick = () => {
      const userName = document.querySelector("#userName").value;
      const userPhoto = document.querySelector("#photoUser").value;

      console.log(userName);
      console.log(id);
    }
  }
  return divElemt;
}


