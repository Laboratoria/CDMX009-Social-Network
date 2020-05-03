// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // first view
function renderHome() {
    let homeView = `<div>
  <h1>Skill Matchers</h1>
  

</div>`
    root.innerHTML = homeView
}

export default renderHome