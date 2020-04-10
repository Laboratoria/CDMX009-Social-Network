export default () => {
    const viewHome = `
    <header>
    <img src="imag/LogoBlancoDigiTarea.png" alt="" class="home">
    <img src="imagenes/Usuario.svg" alt="" class="imagenUser">
</header>

<div class="DegreeAndGroup">
<select class="degree" name="">
<option value="">1ro</option>
<option value="">2do</option>
<option value="">3ro</option>
<option value="">4to</option>
<option value="">5to</option>
<option value="">6to</option>
</select>
<select class="group" name="">
<option value="">A</option>
<option value="">B</option>
</select>
</div>

<div class="mainConteiner">
<div class="releases">
<a href="#/releases">Sustituye por imagen altavoz<img src="imagenes/596092.svg" alt=""></a>
<p>Comunicado</p>
</div>
<div class="homework">
<a href="#/homework">Sustituye por imagen de cuaderno<img src="imagenes/1916095.svg" alt=""></a>
<p>Tarea</p>
</div>
<div class="parentPanel">
<a href="#/parentPanel">Sustituye por imagen de dialogo<img src="imagenes/1078011.svg" alt=""></a>
<p>Panel de padres</p>
</div>
<div class="calendar">
<a href="#/calendar">Sustituye por imagen de calendario<img src="imagenes/1171977.svg" alt=""></a>
<p>Calendario</p>
</div>
</div>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewHome;

    return divElement;
}