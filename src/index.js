//import { example } from './example.js';
import home from './components/Home.js'
import login from './components/Login.js'
import list from './components/ListView.js'
import recommendations from './components/Recommendations.js'

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
        case '/new':
            route = recommendations({document, navigate})
            break;
        default:
            route = home({ document, navigate })
            break;
    }
    root.appendChild(route)
}

render()
