import { getName,getNameProfile } from '../index.js';
let idAddComent;
let idAddComentDiv;
export function openModalComent(e) {
  idAddComent = e.target.getAttribute('data-id');
  idAddComentDiv = e.target.getAttribute('title');;
  console.log(idAddComent);
  let divFormUpdate = document.createElement('div');
  divFormUpdate.className = 'viewFormEdit';
  divFormUpdate.id = 'formUpdate';
  document.body.appendChild(divFormUpdate);
  firebase.firestore().collection('publications').doc(idAddComent).get()
    .then((consultDb) => {
      const doc = consultDb.data();
      const divUpdate = `<textarea id= "newComment" cols="30" rows="5" placeholder="Hacer comentario"></textarea>
    <p><button id="${consultDb.id}" value="${consultDb.id}" class="btnAddC">Comentar</button>
    <button id="closeModal" class="btnStylesC">Cerrar</button></p>`;
      divFormUpdate.innerHTML = divUpdate;
      const btnAddC= document.querySelectorAll('.btnAddC');
      btnAddC.forEach(update => update.addEventListener('click', actionComent));
      const btnClose = document.querySelectorAll('.btnStylesC');
    btnClose.forEach(close => close.addEventListener('click', closedModal));
    
    });
    const closedModal = () => {
        document.body.removeChild(divFormUpdate);
      };
  }
  
const actionComent = (e) => {
  console.log(getName);
  let nwC= document.getElementById('newComment').value;
  console.log(nwC);
  firebase.firestore().collection('coments').add({
    opinion: nwC,
     idC: e.target.value
   })
     .then((docRef) => {
       console.log('Document written with ID: ', docRef.id);

    firebase
      .firestore()
      .collection('publications')
      .doc(idAddComent)
      .update({
        addComent: firebase.firestore.FieldValue.arrayUnion(" "+ getNameProfile()+": " + nwC)  
      });
     })
     .catch((error) => {
       console.error('Error adding document: ', error);
     });
    }
