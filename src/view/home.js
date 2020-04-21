export default () =>{
  const viewHome = `
      <h1>feed lol</h1>
      <div id="posts"> </div>  
  `
  //nodos
  const divElement = document.createElement('div')
  const footer = document.querySelector('.footer')
  divElement.innerHTML = viewHome

  //initializing firestore 
  let db = firebase.firestore() 
  let postsRef = db.collection('posts')

  //calling the docs and adding to the html 
  postsRef.onSnapshot(snap => {
    let p = document.querySelector('#posts')
    p.innerHTML = ''
    snap.forEach(doc => {
        let div = `<div>
            <p>${doc.data().date}</p>
            <img width="200" src="${doc.data().postimg}" />
            <p>${doc.data().description}</p>
            <p>${doc.data().location}</p>
        </div>`
        let nodo = document.createElement('div')
        nodo.innerHTML = div
        p.appendChild(nodo)

    })
})


  return divElement
}
