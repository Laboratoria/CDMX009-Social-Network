export default () =>{
  const viewNewUser = `
    
      <h1>Aquí va la pantalla de registro☆</h1>

  `
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewNewUser
  return divElement
}
