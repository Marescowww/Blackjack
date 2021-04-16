<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Admin - BlackJack</title>
<link href="assets/css/Admin.css" rel ="stylesheet">
<link rel="icon" type="image/png" href="assets/img/poker-cards.png" />
  <script type="text/javascript" src="assets/js/Admin.js"></script>
</head>
<body><center>
	<h1>Admin</h1>
<div id="canvas">
	<form action="assets/php/AdminConnect.php" method="post">
	<div id="Champ">
		<label for="email">Email</label>
	<input type="text" placeholder="Votre email" name="email"  autocomplete="on"><br>
	<label for="password">Mot de passe</label>
	<input type="password" placeholder="Votre mot de passe" name="password" ><br><br>
	</div>
	<div id="Validation">
	<input type="submit" value="Connexion" name="LaConnexion" class="Button" >
	</div>
	</form>
</div>
</center>
</body>
</html>
