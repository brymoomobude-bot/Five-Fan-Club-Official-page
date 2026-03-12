// script.js

// Function to validate form inputs
function validateForm() {
    let inputs = document.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
        if(input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
            showError(input, 'This field is required.');
        } else {
            input.classList.remove('error');
            removeError(input);
        }
    });
    return isValid;
}

// Function to show error message
function showError(input, message) {
    let error = document.createElement('span');
    error.classList.add('error-message');
    error.innerText = message;
    input.parentElement.appendChild(error);
}

// Function to remove error message
function removeError(input) {
    let error = input.parentElement.querySelector('.error-message');
    if(error) {
        error.remove();
    }
}

// Form submission handler
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if(validateForm()) {
        // Handle form submission here (e.g., sending data to a server)
        console.log('Form submitted successfully!');
    } else {
        console.log('Form has errors. Please fix them before submitting.');
    }
});