
document.addEventListener("DOMContentLoaded", event => {' '

    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyA9o_vnAaRup2c4BwwAWyWKFsVT5DMLft8",
      authDomain: "edu-line-ffdbc.firebaseapp.com",
      databaseURL: "https://edu-line-ffdbc.firebaseio.com",
      projectId: "edu-line-ffdbc",
      storageBucket: "edu-line-ffdbc.appspot.com",
      messagingSenderId: "243851799693",
      appId: "1:243851799693:web:1d67b4f9ccaf7e21c506c4",
      measurementId: "G-D5ZWECPYD2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
      loginPage(); 
     

     // Intro to the App
     function startApp() {

     document.getElementById("root").innerHTML = `
     <div id="beginning"><img src="./images/logoAppBco.png">
     </div>
     `
     }

      // FUNCION QUE CREA PAGINA INICIAL
      function loginPage() {
      
        document.getElementById("root").innerHTML = `
        <div id="logo-login"><img src="./images/logoAppBco.png">
        </div>
        <div id="logins">
        
        <p class="WelcomeFont">Bienvenidx</p>
         <MARQUEE SCROLLAMOUNT=5> <p class="teachers-font">¡Encuentra la solución a tus problemas!</p> </MARQUEE> 
        
        <input type="text"  id="login-mail" class="login-input" placeholder="Email">
        <input type="password" id="login-pwd" class="login-input" placeholder="Contraseña">
        <button id="login-btn" class="login-btn">Iniciar Sesión</button>
        <p class="teachers-font">¿No tienes cuenta? Registrate <a id="new-account">AQUÍ</a></p>
        <p class="teachers-font">------------------  O  ------------------</p>
        <span id="google-login" class="login"><img src="./images/g.png" class="icon" alt="googleLogo"><p>Iniciar Sesión con Google</p></span>
        <span id="facebook-login" class="login facebook"><img src="./images/f.png" class="icon" alt="facebookLogo"><p>Iniciar Sesión con Facebook</p></span>
        </div>
        `
    
      
        //LOGIN BUTTON WITH GOOGLE
        document.getElementById("google-login").addEventListener("click", googleLogin)
        function googleLogin() {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithRedirect(provider);
      }
      
        // LOGIN BUTTON WITH FACEBOOK
        document.getElementById("facebook-login").addEventListener("click", facebookLogin)
        function facebookLogin() {
          const provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithRedirect(provider);
      }
      
        // LOGIN BUTTON WITH EMAIL AND PASSWORD
        document.getElementById("login-btn").addEventListener("click", ()=> {
          const email = document.getElementById("login-mail").value;
          const password = document.getElementById("login-pwd").value;
          emailLogin(email, password);
        })
    
        // BUTTON LEADING TO CREATE ACCOUNT PAGE
        document.getElementById("new-account").addEventListener("click", ()=> {
          document.getElementById("root").innerHTML = `
          <div id="logo-login"><img src="./images/logoAppBco.png"></div>
          <div id="create-account">
         <big> <MARQUEE SCROLLAMOUNT=5>  <p class="teachers-font">Ingresa un correo y una contraseña para tu cuenta</p> </MARQUEE> </big>
  
          <input type="text"  id="login-mail" class="login-input" placeholder="Email">
          <input type="password" id="login-pwd" class="login-input" placeholder="Contraseña">
          <button id="login-btn" class="login-btn">Crear Cuenta</button>
          <a class="teachers-font" id="volver">Volver</a>
          </div>
          
          
          `
          // BUTTON COMING BACK 
          document.getElementById("volver").addEventListener("click", loginPage)
    
          // BUTTON CREATE ACCOUNT
          document.getElementById("login-btn").addEventListener("click", ()=>{
            const mail = document.getElementById("login-mail"). value;
            const pwd = document.getElementById("login-pwd").value;
            createAccount(mail, pwd);
          })
        })
    
        
      }
    
    
      
    
      // CREATE POST VIEW
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in
            window.socialNetwork.createNewUserStorage();
            firebase.database().ref("users/"+firebase.auth().currentUser.uid).on("value", function(snapshot){
              // console.log(snapshot.val())
              document.getElementById("root").innerHTML = `
              
              <nav class="responsive-nav">
              <div id="div-logo">
                  <img id="logo" src="./images/LogoAppV.png" alt="logo">
              </div>
              <div id="search-nav"><input id="search" type="text" placeholder="Buscar.."><a id="search-tag"><i class="fas fa-search fa-lg"></i></a><a id="new-post2" class="nav-bar-desktop"><i class="fas fa-edit fa-2x"></i></a><a id="user-profile2" class="nav-bar-desktop"><img src="./img/userLogo.png" alt="userlogo" class="icon-large nav-bar-desktop"></a></div>
             </nav>
        
             <div id="content">
                 
             </div>
             <div id="content2">
             </div>
             <div id="user-profile-side-nav">
                 <div id="user-pic"><img src="${snapshot.val().profile.profilePic}" class="user-pic" alt="userPic"></div>
                 <div id="user-name">${snapshot.val().profile.username}</div>
                 <div id="profile-info" class="side-option"><a>Perfil de Usuario</a></div>
                 <div id="friends" class="side-option"><a>Amigos</a></div>
                 <div class="side-option"><a id="logout">Cerrar Sesión</a></div>
        
             </div>
             <footer class="responsive">
                <a id="user-profile"><img src="./img/userLogo.png" alt="userlogo" class="icon-large"></a>
                <a id="new-post"><i class="fas fa-edit fa-3x"></i></a>
                <a><i id="btnUp" class="arrow material-icons">arrow_upward</i></a>
              </footer>
              `
      
          document.getElementById("btnUp").addEventListener("click", scrollWin);
      
          // REFERESH WITH LOGO
          document.getElementById("logo").addEventListener("click", ()=> {
            window.socialNetwork.printPosts(window.socialNetwork.printPostsDOM);
          })
    
    
          function scrollWin() {
            // console.log("funciona")
            // document.getElementById("content").scrollTo(0, 0);
            window.scrollTo(0,0);
          }
              
            window.socialNetwork.printPosts(window.socialNetwork.printPostsDOM);
      
    
        //SEARCH BY TAG
        document.getElementById("search-tag").addEventListener("click", ()=> {
    
          if(document.getElementById("search").value === ""){
            // console.log("no hay tags")
            return
          }
    
          let tags = document.getElementById("search").value.split(" ");
          
          printTaggedPosts(window.socialNetwork.searchTag(tags))
    
        })
        
        // BUTTON CREATE A POST PAGE
        document.getElementById("new-post").addEventListener("click", postingPage)
        document.getElementById("new-post2").addEventListener("click", postingPage)
    
      
        // NAVIGATION BAR
        document.getElementById("user-profile").addEventListener("click", ()=> {
          document.getElementById("user-profile-side-nav").style.display = "block";
        })
        document.getElementById("user-profile2").addEventListener("click", ()=> {
          document.getElementById("user-profile-side-nav").style.display = "block";
        })
      
        // SIDE NAVIGATION
        document.getElementById("content").addEventListener("click", ()=> {
          document.getElementById("user-profile-side-nav").style.display = "none";
        })
        document.getElementById("content2").addEventListener("click", ()=> {
          document.getElementById("user-profile-side-nav").style.display = "none";
        })
      
      
        // EDIT USER PROFILE
        document.getElementById("profile-info").addEventListener("click", ()=> {
          document.getElementById("user-profile-side-nav").style.display = "none";
          firebase.database().ref("users/"+firebase.auth().currentUser.uid).once("value", function(snapshot){
            document.getElementById("content").style.display = "none";
            document.getElementById("content2").style.display = "block";
            document.getElementById("content2").innerHTML = `
            <div id="profile-div">
            <p class="center">Foto de Perfil</p>
            <img class="profile-item" src="${snapshot.val().profile.profilePic}">
            <p class="center">Para cambiar su imagen de perfil ingrese un link a la nueva imagen en la casilla de abajo:</p>
            <input class="profile-item login-input" id="userpic" type="text" placeholder="Link a su nueva imagen de perfil">
            <p class="center">Nombre de Usuario</p>
            <input class="profile-item login-input" type="text" id="username" placeholder="${snapshot.val().profile.username}">
            <p class="center">Email</p>
            <input disabled class="profile-item login-input" type="text" id="usermail" placeholder="${snapshot.val().profile.email}">
            <p class="center">Especialidad</p>
            <input class="profile-item login-input" type="text" id="proficency" ${snapshot.val().profile.especialidad ? "placeholder='"+snapshot.val().profile.especialidad+"'" : "placeholder='Profesor de..'"}>
            <button class="teachers-font" type="button" id="update-profile">Guardar cambios</button>
            <a class="teachers-font" id="profile-update-cancel">Cancelar</a>
          
            </div>
            
            `
    
          })
          // BUTTON THAT UPDATES THE PROFILE
          document.getElementById("update-profile").addEventListener("click", ()=> {
            let username = document.getElementById("username").value;
            let proficency = document.getElementById("proficency").value;
            let userPic = document.getElementById("userpic").value;
            window.socialNetwork.updateProfile(username, proficency, userPic);
          })
    
          // BUTTON CANCELS PROFILE UPDATE AND RETURNS TO POSTS PAGE
          document.getElementById("profile-update-cancel").addEventListener("click", ()=> {
            document.getElementById("content").style.display = "block";
            document.getElementById("content2").style.display = "none";
            window.scrollTo(0,0);
          })
      
        })
      
        document.getElementById("logout").addEventListener("click", logout)
       
            })
        } else {
          // No user is signed in.
          loginPage();
        }
      });
    
      // TO VERIFY THAT THE AUTHENTICATION WENT WELL
      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        const user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode} ${errorMessage}`)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    
    })
    
    function postingPage () {
    
        document.getElementById("content").style.display = "block";
        document.getElementById("content2").style.display = "none";
        document.getElementById("content").innerHTML = `
        <div><input class="post-input" type="text" id="post-tags" placeholder="#tags #etiquetas #máximo3"></div>
        <div class="select-div" ><select class="post-input" id="privacy-setting">
        <option value="" disabled selected>Seleccione la privacidad de su post</option>
        <option value="public">Post Público</option>
        <option value="private">Post Privado(solo amigos)</option>
        </select></div>
        <div class="input-div"><textarea class="post-input" type="text" id="post-text"></textarea></div>
        <div class="post-and-cancel">
        <button type="button" id="cancel">Cancelar</button>
        <button type="button" id="post-it">Crear publicación</button>
        </div>
        
        `
        //BUTTON THAT GENERATES POST
        document.getElementById("post-it").addEventListener("click", ()=> {
          const tags = document.getElementById("post-tags").value;
          const privacy = document.getElementById("privacy-setting").value;
          const userId = firebase.auth().currentUser.uid;
          const post_text = document.getElementById("post-text").value;
    
          if (post_text === "" || tags === "" || privacy === "") {
            alert("Por favor, ingrese todos los campos requeridos: ingrese al menos una etiqueta y especifique la privacidad de su mensaje")
            return
          }
          submitpost(tags, privacy, userId, post_text)
        } )//este es el de submit post
    
        //BUTTON THAT RETURNS TO THE POSTS
        document.getElementById("cancel").addEventListener("click", ()=> {
          window.socialNetwork.printPosts(window.socialNetwork.printPostsDOM)
          window.scrollTo(0,0);
    
        })
    
        
    }
    
    
    
    
    // POST ARRAY
    function printTaggedPosts(posts) {
      document.getElementById("content").innerHTML = "";
        for (let post in posts){
          // console.log(post)
        // console.log(Object.values(snapshot.val()[post].comments).length)
        document.getElementById("content").innerHTML += `
        <div class="post div-responsive" id="caja${post}">
               <div class="post-header">
                   <span><img src="${posts[post].authorPic ? posts[post].authorPic : './img/userLogo.png'}" class="user-pic-post" alt="userPic"><p>${posts[post].author} ${posts[post].especialidad ? "- "+posts[post].especialidad : ""}</p></span>
               </div>
               <div class="post-content">
                <span>${posts[post].content}</span>
               </div>
               <div class="options">
               <a class="like" id=${post}><i class="material-icons">star_border</i><span>${posts[post].likes ? Object.values(posts[post].likes).length : "0"}</span></a>
               <a class="comments" id="comments${post}"><i class="material-icons">comment</i><span>${posts[post]["comments"] ? Object.values(posts[post]["comments"]).length : "0"}</span></a>
               <a class="edit-post teachers-font">Editar</a>
               <a id="delete-${post}" class="remove-post teachers-font">Eliminar</a>
               <a class="teachers-font create-comment" id="create-comment-${post}">Comentar</a>
               </div>
               <div id="create-comments-section-${post}"></div>
               <div class="comments-section div-responsive" id="comments-section-${post}">
               
               </div>
        </div>
        `
    
        document.getElementById("comments-section-"+post).style.display = "none"
    
        if (posts[post].likes !== undefined && Object.keys(posts[post].likes).indexOf(firebase.auth().currentUser.uid) !== -1) {
            document.getElementById(post).innerHTML = `
            <i class="material-icons">star</i><span>${posts[post].likes ? Object.values(posts[post].likes).length : "0"}</span>
            `
        }
        // console.log("creando funciones")
        let likeButtons = document.getElementsByClassName("like");
        for (let i = 0; i < likeButtons.length; i++) {
            likeButtons[i].addEventListener("click", setLikePost)
        }
        let commentsButtons = document.getElementsByClassName("comments");
        for (let i = 0; i < commentsButtons.length; i++) {
            commentsButtons[i].addEventListener("click", showComments)
        }
        let createCommentsButtons = document.getElementsByClassName("create-comment");
        for (let i = 0; i < createCommentsButtons.length; i ++) {
            createCommentsButtons[i].addEventListener("click", createComment)
        }
    
        let deletePost = document.getElementsByClassName("remove-post");
        for (let i = 0; i < deletePost.length; i ++) {
            deletePost[i].addEventListener("click", removePost)
        }
    
      
    
        // document.getElementById(post).addEventListener("click", setLikePost)
        // document.getElementById("comments"+post).addEventListener("click", showComments)
        
      }
    }