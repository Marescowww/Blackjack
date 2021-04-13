// JavaScript Document

// Variable Global
var deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11];
var teams = ['hearts','spades','clubs','diamonds'];
var playerHand =[];																		// La main du joueur
var dealerHand = [];																	// La main du dealer
var NombreCarte = 1;																	// Pour déterminer si un BlackJack est réalisé
var Start = 1;																			// Sécurité de démarrage
var VerifStand =1;																		// Sécurité de mélange
var Result = "wait";																	// Sécurité de score
var WinPlayer = 0;																		// Nombre de victoire
var WinDealer = 0;																		// Nombre de défaite
var VerifJeton1 = 1;
var VerifJeton5 = 1;
var VerifJeton10 = 1;
var VerifJeton20 = 1;
var VerifJeton50 = 1;
var ValeurDeal = 0;
var NombreJetonDeal = 0;
var Portefeuille = 0
//-------------------------------------------------//

//Gestionnaire de tache
document.getElementById('Go').addEventListener('click',startGame);
document.getElementById('Go').addEventListener('click',startGameDealer);
document.getElementById('Go').addEventListener('click', Affichage);
document.getElementById('Reset').addEventListener('click', reset);
document.getElementById('Hit').addEventListener('click', hit);
document.getElementById('Hit').addEventListener('click', MasterClass);
document.getElementById('Hit').addEventListener('click', Push);
document.getElementById('Hit').addEventListener('click', Affichage);
document.getElementById('Stand').addEventListener('click', stand);
document.getElementById('Stand').addEventListener('click', Push);
document.getElementById('Stand').addEventListener('click', Affichage);
//-------------------------------------------------//

//Fonction Détermination du groupe de la carte
function drawRandomCardTeam(teams) {
var randomIndex = Math.floor(teams.length * Math.random());
return teams[randomIndex];
}
//-------------------------------------------------//
//Fonction Détermination du numéro de la carte
function drawRandomCardPlayer(deck){
var randomIndex = Math.floor(deck.length * Math.random());
return deck[randomIndex];
}
//-------------------------------------------------//

//Fonction Lancement du jeu
function startGame(){
	var team = drawRandomCardTeam(teams);																			// VAR du groupe de la carte
	if(NombreJetonDeal>0){
	if (Start ==1){																									// Vérification sécurité Start mise en place
		Start++;																									// Blocage de la sécurité Start
		Result = "Start";																							// Mise en place de la sécurité Start
	playerHand=[drawRandomCardPlayer(deck),drawRandomCardPlayer(deck)];												// Rajout de deux valeurs au deck du joueur

		for(var x = 0; x <= playerHand.length-1; x++){																// Boucle pour affichage carte
		var playerBox = document.getElementById('player-hand');														// VAR Ciblé la min du joueur
	var image = document.createElement('div');																		// VAR Création de la DIV pour la carte
	playerBox.appendChild(image);																					// Implantation de l'image dans la main du joueur
	image.setAttribute('name',x+1);																					// Mise en place d'un nom
	image.setAttribute('class','Carte');																			// Mise en place du design de la carte
	image.setAttribute('style',"background-image: url(assets/cards/"+playerHand[x]+"_of_"+team+".svg)");}			// Mise en place de l'image de la carte

			if(playerHand.indexOf(11) !== -1){																		// Boucle pour vérification AS
	var choix = confirm('Vous vennez de piocher un AS\nSouhaitez vous lui donner la valeur de 11 ?');				// Question si AS à 11 ou 1
		if(choix == false){																							// Si AS à 1
			playerHand.pop();																						// Supression du 11 piocher
			playerHand.push(1);																						// Implantation du 1 dans la main du joueur
		}
			}
	dealerHand=[drawRandomCardPlayer(deck)];																		// Rajout d'une valeur au deck du dealer

	} else{alert("Votre partie a déjà commencé");}																	// Sécurité si la partie est déjà lancé
}else{alert('Vous devez mettre des jetons en jeu')}
}
//-------------------------------------------------//

//Fonction Lancement du jeu pour le Dealer
function startGameDealer() {
	if(Start == 2){																									// Vérification sécurité Start mise en place
		Start++																										// Blocage de la sécurité Start
	var dealerBox = document.getElementById('dealer-hand');															// VAR Ciblé la main du dealer
	var image = document.createElement('div');																		// VAR Création de la DIV pour la carte
	var team = drawRandomCardTeam(teams);																			// VAR du gourpe de la carte
	dealerBox.appendChild(image);																					// Implantation de l'image dans la main du dealer
	image.setAttribute('name','Dealer1');																			// Mise en place d'un nom
	image.setAttribute('class','Carte');																			// Mise en place du designe de la carte
	image.setAttribute('style',"background-image: url(assets/cards/"+dealerHand[0]+"_of_"+team+".svg)")				// Mise en place de l'image de la carte
}}
//-------------------------------------------------//

