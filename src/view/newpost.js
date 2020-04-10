export default () =>{
  const viewNewPost = `
    <div>
      <h1>Aquí va la pantalla para agregar nuevo post☆</h1>
    </div>
  `
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewNewPost
  return divElement
}
