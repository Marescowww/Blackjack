<?php
$dateMonth = date('m');

$requseradmin1 = $bdd->prepare("SELECT COUNT(*) AS Compteur_Month FROM accounts WHERE MONTH(date) = ?");
$requseradmin1->execute(array($dateMonth));
$admin1 = $requseradmin1->fetch();

$requser1=$bdd->prepare("SELECT COUNT(*)+1 AS Compteur FROM `accounts`");
$requser1->execute();
$account = $requser1->fetch();
$requser2 = $bdd->prepare("SELECT * FROM `accounts`");
$requser2->execute();

 ?>
</div><center>
<h2>Gestion des joueurs</h2>
</center>

<div>
<p>Nombre de joueurs : <?php echo $account['Compteur'] ?></p>
<p>Nouveau joueur ce mois ci : <?php echo $admin1['Compteur_Month'] ?> </p>
</div>
<hr>
<a href="PanelAdmin.php?admin=joueurs&add=add">Ajouter un nouveau joueur</a>
<?php if($_GET['add'] == 'add'){include('assets/php/PanelAdminAdd.php');} ?>

<hr>
<a href="PanelAdmin.php?admin=joueurs&add=delete">Supprimer un joueur</a>
<?php if($_GET['add'] == 'delete'){include('assets/php/PanelAdminDelete.php');} ?>

<hr>
<table>
  <tr>
    <td>ID</td>
    <td>Mail</td>
    <td>User</td>
    <td>Date</td>
  </tr>
<?php
while ($accountINFO = $requser2->fetch(PDO::FETCH_ASSOC)) : ?>
<tr>
<td><?php echo htmlspecialchars($accountINFO['id']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['mail']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['user']); ?></td>
<td><?php echo htmlspecialchars($accountINFO['date']); ?></td>
</tr>
<?php endwhile; ?>
