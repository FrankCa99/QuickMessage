//create a class call it DataValidator and add a method to it called validate
class DataValidator {
    validate_user(user) {
        if (!this.is_username_valid(user.username)) return "username \'"+user.username+"\' is not valid"
        else if (!this.is_password_valid(user.password)) return "password \'"+user.password+"\' is not valid"
        else if (!this.is_age_valid(user.age)) return "age \'"+user.age+"\' is not valid"
        return true
    }
    is_username_valid(str) {
        var regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(str)
    }
    is_password_valid(str) {
        var regex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
        return regex.test(str)
    }
    is_age_valid(age) {
        return age != NaN && age > 0
    }
}