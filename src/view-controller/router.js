import { components } from '../view/index.js';

export const changeTmp = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById('contentCreated');
    sectionMain.innerHTML = '';

    switch (hash) {
        case '':
        case '#':
        case '#/':
        case '#/login':
            { return sectionMain.appendChild(components.login()); }
        case '#/profile':
        case '#/login':
        case '#/reviews':
        case '#/saved':
        case '#/conexions':
        case '#/followers':
        case '#/follow':
        case '#/menu':
        case '#/newPost':

            { return sectionMain.appendChild(components[id]()); }
        default:
            return sectionMain.appendChild(components.different())
    }
};