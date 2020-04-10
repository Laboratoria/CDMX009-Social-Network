export default () => {
    const viewParentPanel = `<h1 class="titulo"> !Este seria el panel de padres! </h2>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewParentPanel;

    return divElement;
}