document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('insertarForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los datos ingresados en los campos de texto
        const email = document.getElementById('email').value;
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;

        // Crear un objeto con los datos que se enviarán al servidor, puesto que la solicitud funciona con objetos que coincidan con Contacto
        const data = {
            email: email,
            nombre: nombre,
            telefono: telefono
        };

        // Realizar la solicitud POST al servidor, con fetch.
        fetch('https://contactos-api-backend-heroku-70960492bc44.herokuapp.com/contactos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('El registro se insertó correctamente:\n' + JSON.stringify(data, null, 2));
            window.location.href = '/';  // Lleva al usuario de vuelta al endpoint raíz (index)
        })
        .catch(error => {
            alert('Error al insertar el registro:\n' + error);
        });
    });

});
