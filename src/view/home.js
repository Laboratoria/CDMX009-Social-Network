import { observatorFirebase } from '../firebase.js'

export default () => {
  
  const viewHome = `
  
  <section id="dashboardHeader">
    <div class="container">
      <div class="categories-btn">
        <div>
          <div class="categorie-btn">
            <a>
              <img src="img/icons/food.svg">
            </a>
          </div>
          <p>ComidaJS</p>
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
  </section>  


  `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;

}



