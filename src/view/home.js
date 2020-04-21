export default () => {
    const viewHome = `
    <div class="container">
      <div class="categories-btn">
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/food.svg">
            </a>
          </div>
          <p>Comida</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/drug.svg">
            </a>
          </div>
          <p>Salud</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/dog.svg">
            </a>
          </div>
          <p>Mascotas</p>
        </div>
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/home-run.svg">
            </a>
          </div>
          <p>En casa</p>
        </div>
      </div>
      <div class="filters">
        <div class="search-input-container">
          <input class="search-input" type="search" name="search" placeholder="Buscar"/>
          <i class="fas fa-search"></i>
        </div>
        <div class="filters-icon">
          <a><i class="fas fa-filter"></i></a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="post">
        <img src="img/pictures/helado1.jpg">
        <div class="txt-post-container">
          <p class="info-post"><span class="title-post">Karina Sr</span><br>
            Los bowls
          </p>
          <p class="info-post justify-right">#comida<br>
            Hace 2 hrs
          </p>
        </div>
        <span class="stars-post">
          <i class="fas fa-star">4.4</i>
        </span>
        </div>
      <div class="post">
        <img src="img/pictures/dog_shower.jpg">
        <div class="txt-post-container">
          <p class="info-post"><span class="title-post">Karina Sr</span><br>
            Los bowls
          </p>
          <p class="info-post justify-right">#comida<br>
            Hace 2 hrs
          </p>
        </div>
        <span class="stars-post">
          <i class="fas fa-star">4.4</i>
        </span>
      </div>
    </div>
    `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewHome;
    return divElemt;
}