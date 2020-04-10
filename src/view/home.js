export default () =>{
  const viewHome = `
      <h1>Aquí va el feed ☆</h1>
  `
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewHome
  return divElement
}
