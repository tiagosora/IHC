var element = document.querySelector("summarie-star");
var isLogged = localStorage.getItem("login");
console.log(isLogged);

if(parseInt(localStorage.getItem("login")) === 1){
    console.log("oi");
    changeNav();
}

function changeNav(){
    // var elemento = document.getElementById("nav-login");
    // elemento.remove();
    // var login = document.getElementById("main-nav-bar").innerHTML;
    // var colar = `<div class='navBarButton w3-button w3-hide-small font-menu  w3- w3-right w3-hover-white' style='margin-right: 40px; padding: 25px 16px' id="nav-login"><i class="fa-solid fa-circle-user"></i>'</div>`
    // document.getElementById("main-nav-bar").innerHTML = login + colar;
    // const originalString = document.getElementById("main-nav-bar").innerHTML;

    // const strippedString = originalString.replace('data-toggle="modal"', "");
    // console.log(strippedString)
    // const strippedString2 = originalString.replace('data-target="#myModalx1"', "");
    document.getElementById("nav-login").removeAttribute("data-target")
    document.getElementById("nav-login").setAttribute("onclick","location.href='perfil.html';")
    document.getElementById("nav-login").innerHTML = '<i class="fa-solid fa-circle-user" style="font-size: 30px;"></i>'

}

function checkLogin(){
    if(parseInt(localStorage.getItem("login")) === 1){
        console.log("Logado");
        return true;
    }else{
        console.log("Nao logado");
        return false;
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); // retirar o *0
}

async function login(element){
    isLogged = true
    localStorage.setItem("login", 1);
    loginAnime(element);

}

async function loginAnime(element){
    element.innerText = "Entring ";
    for(i = 0; i < 3;i++){
        element.innerText+=". "
        await delay(500);
    }
    await delay(1000);
    element.style.backgroundColor = "#2B475C";
    element.innerText = "Sessão iniciada";
    await delay(1000);
    location.reload();

}

function fav(element){
    if(checkLogin() === true){
        console.log(isLogged);
        console.log(element);
        var icon = element.children[0];
        if(icon.className == "fa-solid fa-star fa-2xl"){
            icon.className = "fa-regular fa-star fa-2xl"
        }else{
            icon.className = "fa-solid fa-star fa-2xl"
        }
    }
}

async function getInfosPost(){
    var postTitle = document.getElementById("postTitle");
    var postContent = document.getElementById("postContent");

    localStorage.setItem("postTitle", postTitle.value);
    localStorage.setItem("postContent", postContent.value);
    await delay(500);
    closePost();
    makeThePost();

}

function makeThePost(){

    var forum = document.getElementById("forum-box").innerHTML;
    var adicionar = `<div onclick="location.href='discussion.html';" class='discussion'><div class='disc-avatar'><img src='img/default.jpg' alt='user avatar' srcset=''>User</div><div class='disc-title'>${localStorage.getItem("postTitle")}</div><div class='disc-comments'><i class='fa-solid fa-comments'></i>0</div></div>`;
    var refreshForum = adicionar + forum;
    document.getElementById("forum-box").innerHTML = refreshForum;
}

function premiumContentDisc(){
    if(checkLogin() == true){
        console.log("sucess");
        location.href='forum1.html';
    }else{
        console.log("Not logged in");
        document.getElementById("modalPost").style.display = "block";
        document.getElementById("alert").style.display = "flex";
    }
}

function premiumContentSum(){
    if(checkLogin() == true){
        console.log("sucess");
        fav()
    }else{
        console.log("Not logged in");
        document.getElementById("modalPost").style.display = "block";
        document.getElementById("alert").style.display = "flex";
    }
}

// FORUM FUNCTIONS
var comentario;
async function comment(){
    var commentsBox = document.getElementById("comments").innerHTML;
    comentario = document.getElementById("comentario").value;
    console.log(comentario);

    var holdHTML = `<div class='comentario'> <div class='user'> <div class='avatar img' style='background-image:url(img/default.jpg);'> </div> <div class='name' style='text-align:center;'><p style='font-size: medium;'>User</p></div> </div> <div class='conteudo'> <div class='conteudo-box'>${comentario}</div> </div>`; 
    console.log(holdHTML);
    var saveOriginal1 = document.getElementById("botaocomentar").style.backgroundColor;
    var saveOriginal2 = document.getElementById("botaocomentar").style.color;
    var saveOriginal3 = document.getElementById("botaocomentar").innerHTML;


    document.getElementById("botaocomentar").style.backgroundColor= "rgb(187, 51, 187)";
    document.getElementById("botaocomentar").style.color = "rgb(78, 3, 78)";
    document.getElementById("botaocomentar").innerHTML = "Sending";

    for(let i = 0; i < 3; i++){
        await delay(400);
        document.getElementById("botaocomentar").innerHTML+=". ";
    }
    await delay(500);

    commentsBox = commentsBox + holdHTML;
    document.getElementById("comments").innerHTML = commentsBox;
    document.getElementById("comentario").value = "";
    document.getElementById("botaocomentar").style.backgroundColor=saveOriginal1;
    document.getElementById("botaocomentar").style.color = saveOriginal2;
    document.getElementById("botaocomentar").innerHTML = saveOriginal3;
}