//Fonction mise en place des victoires
function startVictoire(){
var NombreVictoire = document.getElementById('NbVictoire').value;
var NombreDefaite = document.getElementById('Nbdefaite').value;
if(NombreVictoire!=WinPlayer || NombreDefaite!=WinDealer){
			WinPlayer = NombreVictoire
			console.log('Nombre victoire ='+NombreVictoire)
			console.log('Winplayer = '+WinPlayer)

			WinDealer = NombreDefaite
			console.log('WindDealer = '+WinDealer)
}
}
//-------------------------------------------------//

// Fonction mise en place des jetons
function startJeton(){
	if(NombreJetonDeal==0){
	if(Result == "wait"){

if(VerifJeton1<=document.getElementById('Jeton1').value){
	for(var jeton1=1; jeton1<=document.getElementById('Jeton1').value;jeton1++){
		var RangJeton = document.getElementById('RangJeton1')
		var LeJeton = document.createElement("img");
RangJeton.setAttribute('onClick','PlayJeton1()')
RangJeton.appendChild(LeJeton);
LeJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
LeJeton.setAttribute('class','Jeton');
LeJeton.setAttribute('id','Jeton1('+jeton1+')')
VerifJeton1++
}} document.getElementById('SommeJeton1').innerHTML = ((VerifJeton1-1)*1)+'€';

if(VerifJeton5<=document.getElementById('Jeton5').value){
	for(var jeton5=1; jeton5<=document.getElementById('Jeton5').value;jeton5++){
		var RangJeton = document.getElementById('RangJeton5')
		var LeJeton = document.createElement("img");

	RangJeton.setAttribute('onClick','PlayJeton5()')
RangJeton.appendChild(LeJeton);
LeJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
LeJeton.setAttribute('class','Jeton');
LeJeton.setAttribute('id','Jeton5('+jeton5+')')
VerifJeton5++
}} document.getElementById('SommeJeton5').innerHTML = ((VerifJeton5-1)*5)+'€';

if(VerifJeton10<=document.getElementById('Jeton10').value){
	for(var jeton10=1; jeton10<=document.getElementById('Jeton10').value;jeton10++){
		var RangJeton = document.getElementById('RangJeton10')
		var LeJeton = document.createElement("img");
	RangJeton.setAttribute('onClick','PlayJeton10()')
RangJeton.appendChild(LeJeton);
LeJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
LeJeton.setAttribute('class','Jeton');
LeJeton.setAttribute('id','Jeton10('+jeton10+')')
VerifJeton10++
}} document.getElementById('SommeJeton10').innerHTML = ((VerifJeton10-1)*10)+'€';

if(VerifJeton20<=document.getElementById('Jeton20').value){
	for(var jeton20=1; jeton20<=document.getElementById('Jeton20').value;jeton20++){
		var RangJeton = document.getElementById('RangJeton20')
		var LeJeton = document.createElement("img");
	RangJeton.setAttribute('onClick','PlayJeton20()')
RangJeton.appendChild(LeJeton);
LeJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
LeJeton.setAttribute('class','Jeton');
LeJeton.setAttribute('id','Jeton20('+jeton20+')')
VerifJeton20++
}} document.getElementById('SommeJeton20').innerHTML = ((VerifJeton20-1)*20)+'€';

if(VerifJeton50<=document.getElementById('Jeton50').value){
	for(var jeton50=1; jeton50<=document.getElementById('Jeton50').value;jeton50++){
		var RangJeton = document.getElementById('RangJeton50')
		var LeJeton = document.createElement("img");
	RangJeton.setAttribute('onClick','PlayJeton50()')
RangJeton.appendChild(LeJeton);
LeJeton.setAttribute('src','assets/jetons/chipWhiteBlue_side.png');
LeJeton.setAttribute('class','Jeton');
LeJeton.setAttribute('id','Jeton50('+jeton50+')')
VerifJeton50++
}}}
}else{alert('Les jetons sont déjà sur la table, placer les maintenant')}
document.getElementById('SommeJeton50').innerHTML = ((VerifJeton50-1)*50)+'€';
Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50));
document.getElementById('SommeTotal').innerHTML = "Votre portefeuille est de "+Portefeuille+'€';
}
//-------------------------------------------------//

//Fonction Mise en jeu d'un Jeton 1
function PlayJeton1(){

	if(VerifJeton1>0 && Result=="wait"){
		var RangJeton = document.getElementById('RangJeton1')
		var LeJeton = document.getElementById('Jeton1('+(VerifJeton1-1)+')');
		var PlaceJeton = document.getElementById('placejeton');
		var ValeurJeton = document.getElementById('ValeurPlaceJeton');
		var AjoutJeton =document.createElement("img");

		RangJeton.removeChild(LeJeton);
		VerifJeton1--;
		ValeurDeal+=1
		NombreJetonDeal +=1
		document.getElementById('SommeJeton1').innerHTML = ((VerifJeton1-1)*1)+'€';

		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id',NombreJetonDeal);
		AjoutJeton.setAttribute('name','JetonJouer')
		ValeurJeton.innerHTML=ValeurDeal+ '€';

	}
}
//-------------------------------------------------//

