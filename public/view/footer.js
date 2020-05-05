export default () => {
  const viewFooter = `<footer id="footer"><div>
<ul>
  <li><a href="#/calendar"><img src="img/calendar.svg"></a></li>
  <li><a href="#/homework"><img src="img/homework.svg"></a></li>
  <li><a href="#/"><img src="img/home.svg"></a></li>
  <li><a href="#/parentPanel"><img src="img/panel.svg"></a></li>
  <li><a href="#/releases"><img src="img/release.svg"></a></li>
</ul>
</div>
</footer>`;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewFooter;

  return divElement;
};
