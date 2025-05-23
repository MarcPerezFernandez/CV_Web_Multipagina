const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const contrasenaInput = document.getElementById("contrasena");
const formulario = document.getElementById("formulario");

function validarNombre() {
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-Z][a-zA-Z0-9]*$/;   
    if(nombre.length >= 3 && nombrePattern.test(nombre)) {
        nombreInput.classList.add("valido");
        nombreInput.classList.remove("invalido");
        document.getElementById("nombreError").textContent = "";
    }else{
        nombreInput.classList.remove("invalido");
        nombreInput.classList.add("valido");
        document.getElementById("nombreError").textContent = "El nombre debe tener al menos 3 letras y empezar con una letra.";
    }
}

function validarTelefono() {
    const telefono = telefonoInput.value;
    const telefonoPattern = /^\d{9}$/;  
    if(telefonoPattern.test(telefono)) {
        telefonoInput.classList.add("valido");
        telefonoInput.classList.remove("invalido");
        document.getElementById("telefonoError").textContent = "";
    }else{
        telefonoInput.classList.remove("invalido");
        telefonoInput.classList.add("valido");
        document.getElementById("telefonoError").textContent = "El teléfono debe tener 9 dígitos.";
    }
}  

function validarEmail() {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(emailPattern.test(email)) {
        emailInput.classList.add("valido");
        emailInput.classList.remove("invalido");
        document.getElementById("emailError").textContent = "";
    }else{
        emailInput.classList.remove("invalido");
        emailInput.classList.add("valido");
        document.getElementById("emailError").textContent = "El email no es válido.";
    }
}

function validarContrasena() {
    const contrasena = contrasenaInput.value;
    const contrasenaPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
    if(contrasenaPattern.test(contrasena)) {
        contrasenaInput.classList.add("valido");
        contrasenaInput.classList.remove("invalido");
        document.getElementById("contrasenaError").textContent = "";
    }else{
        contrasenaInput.classList.remove("invalido");
        contrasenaInput.classList.add("valido");
        document.getElementById("contrasenaError").textContent = "La contraseña debe tener al menos 6 caracteres y contener letras y números.";
    }
}

nombreInput.addEventListener("input", validarNombre);
telefonoInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
contrasenaInput.addEventListener("input", validarContrasena);

