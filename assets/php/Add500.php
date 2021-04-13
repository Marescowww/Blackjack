<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
if(isset($_SESSION['id'])) {
$getid = $_SESSION['id'];
$NombreJeton500=$bdd->prepare('SELECT jeton50 FROM `jetons` WHERE idjoueur=?');
$NombreJeton500->execute(array($getid));
$ResultNBJeton500 = $NombreJeton500->fetch();
$Addition = $ResultNBJeton500['jeton100'];

$requser500 = $bdd->prepare("INSERT INTO `money` (`idjoueur`, `+10`, `+100`, `+500`) VALUES (?, 'Non', 'Non', ' Oui')");
$requser500->execute(array($getid));

$Add500 = $bdd->prepare('UPDATE `jetons` SET `jeton50` = ? +10 WHERE `jetons`.`idjoueur` = ?');
$Add500->execute(array($Addition,$getid));
echo "<script language='javascript'>window.close()</script>";
}
?>
