<?php
$bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
 $requseradmin = $bdd->prepare("SELECT * FROM `admin`");
 $requseradmin->execute();
 $admin = $requseradmin->fetch();
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>10 jetons - BlackJack</title>
<style type="text/css">
#Pub{  position: fixed;right: 0;bottom: 0;min-width: 100%;}
#Retour{text-align: center;}
#MonBouton{background-color: transparent;}
</style>
<script type="text/javascript">
var Compteur;
var Stop = 0;
setInterval(function(){

if(Stop == 0){
  var Nombre1= document.getElementById('Pub').currentTime;
  var Nombre2= document.getElementById('Time').value;
  var ResultatVideo ="La fin est dans "+Math.round((Nombre2-Nombre1))+" secondes"

  document.getElementById('Décompte').innerHTML = ResultatVideo}


Compteur = document.getElementById('Pub').ended
if(Stop<1){
if(Compteur == true){
var BoxRetour = document.getElementById('Retour');
var FormRetour =document.createElement('form');
var BoutonRetour = document.createElement('input');

document.getElementById('Décompte').innerHTML="";
BoxRetour.appendChild(FormRetour);
FormRetour.setAttribute('action','Add10.php');
FormRetour.setAttribute('method','post');
FormRetour.appendChild(BoutonRetour);
BoutonRetour.setAttribute('type','submit');
BoutonRetour.setAttribute('value','Obtenir les 10 jetons');
BoutonRetour.setAttribute('id','MonBouton');
Stop++;
}}}
,1000)
</script>
</head>
<body>
  <div id="Retour">
    <p id="Décompte"></p>
  </div>
  <input type="hidden" id="Time" value="<?php echo $admin['time_pub'] ?>">
  <video id="Pub" width="320" height="240" autoplay muted>
    <source src="../videos/pub-30-sec.mp4" type="video/mp4">
    <source src="../videos/pub-30-sec.webm" type="video/webm">
    Votre navigateur ne supporte pas les vidéos.
  </video>
<form action="Add10.php" method="post">
</form>
</body>
</html>
