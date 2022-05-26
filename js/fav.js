var element = document.querySelector("summarie-star");

var isLogged = false;

function login(element){
    isLogged = !isLogged;
    if(isLogged == true){
        element.style.backgroundColor = "green";
    }else{
        element.style.backgroundColor = "red";
    }
}

function fav(element){
    if(isLogged == true){
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