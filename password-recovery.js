
const recoveryForm = document.querySelector(".recovery-form");
const email = document.getElementById("recovery-email");

const message = document.createElement("p");
recoveryForm.appendChild(message);

recoveryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userEmail = email.value.trim();

    message.textContent =
        "If an account exists for this email, a reset link will be sent.";
});
