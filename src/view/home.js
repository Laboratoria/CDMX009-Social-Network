export default () =>{
  const viewHome = `
      <h1>Aquí va el feed ☆</h1>
  `
  //nodos
  const divElement = document.createElement('div')
  const footer = document.querySelector('.footer')

  function addFooter(){
    if(footer.classList.contains('no-footer')===true){
      footer.classList.remove(no-footer)
    }
  window.addEventListener('load',addFooter())
  }
  divElement.innerHTML = viewHome
  return divElement
}
