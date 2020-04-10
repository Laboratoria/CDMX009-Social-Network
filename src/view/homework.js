export default () => {
    const viewHomework = `<h1 class="titulo"> !Este seria la tarea! </h2>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewHomework;

    return divElement;
}