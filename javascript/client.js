let user
let validator
let submit_button
let user_is_valid = false
window.onload = function() {
    submit_button = document.getElementById("submit_button");
    submit_button.onclick = function() {
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        user = new User(name, lastname, email, username, password);

        validator = new DataValidator(user);
        user_is_valid = validator.validate_user(user);
        console.log(user);
    }
}