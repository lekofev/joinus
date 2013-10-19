<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="es" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html lang="es" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html lang="es" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="es" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title>JoinUs</title>
	<meta name="title" content="">
	<meta name="description" content="">
	<meta name="keywords" content="">
	
	<!-- Opciones para compartir en Facebook -->
	<meta property="og:title" content="">
	<meta property="og:description" content="">
	<meta property="og:type" content="">
	<meta property="og:url" content="">
	<meta property="og:image" content="">
	<meta property="og:image:secure_url" content="">
	<meta property="og:site_name" content="">
	
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	
	<script>
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-XXXXXXX-X']);
		_gaq.push(['_trackPageview']);
		
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>
<body>
	<?php
		$email = $_REQUEST['email'] ;
		$subject = "El asunto";

		$fecha_principal = $_REQUEST['fecha_principal'] ;
		$fecha_alternativa = $_REQUEST['fecha_alternativa'] ;
		$fecha_alternativa2 = $_REQUEST['fecha_alternativa2'] ;
		$nombre = $_REQUEST['nombre'] ;
		$amigos = $_REQUEST['amigos'] ;
		$telefono = $_REQUEST['telefono'] ;
		$actividad = $_REQUEST['actividad'] ;

		echo " Nombre: ".$nombre."\n Email: ".$email."\n Telefono: ".$telefono."\n Fecha Principal: ".$fecha_principal."\n Fecha Alternativa: ".$fecha_alternativa."\n Fecha Alternativa2: ".$fecha_alternativa2."\n Amigos?: ".$amigos."\n Mensaje: ".$_REQUEST['mensaje'];
		$message= " Nombre: ".$nombre."\n Email: ".$email."\n Telefono: ".$telefono."\n Fecha Principal: ".$fecha_principal."\n Fecha Alternativa: ".$fecha_alternativa."\n Fecha Alternativa2: ".$fecha_alternativa2."\n Amigos?: ".$amigos."\n Actividad: ".$actividad."\n Mensaje: ".$_REQUEST['mensaje'];
		mail("contacto@joinus.pe", $subject, $message, "From:" . $email);
	?>
</body>
</html>
