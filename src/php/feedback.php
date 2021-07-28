<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name1 = $_POST['text_input_name'];
$email1 = $_POST['text_input_e-mail'];
$message1 = $_POST['feedback_message'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'test_php2@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'TWMNFkgfjkNbBnhfQN2T'; // Ваш пароль от почты с которой будут отправляться письма  -vzryTmB3OM3
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('test_php2@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('maxidiy897@aline9.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = ''. "Скрипт сработал! <br>". $name1 ."<br>". $email1 ."<br>". $message1;
$mail->AltBody = '';

if(!$mail->send()) {
    return 'true';
} else {
    return 'false';
}
?>