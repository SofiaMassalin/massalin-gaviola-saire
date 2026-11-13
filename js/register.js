let formulario = document.querySelector(".hijo_formulario");
let inputmail = document.querySelector("#mail");
let inputpass = document.querySelector("#pass");

let parrafo_mail = document.querySelector(".mail_incompleto");
let parrafo_contra = document.querySelector(".pass_incompleta");

formulario.addEventListener('submit', function(event){
    event.preventDefault(); 

    if (inputmail.value == ""){
        parrafo_mail.innerHTML = "Ingrese su mail"
    }
    else if (inputpass.value == ""){
        parrafo_mail.innerHTML = ""
        parrafo_contra.innerHTML = "Ingrese su contraseña"
    }

    else if (inputpass.value.length < 6){
        parrafo_contra.innerHTML = "La contraseña tiene que tener al menos seis caracteres"
    }

    else{
        this.submit()
    }
    


})