	<?php
		$mysqli = new mysqli("localhost", "root", "", "blackjack");
		$requete = "SELECT COUNT(*)+1 AS Nombre FROM accounts";
		$resultat = $mysqli -> query($requete);
		$row = $resultat->fetch_assoc();
?>
