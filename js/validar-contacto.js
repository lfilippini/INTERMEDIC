var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTelefono = /^[0-9]{4}-?[0-9]{4}$/
var regexDni = /^[0-9]{7,8}$/

// Contacto

function validar() {
    var error = false;
    var mensajesError = "";

    if (document.getElementById("nombre-apellido").value == '') {
        error = true;
        mensajesError += "<p>El campo nombre no puede estar vacío</p>";
    }

    if (!regexEmail.test(document.getElementById("correo").value)) {
        error = true;
        mensajesError += "<p>Tiene que ser un correo electronico válido</p>";
    }

    if (!regexCampoTelefono.test(document.getElementById("telefono").value)) {
        error = true;
        mensajesError += "<p>Tiene que ser un número de 8 dígitos</p>";
    }

    if (document.getElementById("contacto").value.length >= 1000) {
        error = true;
        mensajesError += "<p>Se ha superado la cantidad de caracteres</p>";
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    } else {
        return true;
    }
}

function contarCaracteres(obj) {
    var CANTIDAD = 1000;
    var usados = obj.value.length;
    var restantes = (CANTIDAD - usados);

    if (restantes < 0) {
        document.getElementById("numCar").innerHTML = '<span style="color: red;">Cantidad máxima de carcteres 1000</span>';
    } else if (restantes < 100) {
        document.getElementById("numCar").innerHTML = '<span style="color: orange;"> ' + restantes + ' caracteres restantes</span>';
    } else {
        document.getElementById("numCar").innerHTML = '<span style="color: green;"> ' + restantes + ' caracteres restantes</span>';
    }
}
