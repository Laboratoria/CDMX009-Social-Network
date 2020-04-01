// imports
import $ from '../lib/tools.js'
// main
export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div>
            <form id="login-form" class="cover-login">
                <h2> Inicia Sesión </h2>
                <p> El lugar del cine </p>
                <button type="submit" id="login"> Iniciar </button>
            </form>
            <button id="back"> <= volver </button>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#login-form').onsubmit = e => {
        e.preventDefault()
        alert("Signing in")
    }
    $('#back').onclick = () => props.navigate('/')
    return div

}



// export