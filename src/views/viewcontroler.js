import { components } from '../index.js'
import { root } from "../main.js";
// Funcion que cambia la vista
export const changeView = (route) => {
    root.innerHTML = '';
    switch (route) {
        case '#/Home': { return root.appendChild(components.home); }
        //case '#/Login': { return root.appendChild(components.login); }
        case '#/Post': { return root.appendChild(components.post); }
        case '#/My_profile': { return root.appendChild(components.profile); }
        case '#/Exit': { return root.appendChild(components.exit); }
        default:
            break;
    }
    console.log(route);
};
