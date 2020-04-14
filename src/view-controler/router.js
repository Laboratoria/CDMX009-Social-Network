import { components } from '../view/index.js'

const changeView = (route) =>{
  const container = document.querySelector("#container")
  container.innerHTML = ''
  switch (route) {
    case '#/home':
      { return container.appendChild(components.home()) }
    case '#/newpost':
      { return container.appendChild(components.newpost()) }
    case '#/profile':
      { return container.appendChild(components.profile()) }
    case '#/login':
      { return container.appendChild(components.login()) }
    case '#/newuser':
      { return container.appendChild(components.newuser())}
    default:
      break
  }//fin de switch

}

export { changeView }
