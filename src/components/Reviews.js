// imports
import $ from '../lib/tools.js'
// main
export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div class="cover">
            <h2>Reviews</h2>
            <form> 
                <textarea id="review-content" rows="4" cols="50">
                </textarea>
            </form>
            <button id="send-review-button">Postear</button>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#send-review-button').onclick = () => {
        console.log('it works')
    }
    return div

}



// export