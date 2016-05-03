$(document).ready(function () {
    $('.button').on('click', function () {
        $("#register-form").validate();
       
        function validate() {
            var email = $('#email').val(),
            var username = $('#username').val(),
            var password = $('#password').val(),

            var inputVal = new Array(email, usernames, password),
            var inputMessage = new Array("email address", "user name", "password"),

                $('.error').hide();
            if (inputVal[0] == "") {
                $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
            }
            if (inputVal[1] == "") {
                $('#usernameLabel').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            }
            if (inputVal[2] == "") {
                $('#passwordLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
            }
        });
});
});
       $('.success').show();