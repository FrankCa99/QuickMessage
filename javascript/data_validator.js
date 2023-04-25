//create a class call it DataValidator and add a method to it called validate
class DataValidator {
    validate_user(user) {
        if (!this.is_name_or_lasname_valid(user.name)) return "name \'"+user.name+"\' is not valid" //check name
        else if (!this.is_name_or_lasname_valid(user.lastname)) return "name \'"+user.lastname+"\' is not valid" //check lastname
        else if (!this.is_email_valid(user.email)) return "email \'"+user.email+"\' is not valid" //check email
        else if (!this.is_username_valid(user.username)) return "username \'"+user.username+"\' is not valid" //check username
        else if (!this.is_password_valid(user.password)) return "password \'"+user.password+"\' is not valid" //check password
        return true // everything is correct
    }
    is_name_or_lasname_valid(str){
      var regex = /[A-Za-z]/
      return regex.test(str)
    }
    is_email_valid(str){
      var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      return regex.test(str)
    }
    is_username_valid(str) {
        var regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(str)
    }
    is_password_valid(str) {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
        return regex.test(str)
    }
}
