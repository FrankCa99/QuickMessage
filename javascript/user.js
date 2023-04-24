class User {
    constructor(name, age, username, password) {
        this.name = name;
        this.age = age;
        this.username = username;
        this.password = password;
    }
    getJSONData() {
        let user_as_json = JSON.stringify(this);
        return user_as_json
    }
}