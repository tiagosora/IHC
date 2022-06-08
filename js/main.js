var element = document.querySelector("summarie-star");
var isLogged = localStorage.getItem("login");
console.log(isLogged);

if(parseInt(localStorage.getItem("login")) === 1){
    console.log("oi");
    changeNav();
}

function changeNav(){
    document.getElementById("nav-login").removeAttribute("data-target")
    document.getElementById("nav-login").setAttribute("onclick","location.href='perfil.html';")
    document.getElementById("nav-login").innerHTML = '<i class="fa-solid fa-circle-user" style="font-size: 30px;"></i>'
    document.getElementById("nav-login").setAttribute("onclick", "window.location = 'perfil.html'")
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

function tostaVerde(stringEntrada) {
    var x = document.getElementById("snackbar");
    x.innerHTML = '<i class="fa-solid fa-check"></i> '+stringEntrada;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
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
            tostaVerde("Summary added to favourites!")
        }
        
    }else{
        console.log("Not logged in");
        document.getElementById("modalPost").style.display = "block";
        document.getElementById("alert").style.display = "flex";
    }
}

globalThis.banana = new HTMLElement();

function fav_sum(element){
    if(checkLogin() === true){
        if(element.className == "fa-solid fa-star fa-2xl"){
            banana = element;
            console.log(banana)
            document.getElementById("modalPost").style.display = "block";
            document.getElementById("alert").style.display = "flex";
        }else{
            element.className = "fa-solid fa-star fa-2xl"
            tostaVerde("Summary added to favourites!")
        }
    }else{fav_sum
        console.log("Not logged in");
        document.getElementById("modalPost2").style.display = "block";
        document.getElementById("alert2").style.display = "flex";
    }
}

function remove_this_banana(){
    if (banana != null) {
        banana.className = "fa-regular fa-star fa-2xl"
        banana = null;
    }
}

async function Wanna_remove_banana(){

    var back_up = document.getElementById("ok_remove").innerHTML;
    document.getElementById("ok_remove").innerHTML = "Erasing";
    for(let i = 0; i < 3; i++){

        await delay(400);
        document.getElementById("ok_remove").innerHTML+=". ";
    }
    await delay(500);
    document.getElementById("modalPost").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("ok_remove").innerHTML = back_up;
    console.log(banana)
    remove_this_banana()
}


async function Wanna_remove(){

    var back_up = document.getElementById("ok_remove").innerHTML;
    document.getElementById("ok_remove").innerHTML = "Erasing";
    for(let i = 0; i < 3; i++){

        await delay(400);
        document.getElementById("ok_remove").innerHTML+=". ";
    }
    await delay(500);
    document.getElementById("modalPost").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("ok_remove").innerHTML = back_up;
    remove_element()
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
    tostaVerde("Post made sucessfully!");
}

function premiumContentDisc(){
        console.log("sucess");
        location.href='forum1.html';
}

function premiumContentCreatDisc(){
    if(checkLogin() == true){
        console.log("sucess");
        callModal();
    }else{
        console.log("Not logged in");
        document.getElementById("modalPost").style.display = "block";
        document.getElementById("alert").style.display = "flex";
    }
}

function callModal(){
    document.getElementById("modalPost").style.display = "block";
    document.getElementById("publicar").style.display = "flex";
}


function premiumContentPerf(){
    if(checkLogin() == true){
        console.log("sucess");
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

async function summarieUpdate(){
    var selected_option = document.getElementById("grade").value
    var selected_option2 = document.getElementById("discipline").value
    if (selected_option != ""){
        document.getElementById("summaries_name").innerHTML = '<i class="fa-solid fa-book-open"></i>' + ' ' +  selected_option + ' GRADE ' +  selected_option2 + ' SUMMARIES'
    }else{
        document.getElementById("summaries_name").innerHTML = '<i class="fa-solid fa-book-open"></i>' + ' ' +  selected_option2 + ' SUMMARIES'
    }
    if(selected_option2 != ""){
        console.log(selected_option2)
        var elements = document.getElementsByClassName("titalo");
        // elements.style.display = "none";
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].parentElement.parentElement.style.display = "none";
        }
        for (var i = 0, len = elements.length; i < len; i++) {
            await delay(000)
            elements[i].innerHTML = selected_option2
            elements[i].parentElement.parentElement.style.display = "flex";
        }
    }else{
        var elements = document.getElementsByClassName("titalo");
        console.log(elements)
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].parentElement.parentElement.style.display = "none";
        }
        for (var i = 0, len = elements.length; i < len; i++) {
            await delay(000)
            elements[i].innerHTML = "DISCIPLINE"
            elements[i].parentElement.parentElement.style.display = "flex";
        }
    }
}

