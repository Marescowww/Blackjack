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
	  $jetons = "INSERT INTO jetons (jeton1,jeton5,jeton10,jeton20,jeton50,total) VALUES (10,10,10,10,10,1860)";
	  $victory ="INSERT INTO victory (player,dealer) VALUES (0,0)";

	  if ($mysqli->query($sql) === TRUE && $mysqli->query($jetons)===TRUE && $mysqli->query($victory)===TRUE) {header('Location: ../../PanelAdmin.php?admin=joueurs&add=wait');}else{echo "Echec";};
  }
  ?>