//Fonction Mise en jeu d'un Jeton 5
function PlayJeton5(){

	if(VerifJeton5>0 && Result=="wait"){
		var RangJeton = document.getElementById('RangJeton5')
		var LeJeton = document.getElementById('Jeton5('+(VerifJeton5-1)+')');
		var PlaceJeton = document.getElementById('placejeton');
		var ValeurJeton = document.getElementById('ValeurPlaceJeton');
		var AjoutJeton =document.createElement("img");

		RangJeton.removeChild(LeJeton);
		VerifJeton5--;
		ValeurDeal+=5;
		NombreJetonDeal +=1
		document.getElementById('SommeJeton5').innerHTML = ((VerifJeton5-1)*5)+'€';

		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id',NombreJetonDeal);
			AjoutJeton.setAttribute('name','JetonJouer')
		ValeurJeton.innerHTML=ValeurDeal+ '€';
	}
}
//-------------------------------------------------//

//Fonction Mise en jeu d'un Jeton 10
function PlayJeton10(){

	if(VerifJeton10>0 && Result=="wait"){
		var RangJeton = document.getElementById('RangJeton10')
		var LeJeton = document.getElementById('Jeton10('+(VerifJeton10-1)+')');
		var PlaceJeton = document.getElementById('placejeton');
		var ValeurJeton = document.getElementById('ValeurPlaceJeton');
		var AjoutJeton =document.createElement("img");

		RangJeton.removeChild(LeJeton);
		VerifJeton10--;
		ValeurDeal+=10;
		NombreJetonDeal +=1
		document.getElementById('SommeJeton10').innerHTML = ((VerifJeton10-1)*10)+'€';

		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id',NombreJetonDeal);
		AjoutJeton.setAttribute('name','JetonJouer')
		ValeurJeton.innerHTML=ValeurDeal+ '€';
	}
}
//-------------------------------------------------//

//Fonction Mise en jeu d'un Jeton 20
function PlayJeton20(){

	if(VerifJeton20>0 && Result=="wait"){
		var RangJeton = document.getElementById('RangJeton20')
		var LeJeton = document.getElementById('Jeton20('+(VerifJeton20-1)+')');
		var PlaceJeton = document.getElementById('placejeton');
		var ValeurJeton = document.getElementById('ValeurPlaceJeton');
		var AjoutJeton =document.createElement("img");

		RangJeton.removeChild(LeJeton);
		VerifJeton20--;
		ValeurDeal+=20;
		NombreJetonDeal +=1
		document.getElementById('SommeJeton20').innerHTML = ((VerifJeton20-1)*20)+'€';

		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id',NombreJetonDeal);
			AjoutJeton.setAttribute('name','JetonJouer')
		ValeurJeton.innerHTML=ValeurDeal+ '€';
	}
}
//-------------------------------------------------//

//Fonction Mise en jeu d'un Jeton 20
function PlayJeton50(){

	if(VerifJeton50>0 && Result=="wait"){
		var RangJeton = document.getElementById('RangJeton50')
		var LeJeton = document.getElementById('Jeton50('+(VerifJeton50-1)+')');
		var PlaceJeton = document.getElementById('placejeton');
		var ValeurJeton = document.getElementById('ValeurPlaceJeton')
		var AjoutJeton =document.createElement("img");

		RangJeton.removeChild(LeJeton);
		VerifJeton50--;
		ValeurDeal+=50;
		NombreJetonDeal +=1
		document.getElementById('SommeJeton50').innerHTML = ((VerifJeton50-1)*50)+'€';

		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipWhiteBlue_side.png');
		AjoutJeton.setAttribute('class','Jeton');
		AjoutJeton.setAttribute('id',NombreJetonDeal);
		AjoutJeton.setAttribute('name','NombreJetonDeal')
		ValeurJeton.innerHTML=ValeurDeal+ '€';
	}
}
//-------------------------------------------------//

