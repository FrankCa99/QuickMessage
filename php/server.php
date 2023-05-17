<?php
  $rawData = file_get_contents('php://input');
  $requestData = json_decode($rawData);
  $user = json_decode($requestData->user);
  if($requestData->type == "userExistance")echo is_dir("../users/" . $user->id);// checks if a user exist
  else if($requestData->type == "userPrivateData"){
    $filepath = "../users/" . $user->id . "/private_info.json";
    $handle = fopen($filepath, "r");
    $userData = fread(fopen($filepath, "r"), filesize($filepath));
    echo $userData;
  } // returns the user private data base on the user Id
?>
