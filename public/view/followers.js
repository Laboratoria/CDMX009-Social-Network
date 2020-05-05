export default () => {
  const viewConexions = `     
    <div>
        <a href="#/followers"> 5 Seguidores</a>
        <a href="#/follow"> 3 Seguidores</a>
    </div>

    <div class="user-img">
        <p><img src="./img/pictures/kari.jpeg"> Karina Sanchez</p>
        <p><img src="./img/pictures/bren.jpeg"> Bren Carranco</p>
    </div>
    `;
  //  Hide header
  const dashHeader = document.querySelector('#dashboardHeader');
  dashHeader.classList.add('hide');
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewConexions;
  return divElemt;
};
