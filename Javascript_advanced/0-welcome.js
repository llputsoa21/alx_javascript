function welcome (firstName = String, lastName = String) {
    const fullName = firstName + ' ' + lastName;
    
    function displayFullName () {
        alert('Welcome ', fullName, '!');

    displayFullName ();
    }
}