let saludo = document.querySelector(".userName");
let login = document.querySelector(".item_login");
let registro = document.querySelector (".item_registro"); 


let recuperoStorage = localStorage.getItem("user"); //le pido user que es la posicion donde guarde los datos
let user = JSON.parse(recuperoStorage); //lo cambio a objeto literal

if (user != ""){
    saludo.innerText = user.email;
    login.style.display = "none";
    registro.style.display = "none";
}

let logout = document.querySelector(".logout")
logout.addEventListener