<?php
session_start();

$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
if(isset($_SESSION['id'])) {
$getid = $_SESSION['id'];


$NombreJeton10=$bdd->prepare('SELECT jeton10 FROM `jetons` WHERE idjoueur=?');
$NombreJeton10->execute(array($getid));
$ResultNBJeton10 = $NombreJeton10->fetch();
$Addition = $ResultNBJeton10['jeton10'];

 $requser10 = $bdd->prepare("INSERT INTO `money` (`idjoueur`, `+10`, `+100`, `+500`,`€`) VALUES (?, 'Oui', 'Non', 'Non','0.10')");
 $requser10->execute(array($getid));



$Add10 = $bdd->prepare('UPDATE `jetons` SET `jeton10` = ? +1 WHERE `jetons`.`idjoueur` = ?');
$Add10->execute(array($Addition,$getid));
echo "<script language='javascript'>window.close()</script>";
}
?>
