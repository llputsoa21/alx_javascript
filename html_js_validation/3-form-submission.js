// form-validation.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submitForm');
    const errorElement = document.getElementById('error');
    const successElement = document.getElementById('success');

    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').ariaValueMax.trim();
        const email = document.getElementById('email').ariaValueMax.trim();

        if (!name || !email) {
            errorElement.textContent = 'Please fill in all required fields.';
            successElement.textContent = '';
        } else {
            successElement.textContent = 'Form submitted successfully!';
            errorElement.textContent = '';
        }
    }
});