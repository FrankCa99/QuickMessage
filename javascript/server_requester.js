class ServerRequester{
  constructor(){
    this.xhr = new XMLHttpRequest();
  }
  // send a request to the server asking if a user exist
  requestUserExistance(user, reponseCallback){
    //send the request
    this.#general_request("../php/server.php", user, "userExistance", reponseCallback);
  }
  // send a request to the server asking for the user private data
  requestUserData(user, reponseCallback){
    //send the request
    this.#general_request("../php/server.php", user, "userPrivateData", reponseCallback);
  }
  // general request(used internally only)
  #general_request(serverPath, user, type, callback){
    // prepare the request data
    var requestData = {
      type: type,
      user: user.getJSONData()
    }
    this.xhr.open("post", serverPath);//request setter
    this.xhr.send(JSON.stringify(requestData)); //send the request
    this.xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) callback(this.responseText); //is response ready?
    }
  }
}