// Fonction tri jetons
function TriJetons(){
	if(NombreJetonDeal<1){
	if(VerifJeton1>15){
		var Affectation5 = Math.floor((VerifJeton1-11)/5)
if(Affectation5>0){
	do{
		console.log('Retire Jeton 1 :'+VerifJeton1)
	var RangJeton = document.getElementById('RangJeton1')
	var LeJeton = document.getElementById('Jeton1('+(VerifJeton1-1)+')');
	RangJeton.removeChild(LeJeton);
	VerifJeton1--;
	document.getElementById('SommeJeton1').innerHTML = ((VerifJeton1)*1)+'€';
} while(VerifJeton1>10);
do{
	var AjoutJeton =document.createElement("img");
	var PlaceJeton = document.getElementById('RangJeton5')
	var ValeurJeton = document.getElementById('SommeJeton5');
	VerifJeton5++;
	PlaceJeton.appendChild(AjoutJeton);
	AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
	AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id','Jeton5('+(VerifJeton5-1)+')')
	ValeurJeton.innerHTML=((VerifJeton5-1)*5)+'€';
	Affectation5--;
}while(Affectation5>0);
}
	}
	if(VerifJeton5>10){
		var Affectation10 = Math.floor(((VerifJeton5-11)*5)/10)
if(Affectation10>0){
	do{
		console.log('Retire Jeton 5 :'+VerifJeton5)
	var RangJeton = document.getElementById('RangJeton5')
	var LeJeton = document.getElementById('Jeton5('+(VerifJeton5-1)+')');
	RangJeton.removeChild(LeJeton);
	VerifJeton5--;
	document.getElementById('SommeJeton5').innerHTML = ((VerifJeton5)*5)+'€';
} while(VerifJeton5>10);
do{
	var AjoutJeton =document.createElement("img");
	var PlaceJeton = document.getElementById('RangJeton10')
	var ValeurJeton = document.getElementById('SommeJeton10');
	VerifJeton10++;
	PlaceJeton.appendChild(AjoutJeton);
	AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
	AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id','Jeton10('+(VerifJeton10-1)+')')
	ValeurJeton.innerHTML=((VerifJeton10-1)*10)+'€';
	Affectation10--;
}while(Affectation10>0);
}
	}
	if(VerifJeton10>11){
		var Affectation20 = Math.floor(((VerifJeton10-11)*10)/20)
if(Affectation20>0){
	do{
		console.log('Retire Jeton 10 :'+VerifJeton10)
	var RangJeton = document.getElementById('RangJeton10')
	var LeJeton = document.getElementById('Jeton10('+(VerifJeton10-1)+')');
	RangJeton.removeChild(LeJeton);
	VerifJeton10--;
	document.getElementById('SommeJeton10').innerHTML = ((VerifJeton10)*10)+'€';
} while(VerifJeton10>11);
do{
	var AjoutJeton =document.createElement("img");
	var PlaceJeton = document.getElementById('RangJeton20')
	var ValeurJeton = document.getElementById('SommeJeton20');
	VerifJeton20++;
	PlaceJeton.appendChild(AjoutJeton);
	AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
	AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id','Jeton20('+(VerifJeton20-1)+')')
	ValeurJeton.innerHTML=((VerifJeton20-1)*20)+'€';
	Affectation20--;
}while(Affectation20>0);
}
	}
	if(VerifJeton20>14){
		var Affectation50 = Math.floor(((VerifJeton20-11)*20)/50)
if(Affectation50>0){
	do{
		console.log('Retire Jeton 20 :'+VerifJeton20)
	var RangJeton = document.getElementById('RangJeton20')
	var LeJeton = document.getElementById('Jeton20('+(VerifJeton20-1)+')');
	RangJeton.removeChild(LeJeton);
	VerifJeton20--;
	document.getElementById('SommeJeton20').innerHTML = ((VerifJeton20)*20)+'€';
} while(VerifJeton20>10);
do{
	var AjoutJeton =document.createElement("img");
	var PlaceJeton = document.getElementById('RangJeton50')
	var ValeurJeton = document.getElementById('SommeJeton50');
	VerifJeton50++;
	PlaceJeton.appendChild(AjoutJeton);
	AjoutJeton.setAttribute('src','assets/jetons/chipWhiteBlue_side.png');
	AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id','Jeton50('+(VerifJeton50-1)+')')
	ValeurJeton.innerHTML=((VerifJeton50-1)*50)+'€';
	Affectation50--;
}while(Affectation50>0);
}
	}
}else{alert('Des jetons sont en jeux')}
}
//-------------------------------------------------//
//Fonction Calcul de la valeur total de la main
function getHandValue(hand){
	var sum=0;																										// VAR somme
	for(var i=0; i<hand.length; i++){																				// Boucle pour additionner les valeurs
		sum += hand[i];																								// Addition des valeur
	}
	return sum;																										// Ajout du résultat à la somme
}
//-------------------------------------------------//

