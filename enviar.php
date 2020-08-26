<?php

$destinatario = 'juanbrbrown@gmail.com';
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje  = $_POST['mensaje'];

$header = 'Enviado desde la página de JuanBrBrown Web designer';
$mensajeCompleto = "Nombre" . $nombre . "\nCorreo" . $correo . "\nTelefono " . $telefono . "\nMensaje " . $mensaje;

mail($destinatario, $mensajeCompleto, $header);
header("index.html");

?>
