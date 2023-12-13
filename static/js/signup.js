document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('insertarForm').addEventListener('submit', function (event) {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        var data = {
        username: username,
        password: password
        };
    
        var request = new XMLHttpRequest();
        request.open('POST', 'https://contactos-api-backend-heroku-70960492bc44.herokuapp.com/registrar', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
        var encodedCredentials = btoa(username + ':' + password);
        request.setRequestHeader('Authorization', 'Basic ' + encodedCredentials);
    
        request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            alert("Registro exitoso");
            
            window.location.href = '/login';
        } else {
            console.error("Error al registrarse");
        }
        };
    
        request.onerror = function () {
        console.error("Error de conexión");
        };
    
        request.send(JSON.stringify(data));
        
    });
});