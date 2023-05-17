var username;
var password;
var requester;
var tempUser;
window.onload = function(){ //when window is fully loaded
  requester = new ServerRequester();
  document.getElementById('signin_button').onclick = onSubmit;
}
function onSubmit(){
  username = document.getElementById('username_input').value;
  password = document.getElementById('password_input').value;
  if(!username)setError("username can't be empty");
  else if(!password)setError("password can't be empty");
  else{
    tempUser = new User();
    tempUser.id = (username + password);
    requester.requestUserExistance(tempUser, serverResponseHandler);
  }
}
function serverResponseHandler(response){
  if(Number(response) == 0) setError("user not found, try to <a href='#' id='link_to'>create an account</a>");
  else {
    window.location = ("../pages/home.html");
    sessionStorage.setItem("userId", tempUser.id);
  }
}
function setError(err){
  document.getElementById('error').innerHTML = err;
}
