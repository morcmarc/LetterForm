<?php 

	header('Content-type: text/html; charset=UTF-8');
	
	function postMessage() {
	
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
	
		$to  = 'your@email.address';	
		$message = '
		<html>
			<head>
				<title>'.html_entity_decode($name).' wrote</title>
			</head>
			<body>
				<strong>'.html_entity_decode($name).'</strong>< '.html_entity_decode($email).' > wrote:
				<p>'.html_entity_decode($message).'</p>
			</body>
		</html>
		';
	
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
		$headers .= 'From: contact-form <no-reply@contact.form>' . "\r\n";
	
		$r = mail($to, "Message", $message, $headers);
		
		return $r;
		
	}
	
	postMessage();
	
?>