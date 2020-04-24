export default () =>{
  const viewProfile = `
      <h1>Aquí va el profile☆</h1>
  `
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewProfile
  return divElement
}
