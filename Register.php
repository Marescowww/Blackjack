<?php
  // Vérifie qu'il provient d'un formulaire
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //identifiants mysql
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "blackjack";
   
     
    $email = htmlspecialchars($_POST["mail"]);
	$user = htmlspecialchars($_POST["pseudo"]);
	$password = sha1($_POST["password"]);
	  
    //Ouvrir une nouvelle connexion au serveur MySQL
    $mysqli = new mysqli($host, $username,"", $database);
    
    //Afficher toute erreur de connexion
    if ($mysqli->connect_error) {
      die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }  
    
	  $sql = "INSERT INTO accounts (mail,user,password) VALUES ('$email','$user','$password')";
	  if ($mysqli->query($sql) === TRUE) {
  ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Inscription réussi - BlackJack</title>
<link href="assets/css/Connexion_echoue.css" rel="stylesheet">
<script type="text/javascript">
   setTimeout(function () {
       window.location.href = "Connect.php";}, 3000);	
</script>
</head>
<body><center>
	<div id="canvas">
	<p id="Text">Votre inscription a réussi, vous allez être redirigé</p>
	<p>Si la redirection ne fonctionne pas cliqué ICI</p>
	</center></div>
</body>
</html>
<?php
} else {
?>

 <!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Connexion échoué - BlackJack</title>
<link href="assets/css/Connexion_reussi.css" rel="stylesheet">
<script type="text/javascript">
   setTimeout(function () {
       window.location.href = "Connect.php";}, 5000);	
</script>
</head>
<body>
	<div id="canvas">
	<img src="assets/img/warning-stamp-1.png" alt="Warning !" id="Warning">
	<p id="Text">Votre Inscription n'a pas fonctionné vous aller être redirigé</p>
	<p>Si la redirection ne fonctionne pas cliqué ICI</p>
	</div>
</body>
</html>
<?php
}

  }
?>
