<?php
require("assets/php/DbConnect.php");
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Inscription - BlackJack</title>
<link href="assets/css/Inscription.css" rel ="stylesheet">
<link rel="icon" type="image/png" href="assets/img/poker-cards.png" />
<script type="text/javascript" src="assets/js/Inscription.js"></script>
</head>
<body><center>

  <div id="fond">

  <h2>Rejoignez-nous!</h2>
  <div id="BoxInscription">
  <form action="assets/php/Register.php" method="post" id="Inscription">
  <label>Votre mail :</label>
  <input type="email" name="mail" value="" class="input" autocomplete="on" required>
  <label>Votre pseudo :</label>
  <input type="text" name="pseudo" value="" class="input" autocomplete="on" required>
  <label>Votre mot de passe : <br><span id="GenerateMDP"></span></label>
  <input type="password" name="password" id="password" value="" autocomplete="on" required>
  <input type="button" value="+" onclick="generate()" title="Généré un mot de passe sécurisé">
  <label>Vérification mot de passe</label>
  <input type="password" name="password2"id="password2" value="" class="input" required>
  <input type="submit" class="Button"><br>
  <input type="button" id="Connexion" value="Retour Connexion" onClick="PageConnexion()" class="Button">
  </div>
  </form>
 </div></center>
</body>
</html>
