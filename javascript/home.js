var requester;
var user;
window.onload = function(){
  requester = new ServerRequester();
  user = new User();
  user.id = sessionStorage.getItem("userId");
  sessionStorage.setItem("userId", "");
  requester.requestUserData(user, serverResponseHandler);
}
function serverResponseHandler(response){
  var userData = JSON.parse(response);
  user = new User(userData.name, userData.lastname, userData.email, userData.username, userData.password);
  document.getElementById('private_info').innerHTML = user.getJSONData();
}
