// imports
import $ from '../lib/tools.js'
// firebase
import { getAllReviews } from '../lib/firebase.js'
// main
export default props => {
    let { document } = props
    let div = props.document.createElement('div')
    let cardContainer = props.document.createElement('div')
    let defaultImage = "https://www.efficy.com/wp-content/uploads/2018/12/000000-default-placeholder.png"
    let list = []
    cardContainer.classList.add("card-container")
    // display
    div.innerHTML = `
        <div class="list-view-container">
            <div class="cover">
                <h2> Lista de Reviews </h2>
            </div>
            <input placeholder="busca un review" type="text" id="searchBox" >
        </div>
    `

    // componentDidMount:
    getAllReviews()
        .then(reviews => {
            list = [...reviews]
            drawCards(reviews)
        })

    // functions
    function filterList(e) {
        let regEx = new RegExp(e.target.value, 'i')
        drawCards(list.filter(r => regEx.test(r.title)))
    }

    function drawCards(reviews) {
        cardContainer.innerHTML = ''
        reviews.forEach(r => {
            let card = document.createElement('div')
            card.classList.add("card")
            card.innerHTML = `
            <img src="${r.img || defaultImage}" alt="${r.title}" />
            <p> ${r.title} </p>
            `
            cardContainer.appendChild(card)
        })
        div.appendChild(cardContainer)
    }

    // root.innerHTML = "" // this should do it the router
    root.appendChild(div)
    //  logic
    $('#searchBox').onchange = filterList
    return div

}



// export