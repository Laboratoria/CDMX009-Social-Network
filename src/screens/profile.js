// imagen usuario
// nickname
// breve descripcion de lo que quiero aprender
// breve descripcion de lo que quiero enseñar

// main nodes
let root = document.querySelector('#root');
let btns = document.querySelectorAll('.btn');
// aboutView
function renderAbout() {
    let aboutView = `
    <div>
      <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut amet alias nobis aut voluptatibus ipsa non optio, odit illum in velit          fugiat, fugit voluptatum nihil ea. Odit, non sed.</p>
    </div>
  `
    root.innerHTML = aboutView;
}

export default renderAbout