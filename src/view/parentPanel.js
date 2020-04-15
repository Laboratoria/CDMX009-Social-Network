export default () => {
  const viewParentPanel = `
  <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png" alt="" class="home">
  <a href="#/profile"><img src="img/User.svg" alt="" class="imagenUser"></a>
  <h1>PANEL DE PADRES</1>
  <input type="text">
  <button>Agregar</button>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewParentPanel;

  return divElement;
}