<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
if(isset($_SESSION['id'])) {
$getid = $_SESSION['id'];
$NombreJeton100=$bdd->prepare('SELECT jeton100 FROM `jetons` WHERE idjoueur=?');
$NombreJeton100->execute(array($getid));
$ResultNBJeton100 = $NombreJeton100->fetch();
$Addition = $ResultNBJeton100['jeton100'];

$requser100 = $bdd->prepare("INSERT INTO `money` (`idjoueur`, `+10`, `+100`, `+500`) VALUES (?, 'Non', 'Oui', 'Non')");
$requser100->execute(array($getid));

$Add100 = $bdd->prepare('UPDATE `jetons` SET `jeton100` = ? +1 WHERE `jetons`.`idjoueur` = ?');
$Add100->execute(array($Addition,$getid));
echo "<script language='javascript'>window.close()</script>";
}
?>
