const form = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const toggleButton = document.querySelector('.toggle-password');
const forgotPassword = document.querySelector('.forgot-password-button');
const registerButton = document.querySelector('.register-button');

const message = document.createElement('p');
message.classList.add('form-message');
message.setAttribute("aria-live", "polite");
form.appendChild(message);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = username.value.trim();
    const pass = password.value;

    if (user === "" || pass === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent =
        `Welcome, ${user}! Login is not implemented yet.`;
});

forgotPassword.addEventListener("click", () => {
    window.location.href = "password-recovery.html";
});

registerButton.addEventListener("click", () => {
    window.location.href = "register.html";
});
