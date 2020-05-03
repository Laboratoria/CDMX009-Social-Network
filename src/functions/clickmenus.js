import { viewProfile } from '../view/profile.js';
import { out } from './logout.js';
import { editionOfProfile } from '../view/editprofile.js';
import { viewForum } from '../view/fuorum.js';
import { publicPost, addNewPost } from './publicpoust.js';
import { readPosts } from './readposts.js';

function clickMenus(obtainingPersistenceData) {
    let nameMenus = document.querySelectorAll('ul.clickMenu li a'); 
    nameMenus.forEach(function(viewMenus) {
        viewMenus.addEventListener('click', function(clickedMenu) {
            clickedMenu.preventDefault();
            let userClickMenu = clickedMenu.target.dataset.nav;
            if (userClickMenu == "/Foro") {
                viewForum(obtainingPersistenceData)
                    .then(function() {
                        publicPost(obtainingPersistenceData);
                        readPosts();
                    });
                window.history.pushState('Foro', 'Foro', '/Foro');
            } else if (userClickMenu == "/Perfil") {
                viewProfile(obtainingPersistenceData);
                window.history.pushState('perfil', 'Perfil', '/Perfil');
            } else if (userClickMenu == "/editarPerfil") {
                editionOfProfile(obtainingPersistenceData);
                window.history.pushState('Editar Perfil', 'Editar Perfil', '/EditarPerfil');
            } else if (userClickMenu == "/cerrarSesion") {
                out();
            };
        });
    });
};

export { clickMenus }