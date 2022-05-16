const formulario = document.getElementById("form");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("pass");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertPass = document.getElementById("alertPass");


// //Traemos los valores del localstorage
// const pass=localStorage.getItem("contra");
// const email=localStorage.getItem("mail")
// SETEAMOS LOS VALORES DE LOGIN POR DEFECTO
// const pass = 1234;
// const email = "mail@mail.com";
var email = localStorage.getItem("email");
var pass = localStorage.getItem("password");
const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};

// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (evento) => {

    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    evento.preventDefault();

    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

    // validar email
    if (userEmail.value != email) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        
        if (userEmail.value.length > 35) {
            userEmail.classList.add("is-invalid");

            errores.push({
                tipo: alertEmail,
                msg: "Cantidad de caracteres supera el limite",
            });
        }
        else{
            userEmail.classList.remove("is-invalid");
            userEmail.classList.add("is-valid");
            alertEmail.classList.add("d-none");
        }
        
    }

    // Mensajes de errores para la validación

    if (parseInt(userPass.value) != pass) {
        //
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});