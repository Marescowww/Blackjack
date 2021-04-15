<?php
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
$id =$_GET['id'];
$requserDelete1 = $bdd->prepare("DELETE FROM `accounts` WHERE `accounts`.`id` = ?");
$requserDelete1->execute(array($id));

$requserDelete2 = $bdd->prepare("DELETE FROM `jetons` WHERE `jetons`.`idjoueur` = ?");
$requserDelete2->execute(array($id));

$requserDelete3 = $bdd->prepare("DELETE FROM `victory` WHERE `victory`.`idjoueur` = ?");
$requserDelete3->execute(array($id));
header('Location: ../../PanelAdmin.php?admin=joueurs&add=wait')
?>
