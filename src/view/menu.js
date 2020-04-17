export default () => {
    const viewConexions = `
<h1>hola</h1>
    `;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewConexions;
    return divElemt;
}