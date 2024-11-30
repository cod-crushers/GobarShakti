// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLrFF01EHt_KgnUASN7kGqR8RDWLY2W-s",
  authDomain: "gobarshakti-sih.firebaseapp.com",
  projectId: "gobarshakti-sih",
  storageBucket: "gobarshakti-sih.firebasestorage.app",
  messagingSenderId: "109279329962",
  appId: "1:109279329962:web:e4c7183cfacf65101cdad3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

// Form and button elements
const form = document.getElementById("registerForm");
const registerButton = document.getElementById("submitButton");
const errorMsg = document.getElementById("error-msg");

// Add a click event listener to the Register button
registerButton.addEventListener("click", async (event) => {
  event.preventDefault();

  // Get form values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (!email || !password) {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  // Clear any previous error messages
  errorMsg.textContent = "";

  try {
    // Create user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // User object

    // Display success message
    errorMsg.textContent = `Registration successful! Welcome, ${user.email}`;

    // Redirect to login page after a successful registration
    window.location.href = "user-dashboard.html";  // Replace with your login page URL

  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;
    errorMsg.textContent = `Error (${errorCode}): ${errorMessage}`;
  }
});
