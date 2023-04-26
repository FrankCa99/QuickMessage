class ServerRequester{
  constructor(){
    this.xhr = new XMLHttpRequest()
  }
  request_sign_up(){

  }
  request_login(){

  }
  general_request(server, user){
    this.xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // request was successfully sent
        console.log(this.responseText);
      }
    }
    this.xhr.open("post", server)
    this.xhr.send(user.getJSONData())
  }
}
