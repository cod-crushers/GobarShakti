// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
const form = document.getElementById("loginForm"); // Assuming your form's ID is 'loginForm'
const loginButton = document.getElementById("submitButton");
const errorMsg = document.getElementById("error-msg");

// Admin UID
const adminUID = "g0SASx4vB2QdxotnJqUHdm90Nmp2"; // Replace with your admin's UID

// Function to show error messages
function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.color = "red"; // Optional: Set error message color
}

// Function to show success messages
function showSuccess(message) {
  errorMsg.textContent = message;
  errorMsg.style.color = "green"; // Optional: Set success message color
}

// Add a click event listener to the Login button
loginButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validation
  if (!email || !password) {
    showError("All fields are required!");
    return;
  }

  // Clear any previous error messages
  errorMsg.textContent = "";

  try {
    // Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // User object

    // Check if the logged-in user's UID matches the admin UID
    if (user.uid === adminUID) {
      // Redirect to the admin dashboard
      showSuccess(`Welcome Admin! Redirecting...`);
      window.location.href = "admin-dashboard.html"; // Replace with your admin dashboard URL
    } else {
      // Redirect to the user dashboard
      showSuccess(`Welcome ${user.email}! Redirecting...`);
      window.location.href = "user-dashboard.html"; // Replace with your user dashboard URL
    }
  } catch (error) {
    // Handle Firebase Auth errors
    const errorCode = error.code;
    let errorMessage = "";

    // Map Firebase error codes to user-friendly messages
    switch (errorCode) {
      case "auth/user-not-found":
        errorMessage = "No user found with this email.";
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password. Please try again.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email format.";
        break;
      default:
        errorMessage = "Login failed. Please try again.";
    }

    // Show the error message
    showError(errorMessage);
  }
});
