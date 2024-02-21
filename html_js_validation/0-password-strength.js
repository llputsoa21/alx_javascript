function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');

    const password = passwordInput.value;

    const uppercasePresent = /[A-Z]/.test(password);
    const lowercasePresent = /[a-z]/.test(password);
    const numberPresent = /\d/.test(password);
    const specialCharPresent = /[!@#$%^&*]/.test(password);
    const isLengthValid = password.length >= 8;

    if (uppercasePresent && lowercasePresent && numberPresent && specialCharPresent && isLengthValid) {
        errorElement.textContent = '';
        return true;
    }
    else {
        errorElement.textContent = "Password must meet all requirements";
        return false
    }
}

const passwordForm = document.getElementById('passwordForm');
passwordForm.addEventListener('submit', (event) => {
    if (!validatePassword()) {
        event.preventDefault();
    }
});