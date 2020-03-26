//import { example } from './example.js';
import home from './components/Home.js'
import login from './components/Login.js'

function navigate(path) {
    root.lastElementChild.remove()
    render(path)
}

// nav bar ??

// main 
function render(path) {
    let route
    switch (path) {
        case '/login':
            route = login({ document, navigate })
            break;
        default:
            route = home({ document, navigate })
            break;
    }
    root.appendChild(route)
}

render()
