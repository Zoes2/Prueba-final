//funcion botones mensajes
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//evento click boton correo

var x = document.getElementById("enviarInfo");

x.addEventListener("click", enviar);

function enviar() {
    alert(" La información fue enviada correctamente...");
};