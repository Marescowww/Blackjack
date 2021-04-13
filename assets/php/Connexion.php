	<?php
session_start();
 
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
 
if(isset($_POST['LaConnexion'])) {
   $mailconnect = htmlspecialchars($_POST['email']);
   $mdpconnect = sha1($_POST["password"]);
   if(!empty($mailconnect) AND !empty($mdpconnect)) {
      $requser = $bdd->prepare("SELECT * FROM accounts WHERE mail = ? AND password = ?");
      $requser->execute(array($mailconnect, $mdpconnect));
      $userexist = $requser->rowCount();
      if($userexist == 1) {
         $userinfo = $requser->fetch();
         $_SESSION['id'] = $userinfo['id'];
         $_SESSION['user'] = $userinfo['user'];
         $_SESSION['mail'] = $userinfo['mail'];
         header("Location: ../../BlackJack.php?id=".$_SESSION['id']);
      } else {
         $erreur = "Mauvais mail ou mot de passe !";
		  echo $erreur;
      }
   } else {
      $erreur = "Tous les champs doivent être complétés !";
	    echo $erreur;
   }
}
?>
