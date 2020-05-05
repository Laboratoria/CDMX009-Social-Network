import renderLogin from './screens/login.js';
import renderPost from './screens/posts.js';
import renderHome from './screens/home.js';
import logFb from './screens/logFacebook.js';
import logGoogle from './screens/google.js';

let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')

// router
function router(route) {
    root.innerHTML = ""
    console.log(route)
    switch (route) {
        case '/about':
            root.appendChild = renderPost();
            break;
        case '/login':
            root.appendChild = renderLogin();
            break;
        case '/goo':
            logGoogle();
            break;
        case '/logInFb':
            logFb();
            break;
        default:
            renderHome();
            break;
    }
}
// btn listener
btns.forEach(btn => btn.onclick = e => router(e.target.id));

router()