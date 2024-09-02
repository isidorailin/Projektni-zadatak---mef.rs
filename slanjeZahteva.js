// Check local storage
function checkLocalStorage() {
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');

    if (email && password) {
        $('#form-container').hide()
        $('#login-form-container').show()
        $('#events-container').hide()
        $('#search-events-container').hide()
    } else {
        $('#form-container').show();
        $('#login-form-container').hide()
        $('#events-container').hide()
        $('#search-events-container').hide();
        $('#form-title').text('Registracija');
    }
} checkLocalStorage();

$('#register-button').click(function() {
    $('#form-container').show()
    $('#login-form-container').hide()
    $('#events-container').hide()
    $('#search-events-container').hide();
    $('#form-title').text('Registracija');
});

$('#login-button').click(function() {
    $('#form-container').hide();
    $('#login-form-container').show()
    $('#events-container').hide()
    $('#search-events-container').hide()
});

$('#events-button').click(function() {
    $('#form-container').hide();
    $('#login-form-container').hide();
    $('#events-container').show();
    $('#search-events-container').hide();
});

$('#search-events-button').click(function() {
    $('#form-container').hide();
    $('#login-form-container').hide()
    $('#events-container').hide();
    $('#search-events-container').show();
});

// Registracija:
$('#registration-form').submit(function(e) {
    e.preventDefault();

    var isValidName = validateName()
    var isValidEmail = validateEmail()
    var isValidPassword = validatePassword()
    var isValidConfirmPassword = validateConfirmPassword()

    if (isValidName && isValidEmail && isValidPassword && isValidConfirmPassword) {
        var formData = new FormData();
        formData.append('name', $('#name').val().trim())
        formData.append('email', $('#email').val().trim())
        formData.append('phone', $('#phone').val().trim())
        formData.append('password', $('#password').val().trim())
        formData.append('apitoken', '7aJ4vfzNM3oxCzGiQ0UMGik3xBNF7i8Q5vo0euz7busGVFoKF8AgzH7jwvV8T8WR8OXjDNRo3IqIMJO8l4yXX8Dc3j');

        $.ajax({
            url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/register',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            headers: {
                'Accept': 'application/json'
            },
            success: function(response) {
                if (response.imePrezime && response.email) {
                    // Clear input felds
                    $('#name').val('')
                    $('#email').val('')
                    $('#password').val('')
                    $('#confirm-password').val('')
                    // Hide registration form and show login form
                    $('#form-container').hide()
                    $('#login-form-container').show()
                    $('#events-container').hide()
                    $('#search-events-container').hide()
                    console.log(formData);
                }
            },
            error: function() {
                alert('Greška pri registraciji.');
            }
        });
    }
});

// Login
$('#login-form').submit(function(e) {
    e.preventDefault();

    var email = $('#login-email').val().trim()
    var password = $('#login-password').val().trim()

    if (email && password) {
        $.ajax({
            url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/login',
            method: 'POST',
            data: {
                email: email,
                password: password,
                apitoken: '7aJ4vfzNM3oxCzGiQ0UMGik3xBNF7i8Q5vo0euz7busGVFoKF8AgzH7jwvV8T8WR8OXjDNRo3IqIMJO8l4yXX8Dc3j'
            },
            headers: {
                'Accept': 'application/json'
            },
            success: function(response) {
                console.log('Response:', response)
                if (response.token) {
                    // Successfully logged in
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('type', response.type)
                    alert('Uspešna prijava!')
                } else {
                    $('#login-error').text('Neuspešna prijava. Proverite email i lozinku.')
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error:', textStatus, errorThrown)
                $('#login-error').text('Greška. Proverite unete podatke.')
            }
        });
    } else {
        $('#login-error').text('Molimo vas da unesete email i lozinku.')
    }
})
