<<<<<<< HEAD
export default () => {
    const viewSplash = `
   <div class= "splash">
   <img class="fade-in" src="img/LogoBlancoDigiTarea.png">
   </div> 
    `
  
    const divElement = document.createElement('div')
    divElement.innerHTML = viewSplash;
  
    return divElement;
  }
  
  
  
  
  document.addEventListener('DOMContentLoaded', (e)=>{
      setTimeout(()=>{
          const splash = document.querySelector('.splash');
          window.open('#/login', '_self');
      splash.classList.add('display-none');
    }, 5000);
  })
=======
/*export default () => {
  const viewSplash = `
 <div class= "splash">
 <img class="fade-in" src="img/LogoBlancoDigiTarea.png">
 </div> 
  `

  const divElement = document.createElement('div')
  divElement.innerHTML = viewSplash;

  return divElement;
}




document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        const splash = document.querySelector('.splash');
        window.open('#/login', '_self');
    splash.classList.add('display-none');
  }, 5000);
})*/
>>>>>>> 3b09c74eed919e8089b4e858ef36114f143ef2c5
