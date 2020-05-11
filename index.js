let cardsNumberInDeck = 2; // Nombre de cartes dans un deck
let allCards = []; // Array contenant toutes les cartes du jeu
let currentDeck = []; // Array contenant les cartes du deck actuel
let modeDeckSelection = 0; // Mode de sélection: 0 > yolo / 

// Conctructeur des cartes 
function Cards(id, name, rarety, type, cost, image, arena, isUsed) { 
	this.id = id,
	this.name = name,
	this.rarety = rarety,
	this.type = type,
	this.cost = cost,
	this.image = image,
	this.arena = arena,
	this.isUsed = isUsed

}
// Ajout d'une méthode dans le prototype de Cards: Ajoute la carte à l'array allCards
Cards.prototype.addCard = function() {
	allCards.push(this);
}

// Création des cartes avec le constructeur Cards et ajout une à une dans l'array allCards
let prince = new Cards(1, "prince", "epic", "troup", 5, "images/prince.jpg", 1, false).addCard();
let princess = new Cards(2, "princess", "legendary", "troup", 3, "images/princess.jpg", 2, false).addCard();
let fireball = new Cards(3, "fireball", "rare", "spell", 4, "images/fireball.jpg", 2, false).addCard();

// Donne un aléatoire selon le mode de sélection choisi
function getRandom(mode){
	switch(mode){
		case 0:
		return Math.floor(Math.random() * allCards.length);
		break;

		default:
		return Math.floor(Math.random() * allCards.length);
	}
}

// Mode de sélection 0 - choisi 8 cartes totalement aléatoire
function madeDeckYolo(){
	modeDeckSelection = 0;
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(modeDeckSelection);
		if(allCards[randomCard].isUsed){
			continue;
		}else{
			allCards[randomCard].isUsed = true;
			currentDeck.push(allCards[randomCard]);
		}
	}
}

// Affichage des 8 cartes dans le DOM
function displayDeck(){
	currentDeck = [];
	for(card of allCards){
		card.isUsed = false;
	}
	madeDeckYolo();
	let cardNumber = 0;
	let slots = document.getElementsByClassName("image");
	for(slot of slots){
		slot.setAttribute("src", currentDeck[cardNumber].image);
		cardNumber++;
	}
}

document.querySelector("button").addEventListener("click", displayDeck);
