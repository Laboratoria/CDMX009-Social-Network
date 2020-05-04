const postDetail = ` 
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <h2 id="Title">Titulo:${doc.data().title}</h2>
    <h1 id="Tale">${doc.data().text}</h1>
    <img max-width="30" src="${doc.data().photo}"> <p> Autor: ${doc.data().user}</p>
    <img max-width="300" src="${doc.data().img}">
    <buttton id="Edit"  dataId="${doc.data().id}" class="button is-text is-primary"> Editar</button>
    <buttton id="Delete" dataId="${doc.data().id}" class="button is-text is-primary"> Borrar</button>
    <buttton id="Comment" dataId="${doc.data().id}" class="button is-text is-primary"> Comentar</button>
    <span class="icon is-small">
    <i class="fas fa-heart"></i>
  </span>
  </div>
  <button class="modal-close is-large" aria-label="close"  id="closeModal"></button>
</div>`