const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com";
const xhr_delete = new XMLHttpRequest();
const xhr_get = new XMLHttpRequest();

function borrar() {
    const emailElement = document.getElementById('email');
    const email = emailElement.textContent.trim(); 

    xhr_delete.open("DELETE", `${API_URL}/contactos/${encodeURIComponent(email)}`);
    xhr_delete.send();
}



function mostrarDatos(email, nombre, telefono) {
    const emailElement = document.getElementById('email');
    const nombreElement = document.getElementById('nombre');
    const telefonoElement = document.getElementById('telefono');


    emailElement.innerHTML = `<p>Email: ${email}</p>`;
    nombreElement.innerHTML = `<p>Nombre: ${nombre}</p>`;
    telefonoElement.innerHTML = `<p>Teléfono: ${telefono}</p>`;
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el registro de alguna manera (quizás pasarlo como parámetro al script)
    const params = new URLSearchParams(window.location.search);  // Consigue los parámetros que se encuentran en la URL

    const email = params.get("email");
    const nombre = params.get("nombre");
    const telefono = params.get("telefono");

    mostrarDatos(email, nombre, telefono);  // Mostrar los datos en borrar.html

    document.getElementById('Borrar').addEventListener('click', function () {
        if (confirm("¿Borrar Contacto?")) {
            borrar();
            // window.location.href = '/';  
        }
    });

    xhr_delete.addEventListener("load", function () {
        if (xhr_delete.readyState === 4) {
            if (xhr_delete.status === 200 || xhr_delete.status === 204) {
                const registro = JSON.parse(xhr_delete.response);
                mostrarDatos(registro);

                alert(`Registro borrado con éxito. Status code: ${xhr_delete.status}`);
                
                window.location.href = '/';
            } else {
                alert(`Error: ${xhr_delete.status}`);
            }
        }
    });
});
