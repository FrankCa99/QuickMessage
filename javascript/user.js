class User {
    constructor(name = '', lastname = '', email = '', username = '', password = '') {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.id = (this.username + this.password);
    }
    getJSONData() {
        let user_as_json = JSON.stringify(this);
        return user_as_json
    }
}
