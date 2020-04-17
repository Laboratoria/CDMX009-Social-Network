export default () => {
    const viewNewPost = `
    <p>hola</p>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> <!-- boton cerrar -->
        </div>
        <div class="modal-body">
            <div>
                <p>aqui va la imagen</p>
            </div>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="recipient-name" placeholder="titulo de la publicación">
              <input type="text" class="form-control" id="recipient-name" placeholder="#actividades">
              <input type="text" class="form-control" id="recipient-name" placeholder="ubicación">
            </div>
            <div class="form-group">
              <img src="img/xel.jpeg" alt="member">
              <p class="test" id="userName">Xel Jmz</p>
              <textarea class="form-control" id="message-text" placeholder="escribe aqui tu reseña o actividad"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">publicar</button>
        </div>
      </div>
    </div>
  </div>
      `;

      const divElemt = document.createElement('div');
      divElemt.classList.add('position')
      divElemt.innerHTML = viewNewPost;
      return divElemt;
  }

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
  })
