import showOupladWindow from './uopladContent.js'

document.querySelector("#profile").addEventListener('click', welcomeView);
let content= document.querySelector(".root");
let header= document.querySelector(".header");
let staticMenu= document.querySelector("#staticMenu");


function welcomeView (){
    content.innerHTML= '';
    let user = firebase.auth().currentUser;
    if (user != null) {
      let infoUser= `
      <div>¡Bienvenida ${user.displayName}!</div>`
      content.innerHTML=infoUser;}
    let dataBase= firebase.firestore();
    dataBase.collection("posts").orderBy("date","desc").onSnapshot(function(snapshot){
        let changes= snapshot.docChanges();
        changes.forEach(change=>{
            let section= document.createElement("section");
            section.classList.add("containerPosts");
            let button= document.createElement("button");
            button.classList.add("btnsPosts");
            let img= document.createElement("img");
            img.src= change.doc.data().img;
            img.id = change.doc.id;
            img.setAttribute('data-title',change.doc.data().title);
            img.setAttribute('data-description', change.doc.data().description);
            img.setAttribute('data-user', change.doc.data().user)
            button.appendChild(img);
            section.appendChild(button);
            content.appendChild(section);
        })
            let modalRoot= document.querySelector("#modalRoot");
            let btnsPosts= document.querySelectorAll(".btnsPosts");
            btnsPosts.forEach(btn=> btn.onclick = e => {
                modalRoot.style.display= "block";
                let value= e.target.id;
                let link = e.target.getAttribute('src');
                let title= e.target.getAttribute('data-title');
                let description= e.target.getAttribute('data-description');
                let user= e.target.getAttribute('data-user');
                modal(value, link, title, description, user);
            });
    })
}

export function modal(id, link, title, description, user){
  console.log("si me esá detectando el click");
  id;
  modalRoot.innerHTML='';
  let contentModal= `
  <section data-id="${id}">
  <div class="modalContent">
  <span class="close">&times</span>
  <header>
  <div class="dropdown">
  <button id="btnOptions" class="btnOptions">...</button>
  <div id="myDropdown" class="dropdownContent">
  <button data-id="${id}" id="btnEdit">Edit</button>
  <button data-id="${id}" id="btnDelete">Delete</button>
  </div>
  </div>
  </header>
  <p id="user">${user}</p>
  <div id="contentTitle">
  <p class="title" id="title">${title}</p>
  </div>
  <div id="contentImg">
  <img id="imgModal" src=${link}>
  </div>
  <div id="contentDescription">
  <p class="text" id="description">${description}</p>
  </div>
  </div>
  </section>`
  modalRoot.innerHTML=contentModal;
  let btnSpan= document.getElementsByClassName("close")[0];
  btnSpan.onclick= () => modalRoot.style.display="none";
  document.querySelector("#btnOptions").onclick= showDropDownContent;
  let dropdownMenu= document.querySelector("#myDropdown");
  function showDropDownContent(){
      dropdownMenu.style.display="block";
  }
  window.onclick = function(event) {
      if (event.target == dropdownMenu) {
        dropdownMenu.style.display = "none";
      }
    }
    let btnDelete= document.querySelector("#btnDelete");
    console.log(btnDelete);
    btnDelete.onclick= deletePosts;
    function deletePosts(e){
        let id= e.target.getAttribute("data-id");
        dataBase.collection("posts").doc(id).delete();
        let storage = firebase.storage();
        let storageRef = storage.ref();
        let desertRef = storageRef.child('publications');
        desertRef.delete().then(function() {
          console.log("listo!")
          modalRoot.style.display="none";
        }).catch(function(error) {
          console.log(error);
        });
    }
    let contentTitle= document.querySelector("#contentTitle");
    let contentDescription= document.querySelector("#contentDescription");
    let btnEdit= document.querySelector("#btnEdit");
    btnEdit.onclick=editPosts;
    function editPosts(e){  
        let titleOriginal= document.querySelector("#title");
        let descriptionOriginal= document.querySelector("#description");
        titleOriginal.style.display="none";
        descriptionOriginal.style.display="none";
        let newTitle= `
        <textarea id="title">${title}</textarea>`
        let newDescrition=`
        <textarea id="description">${description}</textarea>
        <button id="saveBtn">GUARDAR CAMBIOS</button>`
        contentTitle.innerHTML= newTitle;
        contentDescription.innerHTML= newDescrition;
        let id= e.target.getAttribute("data-id");
        let saveBtn= document.querySelector("#saveBtn");
        let nodeTitle= document.querySelector("#title");
        let nodeDescription= document.querySelector("#description");
        saveBtn.onclick= saveChangesInPost;
        function saveChangesInPost(){
          dataBase.collection("posts").doc(id).update({
              title: nodeTitle.value,
              description: nodeDescription.value
          })
        }
    }
}

export default welcomeView;