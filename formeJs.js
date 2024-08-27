$(document).ready(function() {
    // Prikazivanje forme za registraciju
    $('#register-button').click(function() {
        $('#form-container').show();
        $('#login-form-container').hide();
        $('#events-container').hide();
        $('#search-events-container').hide();
        $('#form-title').text('Registracija');
    });

    // Prikazivanje forme za prijavu
    $('#login-button').click(function() {
        $('#form-container').hide();
        $('#login-form-container').show();
        $('#events-container').hide();
        $('#search-events-container').hide();
    });

        // Prikazivanje liste događaja
        $('#events-button').click(function() {
            $('#form-container').hide();
            $('#login-form-container').hide();
            $('#events-container').show();
            $('#search-events-container').hide();
        });

    // Prikazivanje forme za pretraživanje događaja
    $('#search-events-button').click(function() {
        $('#form-container').hide();
        $('#login-form-container').hide();
        $('#events-container').hide();
        $('#search-events-container').show();
    });

    // Slanje forme za registraciju
    $('#registration-form').submit(function(e) {
        e.preventDefault();
    });

        // Slanje forme za prijavu
        $('#login-form').submit(function(e) {
            e.preventDefault();
        });

    // Slanje forme za pretraživanje događaja
    $('#search-events-form').submit(function(e) {
        e.preventDefault();
    })
});