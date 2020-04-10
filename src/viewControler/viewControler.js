import { components } from '../view/index.js'

const changeView = (route) => {
    const root = document.getElementById('root')
    root.innerHTML = '';
switch (route){
    case '#/':
         { return root.appendChild(components.Home()) }
    case '#/calendar':
         { return root.appendChild(components.Calendar()) }
    case '#/homework':
         { return root.appendChild(components.Homework()) }
    case '#/parentPanel':
            { return root.appendChild(components.ParentPanel()) }  
    case '#/releases':
            { return root.appendChild(components.Releases()) }   
    default:
        break;

}
console.log(route)
}



export { changeView }