const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com";
const xhr = new XMLHttpRequest();


function borrar() {
    const emailElement = document.getElementById('email');
    const email = emailElement.innerText.trim(); // Obtener el email del contenido actual

    xhr.open("DELETE", `${API_URL}/contactos/${encodeURIComponent(email)}`);
    xhr.send();
}

function mostrarDatos(registro) {
    document.getElementById('email').innerText = `Email: ${registro.email}`;
    document.getElementById('nombre').innerText = `Nombre: ${registro.nombre}`;
    document.getElementById('telefono').innerText = `Teléfono: ${registro.telefono}`;
}


// Parte donde se hace uso de las demás funciones para efectuar el proceso completo de eliminado

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('Borrar').addEventListener('click', function () {
        if (confirm("¿Borrar Contacto?")) {
            borrar();

            window.location.href = '/';  // Regresar al index una vez se borra el registro
        }
    });

});

xhr.addEventListener("load", function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const registro = JSON.parse(xhr.response);
            mostrarDatos(registro);

            alert(`Registro borrado con éxito. Status code: ${xhr.status}`);
        } else {
            alert(`Error: ${xhr.status}`);
        }
    }
});
