document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store in Firestore
  db.collection('contacts')
    .add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
});
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const termsCheckbox = document.getElementById('termsCheckbox');
  const submitButton = document.getElementById('submitButton');
  const contactForm = document.getElementById('contactForm');

  // Enable/Disable the submit button based on checkbox state
  termsCheckbox.addEventListener('change', function () {
    submitButton.disabled = !termsCheckbox.checked;
  });

  // Form submission logic
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example Firebase submission logic (assuming Firestore is set up)
    db.collection('contacts')
      .add({
        name: name,
        phone: phone,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
        submitButton.disabled = true; // Disable the button again
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  });
});
