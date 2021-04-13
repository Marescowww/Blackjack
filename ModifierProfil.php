<?php
require('assets/php/Bienvenue.php');
require("assets/php/DbConnect.php");
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Modifier son profil - BlackJack</title>
<script type="text/javascript" src="assets/js/ModifierProfil.js"></script>
<link href="assets/css/ModifierProfil.css" rel ="stylesheet">
</head>
<body><center>
	<h3>Bonjour <?php echo $userinfo['user']; ?></h3>
	<div class="Boiteid">
	<p>Vous êtes avec nous depuis le : <?php echo $resultDate; ?></p>
	<form action ="assets/php/ModifierProfil.php" method="post">
	<p>Votre numéro de compte <br> <?php echo $userinfo['id']; ?></p>
	<p>Votre adresse mail</p>
	<input type="text" name="MonMail" value="<?php echo $userinfo['mail']; ?>">
	<p>Votre pseudo</p>
	<input type="text" name="MonPseudo" value="<?php echo $userinfo['user']; ?>">
	<p>Votre mot de passe</p>
	<p id="GenerateMDP"></p>
	<input type="button" onclick="generate()" value="+" title="Généré un mot de passe sécurisé">
	<input type="password" name="MonMotDePasse" id="MonMotDePasse">
	<p>Vérification de votre mot de passe</p>
	<input type="password" name="MonMotDePasse2" id="MonMotDePasse2"><br>
	<input type="submit" value="Validé" class="ButtonW" style="margin-top: 10px">
	</form>
	<?php if(isset($msg)) { echo $msg; } ?>
	<form action="assets/php/RetourJeu.php" method="post">
	<input type="submit" value="Retour au jeu" class="ButtonW" style="margin-top: 10px">
	</form>
</div>
<div id="Supplement">
<h2>Obtenez des jetons plus rapidement</h2>
<div class="Contenue">
<div class="grid-container">
<div class="grid-item" onClick="Add10()">
<img src="assets/img/bouton-play.png" width=50px>
<hr>
<input type="button" value="+10" onclick="Add10()" class="Button" >
</div>
<div class="grid-item" onClick="Add100()">
<img src="assets/img/mobile-phone.png" width=50px>
<hr>
<input type="button" value="+100" onclick="Add100()" class="Button">
</div>
<div class="grid-item" onClick="Add500()">
<img src="assets/img/mobile-phone.png" width=50px>
<hr>
<input type="button" value="+500" onclick="Add500()" class="Button">
</div>
</div>
</div>
</div>

</div>
</center>
</body>
</html>
