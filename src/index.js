//import { example } from './example.js';
import home from './components/Home.js'
import login from './components/Login.js'
import list from './components/ListView.js'

function navigate(path) {
    root.lastElementChild.remove()
    render(path)
}

// nav bar ??

// main 
function render(path) {
    let route
    switch (path) {
        case '/browse':
            route = list({ document, navigate })
            break;
        case '/login':
            route = login({ document, navigate })
            break;
        default:
            route = list({ document, navigate })
            break;
    }
    root.appendChild(route)
}

render()
