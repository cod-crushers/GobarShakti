document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const adminID = document.getElementById('adminID').value;
    const password = document.getElementById('password').value;

    const correctAdminID = "Admin";  // Correct Admin ID
    const correctPassword = "Strong@123";  // Correct Password

    if (adminID === correctAdminID && password === correctPassword) {
        window.location.href = "dashboard.html";  // Redirect to another page on success
    } else {
        document.getElementById('error-msg').innerText = "Invalid Admin ID or Password!";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const toggleForms = document.querySelectorAll(".toggle-form");
    toggleForms.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            const targetForm = event.target.getAttribute("data-target");
            document.querySelectorAll(".form-container").forEach(form => {
                form.classList.remove("active");
            });
            document.getElementById(targetForm).classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const errorMsg = document.getElementById("error-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const password = document.getElementById("password").value;

        // Basic validation
        if (!fullName || !email || !mobile || !password) {
            errorMsg.textContent = "All fields are required!";
            return;
        }

        errorMsg.textContent = "Registration successful!";
        // Here you can integrate Firebase or another backend
    });
});
