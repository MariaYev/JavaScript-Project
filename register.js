const registerForm = document.querySelector('.register-form');
const username = document.querySelector('#reg-username');
const password = document.querySelector('#reg-password');
const email = document.querySelector('#reg-email');

const message = document.createElement("p");
registerForm.appendChild(message);

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const user = username.value.trim();
    const userEmail = email.value.trim();
    const userPassword = password.value;

    if (user === "" || userEmail === "" || userPassword === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (userPassword.length < 8) {
        message.textContent = "Password must be at least 8 characters long.";
        return;
    }

    message.textContent = "Registration successful! (Demo only)";
});