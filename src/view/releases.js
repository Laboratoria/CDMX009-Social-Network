export default () => {
    const viewReleases = `<h1 class="titulo"> !Este seria el apartado de comunicados! </h2>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewReleases;

    return divElement;
}