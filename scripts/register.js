const formulario = document.getElementById("form");
var nombre = document.getElementById('nombre1');
var username = document.getElementById('user');
var pass = document.getElementById('password');
var error = document.getElementById('error');
var userEmail = document.getElementById('emailAddress');
var lastName = document.getElementById('apellido');

const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");
const alertUser = document.getElementById("alertUser");
const alertLastN = document.getElementById("alertLastN");
const alertPass = document.getElementById("alertPass");

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        console.log(errores)
    });

};

// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (evento) => {

    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    evento.preventDefault();

    //alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

       //Verificación de nombre

    if ((nombre.value === null) || (nombre.value ==='')) {
        nombre.classList.add("is-invalid");
        errores.push({
            tipo: alertName,
            msg: "Nombre Inválido",
        });
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

     //Verificación de apellido

     if ((lastName.value === null) || (lastName.value ==='')) {
        lastName.classList.add("is-invalid");
        errores.push({
            tipo: alertLastN,
            msg: "Apellido Inválido",
        });
    } else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
        alertLastN.classList.add("d-none");
    }
 
 
    // validar email
    if ((userEmail.value === null) || (username.value ==='')) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        
        if (userEmail.value.length > 30) {
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

    if ((username.value === null) || (username.value ==='')) {
        username.classList.add("is-invalid");
        errores.push({
            tipo: alertUser,
            msg: "Necesita agregar un usuario",
        });
    } else {
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
        alertUser.classList.add("d-none");
    }

    if ((pass.value === null) || (pass.value ==='')) {
        pass.classList.add("is-invalid");
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        pass.classList.remove("is-invalid");
        pass.classList.add("is-valid");
        alertPass.classList.add("d-none");
    }

    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }

    


    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});