export default () =>{
  const viewNewPost = `<div class = "gridContainer">
  
  <main>
      <form class = "inputForm">
          <input type="file" id="img" name="img" accept="image/*">
          <input class = "registerInput" type = "text" placeholder = "Descripción" required>
          <input class = "registerInput" type = "text" placeholder = "Locación" required>
          <button class= "btn" id = "btnShare"> Share </button>
      </form>
  </main>
  <footer>
      <div class = "feedOptions">
      <button class = "btn" id = "homeSH"> home </button>
      <button class = "btn" id= "profileSH"> profile </button>
      </div>
  </footer>
</div>`
  //nodos
  const divElement = document.createElement('div')
  divElement.innerHTML = viewNewPost
  return divElement
}





