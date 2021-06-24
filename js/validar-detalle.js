var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTelefono = /^[0-9]{4}-?[0-9]{4}$/
var regexDni = /^[0-9]{7,8}$/

//Detalle enfermedad

function validarDetalle() {
    var error = false;
    var mensajesError = "";
    var cantidadSintomas = 0;

    if (document.getElementById("nombre-apellido").value == '') {
        error = true;
        mensajesError += "<p>El campo nombre y apellido no puede estar vacío</p>";
    }

    if (!regexDni.test(document.getElementById("dni").value)) {
        error = true;
        mensajesError += "<p>El DNI tiene que ser un número de 7 u 8 dígitos</p>";
    }

    if (!regexCampoTelefono.test(document.getElementById("telefono").value)) {
        error = true;
        mensajesError += "<p>El teléfono tiene que ser un número de 8 dígitos</p>";
    }

    var opciones = document.getElementsByName("si");
    var seleccionado = false;
    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Es obligatorio que indiques si tuviste fiebre</p>";
    }

    var opciones = document.getElementsByName("sino1");
    var seleccionado = false;
    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Es obligatorio que indiques si tuviste dolor de cabeza</p>";
    }

    var opciones = document.getElementsByName("sino2");
    var seleccionado = false;
    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Es obligatorio que indiques si tuviste tos</p>";
    }
    var opciones = document.getElementsByName("sino3");
    var seleccionado = false;
    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Es obligatorio que indiques si tuviste dolor de garganta</p>";
    }

    var opciones = document.getElementsByName("sino4");
    var seleccionado = false;
    for (i in opciones) {
        if (opciones[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        error = true;
        mensajesError += "<p>Es obligatorio que indiques si tuviste dificultad para respirar</p>";
    }


    if (error) {
        document.getElementById("mensaje-detalle").innerHTML = mensajesError;
        return false;
    } else {

        if (document.getElementById("si1").checked) {
            cantidadSintomas++;
        }

        if (document.getElementById("si2").checked) {
            cantidadSintomas++;
        }

        if (document.getElementById("si3").checked) {
            cantidadSintomas++;
        }

        if (document.getElementById("si4").checked) {
            cantidadSintomas++;
        }

        if (document.getElementById("si5").checked) {
            cantidadSintomas++;
        }
        document.getElementById("mensaje-sintomas").innerHTML = "El formulario fue completado correctamente. " + cantidadSintomas + " síntomas de COVID-19 fueron registrados.";
    }
    return false;
}

//Ocultar y mostrar

function mostrarOcultarPaises() {
    if (document.getElementById("si").checked) {
        document.getElementById("paises-visitados").style.display = "block";
    } else {
        document.getElementById("paises-visitados").style.display = "none";
    }
}

function mostrarOcultarCiudad() {
    if (document.getElementById("si5").checked) {
        document.getElementById("dificultad-respirar").style.display = "block";
    } else {
        document.getElementById("dificultad-respirar").style.display = "none";
    }
}