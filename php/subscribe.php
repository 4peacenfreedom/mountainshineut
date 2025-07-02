<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "dinayovis.pc.2020@gmail.com"; // 🔁 recipient email goes here
        $subject = "Nuevo suscriptor - Mountain Shine Cleaning LLC";
        $message = "Nuevo email suscrito:\n\n$email";
        $headers = "From: dinayovis.pc.2020@gmail.com\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "Thanks for subscribing!";
        } else {
            echo "There was a problem sending your subscription.";
        }
    } else {
        echo "Please enter a valid email address.";
    }
} else {
    echo "Invalid request.";
}
?>
