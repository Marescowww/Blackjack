<?php
 session_start();
 header("Location: ../../BlackJack.php?id=".$_SESSION['id']);
?>