//Fonction HIT
function hit(){
	for (var x = 0; x <= playerHand.length-1; x++)																	// Boucle pour affichage de la carte
	var team = drawRandomCardTeam(teams);																			// VAR du gourpe de la carte
	var CarteJoueur = drawRandomCardPlayer(deck);																	// VAR de la carte tiré
	if (Result == "Start"){																							// Vérification de la sécurité que la partie continue bien
	if(getHandValue(playerHand)<21){																				// Vérification sécurité que le joueur n'a pas dépasser 21
	playerHand.push(CarteJoueur);																					// Rajout d'une valeur dans la main du joueur
	var playerBox = document.getElementById('player-hand');															// VAR Ciblé la main du joueur
	var image = document.createElement('div');																		// VAR Création de la DIV pour la carte
	playerBox.appendChild(image);																					// Implantation de l'image dans la main du dealer
	image.setAttribute('name',x+1);																					// Mise en place d'un nom
	image.setAttribute('class','Carte');																			// Mise en place du design de la carte
	image.setAttribute('style',"background-image: url(assets/cards/"+playerHand[x]+"_of_"+team+".svg)");			// Mise en place de l'image de la carte
		if(playerHand.indexOf(11) !== -1){																			// Boucle pour vérification AS
	var choix = confirm('Vous vennez de piocher un AS\nSouhaitez vous lui donner la valeur de 11 ?');				// Question si AS à 11 ou 1
		if(choix == false){																							// Si AS à 1
			playerHand.pop(playerHand.indexOf(11));																	// Supression du 11 piocher
			playerHand.push(1);																						// Implantation du 1 dans la main du joueur
		}

	}
	NombreCarte++																									// Sécurité pour un coup de BlackJack
	if(getHandValue(playerHand)>21){																				// Si la main du joueur depasse 21
		document.getElementById('game-status').innerHTML = "Vous n'avez pas su être à la hauteur des cartes !";		// Affichage de la défaite
		Result = false;																								// Changement de sécurité résultat
		WinDealer++																									// Ajout d'une défaite au compteur
		document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille-ValeurDeal)+'€'
		do{
		var LeJeton = document.getElementById(NombreJetonDeal);
		console.log(NombreJetonDeal)
		LeJeton.remove();
		NombreJetonDeal--
	}while(NombreJetonDeal> 0)
	ValeurDeal = 0;
	Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50));
	document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';
	}
		if(getHandValue(playerHand)==21){																			// Si la main du joueur est à 21
		document.getElementById('game-status').innerHTML = "Vous avez GAGNE !";										// Affichage de la victoire
			Result = true;																							// Changement de la sécurité résultat
			WinPlayer++																								// Ajout d'une victoire au compteur
			ResultatDeal = (ValeurDeal*2)
			document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille+ValeurDeal)+'€'
			do{
			var LeJeton = document.getElementById(NombreJetonDeal);
			LeJeton.remove();
			NombreJetonDeal--
		}while(NombreJetonDeal> 0)



		var Affectation20 = Math.floor(ResultatDeal/20)
		ResultatDeal=(ResultatDeal-Affectation20*20)
		if(Affectation20>0){
			do{
				var AjoutJeton =document.createElement("img");
				var PlaceJeton = document.getElementById('RangJeton20')
				var ValeurJeton = document.getElementById('SommeJeton20');
				VerifJeton20++;
				PlaceJeton.appendChild(AjoutJeton);
				AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
				AjoutJeton.setAttribute('class','Jeton');
				AjoutJeton.setAttribute('id','Jeton20('+(VerifJeton20-1)+')')
				ValeurJeton.innerHTML=((VerifJeton20-1)*20)+'€';
				Affectation20--;
			}while(Affectation20>0);
		}

		var Affectation10 = Math.floor(ResultatDeal/10)
		ResultatDeal=(ResultatDeal-Affectation10*10)
		if(Affectation10){
			do{
			var AjoutJeton =document.createElement("img");
			var PlaceJeton = document.getElementById('RangJeton10')
			var ValeurJeton = document.getElementById('SommeJeton10');
			VerifJeton10++;
			PlaceJeton.appendChild(AjoutJeton);
			AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
			AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id','Jeton10('+(VerifJeton10-1)+')')
			ValeurJeton.innerHTML=((VerifJeton10-1)*10)+'€';
			Affectation10--;
		}while(Affectation10>0);
		}

		var Affectation5 = Math.floor(ResultatDeal/5)
		ResultatDeal=(ResultatDeal-Affectation5*5)
		if(Affectation5){
			do{
				var AjoutJeton =document.createElement("img");
				var PlaceJeton = document.getElementById('RangJeton5')
				var ValeurJeton = document.getElementById('SommeJeton5');
				VerifJeton5++;
				PlaceJeton.appendChild(AjoutJeton);
				AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
				AjoutJeton.setAttribute('class','Jeton');
				AjoutJeton.setAttribute('id','Jeton5('+(VerifJeton5-1)+')')
				ValeurJeton.innerHTML=((VerifJeton5-1)*5)+'€';
				Affectation5--;
			}while(Affectation5>0);
		}

		var Affectation1 = Math.floor(ResultatDeal/1)
		ResultatDeal=(ResultatDeal-Affectation1*1)
		if(Affectation1){
			do{
				var AjoutJeton =document.createElement("img");
				var PlaceJeton = document.getElementById('RangJeton1')
				var ValeurJeton = document.getElementById('SommeJeton1');
				VerifJeton1++;
				PlaceJeton.appendChild(AjoutJeton);
				AjoutJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
				AjoutJeton.setAttribute('class','Jeton');
				AjoutJeton.setAttribute('id','Jeton1('+(VerifJeton1-1)+')')
				ValeurJeton.innerHTML=((VerifJeton1-1)*1)+'€';
				Affectation1--;
			}while(Affectation1>0);
		}



		ValeurDeal = 0;
		Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50)+ResultatDeal);
		document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';
	}
	}
}else {return;}
}
//-------------------------------------------------//

