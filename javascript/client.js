let user
let validator
let submit_button
let user_is_valid = false
var requester;

window.onload = function() {
  var source = new EventSource("../php/server.php");
  submit_button = document.getElementById("submit_button");

  user = new User("");

  requester = new ServerRequester();

  submit_button.onclick = function(){
    user.name = document.getElementById("name").value;
    requester.general_request("../php/server.php", user);
  }
  source.onmessage = function(event){
    console.log(event.data);
  }
  // requester = new ServerRequester();
  //   submit_button = document.getElementById("submit_button");
  //   submit_button.onclick = function() {
  //       requester.general_request("../php/server.php");
  //       // var name = document.getElementById("name").value;
  //       // var lastname = document.getElementById("lastname").value;
  //       // var email = document.getElementById("email").value;
  //       // var username = document.getElementById("username").value;
  //       // var password = document.getElementById("password").value;
  //       //
  //       // user = new User(name, lastname, email, username, password);
  //       //
  //       // validator = new DataValidator();
  //       // user_is_valid = validator.validate_user(user);
  //       // if (user_is_valid){
  //       //
  //       // }else{
  //       //
  //       // }
  //   }
}
