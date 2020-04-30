export default () => {
    const header = `<header>
    <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png" alt="" class="home">
    <a href="#/profile"><img src="img/User.svg" alt="" class="imagenUser"></a>
    </header>`


const divElement = document.createElement('div')
divElement.innerHTML = header;

return divElement;
}