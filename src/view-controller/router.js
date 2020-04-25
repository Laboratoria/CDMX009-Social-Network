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
        case '#/logup':
        case '#/profile':
        case '#/home':
        case '#/reviews':
        case '#/saved':
        case '#/followers':
        case '#/follow':
            
            { return sectionMain.appendChild(components[id]()); }
        default:
            return sectionMain.appendChild(components.different())
    }
};