<?php
$dateMonth = date('m');

$requsermoney = $bdd->prepare("SELECT SUM(€) AS CA FROM `money`");
$requsermoney->execute();
$money = $requsermoney->fetch();

$requsermoney1 = $bdd->prepare("SELECT SUM(€) AS CA_Month FROM money WHERE MONTH(date) = ?");
$requsermoney1->execute(array($dateMonth));
$money1 = $requsermoney1->fetch();

$requsermoney2 = $bdd->prepare("SELECT id, user, SUM(€) AS CA_Joueurs FROM `accounts` INNER JOIN money ON accounts.id = money.idjoueur");
$requsermoney2->execute();

?>
</div><center>
<h2>Chiffre d'affaire</h2>
</center>
</div>
<p>Chiffre d'affaire total : <?php echo $money['CA'];?>€</p>
<p>Chiffre d'affaire du mois en cours : <?php echo $money1['CA_Month']; ?>€</p>
<hr>
<table>
  <tr>
    <td>ID</td>
    <td>user</td>
    <td>Panier total</td>
  </tr>
<?php
while ($money2 = $requsermoney2->fetch(PDO::FETCH_ASSOC)) : ?>
<tr>
<td><?php echo htmlspecialchars($money2['id']); ?></td>
<td><?php echo htmlspecialchars($money2['user']); ?></td>
<td><?php echo htmlspecialchars($money2['CA_Joueurs']); ?></td>
</tr>
<?php endwhile; ?>
