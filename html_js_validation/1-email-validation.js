function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById ('error');

    const email = emailInput.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        errorElement.textContent = '';
        return true
    }
    else {
        errorElement.textContent = 'Please enter a valid email';
        return false
    }
}

const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', (event) => {
    if (!validateEmail()) {
        event.preventDefault();
    }
});
  