var username;
var password;
window.onload = function(){ //when window is fully loaded
  document.getElementById('signin_button').onclick = onSubmit;
}
function onSubmit(){
  username = document.getElementById('username_input').value;
  password = document.getElementById('password_input').value;
  if(!username)setError("username can't be empty");
  else if(!password)setError("password can't be empty");
  else{
    validateUser();
  }
}
function validateUser(){
  // send a request to the server asking if this user exists
  // if user dont exists set and error and suggest the user to sign up
  // if the user exists send the user to the account home page
}
function setError(err){
  document.getElementById('error').innerHTML = err;
}
