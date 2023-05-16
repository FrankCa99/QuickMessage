var signin_button;
var signup_button;
var signinURL = "pages/signin.html";
window.onload = function(){
  signin_button = document.getElementById('sign_in_button');
  signup_button = document.getElementById('sign_up_button');
  //adding click events
  signin_button.onclick = clickHandler;
  signup_button.onclick = clickHandler;
}
//click events handler
function clickHandler(event){
  var id = event.target.id;
  if(id == "sign_in_button") location.assign(signinURL);
  else if(id == "sign_up_button") console.log("no page url was provided");
}
