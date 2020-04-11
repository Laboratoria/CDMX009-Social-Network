//importar lo de firebase y controladores?

//Nodos
let root = document.querySelector('#root')

//Bienvenida (welcomeView)
export const renderWelcome = () => {
    let welcomeView = `<div class = "gridContainer">
                            <header>
                                <div class = "bichilogo"> Bichigram </div>
                            </header>
                            <main> 
                                <div class = "about">   
                                    <h3> The social network to knew all about arthropods! </h3>
                                </div>
                                <div class = "formContainer">
                                    <form class = "inputForm">
                                        <input class = "registerInput" type = "email" placeholder = "Email" required> 
                                        <input class = "registerInput" type = "password" placeholder = "Password" required> 
                                        <button class= "btn" id ="loginFeed"> Log in </button>
                                    </form>    
                                </div>  
                            </main> 
                            <footer>
                                <div class= "createAccount">
                                    <p> Don't have an account? <a href = "#/register" class = "btn" id = "signup"> Sign up here! </a></p>
                                </div>
                            </footer>
                        </div>`
                        root.innerHTML = welcomeView;
                        //nodo
                        let btns = document.querySelectorAll('.btn')
                        //listener
                        btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
}
//Registro (signupView)
export const renderSignup = () =>{
    let signupView = `<div class = "gridContainer">
                            <header>
                                <div class = "bichilogo"> Bichigram </div>
                            </header> 
                            <main>
                                <div class = "about">
                                    <h3> Sign Up!</h3>
                                </div>
                                <div class = "formContainer">
                                    <form class = "inputForm">
                                        <input type="file" id="img" name="img" accept="image/*">
                                        <input class = "registerInput" type = "text" placeholder = "Username" required>
                                        <input class = "registerInput" type = "email" placeholder = "Email" required> 
                                        <input class = "registerInput" type = "password" placeholder = "Password" required> 
                                        <button class= "btn" id = "signupFeed"> Sign up! </button>
                                    </form>
                                </div>
                            <footer>
                                <div class = "createAccout">
                                    <p> Sign up with </p>
                                </div>
                                <div class = "fbYgoogle">
                                    <button> fb </button>
                                    <button> google </button>
                                </div>
                            </footer>
                        </div>`
                        root.innerHTML = signupView;
                        //nodo
                        let btns = document.querySelectorAll('.btn')
                        //listener
                        btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
}
//Feed (feedView)
export const renderFeed = () =>{
    let feedView = `<div class = "gridContainer">
                        <header>
                            <div class = "bichilogoFeed"> Bichigram </div>
                            <div class = "dropDown">
                                <button class="dropbtn">Dropdown 
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Notificaciones</a>
                                    <a href="#">Cerrar Sesión</a>
                                </div>
                            </div>
                        </header>
                        <main>
                            <div class = "filters">
                                <button> Arácnidos </button>
                                <button> Insectos </button>
                                <button> Crustáceos </button>
                                <button> Miriápodos</button>
                            </div>
                            <div class = "publication">publications
                            </div>
                            <div class = "reactions">
                                <button> me insecta </button>
                                <button> comment </button>
                            </div>
                            <div class = "comments"> Comments
                            </div>
                        </main>
                        <footer>
                            <div class = "feedOptions">
                            <button class = "btn" id = "home"> home </button>
                            <button class = "btn" id = "share"> share </button>
                            <button class = "btn" id = "profile"> profile </button>
                            </div>
                        </footer>
                    </div>`
                    root.innerHTML = feedView;
                    //nodo
                    let btns = document.querySelectorAll('.btn')
                    //listener
                    btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
}
//Compartir (shareView)
export const renderShare = () =>{
    let shareView = `<div class = "gridContainer">
                        <header>
                            <div class = "bichilogoFeed"> Bichigram </div>
                        </header>
                        <main>
                            <form class = "inputForm">
                                <input type="file" id="img" name="img" accept="image/*">
                                <input class = "registerInput" type = "text" placeholder = "Descripción" required>
                                <input class = "registerInput" type = "text" placeholder = "Locación" required>
                                <button class= "btn" id = "btnShare"> Share </button>
                            </form>
                        </main>
                        <footer>
                            <div class = "feedOptions">
                            <button class = "btn" id = "homeSH"> home </button>
                            <button class = "btn" id= "profileSH"> profile </button>
                            </div>
                        </footer>
                    </div>`
                    root.innerHTML = shareView;
                    //nodo
                    let btns = document.querySelectorAll('.btn')
                    //listener
                    btns.forEach(btn=>btn.onclick=e=>router(e.target.id))
    
}
//Perfil (profileView)
export const renderProfile = () =>{
    let profileView = `<div>perfil</div>
                         <footer>
                            <div class = "feedOptions">
                                <button class = "btn" id = "homeP"> home </button>
                                <button class = "btn" id= "shareP"> share </button>
                            </div>
                        </footer>
    `
    root.innerHTML = profileView;
    //nodo
    let btns = document.querySelectorAll('.btn')
    //listener
    btns.forEach(btn=>btn.onclick=e=>router(e.target.id))

}
//router
function router(route){
    console.log(route)
    switch(route){
      case "signup":
        renderSignup()
        break;
      case "loginFeed":
        renderFeed()
        break;
      case "signupFeed":
        renderFeed()
        break;
      case "share":
        renderShare()
        break;
      case "homeSH":
        renderFeed()
        break;
      case "profileSH":
        renderProfile()
        break;
      case "btnShare":
        renderFeed()
        break;
      case "home":
        renderFeed()
        break;
      case "profile":
        renderProfile()
        break;
      case "homeP":
        renderFeed()
        break;
      case "shareP":
        renderShare()
        break;
      default:
        renderWelcome()
        break;
           }
  };


  
  // init
  router();