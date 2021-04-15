<?php
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
$page= $_GET['admin'];
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
if($page == 'joueurs'){
  include('assets/php/AdminJoueurs.php');
}

if($page == 'money'){
  include('assets/php/AdminMoney.php');
}
 ?>

</body>
</html>
