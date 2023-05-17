<?php
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  $json = file_get_contents('php://input');
  $user = json_decode($json);

  $users_folder_path = "../users";
  $users_count_path = $users_folder_path . "/user_count.txt";

  $user_count = update_file($users_count_path, folder_content_count($users_folder_path) - 3);

  if (isset($user)){
    mkdir($users_folder_path . "/" . $user->name . $user_count);
  }
  echo "retry: 1000\n";
  echo "data: There are {$user_count} users in the server\n\n";
  flush();
  function update_file($file_path, $data){
    file_put_contents($file_path, $data);
    return file_get_contents($file_path);
  }
  function folder_content_count($folder_path){
    return count(scandir($folder_path));
  }
  if(connection_aborted()) exit();
?>
