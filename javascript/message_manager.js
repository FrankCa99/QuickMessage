    //create a message manager class and add a method to it called sendMessage
    class MessageManager {
        send_message(message) {
            var target_user = message.targeted_user;
            var user = message.user;
            var message_as_json = JSON.stringify(message.message);
            var xhr = new XMLHttpRequest();
            
        } 
        check_message_availability() {
            
        }
    }
