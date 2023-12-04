const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com/";

const xhr = new XMLHttpRequest();


function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        // 0 = UNSET, no se ha llamado al método open
        // 1 = OPENED, se ha llamado al método open
        // 2 = HEADERS_RECEIVED, se está llamando al método send()
        // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
        // 4 = DONE, se ha completado la operación.

        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#datos");

        const tpl = data.map((user) => `<tr><td>${user.email}</td><td>${user.nombre}</td><td>${user.telefono}</td><td><a href="ver.html" class="opciones">ver</a></td><td><a href="editar.html" class="opciones">editar</a></td><td><a href="borrar.html" class="opciones">borrar</a></td></tr>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/`);
xhr.send();