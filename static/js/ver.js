document.addEventListener("DOMContentLoaded", function () {
    
    const params = new URLSearchParams(window.location.search);  // Consigue los parámetros que se encuentran en la URL

    // Guarda los parámetros obtenidos en 'params' en sus respectivas constantes.
    const email = params.get("email");
    const nombre = params.get("nombre");
    const telefono = params.get("telefono");

    // Inserta el contenido HTML a la página, con los datos obtenidos.
    document.getElementById("email").innerHTML = `<p>Email: ${email}</p>`;
    document.getElementById("nombre").innerHTML = `<p>Nombre: ${nombre}</p>`;
    document.getElementById("telefono").innerHTML = `<p>Teléfono: ${telefono}</p>`;
});


