const API_URL = "https://git.heroku.com/contactos-api-backend-heroku.git";

const xhr = new XMLHttpRequest();


function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        // 0 = UNSET, no se ha llamado al método open
        // 1 = OPENED, se ha llamado al método open
        // 2 = HEADERS_RECEIVED, se está llamando al método send()
        // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
        // 4 = DONE, se ha completado la operación.

        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map((user) => `<li>${user.name} ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();