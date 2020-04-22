import { components } from "../view/index.js";

const changeView = (route) => {
  const root = document.getElementById("root");
  const footer = document.getElementById("footer-container");
  const header = document.getElementById("header-container");
  root.innerHTML = "";
  footer.innerHTML = "";
  header.innerHTML = "";
  switch (route) {
    case "#/": {
      header.appendChild(components.Header());
      return root.appendChild(components.Home());
    }
    case "": {
      root.appendChild(components.Splash());
    }
    case "#/calendar": {
      header.appendChild(components.Header());
      root.appendChild(components.Calendar());
      return footer.appendChild(components.Footer());
    }
    case "#/homework": {
      header.appendChild(components.Header());
      root.appendChild(components.Homework());
      return footer.appendChild(components.Footer());
    }
    case "#/parentPanel": {
      header.appendChild(components.Header());
      root.appendChild(components.ParentPanel());
      return footer.appendChild(components.Footer());
    }
    case "#/releases": {
      header.appendChild(components.Header());
      root.appendChild(components.Releases());
      return footer.appendChild(components.Footer());
    }
    case "#/login": {
      return root.appendChild(components.Login());
    }
    case "#/SignUp": {
      return root.appendChild(components.SignUp());
    }
    case "#/profile": {
      header.appendChild(components.Header());
      root.appendChild(components.Profile());
      return footer.appendChild(components.Footer());
    }
    default:
      break;
  }
};

export { changeView };
