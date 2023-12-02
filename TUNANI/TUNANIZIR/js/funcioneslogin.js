const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})
//===============================================
// Arreglos para guardar los datos de registro
let registeredEmails = [];
let registeredPasswords = [];

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

// Al enviar el formulario de registro
document.querySelector(".register form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la recarga de la página por defecto

    // Obtener los valores del formulario de registro
    const email = document.querySelector(".register input[type='email']").value;
    const password = document.querySelector(".register input[type='password']").value;

    // Agregar el correo y contraseña a los arreglos
    registeredEmails.push(email);
    registeredPasswords.push(password);

    // Limpiar los campos del formulario después de guardar los datos
    this.reset();

    // Mostrar mensaje de éxito o realizar otras acciones si es necesario
    alert("¡Registro exitoso! Ahora puedes iniciar sesión con estos datos.");
});

// Al enviar el formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir la recarga de la página por defecto

    // Obtener valores del formulario de inicio de sesión
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    // Verificar si las credenciales coinciden con los datos almacenados
    const index = registeredEmails.indexOf(email);
    if (index !== -1 && registeredPasswords[index] === password) {
        // Si las credenciales son correctas, guardar información de inicio de sesión en localStorage
        localStorage.setItem("loggedIn", "true");

        // Redirigir al usuario a index.html
        window.location.href = "index.html";
    } else {
        // En caso de credenciales incorrectas, mostrar un mensaje de error o manejarlo de otra manera
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});
