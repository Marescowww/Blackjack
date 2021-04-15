<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
if(isset($_SESSION['id'])) {
$getid = $_SESSION['id'];
$NombreJeton50=$bdd->prepare('SELECT jeton50 FROM `jetons` WHERE idjoueur=?');
$NombreJeton50->execute(array($getid));
$ResultNBJeton50 = $NombreJeton50->fetch();
$Addition = $ResultNBJeton50['jeton50'];

$requser50 = $bdd->prepare("INSERT INTO `money` (`idjoueur`, `+10`, `+100`, `+500`,`€`) VALUES (?, 'Non', 'Oui', 'Non','1')");
$requser50->execute(array($getid));

$Add100 = $bdd->prepare('UPDATE `jetons` SET `jeton50` = ? +2 WHERE `jetons`.`idjoueur` = ?');
$Add100->execute(array($Addition,$getid));
echo "<script language='javascript'>window.close()</script>";
}
?>
