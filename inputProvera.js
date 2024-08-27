    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone')
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirm-password')
    
    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error')
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // Regularni izrazi
    const nameRegex = /^[A-Za-z][A-Za-z\- ]*[A-Za-z]$/;
    const phoneRegex = /^\+\d{1}[0-9]{8,13}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;

    function validateName() {
        const nameValue = nameInput.value.trim();
        if (nameValue.length < 5 || nameValue.length > 180 || !nameRegex.test(nameValue)) {
            nameInput.classList.add('error');
            nameError.textContent = 'Ime i prezime nije pravilno napisano';
            return false
        } else {
            nameInput.classList.remove('error');
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailInput.classList.add('error');
            emailError.textContent = 'Email je obavezan';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }

    function validatePhone() {
        const phoneValue = phoneInput.value.trim();
        if (!phoneRegex.test(phoneValue)) {
            phoneInput.classList.add('error');
            phoneError.textContent = 'Broj telefona nije ispravan';
            return false;
        } else {
            phoneInput.classList.remove('error');
            phoneError.textContent = '';
            return true;
        }
    }
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (!passwordRegex.test(passwordValue)) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'Lozinka mora imati barem 6 karaktera, uključujući velika i mala slova, brojeve i posebne znakove';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordError.textContent = '';
            return true;
        }
    }
    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (confirmPasswordValue !== passwordInput.value.trim()) {
            confirmPasswordInput.classList.add('error');
            confirmPasswordError.textContent = 'Lozinke se ne poklapaju';
            return false;
        } else {
            confirmPasswordInput.classList.remove('error')
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    nameInput.addEventListener('blur', validateName)
    emailInput.addEventListener('blur', validateEmail)
    phoneInput.addEventListener('blur', validatePhone)
    passwordInput.addEventListener('blur', validatePassword)
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword)

    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail()
        const isPhoneValid = validatePhone()
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            console.log('Forma je validna');
        } else {
            console.log('Forma nije validna');
        }
    });