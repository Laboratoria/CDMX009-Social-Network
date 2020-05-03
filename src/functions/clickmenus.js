import { viewProfile } from '../view/profile.js';
import { out } from './logout.js';
import { editionOfProfile } from '../view/editprofile.js';
import { viewForum } from '../view/fuorum.js';
import { publicPost, addNewPost } from './publicpoust.js';
import { readPosts } from './readposts.js';

function clickMenus(obtainingPersistenceData) {
    let nameMenus = document.querySelectorAll('ul.clickMenu li a'); //Dentro de mi variable voy a meterme dentro del a que es donde tengo c.u de los nombres de mi navbar
    nameMenus.forEach(function(viewMenus) { //en una nueva variable hago un forEach con un parámetro dentro de la función 
        viewMenus.addEventListener('click', function(clickedMenu) { //llamo el parámetro en este caso es (viewMenus)en  el cual en el addEventListener le digo que escuche el click con una función a la que le pongo también un parámetro por nombre (clickedMenu)
            clickedMenu.preventDefault();
            let userClickMenu = clickedMenu.target.dataset.nav; //creo una nueva variable que va a ser igual al parámetro anterior (clickedMenu) en donde con target.dataset estaría llamando a data-nav que declaré en mi html
            if (userClickMenu == "/Foro") { //aquí en mi if le coloco la condición en donde si le doy click a foro me lleve a ver el foro y así sucesivamente
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