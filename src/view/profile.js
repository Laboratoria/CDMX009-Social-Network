export default () => {
  const viewProfile = `
    <section>
    <div class="user-img">
      <img src="${localStorage.getItem('URLStorage')}" alt = 'member'/>  
    </div>
    <div>
      <div class="flex-profile-name">
        <h3 class="test">${localStorage.getItem('nameStorage')}</h3>
        <img class="img-edit" src="./img/icons/pen.svg">
      </div>
      <div class="flex-connection">
        <a href="#/followers">
          <p> 5 <br> Seguidores</p>
        </a>
        <a href="#/follow">
          <p> 3 <br> Seguidores</p>
        </a>
      </div>
    </div>
    <div class="categories-btn-">
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/favorites">
            <span class="menu-icons">
              <i class="far fa-heart"></i>
            </span>
          </a>  
        </div>
      </div>
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/reviews">
            <span class="menu-icons">
              <i class="far fa-sticky-note"></i>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div class="categorie-btn-">
          <a class="nav-link" href="#/saved">
            <span class="menu-icons">
              <i class="far fa-bookmark"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div id= 'postsProfile'></div>;
  </section>
  `;

  // Hide header
  const dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.add('hide');

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewProfile;
  return divElemt

};

