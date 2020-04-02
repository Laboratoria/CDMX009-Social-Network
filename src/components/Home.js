// imports
import $ from '../lib/tools.js'
// main
export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div class="cover">
            <h2> Bienvenido </h2>
            <p> El lugar del cine </p>
            <button id="start"> Entrar </button>
            <button id="new"> Crear </button>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#start').onclick = () => props.navigate('/login')
    $('#new').onclick = () => props.navigate('/new')
    return div

}



// export