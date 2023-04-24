let user
let validator
window.onload = function() {
    user = new User("Jonh Doe", 30, "john123doe", "&12ab345678");
    validator = new DataValidator();
    document.getElementById("button").onclick = function() {
        console.log(validator.validate_user(user));
    }
}