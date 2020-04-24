export default () => {
    const viewSaved = `
    <section>
    <div class="user-img">
      <img src="${localStorage.getItem('URLStorage')}" alt = 'member'/>
    </div>
    <div>
        <div>
        <h2 class="test">${localStorage.getItem('nameStorage')}</h2>
            <img class="img-edit" src="./img/icons/pen.svg">
            <img class="img-add-friend" src="./img/icons/add-friend.svg">
        </div>
        <div>
            <a href="#/followers"> 5 <br> Seguidores</a><br>
            <a href="#/follow"> 3 <br> Seguidores</a>
        </div>
    </div>
    <div>
        <a class="nav-link" href="#/favorites"><span class="menu-icons"><i class="far fa-heart"></i></span></a>    
        <a class="nav-link" href="#/reviews"><span class="menu-icons"><i class="far fa-sticky-note"></i></span> </a>
        <a class="nav-link" href="#/saved"><span class="menu-icons"><i class="far fa-bookmark"></i></span></a>
    </div>
    </section>
    <section>
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
    </section>
    `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewSaved;
    return divElemt;
}