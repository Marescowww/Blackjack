<?php
include("assets/php/DbConnect.php");
include("assets/php/NombreCompte.php");
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Connexion - BlackJack</title>
<link href="assets/css/Connect.css" rel ="stylesheet">
<link rel="icon" type="image/png" href="assets/img/poker-cards.png" />
<script type="text/javascript" src="assets/js/Connect.js"></script>
</head>
<body><center>
	<h1>Connexion</h1>
<div id="canvas">
	<form action="assets/php/Connexion.php" method="post">
	<div id="Champ">
		<label for="email">Email</label>
	<input type="email" placeholder="Votre email" name="email"  autocomplete="on"><br>
	<label for="password">Mot de passe</label>
	<input type="password" placeholder="Votre mot de passe" name="password" ><br><br>
	</div>
	<div id="Validation">
	<input type="submit" value="Connexion" name="LaConnexion" class="Button" > <input type="button" value="Inscription" id="Inscription" onClick="PageInscription()" class="Button">
	</div>
	</form>
</div>
	<div id="Nombre">
	<p> Nous sommes déjà <?php echo $row['Nombre'];$mysqli->close();?> dans l'application</p>
</div></center>
</body>
</html>
