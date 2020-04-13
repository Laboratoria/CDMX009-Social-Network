export default () => {
  const viewCalendar = `<h1 class="titulo"> !Este seria el calendario! </h2>
    `
  const divElement = document.createElement('div')
  divElement.innerHTML = viewCalendar;

  return divElement;
}