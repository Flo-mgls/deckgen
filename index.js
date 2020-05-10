let cardsNumberInDeck = 1; // Nombre de cartes dans un deck
let allCards = []; // Array contenant toutes les cartes du jeu
let currentDeck = []; // Array contenant les cartes du deck actuel
let modeDeckSelection = 0; // Mode de sélection: 0 > yolo / 

// Conctructeur des cartes 
function Cards(id, name, rarety, type, cost, image) { 
	this.id = id,
	this.name = name,
	this.rarety = rarety,
	this.type = type,
	this.cost = cost,
	this.image = image
}
// Ajout d'une méthode dans le prototype de Cards: Ajoute la carte à l'array allCards
Cards.prototype.addCard = function() {
	allCards.push(this);
}

// Création des cartes avec le constructeur Cards et ajout une à une dans l'array allCards
let prince = new Cards(1, "prince", "epic", "troup", 5, "images/prince.jpg").addCard();
let princesse = new Cards(2, "princesse", "legendary", "troup", 3, "images/princesse.jpg").addCard();

// Donne un aléatoire selon le mode de sélection choisi
function getRandom(){
	switch(modeDeckSelection){
		case 0:
		return Math.floor(Math.random() * allCards.length);
		break;

		default:
		return Math.floor(Math.random() * allCards.length);
	}
}

// Mode de sélection 0 - choisi 8 cartes totalement aléatoire
function madeDeck(){
	for(let i = 0; i < cardsNumberInDeck; i++){
		randomCard = getRandom();
		currentDeck.push(allCards[randomCard]);
	}
}

// Affichage des 8 cartes dans le DOM
function displayDeck(){
	currentDeck = [];
	madeDeck();
	document.getElementById("name").textContent = `nom: ${currentDeck[0].name}`;
	document.getElementById("image").setAttribute("src", currentDeck[0].image);
}

document.querySelector("button").addEventListener("click", displayDeck);
