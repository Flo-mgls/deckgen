let cardsNumberInDeck = 8; // Nombre de cartes dans un deck
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
let arrows = new Cards(1, "Arrows", "Common", "Spell", 3, "./contents/images/cards/arrows.png", 0, 1601, false, false).addCard();
let minions = new Cards(2, "Minions", "Common", "Troop", 3, "./contents/images/cards/minions.png", 0, 1601, false, false).addCard();
let archers = new Cards(3, "Archers", "Common", "Troop", 3, "./contents/images/cards/archers.png", 0, 1601, false, false).addCard();
let knight = new Cards(4, "Knight", "Common", "Troop", 3, "./contents/images/cards/knight.png", 0, 1601, false, false).addCard();
let fireball = new Cards(5, "Fireball", "Rare", "Spell", 4, "./contents/images/cards/fireball.png", 0, false, 1601, false).addCard();
let miniPekka = new Cards(6, "Mini P.E.K.K.A", "Rare", "Troop", 4, "./contents/images/cards/miniPekka.png", 0, 1601, false, false).addCard();
let musketeer = new Cards(7, "Musketeer", "Rare", "Troop", 4, "./contents/images/cards/musketeer.png", 0, 1601, false, false).addCard();
let giant = new Cards(8, "Giant", "Rare", "Troop", 5, "./contents/images/cards/giant.png", 0, 1601, true, false).addCard();
let wallBreakers = new Cards(9, "wall Breakers", "epic", "Troop", 2, "./contents/images/cards/wallBreakers.png", 0, 1902, true, false).addCard();
let prince = new Cards(10, "Prince", "Epic", "Troop", 5, "./contents/images/cards/prince.png", 0, 1601, false, false).addCard();
let babyDragon = new Cards(11, "Baby Dragon", "Epic", "Troop", 4, "./contents/images/cards/babyDragon.png", 0, 1601, false, false).addCard();
let skeletonArmy = new Cards(12, "Skeleton Army", "Epic", "Troop", 3, "./contents/images/cards/skeletonArmy.png", 0, 1601, false, false).addCard();
let spearGoblins = new Cards(13, "Spear Goblins", "Common", "Troop", 2, "./contents/images/cards/spearGoblins.png", 1, 1601, false, false).addCard();
let goblins = new Cards(14, "Goblins", "Common", "Troop", 2, "./contents/images/cards/goblins.png", 1, 1601, false, false).addCard();
let goblinHut = new Cards(15, "Goblin Hut", "Rare", "Building", 5, "./contents/images/cards/goblinHut.png", 1, 1601, false, false).addCard();
let hogRider = new Cards(16, "Hog Rider", "Rare", "Troop", 4, "./contents/images/cards/hogRider.png", 1, 1601, true, false).addCard();
let goblinBarrel = new Cards(17, "Goblin Barrel", "Epic", "Spell", 3, "./contents/images/cards/goblinBarrel.png", 1, 1601, true, false).addCard();
let hunter = new Cards(18, "Hunter", "Epic", "Troop", 4, "./contents/images/cards/hunter.png", 1, 1712, false, false).addCard();
let bomber = new Cards(19, "Bomber", "Common", "Troop", 3, "./contents/images/cards/bomber.png", 2, 1601, false, false).addCard();
let skeletons = new Cards(20, "Skeletons", "Common", "Troop", 1, "./contents/images/cards/skeletons.png", 2, 1601, false, false).addCard();
let tombstone = new Cards(21, "Tombstone", "Rare", "Building", 3, "./contents/images/cards/tombstone.png", 2, 1601, false, false).addCard();
let valkyrie = new Cards(22, "Valkyrie", "Rare", "Troop", 4, "./contents/images/cards/valkyrie.png", 2, 1601, false, false).addCard();
let giantSkeleton = new Cards(23, "Giant Skeleton", "Epic", "Troop", 6, "./contents/images/cards/giantSkeleton.png", 2, 1601, true, false).addCard();
let witch = new Cards(24, "Witch", "Epic", "Troop", 5, "./contents/images/cards/witch.png", 2, 1601, false, false).addCard();
let cannon = new Cards(25, "Cannon", "Common", "Building", 3, "./contents/images/cards/cannon.png", 3, 1601, false, false).addCard();
let barbarians = new Cards(26, "Barbarians", "Common", "Troop", 5, "./contents/images/cards/barbarians.png", 3, 1601, false, false).addCard();
let barbarianHut = new Cards(27, "Barbarian Hut", "Rare", "Building", 7, "./contents/images/cards/barbarianHut.png", 3, 1601, false, false).addCard();
let battleRam = new Cards(28, "Battle Ram", "Rare", "Troop", 4, "./contents/images/cards/battleRam.png", 3, 1702, true, false).addCard();
let barbarianBarrel = new Cards(29, "Barbarian Barrel", "Epic", "Spell", 2, "./contents/images/cards/barbarianBarrel.png", 3, 1804, false, false).addCard();
let golem = new Cards(30, "Golem", "Epic", "Troop", 8, "./contents/images/cards/golem.png", 3, 1601, true, false).addCard();
let princess = new Cards(62, "Princess", "Legendary", "Troop", 3, "./contents/images/cards/princess.png", 7, 1602, false, false).addCard();

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
function displayDeck(e){
	e.preventDefault();
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

document.getElementsByName("deck-it")[0].addEventListener("click", displayDeck);
