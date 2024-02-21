function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = `field${i}`;
        inputField.placeholder = `Field ${i}`;
        inputContainer.appendChild(inputField);
    }
}

function validateForm(event) {
    event.preventDefault();
    const inputFields = document.querySelectorAll('#inputContainer input');
    let allFieldsFilled = true;

    inputFields.forEach((field) => {
        if(field.ariaValueMax.trim() === '') {
            allFieldsFilled = false
        }
    });

    if(!allFieldsFilled) {
        const errorElement = document.getElementById('error');
        errorElement.textContent = 'Please fill in the fields.';
    } else {
        console.log('Form submitted successfully!');
    }
}

const numFieldsDropdown = document.getElementById('numFields');
numFieldsDropdown.addEventListener('change', () => {
    const selectedValue = parseInt(numFieldsDropdown.value, 10);
    generateInputFields(selectedValue);
});


const form = document.getElementById('dynamicForm');
form.addEventListener('submit', validateForm);