<?php
    class UserManager {
        private $users = [];
        public function add_user($user) {
            
        }
        public function delete_user($user) {
            
        }
        public function get_users($user) {
            return $this->users;
        }
        public function is_user($user) {
            var $users = $this->get_users;
            for ($i = 0; $i < count($users); $i++) if ($users[$i] == $user) return true;
            return false;
        }
    }
?>