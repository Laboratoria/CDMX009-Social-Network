import renderLogin from './screens/login.js';
import addNewPost from './screens/profile.js';
import renderHome from './screens/posts.js';
import logFb from './screens/logFacebook.js';

let currentRoute = "/"
    // main nodes
let root = document.querySelector('#root')
let btns = document.querySelectorAll('.btn')


// router
function router(route) {
    console.log(route)
    switch (route) {
        case '/about':
            addNewPost();
            break;
        case '/login':
            renderLogin();
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