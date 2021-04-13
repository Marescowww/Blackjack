<?php
session_start();
 
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
 
if(isset($_SESSION['id'])) {
   $requser = $bdd->prepare("SELECT * FROM accounts WHERE id = ?");
   $requser->execute(array($_SESSION['id']));
   $user = $requser->fetch();
   if(isset($_POST['MonPseudo']) AND !empty($_POST['MonPseudo']) AND $_POST['MonPseudo'] != $user['user']) {
      $newpseudo = htmlspecialchars($_POST['MonPseudo']);
      $insertpseudo = $bdd->prepare("UPDATE accounts SET user = ? WHERE id = ?");
      $insertpseudo->execute(array($newpseudo, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['MonMail']) AND !empty($_POST['MonMail']) AND $_POST['MonMail'] != $user['mail']) {
      $newmail = htmlspecialchars($_POST['MonMail']);
      $insertmail = $bdd->prepare("UPDATE acounts SET mail = ? WHERE id = ?");
      $insertmail->execute(array($newmail, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['MonMotDePasse']) AND !empty($_POST['MonMotDePasse']) AND isset($_POST['MonMotDePasse2']) AND !empty($_POST['MonMotDePasse2'])) {
      $mdp1 = sha1($_POST['MonMotDePasse']);
      $mdp2 = sha1($_POST['MonMotDePasse2']);
      if($mdp1 == $mdp2) {
         $insertmdp = $bdd->prepare("UPDATE accounts SET password = ? WHERE id = ?");
         $insertmdp->execute(array($mdp1, $_SESSION['id']));
         header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
      } else {
         $msg = "Vos deux mdp ne correspondent pas !";
      }
   }
}
?>