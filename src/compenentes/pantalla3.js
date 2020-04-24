 
 let root = document.querySelector('#root');
 export const welcome = (user) => {
     let renderWelcome = `
      <div id='encabezado' class= 'encabezado'
       <p class='titulo'> &lt;CodeWoman&gt; </p>
       </div>
         <input class='inicio' type='button' value='inicio'/>
         <input class='perfil' type='button' value='Perfil'/>
         <input class='salir' type='button' value='Salir'/>
             <p class='bienUser'> Bienvenida ${user.displayName}</p>
             <img class='photo' src=${user.photoURL} />
            <div class='containerPost'>
                 <input class='comp' type='textarea' placeholder='¿Que quieres compartir?'>       
                 <input type='image'class='upPhoto id='upPhoto' src='/img/logoPhoto.png'>
              <div id='myModal' class='myModal'>
                 <div class='modalContent'>
                   <span class='close' id='close'> &times;</span>
                   <input type='file' id='myfile' class='myfile' name='myfile'>
                   <input class='save' id='save' type='button' value='Publicar'>
                  </div>   
               </div> 
                   <input class='share' type='button' value='Compartir'/> 
                 
             </div>
     `;
     root.innerHTML = renderWelcome  
  //Creando modal para cargar fotos
      let modal = document.querySelector('#myModal');
      let btn = document.querySelector('.upPhoto');
      let span = document.querySelector('.close');

      btn.onclick = function (){
        modal.style.display = 'block';
      }

      span.onclick = function (){
        modal.style.display = 'none';
      }

      window.onclick = function (event){
        if (event.target == modal){
          modal.style.display = 'none';
        }
      }
   
    //Creando funcion para cargar imagenes a storage
    let fileInput = document.querySelector('#myfile');
    let addBtn = document.querySelector('#save')

    let url
    //Listeners
    fileInput.onchange = e => {
      let file = e.target.files[0]
      firebase.storage().ref("images").child(file.name).put(file)
      .then(snap => {
        console.log('Imagen cargada');
        return snap.ref.getDownloadURL()
      })
      .then (link =>{
          url = link
          let img = document.createElement('img')
          img.src = link
          //document.body.appendChild(img)
      })
    }
}
  
