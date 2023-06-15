// Obtener referencias a los elementos del formulario de inicio de sesión
var loginForm = document.getElementById("login-form-index");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

// Obtener referencias a los elementos del formulario de creación de cuenta
var createAccountForm = document.getElementById("login-form-cuenta");
var nuevoUsuarioInput = document.getElementById("usuario");
var nuevaContraseñaInput = document.getElementById("contraseña");

// Función para verificar el inicio de sesión
function iniciarSesion(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Verificar si el usuario y la contraseña coinciden con los almacenados
  if (username === obtenerUsuario() && password === obtenerContraseña()) {
    alert("¡Has iniciado sesión!");
  } else {
    alert("El usuario o la contraseña son incorrectos.");
  }
}

// Función para crear una nueva cuenta
function crearCuenta(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var nuevoUsuario = nuevoUsuarioInput.value;
  var nuevaContraseña = nuevaContraseñaInput.value;

  // Almacenar el nuevo usuario y contraseña
  guardarUsuario(nuevoUsuario);
  guardarContraseña(nuevaContraseña);

  alert("¡Cuenta creada exitosamente!");

  // Limpiar los campos del formulario
  nuevoUsuarioInput.value = "";
  nuevaContraseñaInput.value = "";
}

// Función para almacenar el usuario en localStorage
function guardarUsuario(usuario) {
  localStorage.setItem("usuario", usuario);
}

// Función para obtener el usuario almacenado en localStorage
function obtenerUsuario() {
  return localStorage.getItem("usuario");
}

// Función para almacenar la contraseña en localStorage
function guardarContraseña(contraseña) {
  localStorage.setItem("contraseña", contraseña);
}

// Función para obtener la contraseña almacenada en localStorage
function obtenerContraseña() {
  return localStorage.getItem("contraseña");
}

// Agregar los event listeners a los formularios
loginForm.addEventListener("submit", iniciarSesion);
createAccountForm.addEventListener("submit", crearCuenta);

  
