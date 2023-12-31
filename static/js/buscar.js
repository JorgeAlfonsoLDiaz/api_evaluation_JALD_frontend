const API_URL = "https://contactos-api-backend-heroku-70960492bc44.herokuapp.com";
const xhr = new XMLHttpRequest();

function buscar() {
    const email = document.getElementById('email').value;
    xhr.open("GET", `${API_URL}/contactos?email=${encodeURIComponent(email)}`);
    xhr.send();
}

document.getElementById('buscarForm').addEventListener('submit', function (event) {
    event.preventDefault();
    buscar();
});

function onRequestHandler() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log(this.response);
            
            const data_response = JSON.parse(this.response);
            const data = Array.isArray(data_response) ? data_response : [data_response];  // Convertir el objeto JSON (aunque sea sólo uno) a un arreglo que se pueda validar

            const HTMLResponse = document.getElementById("datos");

            const tpl = data.map((user) => `
                <tr>
                    <td>${user.email}</td>
                    <td>${user.nombre}</td>
                    <td>${user.telefono}</td>
                    <td><a href="ver?email=${encodeURIComponent(user.email)}&nombre=${encodeURIComponent(user.nombre)}&telefono=${encodeURIComponent(user.telefono)}" class="opciones">ver</a></td>
                    <td><a href="editar?email=${encodeURIComponent(user.email)}" class="opciones">editar</a></td>
                    <td><a href="borrar?email=${encodeURIComponent(user.email)}&nombre=${encodeURIComponent(user.nombre)}&telefono=${encodeURIComponent(user.telefono)}" class="opciones">borrar</a></td>
                    </tr>
            `);
            HTMLResponse.innerHTML = tpl.join('');
        } else {
            console.error("Error en la solicitud:", this.status, this.statusText);
        }
    }
}


xhr.addEventListener("load", onRequestHandler);
