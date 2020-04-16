export default () => {
    const root = document.getElementById('root')
    const viewReleases = `<h1 class="titulo"> !Este seria el apartado de comunicados! </h2>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewReleases;
    root.appendChild(divElement)
  return divElement;
}