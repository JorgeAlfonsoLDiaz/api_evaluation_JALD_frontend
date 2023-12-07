const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com";
const xhr = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function () {
    const editarForm = document.getElementById('editarForm');
    editarForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Conseguir el correo electrónico del registro en cuestión 
        const params = new URLSearchParams(window.location.search);  // Consigue los parámetros que se encuentran en la URL
        const email_params = params.get("email");

        const email = document.getElementById('email').value;
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;

        xhr.open("PUT", `${API_URL}/contactos/${encodeURIComponent(email_params)}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        const data = JSON.stringify({
            email: email,
            nombre: nombre,
            telefono: telefono
        });

        xhr.send(data);
    });

    xhr.addEventListener("load", function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert("Registro actualizado con éxito.");
                window.location.href = '/';  // Regresar al inicio al terminar la actualización del registro
            } else {
                alert(`Error: ${xhr.status}`);
            }
        }
    });
});
