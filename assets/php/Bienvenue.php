<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');

if(isset($_GET['id']) AND $_GET['id'] > 0) {
   $getid = $_GET['id'];
   $requser = $bdd->prepare('SELECT * FROM accounts WHERE id = ?');
   $requser->execute(array($getid));
   $userinfo = $requser->fetch();


	$requserJetons = $bdd->prepare('SELECT id, mail,user,jeton1,jeton5,jeton10,jeton20,jeton50,total FROM accounts INNER JOIN jetons ON accounts.id = jetons.idjoueur ORDER BY jetons.total ASC LIMIT 1');
	$requserJetons->execute();
	$jetoninfo = $requserJetons->fetch();
  $recupJetons = $bdd->prepare('SELECT * FROM jetons WHERE idjoueur = ?');
  $recupJetons->execute(array($getid));
  $nombreJetons=$recupJetons->fetch();


	$requserVictory = $bdd->prepare('SELECT id, mail,user,player,dealer,player-dealer FROM accounts INNER JOIN victory ON accounts.id = victory.idjoueur ORDER BY player-dealer DESC LIMIT 1');
	$requserVictory->execute();
	$victoryinfo = $requserVictory->fetch();
  $recupVictory = $bdd->prepare('SELECT * FROM victory WHERE idjoueur = ?');
  $recupVictory->execute(array($getid));
  $nombreVictory=$recupVictory->fetch();

}
if (empty($_SESSION['user']))
{
    header("Location: Connect.php");
}
setlocale(LC_TIME, "fr_FR", "French");
$resultDate=strftime("%A %d %B %Y",strtotime($userinfo['date']));
?>
