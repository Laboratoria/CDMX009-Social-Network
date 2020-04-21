export default () => {
    const viewPost = `
      <div class="photo-post">
        <img src="img/pictures/dog_shower.jpg" />
        <span class="back-icon">
          <a>
            <i class="fas fa-arrow-left"></i>
          </a>
        </span>
        <div class="card-post-container">
          <div class="card-text">
            <h4>Tips para un buen baño</h4>
            <p class="txt-post">#mascotas</p>
            <p class="txt-post"><i class="far fa-clock"></i> hace 3 horas</p>
          </div>
        </div>
      </div>
      <div class="container"></div>
      `;

      const divElemt = document.createElement('div');
      divElemt.classList.add('position')
      divElemt.innerHTML = viewPost;
      return divElemt;
  }
