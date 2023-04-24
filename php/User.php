<!-- create pho-->
<?php
    class User {
        public $username;
        private $password;
        public $age
        public $name
        function __construct($username, $password, $age, $name) {
            $this->username = $username;
            $this->password = $password;
            $this->age = $age;
            $this->name = $name;
        }
        function create_user() {
            echo "create user";
        }
        function delete_user() {
            echo "delete user";
        }
    }
?>
