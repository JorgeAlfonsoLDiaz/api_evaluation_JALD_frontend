const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com/";
const xhr = new XMLHttpRequest();

function buscar() {
    const email = document.getElementById('email').value;
    xhr.open("GET", `${API_URL}?email=${encodeURIComponent(email)}`);
    xhr.send();
}

function onRequestHandler() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            const data = JSON.parse(this.response);
            const HTMLResponse = document.getElementById("datos");

            const tpl = data.map((user) => `<tr><td>${user.email}</td><td>${user.nombre}</td><td>${user.telefono}</td><td><a href="ver.html" class="opciones">ver</a></td><td><a href="editar.html" class="opciones">editar</a></td><td><a href="borrar.html" class="opciones">borrar</a></td></tr>`);
            HTMLResponse.innerHTML = tpl.join('');
        } else {
            console.error("Error en la solicitud:", this.status, this.statusText);
        }
    }
}

document.getElementById('buscarForm').addEventListener('submit', function (event) {
    event.preventDefault();
    buscar();
});

function cancelar() {
    window.location.href = 'index.html';
}

xhr.addEventListener("load", onRequestHandler);
