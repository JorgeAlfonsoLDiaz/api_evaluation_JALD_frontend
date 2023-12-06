document.addEventListener("DOMContentLoaded", function () {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);

    // Obtener los datos del contacto de los parámetros
    const email = params.get("email");
    const nombre = params.get("nombre");
    const telefono = params.get("telefono");

    // Mostrar los datos en los elementos correspondientes
    document.getElementById("email").innerHTML = `<p>Email: ${email}</p>`;
    document.getElementById("nombre").innerHTML = `<p>Nombre: ${nombre}</p>`;
    document.getElementById("telefono").innerHTML = `<p>Teléfono: ${telefono}</p>`;
});


