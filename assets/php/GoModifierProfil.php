<?php
session_start();
header("Location: ../../ModifierProfil.php?id=".$_SESSION['id']);
?>