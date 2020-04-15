export default () => {
    const root = document.getElementById('root')
    const viewCalendar = `
    <h2 class="titleCalendar"> CALENDARIO </h2>
    <div class="mainConteinerCalendar">
    <img class="calendar" src="https://github.com/IrisFyD/CDMX009-Social-Network/blob/master/src/img/Calendar-01.png?raw=true" alt="">
    <img class="calendar" src="https://github.com/IrisFyD/CDMX009-Social-Network/blob/master/src/img/Calendar-02.png?raw=true" alt="">
    </div>
    <div class="infoConteinerCalendar">
    <img class="markerStartClasses" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQ4%0D%0ALjAxMSA0NDguMDExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDguMDExIDQ0%0D%0AOC4wMTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM4%0D%0ALjczMSwyMDkuNDYzbC00MTYtMTkyYy02LjYyNC0zLjAwOC0xNC41MjgtMS4yMTYtMTkuMTM2LDQu%0D%0ANDhjLTQuNjQsNS42OTYtNC44LDEzLjc5Mi0wLjM4NCwxOS42NDhsMTM2LjgsMTgyLjQNCgkJCWwt%0D%0AMTM2LjgsMTgyLjRjLTQuNDE2LDUuODU2LTQuMjU2LDEzLjk4NCwwLjM1MiwxOS42NDhjMy4xMDQs%0D%0AMy44NzIsNy43NDQsNS45NTIsMTIuNDQ4LDUuOTUyYzIuMjcyLDAsNC41NDQtMC40OCw2LjY4OC0x%0D%0ALjQ3Mg0KCQkJbDQxNi0xOTJjNS42OTYtMi42MjQsOS4zMTItOC4yODgsOS4zMTItMTQuNTI4UzQ0%0D%0ANC4zOTUsMjEyLjA4Nyw0MzguNzMxLDIwOS40NjN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+%0D%0ADQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="">
    <p class="markerArrow"> Inico de curso </p>
    <img class="markerEndClasses" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQ4%0D%0ALjAxMSA0NDguMDExIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDguMDExIDQ0%0D%0AOC4wMTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM4%0D%0ALjczMSwyMDkuNDYzbC00MTYtMTkyYy02LjYyNC0zLjAwOC0xNC41MjgtMS4yMTYtMTkuMTM2LDQu%0D%0ANDhjLTQuNjQsNS42OTYtNC44LDEzLjc5Mi0wLjM4NCwxOS42NDhsMTM2LjgsMTgyLjQNCgkJCWwt%0D%0AMTM2LjgsMTgyLjRjLTQuNDE2LDUuODU2LTQuMjU2LDEzLjk4NCwwLjM1MiwxOS42NDhjMy4xMDQs%0D%0AMy44NzIsNy43NDQsNS45NTIsMTIuNDQ4LDUuOTUyYzIuMjcyLDAsNC41NDQtMC40OCw2LjY4OC0x%0D%0ALjQ3Mg0KCQkJbDQxNi0xOTJjNS42OTYtMi42MjQsOS4zMTItOC4yODgsOS4zMTItMTQuNTI4UzQ0%0D%0ANC4zOTUsMjEyLjA4Nyw0MzguNzMxLDIwOS40NjN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+%0D%0ADQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="">
    <p class="MarkerArrow"> Fin de curso </p>
    <img class="markerVacation" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDcg%0D%0AMTIzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmODA4MDt9PC9zdHlsZT48L2RlZnM+PHRp%0D%0AdGxlPlJlY3Vyc28gMjwvdGl0bGU+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxn%0D%0AIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lk%0D%0AdGg9IjI0NyIgaGVpZ2h0PSIxMjMiIHJ4PSIyMy40NiIvPjwvZz48L2c+PC9zdmc+" alt="">
    <p class=""> Vacaciones </p>
    <img class="markerTest" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDcg%0D%0AMTIzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzgzYTRmZjt9PC9zdHlsZT48L2RlZnM+PHRp%0D%0AdGxlPlJlY3Vyc28gMzwvdGl0bGU+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxn%0D%0AIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lk%0D%0AdGg9IjI0NyIgaGVpZ2h0PSIxMjMiIHJ4PSIyMy40NiIvPjwvZz48L2c+PC9zdmc+" alt="">
    <p class=""> Periodo de exámenes </p>
    <img class="markerDayOf" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjMg%0D%0AMTIzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZTM2Yjt9PC9zdHlsZT48L2RlZnM+PHRp%0D%0AdGxlPlJlY3Vyc28gNDwvdGl0bGU+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxn%0D%0AIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lk%0D%0AdGg9IjEyMyIgaGVpZ2h0PSIxMjMiIHJ4PSI2MS41Ii8+PC9nPjwvZz48L3N2Zz4=" alt="">
    <p class=""> Dias feriados </p>
    </div>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewCalendar;

    root.appendChild(divElement)

    return divElement;
}