document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Clear previous error messages
    clearErrors();
  
    // Validate form inputs
    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
  
    let isValid = true;
  
    // First Name validation
    if (!firstName) {
      showError('fnameError', 'First Name is required');
      isValid = false;
    }
  
    // Last Name validation
    if (!lastName) {
      showError('lnameError', 'Last Name is required');
      isValid = false;
    }
  
    // Email validation
    if (!email) {
      showError('emailError', 'Email Address is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      showError('emailError', 'Invalid email address');
      isValid = false;
    }
  
    // Query Type validation
    if (!queryType) {
      showError('queryTypeError', 'Please select a query type');
      isValid = false;
    }
  
    // Message validation
    if (!message) {
      showError('messageError', 'Message is required');
      isValid = false;
    }
  
    // Terms validation
    if (!terms) {
      showError('termsError', 'You must agree to the terms and conditions');
      isValid = false;
    }
  
    // If valid, submit the form or perform further actions
    if (isValid) {
      alert('Form submitted successfully!');
      // Perform form submission here (e.g., send data to the server)
    }
  });
  
  // Helper functions
  
  // Show error message
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }
  
  // Clear all error messages
  function clearErrors() {
    document.querySelectorAll('.error').forEach((errorElement) => {
      errorElement.textContent = '';
    });
  }
  
  // Email validation regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  