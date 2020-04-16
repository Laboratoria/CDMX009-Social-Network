export default () => {
    const viewReleases = `
    <div class="release">
  <h2>COMUNICADOS</h2>
</div>
<section class="releases-container">
   <div class="release-1">
       <p>3 de abril del 2020</p>
      Se les comunica a los padres de familia, 
      que el día 22 de mayo se llevará acabo en
      el auditorio el concurso de talentos, 
      a las 10:00 am.
   </div>
   <div class="release-2">
      <p>18 de marzo del 2020</p>
      Se les comunica a los padres de familia, 
      que el viernes 27 de marzo será la excursión 
      al Papalote Museo del niño, favor de firmar 
      el consentimiento.
   </div>
   <div class="release-3">
      <p>7 de febrero del 2020</p>
      Se les comunica a los padres de familia, 
      que el lunes 24 de febrero se tomará la foto grupal.
   </div>
</section>
      `

    const divElement = document.createElement('div')
    divElement.innerHTML = viewReleases;
  
    return divElement;
  }