<?php
$requser = $bdd->prepare("SELECT * FROM `admin`");
$requser->execute();
$admin = $requser->fetch();
 ?>
<center>
<h2>Gestion de la pub</h2>
</center>
<p> La pub dure <?php echo $admin['time_pub'] ?> seconde</p>
<div id="LesPubs">
<div id="PubMP4">
<p>Votre pub en MP4</p>
<video width="320" height="240" controls>
 <source src="assets/videos/pub-30-sec.mp4">
 </video>
 <div id="MP4">
<p>Convertir en MP4</p>
<input type="button" id="ConvertMP4" value="Convertir !" onclick="ConvertirMP4()">
</div>
</div>
<div id="PubWEBM">
 <p>Votre pub en WEBM</p>
 <video width="320" height="240" controls>
   <source src="assets/videos/pub-30-sec.webm">
   </video>
   <div id="WEBM">
   <p>Convertir MP4 en WEBM</p>
   <form action="https://api.cloudconvert.com/convert" method="POST" enctype="multipart/form-data">
     <input type="file" name="file">
     <input type="hidden" name="apikey" value="qVh67x7Ls0WQE2HoTOKyHGHNBGyy4Nuu6kgv4exqMITRgpeexVm5J1zd5xpinzJb">
     <input type="hidden" name="inputformat" value="mp4">
     <input type="hidden" name="outputformat" value="webm">
     <input type="hidden" name="input" value="upload">
     <input type="hidden" name="wait" value="true">
     <input type="hidden" name="download" value="true">
     <input type="submit" value="Convertir !">
   </form>
   </div>
</div>

</div>

<div id="Upload">
<p>Upload</p>
<form method="POST" action="assets/php/upload.php" enctype="multipart/form-data">
   <label for="time">Durée de la pub en seconde :</label><br>
   <input type="number" min="0" value="" name="time" id="time"><br>
    <label for="mp4">Fichier MP4 :</label><br>
    <input type="file" name="mp4" accept="video/mp4"><BR>
    <label for="webm">Fichier WEBM :</label><br>
    <input type="file" name="webm" accept="video/webm"><br><br>
    <input type="submit" name="envoyer" value="Envoyer le fichier">
</form>
</div>
