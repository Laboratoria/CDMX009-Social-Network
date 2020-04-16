import { components } from '../view/index.js'

const changeView = (route) => {
  const root = document.getElementById('root')
  const footer = document.getElementById('footer')
  root.innerHTML = '';
  footer.innerHTML = '';
  switch (route){
    case '#/':
    {
      root.appendChild(components.Home());
       return footer.appendChild(components.Footer());
      }
    case '#/splash':
    {
       return root.appendChild(components.Splash());
      }
    case '#/calendar':
    {
      root.appendChild(components.Calendar());
       return footer.appendChild(components.Footer());
      }
    case '#/homework':
    {
      root.appendChild(components.Homework());
       return footer.appendChild(components.Footer());
      }
    case '#/parentPanel':
    {
      root.appendChild(components.ParentPanel());
       return footer.appendChild(components.Footer());
      }
    case '#/releases':
    {
      root.appendChild(components.Releases());
       return footer.appendChild(components.Footer());
      }
    case '#/login':
    {
      root.appendChild(components.Login());
       return footer.appendChild(components.Footer());
      }
    case '#/signUp':
    {
      root.appendChild(components.SignUp());
       return footer.appendChild(components.Footer());
      }
    case '#/profile':
    {
      root.appendChild(components.Profile());
       return footer.appendChild(components.Footer());
      }
    default:
      break;

}
  console.log(route)
}


export { changeView }