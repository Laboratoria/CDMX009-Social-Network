// imports
import $ from '../lib/tools.js'
import card from '../Card.js'
// main

export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div>
            <h2>Todas las películas independientes en un solo lugar</h2>
            <p>Encuentra tu favorita</p>
            <form>
                <input type="text" id="movie-input"/>
            </form>
            <button id="search">Buscar<button/>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#search').onclick = () => {
        return card()
    }
    return div
}