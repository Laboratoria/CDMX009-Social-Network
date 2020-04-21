import { changeView } from '../view-controler/router.js'

export default () => {
//firebase
let db = firebase.firestore()
let storage = firebase.storage() 
let docRef = db.collection('posts')

//var globales 
let url

  const viewNewPost = `<div class = "gridContainer">
  <main>
  <h1 class="flex">Bichigram</h1> 
      <form class = "inputForm flex">
          <input type="file" id="imgUpload" name="img" accept="image/*">
          <img src="" id="newPost">
          <input id="registerDescription" type = "text" placeholder = "Descripción" required>
          <input id="registerLocation" type = "text" placeholder = "Ubicación" required>
          <button class="btn" id = "btnShare"> Share </button>
          <button class="btn" id="btnLoad"> Load </button>
      </form>
  </main>

  <div class="icons"> 
      <div class = "feedOptions">
      <button class = "btn" id = "homeSH"> home </button>
      <button class = "btn" id= "profileSH"> profile </button>
      </div>
  </div>
</div>`;

  // nodos
  const divElement = document.createElement('div');
  divElement.innerHTML = viewNewPost;

  //get the div elements 
  const imgUpload = divElement.querySelector('#imgUpload')
  const shareImg = divElement.querySelector('#btnShare')
  const registerDescription = divElement.querySelector('#registerDescription')
  const registerLocation = divElement.querySelector('#registerLocation')
  
  //func + listener for uploading the image to storage 

  imgUpload.addEventListener('change', e => {

    //get file
    const image = divElement.querySelector('#imgUpload').files[0]
    const imageName = image.name

    //create storage reference --where the images will be uploaded and saved--
    const storageRef = storage.ref(`images/${imageName}`);

    //upload the image to storage 
     storageRef.put(image)
     .then (snap => {
      return snap.ref.getDownloadURL()
    })
    .then(link => {
      url = link
      console.log(url)
    })
  })

//sending the info to firestore 
  shareImg.addEventListener('click', e => {
    const descr = registerDescription.value 
    const loc = registerLocation.value

    docRef.add({
      postimg: url,
      description: descr,
      location: loc, 
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(e=>console.log('ok'))
  })

  return divElement

} 
