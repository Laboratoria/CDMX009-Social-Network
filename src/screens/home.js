// main nodes
let root = document.querySelector('#root')
    // first view
function renderHome() {
    let homeView = `<div id="homeView">
 
    <img id=youth src="/screens/jovenes.jpg" class="responsive" >
</div>`
    root.innerHTML = homeView
}

export default renderHome