let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')
    // loginView
function renderLogin() {
    let loginView = `<div>
  <h2> Inicia sesión </h2>
  <input placeholder="Email"/>
  <input placeholder="password"/>
</div>`
    root.innerHTML = loginView
}


export default renderLogin