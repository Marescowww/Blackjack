<?php
if(isset($_FILES['mp4']) && isset($_FILES['webm']) && !empty($_POST['time']))
{


     $time = $_POST['time'];
     $dossier = '../videos/';
     $fichierMP4 = 'pub-30-sec.mp4';
     $fichierWEBM ='pub-30-sec.webm';
     if(move_uploaded_file($_FILES['mp4']['tmp_name'], $dossier . $fichierMP4) && move_uploaded_file($_FILES['webm']['tmp_name'], $dossier . $fichierWEBM) ) //Si la fonction renvoie TRUE, c'est que ça a fonctionné...
     {
       $bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
        $requser = $bdd->prepare("UPDATE `admin` SET `time_pub` = ? WHERE `admin`.`user` = 'admin'");
        $requser->execute(array($time));
        $admin = $requser->fetch();

          header("Location: ../../PanelAdmin.php?admin=pub");
     }
     else //Sinon (la fonction renvoie FALSE).
     {
          echo 'Echec de l\'upload !';
     }
} else {
  echo'Non';
}
?>
