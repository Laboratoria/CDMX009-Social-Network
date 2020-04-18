import { changeView } from '../view-controler/router.js'

export default () => {
//var globales
//var db = firebase.firestore();
const storage = firebase.storage() 
let url

  const viewNewPost = `<div class = "gridContainer">
  <main>
      <form class = "inputForm">
          <input type="file" id="imgUpload" name="img" accept="image/*">
          <img src="" id="newPost">
          <input id="registerDescription" type = "text" placeholder = "Descripción" required>
          <input id="registerLocation" type = "text" placeholder = "Ubicación" required>
          <button class="btn" id = "btnShare"> Share </button>
          <button class="btn" id="btnLoad"> Load </button>
      </form>
  </main>
  <footer>
      <div class = "feedOptions">
      <button class = "btn" id = "homeSH"> home </button>
      <button class = "btn" id= "profileSH"> profile </button>
      </div>
  </footer>
</div>`;

  // nodos
  const divElement = document.createElement('div');
  divElement.innerHTML = viewNewPost;

  //get the div elements 
  const imgUpload = divElement.querySelector('#imgUpload')
  const loadImg = divElement.querySelector('#btnLoad')
  //const registerDescription = divElement.querySelector('#registerDescription')
  //const registerLocation = divElement.querySelector('#registerLocation')
  
  //func + listener for uploading the image to storage 

  imgUpload.addEventListener('change', e => {

    //get file
    const image = divElement.querySelector('#imgUpload').files[0]
    const imageName = image.name

    //create storage reference --where the images will be uploaded and saved--
    const storageRef = storage.ref('images/'+imageName)

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





  //func + listener to upload the info to firestore
  /*loadImg.addEventListener('click', e =>{
    const docRef = db.doc("posts/feed")
    const descriptionValue = registerDescription.value 
    const locationValue = registerLocation.value

    docRef.set({
      description: descriptionValue,
      location: locationValue
    }).then((e) => {
      console.log(':) OK!');
    }).catch((e) => {
      console.log(':( notOk!');
    });
  });

  /*func + listener to upload the info to realtime database
  loadImg.addEventListener('click', e =>{

    //create database reference 
    
    const databaseRef = database.ref('post-data')

    const data = {
      description: registerDescription.value,
      location: registerLocation.value
    }

    databaseRef.push(data)

  })*/

  
  
  return divElement

} 

/*

  shareImg.addEventListener('click', (e) => {
    const imgToSave = uploadImg.value;
    console.log(imgToSave);
    docRef.set({
      newImg: imgToSave,
    }).then((e) => {
      console.log(':) OK!');
    }).catch((e) => {
      console.log(':( notOk!');
    });
  });

  // with LOAD button
  loadImg.addEventListener('click', (e) => {
    docRef.get().then((doc) => {
      if (doc && doc.exists) {
        const myData = doc.data();
        newImg.src = myData;
      }
    });
  });

  return divElement;
};*/