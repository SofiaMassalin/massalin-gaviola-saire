let li_bienvenida = document.querySelector(".elemento_bienvenida");
let li_logout = document.querySelector(".elemento_logout");

let link = document.querySelector(".logout") //este es el link el a y los de arriba son el botón en sí y el texto

let li_login = document.querySelector(".item_login");
let li_registro = document.querySelector (".item_registro");

link.addEventListener('click', function(event){
    event.preventDefault(); //no se si esto esta bien

    localStorage.removeItem("user");
    li_bienvenida.style.display = "none"; //oculto tood lo del logout
    li_logout.style.display = "none"; 

    li_login.style.display = "block"; //muestro el login y register
    li_registro.style.display = "block";
})