//Fonction Stand
function stand(){
	if (Result == "Start"){
	if(getHandValue(playerHand)<21){																				// Vérification sécurité si la main du joueur est < 21
		if(getHandValue(dealerHand)<21 && VerifStand<4){															// Vérification sécurité

			for (var tirage =1; getHandValue(dealerHand)<=getHandValue(playerHand);tirage++ ){						// Boucle stratégie
				VerifStand++;																						// Sécurité pour la boucle stratégie
			dealerHand.push(drawRandomCardPlayer(deck));															// Ajout d'une valeur à la main du dealer

								if(dealerHand.indexOf(11) !== -1){													// Boucle pour vérification AS
					if (getHandValue(dealerHand)>11){																// Statégie: Si la min du dealer est >11 alors As vaux 1
			dealerHand.pop();																						// Supression du 11 piocher
			dealerHand.push(1);}}																					// Implantatin du 1 dans la main du dealer
			}
				if(getHandValue(dealerHand)>getHandValue(playerHand) && getHandValue(dealerHand)<=21){				// Vérification des valeurs pour victoire
		document.getElementById('game-status').innerHTML = "Le dealer a été meilleur que vous !"; 					// Affichage de la défaite
					Result =  false;																				// Changement de la sécurité resultat
					WinDealer++;																					// Ajout d'une défaite au compteur
					document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille-ValeurDeal)+'€'
					do{
					var LeJeton = document.getElementById(NombreJetonDeal);
					console.log(NombreJetonDeal)
					LeJeton.remove();
					NombreJetonDeal--
				}while(NombreJetonDeal> 0)
				ValeurDeal = 0;
				Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50));
				document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';

				}else {document.getElementById('game-status').innerHTML = "Vous avez GAGNE !"; 						// Affichage de la victoire
					   Result = true; 																				// Changement de la sécurité resultat
					   WinPlayer++;
						 ResultatDeal = (ValeurDeal*2)
					 	document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille+ValeurDeal)+'€'
					 	do{
					 	var LeJeton = document.getElementById(NombreJetonDeal);
					 	LeJeton.remove();
					 	NombreJetonDeal--
					 }while(NombreJetonDeal> 0)



					 var Affectation20 = Math.floor(ResultatDeal/20)
					 ResultatDeal=(ResultatDeal-Affectation20*20)
					 if(Affectation20>0){
					 	do{
					 		var AjoutJeton =document.createElement("img");
					 		var PlaceJeton = document.getElementById('RangJeton20')
					 		var ValeurJeton = document.getElementById('SommeJeton20');
					 		VerifJeton20++;
					 		PlaceJeton.appendChild(AjoutJeton);
					 		AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
					 		AjoutJeton.setAttribute('class','Jeton');
					 		AjoutJeton.setAttribute('id','Jeton20('+(VerifJeton20-1)+')')
					 		ValeurJeton.innerHTML=((VerifJeton20-1)*20)+'€';
					 		Affectation20--;
					 	}while(Affectation20>0);
					 }

					 var Affectation10 = Math.floor(ResultatDeal/10)
					 ResultatDeal=(ResultatDeal-Affectation10*10)
					 if(Affectation10){
					 	do{
					 	var AjoutJeton =document.createElement("img");
					 	var PlaceJeton = document.getElementById('RangJeton10')
					 	var ValeurJeton = document.getElementById('SommeJeton10');
					 	VerifJeton10++;
					 	PlaceJeton.appendChild(AjoutJeton);
					 	AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
					 	AjoutJeton.setAttribute('class','Jeton');
					 	AjoutJeton.setAttribute('id','Jeton10('+(VerifJeton10-1)+')')
					 	ValeurJeton.innerHTML=((VerifJeton10-1)*10)+'€';
					 	Affectation10--;
					 }while(Affectation10>0);
					 }

					 var Affectation5 = Math.floor(ResultatDeal/5)
					 ResultatDeal=(ResultatDeal-Affectation5*5)
					 if(Affectation5){
					 	do{
					 		var AjoutJeton =document.createElement("img");
					 		var PlaceJeton = document.getElementById('RangJeton5')
					 		var ValeurJeton = document.getElementById('SommeJeton5');
					 		VerifJeton5++;
					 		PlaceJeton.appendChild(AjoutJeton);
					 		AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
					 		AjoutJeton.setAttribute('class','Jeton');
					 		AjoutJeton.setAttribute('id','Jeton5('+(VerifJeton5-1)+')')
					 		ValeurJeton.innerHTML=((VerifJeton5-1)*5)+'€';
					 		Affectation5--;
					 	}while(Affectation5>0);
					 }

					 var Affectation1 = Math.floor(ResultatDeal/1)
					 ResultatDeal=(ResultatDeal-Affectation1*1)
					 if(Affectation1){
					 	do{
					 		var AjoutJeton =document.createElement("img");
					 		var PlaceJeton = document.getElementById('RangJeton1')
					 		var ValeurJeton = document.getElementById('SommeJeton1');
					 		VerifJeton1++;
					 		PlaceJeton.appendChild(AjoutJeton);
					 		AjoutJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
					 		AjoutJeton.setAttribute('class','Jeton');
					 		AjoutJeton.setAttribute('id','Jeton1('+(VerifJeton1-1)+')')
					 		ValeurJeton.innerHTML=((VerifJeton1-1)*1)+'€';
					 		Affectation1--;
					 	}while(Affectation1>0);
					 }



					 ValeurDeal = 0;
					 Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50)+ResultatDeal);
					 document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';
					 }																				// Ajout d'une victoire au compteur
		}
	for (var x = 1; x <= dealerHand.length; x++){																	// Boucle pour affichage de la carte
	var team = drawRandomCardTeam(teams);																			// VAR du groupe de la carte
	var dealerBox = document.getElementById('dealer-hand');															// VAR Ciblé la main du dealer
	var image = document.createElement('div');																		// VAR Création de la DIV pour la carte
	dealerBox.appendChild(image);																					// Implantation de l'image dans la main du dealer
	image.setAttribute('name','Dealer'+x);																			// Mise en place d'un nom
	image.setAttribute('class','Carte');																			// Mise en place du design de la carte
	image.setAttribute('style',"background-image: url(assets/cards/"+dealerHand[x]+"_of_"+team+".svg)");}}			// Mise en place de l'image de la carte
}}
//-------------------------------------------------//

