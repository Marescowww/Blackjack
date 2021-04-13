<?php
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
$page= $_GET['admin'];
$requser = $bdd->prepare("SELECT * FROM `admin`");
$requser->execute();
$admin = $requser->fetch();
$requser2=$bdd->prepare("SELECT COUNT(*)+1 AS Compteur FROM `accounts`");
$requser2->execute();
$account = $requser2->fetch();
$requser3 = $bdd->prepare("SELECT * FROM `accounts`");
$requser3->execute();

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Panel Admin - BlackJack</title>
<link href="assets/css/PanelAdmin.css" rel ="stylesheet">
<link rel="icon" type="image/png" href="assets/img/poker-cards.png" />
<script type="text/javascript" src="assets/js/PanelAdmin.js"></script>
</head>

<body>
  <h1>Panel Admin </h1>
  <hr>
  <div id="Tableau">
  <div id="IndexTab">
    <a href="PanelAdmin.php?admin=pub">Pub</a>
    <br>
    <br>
    <a href="PanelAdmin.php?admin=joueurs&add=wait">Joueurs</a>
    <br>
    <br>
    <a href="PanelAdmin.php?admin=money">Money</a>
  </div>
<div id="ContenueTableau">
<?php
if ($page == 'pub'){
  include('assets/php/AdminPub.php');
}
if($page == 'joueurs'){}

if($page == 'money'){}
 ?>
</div><center>
<h2>Gestion des joueurs</h2>
</center>

<div>
<p>Nombre de joueurs : <?php echo $account['Compteur'] ?></p>
</div>
<hr>
<a href="PanelAdmin.php?admin=joueurs&add=add">Ajouter un nouveau joueur</a>
<?php if($_GET['add'] == 'wait'){} ?>
<form>
  <label for="mail">L'adresse mail</label>
  <input type="mail" id="mail" name="mail">
  <label for="password">Mot de passe</label>
  <input type="password" id="password" name="password">
  <label for="password2">Vérification mot de passe</label>
  <input type="password" id="password2" name="password2">
  <input type="submit">
</form>
<hr>
<a href="PanelAdmin.php?admin=joueurs&add=delete">Supprimer un joueur</a>
<?php if($_GET['add'] == 'delete'){} ?>
<form>
  <label for="id">Insérer l'id du joueur à supprimer</label>
    <input type="text" id="id" name="id">
    <input type="submit">
  </form>
<hr>
<table>
  <tr>
    <td>ID</td>
    <td>Mail</td>
    <td>User</td>
    <td>Date</td>
  </tr>
<?php
while ($accountINFO = $requser3->fetch(PDO::FETCH_ASSOC)) : ?>
<tr>
<td><?php echo htmlspecialchars($accountINFO['id']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['mail']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['user']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['date']); ?></td>
</tr>
<?php endwhile; ?>
</body>
</html>
