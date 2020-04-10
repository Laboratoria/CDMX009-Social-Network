export default () =>{
  const viewLogin = `

      <h1>Aquí va el login☆</h1>
  `
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewLogin
  return divElement
}