//Fonction Retour à zéro
function reset() {
	if(Result == "Start"){alert('Une partie est déjà en cours'); return}											// Vérification de sécurité
	Result = "wait";																								// Changement de la sécurité resultat
	VerifStand =1;																									// Changement de la sécurité demande de carte
	Start = 1;																										// Changement de la sécurité Start
	NombreCarte = 1;																								// Changement de la sécurité coup BlackJack
	playerHand.length = 0;																							// Vidage de la main du joueur
	dealerHand.length = 0;																							// Vidage de la main du dealer
	document.getElementById("player-hand").innerHTML= ""															// Effacement des valeurs
	document.getElementById("player-hand-value").innerHTML = ""														// Effacement des valeurs
	document.getElementById("dealer-hand").innerHTML =""															// Effacement des valeurs
	document.getElementById("dealer-hand-value").innerHTML = ""														// Effacement des valeurs
	document.getElementById('game-status').innerHTML = ""															// Effacement des valeurs
}
//-------------------------------------------------//

//Fonction coup BlackJack
function MasterClass(){
	if(NombreCarte == 1 &&getHandValue(playerHand)== 21 ){																// Vérificaiton de sécurité pour le coup BlackJack
		document.getElementById('game-status').innerHTML = "La chance vous souris, vous venez de faire un BLACKJACK !";	// Affichage du coup BlackJack
		Result = true;																									// Changement de la sécurité resultat
		WinPlayer++;
		ResultatDeal = (ValeurDeal*2)
		document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille+ValeurDeal)+'€'
		do{
		var LeJeton = document.getElementById(NombreJetonDeal);
		LeJeton.remove();
		NombreJetonDeal--
	}while(NombreJetonDeal> 0)



	var Affectation20 = Math.floor(ResultatDeal/20)
	ResultatDeal=(ResultatDeal-Affectation20*20)
	if(Affectation20>0){
		do{
			var AjoutJeton =document.createElement("img");
			var PlaceJeton = document.getElementById('RangJeton20')
			var ValeurJeton = document.getElementById('SommeJeton20');
			VerifJeton20++;
			PlaceJeton.appendChild(AjoutJeton);
			AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
			AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id','Jeton20('+(VerifJeton20-1)+')')
			ValeurJeton.innerHTML=((VerifJeton20-1)*20)+'€';
			Affectation20--;
		}while(Affectation20>0);
	}

	var Affectation10 = Math.floor(ResultatDeal/10)
	ResultatDeal=(ResultatDeal-Affectation10*10)
	if(Affectation10){
		do{
		var AjoutJeton =document.createElement("img");
		var PlaceJeton = document.getElementById('RangJeton10')
		var ValeurJeton = document.getElementById('SommeJeton10');
		VerifJeton10++;
		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
		AjoutJeton.setAttribute('id','Jeton10('+(VerifJeton10-1)+')')
		ValeurJeton.innerHTML=((VerifJeton10-1)*10)+'€';
		Affectation10--;
	}while(Affectation10>0);
	}

	var Affectation5 = Math.floor(ResultatDeal/5)
	ResultatDeal=(ResultatDeal-Affectation5*5)
	if(Affectation5){
		do{
			var AjoutJeton =document.createElement("img");
			var PlaceJeton = document.getElementById('RangJeton5')
			var ValeurJeton = document.getElementById('SommeJeton5');
			VerifJeton5++;
			PlaceJeton.appendChild(AjoutJeton);
			AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
			AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id','Jeton5('+(VerifJeton5-1)+')')
			ValeurJeton.innerHTML=((VerifJeton5-1)*5)+'€';
			Affectation5--;
		}while(Affectation5>0);
	}

	var Affectation1 = Math.floor(ResultatDeal/1)
	ResultatDeal=(ResultatDeal-Affectation1*1)
	if(Affectation1){
		do{
			var AjoutJeton =document.createElement("img");
			var PlaceJeton = document.getElementById('RangJeton1')
			var ValeurJeton = document.getElementById('SommeJeton1');
			VerifJeton1++;
			PlaceJeton.appendChild(AjoutJeton);
			AjoutJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
			AjoutJeton.setAttribute('class','Jeton');
			AjoutJeton.setAttribute('id','Jeton1('+(VerifJeton1-1)+')')
			ValeurJeton.innerHTML=((VerifJeton1-1)*1)+'€';
			Affectation1--;
		}while(Affectation1>0);
	}



	ValeurDeal = 0;
	Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50)+ResultatDeal);
	document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';

	}																									// Ajout d'une victoire au compteur
}
//-------------------------------------------------//

