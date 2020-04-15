import renderLogin from './screens/login.js';
import renderAbout from './screens/profile.js';
import renderHome from './screens/posts.js';

let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

// router
function router(route) {
    console.log(route)
    switch (route) {
        case '/about':
            renderAbout();
            break;
        case '/login':
            renderLogin();
            break;
        default:
            renderHome();
            break;
    }
}
// btn listener
btns.forEach(btn => btn.onclick = e => router(e.target.id));

router()