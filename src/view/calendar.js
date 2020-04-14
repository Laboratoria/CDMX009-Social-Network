export default () => {
    const viewCalendar = `
    <h2 class="titulo"> !Este seria el calendario! </h2>
    <img
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewCalendar;

    return divElement;
}