//Fonction Push
function Push(){
	if(getHandValue(playerHand) == 21 && getHandValue(dealerHand) == 21){											// Vérification de sécurité
		Result= false;																								// Changement de la sécurité resultat
		document.getElementById('game-status').innerHTML = "La chance souris à vous deux vous êtes sur un PUSH  !"; // Affichage du coup PUSH
	}
}
//-------------------------------------------------//

//Fonction Affichage des valeurs
function Affichage(){
	if(Result == "Start" || Result == true || Result == false){														// Vérification de sécurité
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);									// Affichage de la valeur de la main du joueur
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);									// Affichage de la valeur de la main du dealer
document.getElementById("win-player").innerHTML ="Votre nombre de victoire est de: "+WinPlayer;						// Affichage de nombre de victoire
document.getElementById("win-dealer").innerHTML="Le nombre de victoire du dealer est de : "+WinDealer;				// Affichage du nombre de défaite
}
}
//-------------------------------------------------//
function Sauvegarde(){
	document.getElementById('SendJeton1').value = VerifJeton1-1
	document.getElementById('SendJeton5').value = VerifJeton5-1
	document.getElementById('SendJeton10').value = VerifJeton10-1
	document.getElementById('SendJeton20').value = VerifJeton20-1
	document.getElementById('SendJeton50').value = VerifJeton50-1
	document.getElementById('SendTotalJeton').value = Portefeuille
	document.getElementById('SendVictoire').value = WinPlayer
	document.getElementById('SendDefaite').value = WinDealer
}


function Test(){
	ResultatDeal = (ValeurDeal*2)
	document.getElementById('SommeTotal').innerHTML = 'Votre portefeuille est de '+(Portefeuille+ValeurDeal)+'€'
	do{
	var LeJeton = document.getElementById(NombreJetonDeal);
	LeJeton.remove();
	NombreJetonDeal--
}while(NombreJetonDeal> 0)



var Affectation20 = Math.floor(ResultatDeal/20)
ResultatDeal=(ResultatDeal-Affectation20*20)
if(Affectation20>0){
	do{
		var AjoutJeton =document.createElement("img");
		var PlaceJeton = document.getElementById('RangJeton20')
		var ValeurJeton = document.getElementById('SommeJeton20');
		VerifJeton20++;
		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipRedWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
		AjoutJeton.setAttribute('id','Jeton20('+(VerifJeton20-1)+')')
		ValeurJeton.innerHTML=((VerifJeton20-1)*20)+'€';
		Affectation20--;
	}while(Affectation20>0);
}

var Affectation10 = Math.floor(ResultatDeal/10)
ResultatDeal=(ResultatDeal-Affectation10*10)
if(Affectation10){
	do{
	var AjoutJeton =document.createElement("img");
	var PlaceJeton = document.getElementById('RangJeton10')
	var ValeurJeton = document.getElementById('SommeJeton10');
	VerifJeton10++;
	PlaceJeton.appendChild(AjoutJeton);
	AjoutJeton.setAttribute('src','assets/jetons/chipGreenWhite_side.png');
	AjoutJeton.setAttribute('class','Jeton');
	AjoutJeton.setAttribute('id','Jeton10('+(VerifJeton10-1)+')')
	ValeurJeton.innerHTML=((VerifJeton10-1)*10)+'€';
	Affectation10--;
}while(Affectation10>0);
}

var Affectation5 = Math.floor(ResultatDeal/5)
ResultatDeal=(ResultatDeal-Affectation5*5)
if(Affectation5){
	do{
		var AjoutJeton =document.createElement("img");
		var PlaceJeton = document.getElementById('RangJeton5')
		var ValeurJeton = document.getElementById('SommeJeton5');
		VerifJeton5++;
		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipBlueWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
		AjoutJeton.setAttribute('id','Jeton5('+(VerifJeton5-1)+')')
		ValeurJeton.innerHTML=((VerifJeton5-1)*5)+'€';
		Affectation5--;
	}while(Affectation5>0);
}

var Affectation1 = Math.floor(ResultatDeal/1)
ResultatDeal=(ResultatDeal-Affectation1*1)
if(Affectation1){
	do{
		var AjoutJeton =document.createElement("img");
		var PlaceJeton = document.getElementById('RangJeton1')
		var ValeurJeton = document.getElementById('SommeJeton1');
		VerifJeton1++;
		PlaceJeton.appendChild(AjoutJeton);
		AjoutJeton.setAttribute('src','assets/jetons/chipBlackWhite_side.png');
		AjoutJeton.setAttribute('class','Jeton');
		AjoutJeton.setAttribute('id','Jeton1('+(VerifJeton1-1)+')')
		ValeurJeton.innerHTML=((VerifJeton1-1)*1)+'€';
		Affectation1--;
	}while(Affectation1>0);
}



ValeurDeal = 0;
Portefeuille = (((VerifJeton1-1)*1)+((VerifJeton5-1)*5)+((VerifJeton10-1)*10)+((VerifJeton20-1)*20)+((VerifJeton50-1)*50)+ResultatDeal);
document.getElementById('ValeurPlaceJeton').innerHTML = ValeurDeal+' €';
}
