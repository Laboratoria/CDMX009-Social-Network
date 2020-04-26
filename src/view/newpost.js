let welcomeview= document.querySelector('#background1')
export default () => {
  welcomeview.innerHTML= " ";
  // firebase
  const db = firebase.firestore();
  const storage = firebase.storage();
  const docRef = db.collection('testpost');

  // var globales
  let url;

  const viewNewPost = `
  <div id = "backgroundNewPost">
    <div id= 'gridPost'>
      <div class = 'p1'>   
        <p>Bichigram</p>
        <button class="btn" id="logoutBtn"> <img class="icon" src='/imgBichigram/logout.png'> </button>
      </div>
      <div class= 'p2'>
          <form class = "inputForm">
              <div id= 'postPhoto'>
                <div class="preview" id="here"> </div>
                <p>Sube tu bicho :)</p>
                <input type="file" id="imgUpload" name="img" accept="image/*">
              </div>
                <input id="registerDescription" type = "text" placeholder = "Descripción" required><br>
                <input id="registerLocation" type = "text" placeholder = "Ubicación" required><br>
                <button class="btn" id = "btnShare"> Share </button>
          </form>
      </div>
      <div class= 'p3'> 
        <nav>
          <ul>
              <li class="home">
                  <a  href="#/home"><img src='/imgBichigram/btnHome.png'></a>
              </li>
              <li class ="newpost">
                  <a  href="#/newpost"> <img src='/imgBichigram/btnShare.png'> </a>
              </li>
              <li class='profile' >
                  <a href="#/profile"> <img src='/imgBichigram/btnProf.png'> </a>
              </li>
        </ul>
        </nav>
      </div>
  </div>
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
    const reader = new FileReader();
    // Lee el archivo y lo manda a FileReader
    reader.readAsDataURL(e.target.files[0]);
    // Cuando esté listo, ejecuta el código
    reader.onload = function () {
      const preview = divElement.querySelector('#here'),
        image = document.createElement('img');

      image.src = reader.result;
      preview.innerHTML = '';
      preview.append(image);
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
      counter: 0, 
    }).then(console.log('ok C:'));
  });

  return divElement;
};