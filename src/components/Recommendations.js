import $ from '../lib/tools.js'
import { createReview } from '../lib/firebase.js'

export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <div class="Recommendations">
            <form id="publicar">
                <input type="text" id="img" name="img" placeholder="image">
                <input type="text" id="title" name="title" placeholder="title">
                <input type="text" id="year" name="year" placeholder="year">
                <input type="submit" id="publicar" value="publicar">
            </form>
        </div>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#publicar').onsubmit = e => {
        e.preventDefault()
        console.log('sirve el form',e.target)
        let obj = {
            img:e.target.img.value,
            title:e.target.title.value,
            year:e.target.year.value
        }
        createReview(obj)
        .then(data => console.log(data))
    }

}