function universitiesUpdate(){
    var selected_option =  document.getElementById("area").value
    document.getElementById("university1").style.display = "flex";
    document.getElementById("university2").style.display = "flex";
    document.getElementById("university3").style.display = "flex";
    document.getElementById("university4").style.display = "flex";
    document.getElementById("university5").style.display = "flex";
    document.getElementById("university6").style.display = "flex";
    document.getElementById("university7").style.display = "flex";
    document.getElementById("university8").style.display = "flex";
    document.getElementById("university9").style.display = "flex";
    document.getElementById("university10").style.display = "flex";
    document.getElementById("fakeuni").style.display = "none";
    if (selected_option == ""){
        document.getElementById("uni1").innerHTML = 'Universidade de Lisboa : Engineering';
        document.getElementById("uni2").innerHTML = 'Universidade do Porto : Medicine';
        document.getElementById("uni3").innerHTML = 'Universidade do Porto : Engineering';
        document.getElementById("uni4").innerHTML = 'Universidade do Minho : Medicine';
        document.getElementById("uni5").innerHTML = 'Universidade de Aveiro : Engineering';
        document.getElementById("uni6").innerHTML = 'Universidade do Porto : Humanities';
        document.getElementById("uni7").innerHTML = 'Universidade de Coimbra : Medicine';
        document.getElementById("uni8").innerHTML = 'Universidade Nova de Lisboa : Medicine';
        document.getElementById("uni9").innerHTML = 'Universidade de Lisboa : Science';
        document.getElementById("uni10").innerHTML = 'Universidade do Porto - Architecture';
        document.getElementById("uni1link").setAttribute('onclick',"window.open('https://www.ulisboa.pt/', '_blank')")
        document.getElementById("uni2link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni3link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni4link").setAttribute('onclick',"window.open('https://www.uminho.pt/PT', '_blank')")
        document.getElementById("uni5link").setAttribute('onclick',"window.open('https://www.ua.pt/', '_blank')")
        document.getElementById("uni5link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni7link").setAttribute('onclick',"window.open('https://www.uc.pt/', '_blank')")
        document.getElementById("uni8link").setAttribute('onclick',"window.open('https://www.unl.pt/', '_blank')")
        document.getElementById("uni9link").setAttribute('onclick',"window.open('https://www.ulisboa.pt/', '_blank')")
        document.getElementById("uni10link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
    } else if (selected_option == "Medicine"){
        document.getElementById("uni1").innerHTML = 'Universidade do Porto';
        document.getElementById("uni2").innerHTML = 'Instituto Politécnico do Porto';
        document.getElementById("uni3").innerHTML = 'Universidade do Minho';
        document.getElementById("uni4").innerHTML = 'Universidade de Coimbra';
        document.getElementById("uni5").innerHTML = 'Universidade Nova de Lisboa';
        document.getElementById("uni6").innerHTML = 'Universidade de Lisboa';
        document.getElementById("uni7").innerHTML = 'Universidade da Beira Interior';
        document.getElementById("uni8").innerHTML = 'Universidade dos Açores';
        document.getElementById("uni9").innerHTML = 'Universidade da Madeira';
        document.getElementById("uni1link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni2link").setAttribute('onclick',"window.open('https://www.ipp.pt/', '_blank')")
        document.getElementById("uni3link").setAttribute('onclick',"window.open('https://www.uminho.pt/PT', '_blank')")
        document.getElementById("uni4link").setAttribute('onclick',"window.open('https://www.uc.pt/', '_blank')")
        document.getElementById("uni5link").setAttribute('onclick',"window.open('https://www.unl.pt/', '_blank')")
        document.getElementById("uni6link").setAttribute('onclick',"window.open('https://www.ulisboa.pt/', '_blank')")
        document.getElementById("uni7link").setAttribute('onclick',"window.open('https://www.ubi.pt/', '_blank')")
        document.getElementById("uni8link").setAttribute('onclick',"window.open('https://www.uac.pt/', '_blank')")
        document.getElementById("uni9link").setAttribute('onclick',"window.open('https://www.uma.pt/', '_blank')")
        document.getElementById("university10").style.display = "none";
    } else if (selected_option == "Education"){
        document.getElementById("uni1").innerHTML = 'Universidade do Minho';
        document.getElementById("uni2").innerHTML = 'Universidade do Porto';
        document.getElementById("uni3").innerHTML = 'Universidade de Coimbra';
        document.getElementById("uni4").innerHTML = 'Universidade de Lisboa';
        document.getElementById("uni5").innerHTML = 'Universidade dos Açores';
        document.getElementById("uni6").innerHTML = 'Universidade da Madeira';
        document.getElementById("uni1link").setAttribute('onclick',"window.open('https://www.uminho.pt/PT', '_blank')")
        document.getElementById("uni2link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni3link").setAttribute('onclick',"window.open('https://www.uc.pt/', '_blank')")
        document.getElementById("uni4link").setAttribute('onclick',"window.open('https://www.ulisboa.pt/', '_blank')")
        document.getElementById("uni5link").setAttribute('onclick',"window.open('https://www.uac.pt/', '_blank')")
        document.getElementById("uni6link").setAttribute('onclick',"window.open('https://www.uma.pt/', '_blank')")
        document.getElementById("university7").style.display = "none";
        document.getElementById("university8").style.display = "none";
        document.getElementById("university9").style.display = "none";
        document.getElementById("university10").style.display = "none";
    } else if (selected_option == "Engineering"){
        document.getElementById("uni1").innerHTML = 'Universidade de Aveiro';
        document.getElementById("uni2").innerHTML = 'Universidade de Lisboa';
        document.getElementById("uni3").innerHTML = 'Universidade do Porto';
        document.getElementById("uni4").innerHTML = 'Instituto Politécnico do Porto';
        document.getElementById("uni5").innerHTML = 'Universidade do Minho';
        document.getElementById("uni6").innerHTML = 'Universidade de Coimbra';
        document.getElementById("uni7").innerHTML = 'Universidade dos Açores';
        document.getElementById("uni8").innerHTML = 'Universidade da Madeira';
        document.getElementById("uni9").innerHTML = 'Universidade Católica';
        document.getElementById("uni10").innerHTML = "Universidade Nova de Lisboa";
        document.getElementById("uni1link").setAttribute('onclick',"window.open('https://www.ua.pt/', '_blank')")
        document.getElementById("uni2link").setAttribute('onclick',"window.open('https://www.ulisboa.pt/', '_blank')")
        document.getElementById("uni3link").setAttribute('onclick',"window.open('https://sigarra.up.pt/up/pt/web_base.gera_pagina?p_pagina=home', '_blank')")
        document.getElementById("uni4link").setAttribute('onclick',"window.open('https://www.ipp.pt/', '_blank')")
        document.getElementById("uni5link").setAttribute('onclick',"window.open('https://www.uminho.pt/PT', '_blank')")
        document.getElementById("uni6link").setAttribute('onclick',"window.open('https://www.uc.pt/', '_blank')")
        document.getElementById("uni7link").setAttribute('onclick',"window.open('https://www.uac.pt/', '_blank')")
        document.getElementById("uni8link").setAttribute('onclick',"window.open('https://www.uma.pt/', '_blank')")
        document.getElementById("uni9link").setAttribute('onclick',"window.open('https://www.ucp.pt/pt-pt', '_blank')")
        document.getElementById("uni10link").setAttribute('onclick',"window.open('https://www.unl.pt/', '_blank')")
    } else {
        document.getElementById("university1").style.display = "none";
        document.getElementById("university2").style.display = "none";
        document.getElementById("university3").style.display = "none";
        document.getElementById("university4").style.display = "none";
        document.getElementById("university5").style.display = "none";
        document.getElementById("university6").style.display = "none";
        document.getElementById("university7").style.display = "none";
        document.getElementById("university8").style.display = "none";
        document.getElementById("university9").style.display = "none";
        document.getElementById("university10").style.display = "none";
        document.getElementById("fakeuni").style.display = "flex";
    }
}