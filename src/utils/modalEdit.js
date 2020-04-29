let divFormUpdate;
const actionEdit = (e) => {
  console.log(e.target.value);
  const comments = document.getElementById('newComment').value;
  console.log(comments);
  return firebase.firestore().collection('publications').doc(e.target.value).update({
    Comments: comments,
  })
    .then(() => {
      console.log('Document successfully written!');
      document.body.removeChild(divFormUpdate);
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

const closed = () => {
  document.body.removeChild(divFormUpdate);
};
export function openModalEdit(e) {
  const id = e.target.getAttribute('data-doc');
  divFormUpdate = document.createElement('div');
  divFormUpdate.className = 'viewFormEdit';
  divFormUpdate.id = 'formUpdate';
  document.body.appendChild(divFormUpdate);
  firebase.firestore().collection('publications').doc(id).get()
    .then((consultDb) => {
      const doc = consultDb.data();
      const divUpdate = `<textarea id= "newComment" cols="30" rows="5" placeholder="Editar Comentario">${doc.Comments}</textarea>
    <p><button id="${consultDb.id}" value="${consultDb.id}" class="btnSty">Editar</button>
    <button id="closeModal" class="btnStylesC">Cerrar</button></p>`;
      divFormUpdate.innerHTML = divUpdate;
      const btnUpdate = document.querySelectorAll('.btnSty');
      btnUpdate.forEach(update => update.addEventListener('click', actionEdit));
      const btnClose = document.querySelectorAll('.btnStylesC');
      btnClose.forEach(close => close.addEventListener('click', closed));
    });
}
