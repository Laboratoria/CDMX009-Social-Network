// imports
import $ from '../lib/tools.js'
// main
export default props => {


    let div = props.document.createElement('div')
    // display
    div.innerHTML = `
        <img 
            src="https://images-na.ssl-images-amazon.com/images/I/71G7AybM3qL._AC_SL1500_.jpg" 
            alt="movie-poster"
            width="100px" 
        />
        <p>Movie Name<p>
        <p>Movie Theater</p>
        <p>Distance</p>
    `
    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    return div
   
}