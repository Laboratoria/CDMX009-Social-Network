export default () => {
    const userName = "Humpty Alexander Dumpty";
    const student = "Gato con botas";
    const school = "Escuela de la vida";
    const grade = "3";
    const group = "A";
    const teacher = "Shrek y Fiona";
    const comment = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic";
    const likeCount ="15";
    const answers ="";
    const viewProfile = `
    </section>
    <section class="commentBox">
    <div class="containerbx">
    <div>
       <div class="comment">
        <div class="editIcon">
        <img src="img/edit.svg" href="/#">
       </div>
           <p>${comment}</p>
       </div>
   <div>
       <div class="likes">
           <img src="img/like.svg">${likeCount}
       </div>
        <div class="answer"> 
          <div class="editIcon">
           <img src="img/edit.svg" href="/#">
           </div>
            <p>Comentarios${answers}</p>
       </div>
       <div class="likes">
           <img src="img/like.svg">${likeCount}
       </div>
 </div>
 </div>
 </div>
</section>
    `
    
  
    const divElement = document.createElement('div')
    divElement.innerHTML = viewProfile;
    return divElement;
  }
