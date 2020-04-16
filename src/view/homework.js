export default () => {
    const viewHomework = `
    <div class="homework">
    <h1>TAREAS</h1>
    <p>Semana 6 - 10 Abril</p>
  </div>
    <table class="table">
      <thead class="weekdays">
        <th>L</th>
        <th>M</th>
        <th>M</th>
        <th>J</th>
        <th>V</th>
      </thead>
      </thead>
      <tbody>
        <tr class="homework-container">
          <td data-label="L">Matemáticas:<br>Resolver las sumas y restas de la libreta</td>
          <td data-label="M">Español:<br>Escribir las oraciones de la pag 12</td>
          <td data-label="M">Ciencias<br>naturales: Escribir 3 reglas del cuidado del agua</td>
          <td data-label="J">Español:<br>Escribir 10 oraciones interogativas</td>
          <td data-label="V">Inglés:<br>Escribir los números del 1 al 10</td>
        </tr>
        <tr class="homework-container2">
          <td data-label="L">Español:<br>Escribir 10 palabras que empiecen con B</td>
          <td data-label="M">Ciencias<br>naturales: Hacer 2 dibujos del ciclo de vida</td>
          <td data-label="M">Inglés:<br>Escribir los colores del arcoíris</td>
          <td data-label="J">Matemáticas:<br>Repasar las tablas de multiplicar </td>
          <td data-label="V"></td>
        </tr>
      </tbody>
    </table>
      `
      `
      <div class="homework">
    <p>Semana 30 Marzo - 3 Abril</p>
 </div>
  <table class="table">
    <thead class="weekdays">
      <th>L</th>
      <th>M</th>
      <th>M</th>
      <th>J</th>
      <th>V</th>
    </thead>
    <tbody>
      <tr class="homework-container">
        <td data-label="L">Matemáticas:<br>las divisiones de la libreta</td>
        <td data-label="M">Inglés:<br>Escribir los miembros de la familia</td>
        <td data-label="M">Español:<br>Traer 3 recortes de animales</td>
        <td data-label="J">Español:<br>Escribir un breve cuento</td>
        <td data-label="V">Inglés:<br>Repasar el alfabeto</td>
      </tr>
      <tr class="homework-container2">
        <td data-label="L">Español:<br>Leer la página 25 y realizar un dibujo</td>
        <td data-label="M"></td>
        <td data-label="M">Inglés:<br>Resolver los ejercicios spelling unit1</td>
        <td data-label="J">Matemáticas:<br>Resolver las sumas de la página 30 </td>
        <td data-label="V"></td>
      </tr>
    </tbody>
  </table>
      `

    const divElement = document.createElement('div')
    divElement.innerHTML = viewHomework;
  
    return divElement;
  }