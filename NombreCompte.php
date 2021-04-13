	<?php
		$mysqli = new mysqli("localhost", "root", "", "blackjack");
		$requete = "SELECT * FROM accounts ORDER BY id DESC LIMIT 1";
		$resultat = $mysqli -> query($requete);
		$row = $resultat->fetch_assoc();
?>