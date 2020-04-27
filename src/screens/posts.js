// main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // first view
function renderHome() {
    let homeView = `<div>
  <h1>Skill Matchers</h1>
  <img src="https://cdn3.vectorstock.com/i/1000x1000/69/22/education-and-knowledge-icons-1-vector-8326922.jpg" widht="100px"/>

</div>`
    root.innerHTML = homeView
}

export default renderHome