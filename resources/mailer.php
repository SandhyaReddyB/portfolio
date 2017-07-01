<?php 
    
    //Get the form fields, removes html tags and whitespaces
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"), array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]),FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    //Check the data
    if(empty($name) OR empty($email) OR !filter_var($email,FILTER_VALIDATE_EMAIL) {
        header("Location: http://sandhya-reddy.com/portfolio/index.php?success=-1#form");
        exit;
    }
       
    $recipient = "sandhya.vce@gmail.com";
       
    $subject = "Portfolio: "+$name;
       
    $email_content = "Name: $name\n";
    $email_content. = "Email: $email\n\n";
    $email_content. = "Message: \n$message\n";
       
    $email_headers = "From: $name <$email>";
       
    mail($recipient, $subject, $email_content, $email_headers);
    
    header("Location: http://sandhya-reddy.com/portfolio/index.php?success=1#form");

?>