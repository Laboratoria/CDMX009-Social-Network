import { components } from '../view/index.js'

const changeView = (route) => {
    const root = document.getElementById('root')
    root.innerHTML = '';
switch (route){
    case '':
          return components.Login()
    case '#calendar':
          return components.Calendar()
    case '#homework':
          return components.Homework()
    case '#parentPanel':
          return components.ParentPanel()
    case '#releases':
          return components.Releases()
    case '#home':
          return components.Home() 
    default:
        break;

}
console.log(route)
}



export { changeView }