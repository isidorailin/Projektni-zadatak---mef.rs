    // input elements:
    var nameInput = document.getElementById('name')
    var emailInput = document.getElementById('email')
    var phoneInput = document.getElementById('phone')
    var passwordInput = document.getElementById('password')
    var confirmPasswordInput = document.getElementById('confirm-password')
    
    var nameError = document.getElementById('name-error')
    var emailError = document.getElementById('email-error')
    var phoneError = document.getElementById('phone-error');
    var passwordError = document.getElementById('password-error')
    var confirmPasswordError = document.getElementById('confirm-password-error');

    // Regularni izrazi
    var nameRegex = /^[A-Za-z][A-Za-z\- ]*[A-Za-z]$/;
    var phoneRegex = /^\+\d{1}[0-9]{8,13}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;

    function validateName() {
        var nameValue = nameInput.value.trim()

        if (nameValue.length < 5 || nameValue.length > 180 || !nameRegex.test(nameValue)) {
            nameInput.classList.add('error')
            nameError.textContent = 'Ime i prezime nije pravilno napisano';
            return false
        } else {
            nameInput.classList.remove('error');
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        var emailValue = emailInput.value.trim()
        if (emailValue === '') {
            emailInput.classList.add('error')
            emailError.textContent = 'Email je obavezan'
            return false;
        } else {
            emailInput.classList.remove('error')
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        var passwordValue = passwordInput.value.trim()
        if (!passwordRegex.test(passwordValue)) {
            passwordInput.classList.add('error')
            passwordError.textContent = 'Lozinka mora imati 6 karaktera, uključujući velika i mala slova, brojeve i znakove.';
            return false;
        } else {
            passwordInput.classList.remove('error')
            passwordError.textContent = ''
            return true;
        }
    }
    function validateConfirmPassword() {
        var confirmPasswordValue = confirmPasswordInput.value.trim();
        
        if (confirmPasswordValue !== passwordInput.value.trim()) {
            confirmPasswordInput.classList.add('error')
            confirmPasswordError.textContent = 'Lozinke se ne poklapaju'
            return false;
        } else {
            confirmPasswordInput.classList.remove('error')
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    nameInput.addEventListener('blur', validateName)
    emailInput.addEventListener('blur', validateEmail)
    passwordInput.addEventListener('blur', validatePassword)
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword)
