export default () => {
  // firebase
  let db = firebase.firestore();
  let storage = firebase.storage();
  let docRef = db.collection('posts');

  // var globales
  let url;

  const viewNewPost = `<div class = "gridContainer">
  <main>
      <form class = "inputForm">
          <input type="file" id="imgUpload" name="img" accept="image/*">
          <input id="registerDescription" type = "text" placeholder = "Descripción" required>
          <input id="registerLocation" type = "text" placeholder = "Ubicación" required>
          <button class="btn" id = "btnShare"> Share </button>
         <div>
         <img src="" id="newPost" width="300px" height="200px">
         </div>
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

  // get the div elements
  const imgUpload = divElement.querySelector('#imgUpload');
  const shareImg = divElement.querySelector('#btnShare');
  const registerDescription = divElement.querySelector('#registerDescription');
  const registerLocation = divElement.querySelector('#registerLocation');

  // Display the image
  imgUpload.onchange = function (e) {
    // FileReader permite leer files o blob del lado cliente de manera asíncrona
    let reader = new FileReader();
    // Lee el archivo y lo manda a FileReader
    reader.readAsDataURL(e.target.files[0]);
    // Cuando esté listo, ejecuta el código
    reader.onload = function () {
      const image = divElement.querySelector('#newPost');
      image.src = reader.result;
      image.innerHTML = '';
    };
  };
  // func + listener for uploading the image to storage
  imgUpload.addEventListener('change', (e) => {
  // get file
    const image = divElement.querySelector('#imgUpload').files[0];
    const imageName = image.name;

    // create storage reference --where the images will be uploaded and saved--
    const storageRef = storage.ref(`images/${imageName}`);

    // upload the image to storage
    storageRef.put(image)
      .then(snap => snap.ref.getDownloadURL())
      .then((link) => {
        url = link;
        console.log(url);
      });
  });

  // sending the info to firestore
  shareImg.addEventListener('click', (e) => {
    const descr = registerDescription.value;
    const loc = registerLocation.value;

    docRef.add({
      postimg: url,
      description: descr,
      location: loc,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }).then(e => console.log('ok'));
  });

  return divElement;
};