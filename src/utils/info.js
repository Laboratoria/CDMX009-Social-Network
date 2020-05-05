export function openModal() {
  const divInfoModal = document.createElement('div');
  divInfoModal.className = 'modal';
  divInfoModal.id = 'modalInfo';
  document.body.appendChild(divInfoModal);
  const textModal = 'Creamos esta comunidad para que compartas'
   + ' y encuentres algo que te pueda ayudar en tu examén de admisión. '
    + 'No estudies solo, juntos podemos lograrlo...'
    + '\n ~La técnica al servicio de la Patria~ \n \n';
  const btClose = document.createElement('button');
  btClose.className = 'btnStyles';
  btClose.id = 'btnCloseM';
  btClose.innerHTML = 'Cerrar';
  divInfoModal.innerText = textModal;
  divInfoModal.appendChild(btClose);
  btClose.addEventListener('click', () => {
    document.body.removeChild(divInfoModal);
  });
}
