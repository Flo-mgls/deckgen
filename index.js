let cardsNumberInDeck = 6; // Nombre de cartes dans un deck
let allCards = []; // Array contenant toutes les cartes du jeu
let currentDeck = []; // Array contenant les cartes du deck actuel
let modeDeckSelection = 0; // Mode de sélection: 0 > yolo / 

// Conctructeur des cartes 
function Cards(id, name, rarety, type, cost, image, arena, date, winCondition, isUsed) { 
	this.id = id,
	this.name = name,
	this.rarety = rarety,
	this.type = type,
	this.cost = cost,
	this.image = image,
	this.arena = arena,
	this.date = date,
	this.winCondition = winCondition,
	this.isUsed = isUsed

}
// Ajout d'une méthode dans le prototype de Cards: Ajoute la carte à l'array allCards
Cards.prototype.addCard = function() {
	allCards.push(this);
}

// Création des cartes avec le constructeur Cards et ajout une à une dans l'array allCards
let arrows = new Cards(1, "Arrows", "Common", "Spell", 3, "images/arrows.png", 0, 1601, false, false).addCard();
let minions = new Cards(2, "Minions", "Common", "Troop", 3, "images/minions.png", 0, 1601, false, false).addCard();
let archers = new Cards(3, "Archers", "Common", "Troop", 3, "images/archers.png", 0, 1601, false, false).addCard();
let knight = new Cards(4, "Knight", "Common", "Troop", 3, "images/knight.png", 0, 1601, false, false).addCard();
let fireball = new Cards(5, "Fireball", "Rare", "Spell", 4, "images/fireball.png", 0, false, 1601, false).addCard();
let miniPekka = new Cards(6, "Mini P.E.K.K.A", "Rare", "Troop", 4, "images/miniPekka.png", 0, 1601, false, false).addCard();
let musketeer = new Cards(7, "Musketeer", "Rare", "Troop", 4, "images/musketeer.png", 0, 1601, false, false).addCard();
let giant = new Cards(8, "Giant", "Rare", "Troop", 5, "images/giant.png", 0, 1601, true, false).addCard();
let wallBreakers = new Cards(9, "wall Breakers", "epic", "Troop", 2, "images/wallBreakers.png", 0, 1902, true, false).addCard();
let prince = new Cards(10, "Prince", "Epic", "Troop", 5, "images/prince.png", 0, 1601, false, false).addCard();
let babyDragon = new Cards(11, "Baby Dragon", "Epic", "Troop", 4, "images/babyDragon.png", 0, 1601, false, false).addCard();
let skeletonArmy = new Cards(12, "Skeleton Army", "Epic", "Troop", 3, "images/skeletonArmy.png", 0, 1601, false, false).addCard();
let princess = new Cards(62, "Princess", "Legendary", "Troop", 3, "images/princess.png", 7, 1602, false, false).addCard();

// Donne un aléatoire selon le mode de sélection choisi
function getRandom(mode){
	switch(mode){
		case 0: // Mode yolo donc aléatoire sur toutes les cartes
		return Math.floor(Math.random() * allCards.length);
		break;

		default:
		return Math.floor(Math.random() * allCards.length);
	}
}

// Mode de sélection 0 - choisi 8 cartes totalement aléatoire
function genDeckYolo(){
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(modeDeckSelection); // On définit une carte aléatoire
		if(allCards[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			allCards[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(allCards[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}

// Affichage des 8 cartes dans le DOM
function displayDeck(){
	currentDeck = []; // On réinitialise le deck displayed
	for(card of allCards){
		card.isUsed = false; // On réinitialise l'état isUsed de chaque cartes 
	}
	switch(modeDeckSelection){ // Selon le mode on appelle telle ou telle fonction
		case 0:
		genDeckYolo();
		break;

		default:
		genDeckYolo();
	}
	let cardNumber = 0;
	let slots = document.getElementsByClassName("image");
	for(slot of slots){
		slot.setAttribute("src", currentDeck[cardNumber].image);
		slot.parentElement.setAttribute("id", `slot--${cardNumber}`);
		cardNumber++;
	}
}

document.querySelector("button").addEventListener("click", displayDeck);
