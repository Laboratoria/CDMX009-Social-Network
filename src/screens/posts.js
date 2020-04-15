// foto chiqui usuario
// campo para postear campo de texto
// botones para like
// boton para comentar
// campo de texto para comentar

// crear una espacio para que aparezcan los posts de todos
// display img / mensaje / reacciones / comentar campo de texto


// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // first view
function renderHome() {
    let homeView = `<div>
  <h2>Bienvenidas! ヽ(^o^)ノ </h2>
</div>`
    root.innerHTML = homeView
}

export default renderHome