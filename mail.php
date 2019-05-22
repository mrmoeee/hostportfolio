<?php  
  if(isset($_POST['name'])){
    $name = $_POST['name'];
  }
  if(isset($_POST['email'])){
    $email = $_POST['email'];
  }
  if(isset($_POST['message'])){
    $message = $_POST['message'];
  }

  $recipient = "mrobertmoe@gmail.com";
  $subject = 'From Portfolio';
  $content="From: $name \n Email: $email \n Message: $message";
  $mailheader = "From: $email \r\n";

  
  $secretKey = "6Lcn_KQUAAAAACYa3xn1m8_USRYFXPAZIqRYby90";
  $responseKey = $_POST['g-recaptcha-response'];
  $userIP = $_SERVER['REMOTE_ADDR'];
  
  $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
  $response = file_get_contents($url);
  $response = json_decode($response);

  if($response->success){
    mail($recipient, $subject, $content, $mailheader) or die("Error!");
    echo 'Email sent!';
  } else {
    echo 'Verification failed, we think you might be a robot';
  }

?>