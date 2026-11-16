let saludo = document.querySelector(".userName");
let login = document.querySelector(".item_login");
let registro = document.querySelector (".item_registro"); 

let bienvenida = document.querySelector(".elemento_bienvenida");
let botonLogout = document.querySelector(".elemento_logout");


let recuperoStorage = localStorage.getItem("user"); //le pido user que es la posicion donde guarde los datos
let datos_usuario = JSON.parse(recuperoStorage); //en datos_usuario lo cambio a objeto literal

if (datos_usuario != null){
    saludo.innerText = datos_usuario.email;
    login.style.display = "none";
    registro.style.display = "none";
}

else{
    bienvenida.style.display = "none";
    botonLogout.style.display = "none"; 
}
