var element = document.querySelector("summarie-star");
var isLogged = localStorage.getItem("login");
console.log(isLogged);

if(parseInt(localStorage.getItem("login")) === 1){
    console.log("oi");
    changeNav();
}

function changeNav(){
    var elemento = document.getElementById("nav-login");
    elemento.remove();
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
    element.style.backgroundColor = "green";
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
    var adicionar = `<div class='discussion'><div class='disc-avatar'><img src='img/default.jpg' alt='user avatar' srcset=''>User</div><div class='disc-title'>${localStorage.getItem("postTitle")}</div><div class='disc-comments'><i class='fa-solid fa-comments'></i>0</div></div>`;
    var refreshForum = adicionar + forum;
    document.getElementById("forum-box").innerHTML = refreshForum;
}