<?php
if(isset($_POST['submit'])) {
$to = "rodrigo@monochro.me";
$subject = "Email Form from Monochro.me";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$org_field = $_POST['org'];
$message = $_POST['msg'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";
 
echo "Thank you, $name_field,\n I'll be in contact within 24 hours.";
mail($to, $subject, $body);
} else {
echo "blargeeee! $name_field\n $email_field\n $org_field\n $message";
}
?> 	