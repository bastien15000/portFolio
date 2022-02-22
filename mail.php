<?php

$to = $_POST['email'];
$subject = $_POST['sujet'];
$message = $_POST['message'];
$message = wordwrap($message, 70, "\r\n");
mail($to,$subject,$message);
header('Location: ./');