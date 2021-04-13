<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');

if(isset($_SESSION['id'])) {
   $requser = $bdd->prepare("SELECT id, mail,user,player,dealer,jeton1,jeton5,jeton10,jeton20,jeton50,total FROM accounts INNER JOIN victory ON accounts.id = victory.idjoueur INNER JOIN jetons ON accounts.id = jetons.idjoueur WHERE id = ?");
   $requser->execute(array($_SESSION['id']));
   $user = $requser->fetch();
   if(isset($_POST['SendJeton1']) AND !empty($_POST['SendJeton1']) AND $_POST['SendJeton1'] != $user['jeton1']) {
      $newjeton1 = htmlspecialchars($_POST['SendJeton1']);
      $insertjeton1 = $bdd->prepare("UPDATE jetons SET jeton1 = ? WHERE idjoueur = ?");
      $insertjeton1->execute(array($newjeton1, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendJeton5']) AND !empty($_POST['SendJeton5']) AND $_POST['SendJeton5'] != $user['jeton5']) {
      $newjeton5 = htmlspecialchars($_POST['SendJeton5']);
      $insertjeton5 = $bdd->prepare("UPDATE jetons SET jeton5 = ? WHERE idjoueur = ?");
      $insertjeton5->execute(array($newjeton5, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendJeton10']) AND !empty($_POST['SendJeton10']) AND $_POST['SendJeton10'] != $user['jeton10']) {
      $newjeton10 = htmlspecialchars($_POST['SendJeton10']);
      $insertjeton10 = $bdd->prepare("UPDATE jetons SET jeton10 = ? WHERE idjoueur = ?");
      $insertjeton10->execute(array($newjeton10, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendJeton20']) AND !empty($_POST['SendJeton20']) AND $_POST['SendJeton20'] != $user['jeton20']) {
      $newjeton20 = htmlspecialchars($_POST['SendJeton20']);
      $insertjeton20 = $bdd->prepare("UPDATE jetons SET jeton20 = ? WHERE idjoueur = ?");
      $insertjeton20->execute(array($newjeton20, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendJeton50']) AND !empty($_POST['SendJeton50']) AND $_POST['SendJeton50'] != $user['jeton50']) {
      $newjeton50 = htmlspecialchars($_POST['SendJeton50']);
      $insertjeton50 = $bdd->prepare("UPDATE jetons SET jeton50 = ? WHERE idjoueur = ?");
      $insertjeton50->execute(array($newjeton50, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendTotalJeton']) AND !empty($_POST['SendTotalJeton']) AND $_POST['SendTotalJeton'] != $user['total']) {
      $newtotaljeton = htmlspecialchars($_POST['SendTotalJeton']);
      $inserttotaljeton = $bdd->prepare("UPDATE jetons SET total = ? WHERE idjoueur = ?");
      $inserttotaljeton->execute(array($newtotaljeton, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendVictoire']) AND !empty($_POST['SendVictoire']) AND $_POST['SendVictoire'] != $user['player']) {
      $newvictoire = htmlspecialchars($_POST['SendVictoire']);
      $insertvictoire = $bdd->prepare("UPDATE victory SET player = ? WHERE idjoueur = ?");
      $insertvictoire->execute(array($newvictoire, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   if(isset($_POST['SendDefaite']) AND !empty($_POST['SendDefaite']) AND $_POST['SendDefaite'] != $user['dealer']) {
      $newdefaite = htmlspecialchars($_POST['SendDefaite']);
      $insertdefaite = $bdd->prepare("UPDATE victory SET player = ? WHERE idjoueur = ?");
      $insertdefaite->execute(array($newdefaite, $_SESSION['id']));
      header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
   }
   header('Location: ../../BlackJack.php?id='.$_SESSION['id']);
 }
 ?>
