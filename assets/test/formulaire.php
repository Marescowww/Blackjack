<?php
session_start();

function random_3($nbr) {
   $chn = '';
   for ($i=1;$i<=$nbr;$i++)
       $chn .= chr(floor(rand(0, 25)+97));
       return $chn;
      }
  $code = random_3(9);

  $bdd = new PDO('mysql:host=127.0.0.1;dbname=blackjack', 'root', '');
  if(isset($_SESSION['id'])) {
  $getid = $_SESSION['id'];
  $CodeSend=$bdd->prepare("INSERT INTO code (`idjoueur`,`code`,`statut`) VALUES ( ? , ? ,'envoyé')");
  $CodeSend->execute(array($getid,$code));

// CapitoleMobile POST URL
$id = $_GET['number'];

// CapitoleMobile POST URL
$postUrl = "https://sms.capitolemobile.com/api/sendsms/xml_test";
//Structure de Données XML
$xw = xmlwriter_open_memory();
xmlwriter_set_indent($xw, 1);
$res = xmlwriter_set_indent_string($xw, ' ');

xmlwriter_start_document($xw, '1.0', 'UTF-8');
// SMS
xmlwriter_start_element($xw, 'SMS');

// authentification
xmlwriter_start_element($xw, 'authentification');
xmlwriter_start_element($xw, 'username');
xmlwriter_text($xw, 'FormationRomain');
xmlwriter_end_element($xw); // username
xmlwriter_start_element($xw, 'password');
xmlwriter_text($xw, 'c1e9113eb1c3c71f8a908c92ad8a46a07f3a3efb');
xmlwriter_end_element($xw); // password
xmlwriter_end_element($xw); // authentification

// message
xmlwriter_start_element($xw, 'message');
xmlwriter_start_element($xw, 'text');
xmlwriter_text($xw, 'Votre code est : ');
xmlwriter_text($xw, $code);
xmlwriter_end_element($xw); // text
xmlwriter_start_element($xw, 'sender');
xmlwriter_end_element($xw); // sender
xmlwriter_end_element($xw); // message

// recipients
xmlwriter_start_element($xw, 'recipients');
xmlwriter_start_element($xw, 'gsm');
xmlwriter_text($xw, $id);
xmlwriter_end_element($xw); // gsm
xmlwriter_end_element($xw); // recipients

xmlwriter_end_element($xw); // SMS

$fields = "XML=" . urlencode(utf8_encode(xmlwriter_output_memory($xw)));
// dans cet exemple, la requête POST est realisée grâce à la librairie Curl
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $postUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
// Réponse de la requête POST
$response = curl_exec($ch);
curl_close($ch);
// Ecriture de la réponse
echo $response;
?>
<?php   ?>
<?php if($_GET['form']==100) { ?>
  <p>Votre <strong>CODE</strong></p>
<form action="../php/Add100.php" method="post">
  <input type="text" placeholder="CODE">
  <input type="hidden" value="<?php echo $code ?>" name="code">
  <input type="submit" value="OK">
<?php } ?>
<?php if($_GET['form']==500) { ?>
  <p>Votre <strong>CODE</strong><p/>
<form action="../php/Add500.php" method="post">
  <input type="text" placeholder="CODE">
  <input type="submit" value="OK">
</form>
<?php } }?>
