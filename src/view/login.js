export default () => {
    const viewLogin = `
    <img src="imagenes/portada.jpg" alt="">
<input type="text" name="e-mail" value="">
<input type="password" name="e-mail" value="">
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewLogin;

    return divElement;
}