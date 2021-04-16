<?php
if(empty($_GET['id'])){header('Location: Connect.php');};
include("assets/php/Bienvenue.php");

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>BlackJack</title>
<link rel="icon" type="image/png" href="assets/img/poker-cards.png" />
<link href="assets/css/BlackJack.css" rel ="stylesheet">
<script type="text/javascript" src="assets/js/BlackJack.js"></script>
</head>
<body>
	<div id="HowToPlay">
		<h2> Bonjour <?php echo $userinfo['user']; ?></h2>
		<h2 id="SommeTotal"></h2>
		<h2>Guide de jeu</h2>

		<div is="HowStart">
			<p class="TitreHow">Démarrage de la partie</p>
			<p class="TextHow">Appuyer sur START ! pour lancer la partie</p>

			<p class="TitreHow">Votre main n'est pas assez élevé ?</p>
			<p class="TextHow">Appuyer sur Hit ! pour l'augmenter</p>

			<p class="TitreHow">Votre main vous convient ?</p>
			<p class="TextHow">Appuyer sur Stand pour laisser la main au dealer</p>

			<p class ="TitreHow">Vous venez donc de gagner ou perdre</p>
			<p class="TextHow">Appuyer sur RESET ! puis START ! pour relancer votre partie</p>

			<form action="assets/php/GoModifierProfil.php" method="post">
			<input type="submit" value="Modifier mon profil" onClick="PageModifierProfil()" class="Button">
			</form>

		</div>

	</div>
</div>
<div id="Highlist">
	<h2>Tableaux des scores</h2>
<p> Le meilleur joueur est <?php echo $jetoninfo['user']?> avec <?php echo $jetoninfo['total'] ?> € de jetons </p>
<p> Le plus valeureux est <?php echo $victoryinfo['user']?> avec  <?php echo $victoryinfo['player-dealer'] ?> victoires contre le dealer</p>
</div>
	<div id="canvas">

		<div id="TeteDeTable">

			<div id="BouttonStart">
				<input type="button" value="DEAL !" id="Deal" class="Button" onClick="startJeton()">
				<input type="button" value="START !" id="Go" class="Button" onClick="startGame();startGameDealer();startVictoire(); Affichage()">
				<input type="button" value="RESET !" id="Reset" class="Button" onClick="reset()">
			</div>

			<div id="BouttonGame">
				<form action="assets/php/Sauvegarde.php" method="post">
	<input type="hidden" id="Jeton1" value="<?php echo $nombreJetons['jeton1'] ?>"><input type="hidden" id="SendJeton1" name="SendJeton1"value="">
	<input type="hidden" id="Jeton5" value="<?php echo $nombreJetons['jeton5'] ?>"><input type="hidden" id="SendJeton5" name="SendJeton5" value="">
	<input type="hidden" id="Jeton10" value="<?php echo $nombreJetons['jeton10'] ?>"><input type="hidden" id="SendJeton10" name="SendJeton10" value="">
	<input type="hidden" id="Jeton20" value="<?php echo $nombreJetons['jeton20'] ?>"><input type="hidden" id="SendJeton20" name="SendJeton20" value="">
	<input type="hidden" id="Jeton50" value="<?php echo $nombreJetons['jeton50'] ?>"><input type="hidden" id="SendJeton50" name="SendJeton50" value="">
	<input type="hidden" id="Jeton100" value="<?php echo $nombreJetons['jeton100'] ?>"><input type="hidden" id="SendJeton100" value="">
	<input type="hidden" id="TotalJeton" value="<?php echo $nombreJetons['total'] ?>"><input type="hidden" id="SendTotalJeton" name="SendTotalJeton" value="">
	<input type="hidden" id="VictoireJoueur" value="<?php echo $nombreVictory['player'] ?>"><input type="hidden" id="SendVictoire" name="SendVictoire" value="">
	<input type="hidden" id="DefaiteJoueur" value="<?php echo $nombreVictory['dealer'] ?>"><input type="hidden" id="SendDefaite" name="SendDefaite" value="">
	<input type="submit" onclick="Sauvegarde()" value="SAUVEGARDER" class="Button">
	</form>
				<input type="button" value="TRIER" onclick="TriJetons()" class="Button">

			</div>

			<div id="TextDealer">
				<div id="dealer-hand"></div>
					<h3>Main du dealer: </h3>
					<p id="dealer-hand-value"></p>
			</div>

		</div>

		<div id="TextPlayer">
			<div id="player-hand"></div>
				<h3 class="BoxHtml">Main du joueur :</h3>
				<p id="player-hand-value"></p>
		</div>

		<div id="BouttonPlay">
			<input type="button" value="Hit !" id="Hit" class="Button" onClick="hit();MasterClass();Push(); Affichage()">
			<input type="button" value="Stand" id="Stand" class="Button" onClick="stand();Push(); Affichage()">
			<input type="button" value="Supprimer Jeton !" id="SuppJeton" class="Button" onCLick="">
		</div>
		<div id="placejeton">
			<p id="ValeurPlaceJeton"></p>
		</div>
		<div id="BoiteJeton">
			<div id="LesJetons">
			<div id="RangJeton1">
			</div>

			<div id="RangJeton5">
			</div>
			<div id="RangJeton10">
			</div>
			<div id="RangJeton20">
			</div>
			<div id="RangJeton50">
			</div>
		</div>
		<div id="LesSommesJeton">
						<p id="SommeJeton1"></p>
						<p id="SommeJeton5"></p>
						<p id="SommeJeton10"></p>
						<p id="SommeJeton20"></p>
						<p id="SommeJeton50"></p>
		</div>
		</div>
		<center>
		<div id="ResultBox">
			<p id="game-status"></p>
			<p id="win-player">Votre nombre de victoire est de: <?php echo $nombreVictory['player'] ?></p>
			<input type="hidden" id="NbVictoire" value="<?php echo $nombreVictory['player'] ?>">
			<p id="win-dealer">Le nombre de victoire du dealer est de: <?php echo $nombreVictory['dealer'] ?></p>
			<input type="hidden" id="Nbdefaite" value="<?php echo $nombreVictory['dealer'] ?>">
		</div>
			<form id="Deconnexion" action="assets/php/Deconnexion.php" method="post">
			<input type="submit" value="Deconnexion" onClick="Deconnexion()" class="Button">
			</form>
		</center>

		<div id="test" style="color: white">
</div>
	</body>
</html>
