let cardsNumberInDeck = 8; // Nombre de cartes dans un deck
let allCards = []; // Array contenant toutes les cartes du jeu
let currentDeck = []; // Array contenant les cartes du deck actuel
let customCards = []; // Array contenant les cartes disponible pour le Custom mode
let customComplete = []; // Array contenant les cartes pour completer currentDeck dans le Custom mode (How Many = ?)
let modeDeckSelection = 0; // Mode de sélection: 0 > yolo / 1 > balanced / 2 > custom
let imgCardsPath = "./contents/images/cards/"; // Path to cards
let nbrSpells; // Nombre de spell pour un tirage
let nbrBuildings; // Nombre de building pour un tirage
let nbrWinConditions; // Nombre de winCondition pour un tirage
let nbrTroops; // // Nombre de TROOPS pour un tirage
let commonActive = true; // Si les communes sont disponible
let rareActive = true; // Si les rares sont disponible
let epicActive = true; // Si les epics sont disponible
let legendaryActive = true; // Si les légendaires sont disponible
let customModeIsOk = true; // Si aucun problème lors du custom mode n'a été détecté


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
let arrows = new Cards(1, "Arrows", "Common", "Spell", 3, imgCardsPath + "arrows.png", 0, 1601, false, false).addCard();
let minions = new Cards(2, "Minions", "Common", "Troop", 3, imgCardsPath + "minions.png", 0, 1601, false, false).addCard();
let archers = new Cards(3, "Archers", "Common", "Troop", 3, imgCardsPath + "archers.png", 0, 1601, false, false).addCard();
let knight = new Cards(4, "Knight", "Common", "Troop", 3, imgCardsPath + "knight.png", 0, 1601, false, false).addCard();
let fireball = new Cards(5, "Fireball", "Rare", "Spell", 4, imgCardsPath + "fireball.png", 0, false, 1601, false).addCard();
let miniPekka = new Cards(6, "Mini P.E.K.K.A.", "Rare", "Troop", 4, imgCardsPath + "miniPekka.png", 0, 1601, false, false).addCard();
let musketeer = new Cards(7, "Musketeer", "Rare", "Troop", 4, imgCardsPath + "musketeer.png", 0, 1601, false, false).addCard();
let giant = new Cards(8, "Giant", "Rare", "Troop", 5, imgCardsPath + "giant.png", 0, 1601, true, false).addCard();
let wallBreakers = new Cards(9, "wall Breakers", "Epic", "Troop", 2, imgCardsPath + "wallBreakers.png", 0, 1902, true, false).addCard();
let prince = new Cards(10, "Prince", "Epic", "Troop", 5, imgCardsPath + "prince.png", 0, 1601, false, false).addCard();
let babyDragon = new Cards(11, "Baby Dragon", "Epic", "Troop", 4, imgCardsPath + "babyDragon.png", 0, 1601, false, false).addCard();
let skeletonArmy = new Cards(12, "Skeleton Army", "Epic", "Troop", 3, imgCardsPath + "skeletonArmy.png", 0, 1601, false, false).addCard();
let spearGoblins = new Cards(13, "Spear Goblins", "Common", "Troop", 2, imgCardsPath + "spearGoblins.png", 1, 1601, false, false).addCard();
let goblins = new Cards(14, "Goblins", "Common", "Troop", 2, imgCardsPath + "goblins.png", 1, 1601, false, false).addCard();
let goblinHut = new Cards(15, "Goblin Hut", "Rare", "Building", 5, imgCardsPath + "goblinHut.png", 1, 1601, false, false).addCard();
let hogRider = new Cards(16, "Hog Rider", "Rare", "Troop", 4, imgCardsPath + "hogRider.png", 1, 1601, true, false).addCard();
let goblinBarrel = new Cards(17, "Goblin Barrel", "Epic", "Spell", 3, imgCardsPath + "goblinBarrel.png", 1, 1601, true, false).addCard();
let hunter = new Cards(18, "Hunter", "Epic", "Troop", 4, imgCardsPath + "hunter.png", 1, 1712, false, false).addCard();
let bomber = new Cards(19, "Bomber", "Common", "Troop", 3, imgCardsPath + "bomber.png", 2, 1601, false, false).addCard();
let skeletons = new Cards(20, "Skeletons", "Common", "Troop", 1, imgCardsPath + "skeletons.png", 2, 1601, false, false).addCard();
let tombstone = new Cards(21, "Tombstone", "Rare", "Building", 3, imgCardsPath + "tombstone.png", 2, 1601, false, false).addCard();
let valkyrie = new Cards(22, "Valkyrie", "Rare", "Troop", 4, imgCardsPath + "valkyrie.png", 2, 1601, false, false).addCard();
let giantSkeleton = new Cards(23, "Giant Skeleton", "Epic", "Troop", 6, imgCardsPath + "giantSkeleton.png", 2, 1601, true, false).addCard();
let witch = new Cards(24, "Witch", "Epic", "Troop", 5, imgCardsPath + "witch.png", 2, 1601, false, false).addCard();
let cannon = new Cards(25, "Cannon", "Common", "Building", 3, imgCardsPath + "cannon.png", 3, 1601, false, false).addCard();
let barbarians = new Cards(26, "Barbarians", "Common", "Troop", 5, imgCardsPath + "barbarians.png", 3, 1601, false, false).addCard();
let barbarianHut = new Cards(27, "Barbarian Hut", "Rare", "Building", 7, imgCardsPath + "barbarianHut.png", 3, 1601, false, false).addCard();
let battleRam = new Cards(28, "Battle Ram", "Rare", "Troop", 4, imgCardsPath + "battleRam.png", 3, 1702, true, false).addCard();
let barbarianBarrel = new Cards(29, "Barbarian Barrel", "Epic", "Spell", 2, imgCardsPath + "barbarianBarrel.png", 3, 1804, false, false).addCard();
let golem = new Cards(30, "Golem", "Epic", "Troop", 8, imgCardsPath + "golem.png", 3, 1601, true, false).addCard();
let zap = new Cards(31, "Zap", "Common", "Spell", 2, imgCardsPath + "zap.png", 4, 1601, false, false).addCard();
let minionHorde = new Cards(32, "Minion Horde", "Common", "Troop", 5, imgCardsPath + "minionHorde.png", 4, 1601, false, false).addCard();
let infernoTower = new Cards(33, "Inferno Tower", "Rare", "Building", 5, imgCardsPath + "infernoTower.png", 4, 1601, false, false).addCard();
let megaMinion = new Cards(34, "Mega Minion", "Rare", "Troop", 3, imgCardsPath + "megaMinion.png", 4, 1609, false, false).addCard();
let lightning = new Cards(35, "Lightning", "Epic", "Spell", 6, imgCardsPath + "lightning.png", 4, 1601, false, false).addCard();
let pekka = new Cards(36, "P.E.K.K.A.", "Epic", "Troop", 7, imgCardsPath + "pekka.png", 4, 1601, false, false).addCard();
let miner = new Cards(37, "Miner", "Legendary", "Troop", 3, imgCardsPath + "miner.png", 4, 1605, true, false).addCard();
let lavaHound = new Cards(38, "Lava Hound", "Legendary", "Troop", 7, imgCardsPath + "lavaHound.png", 4, 1605, true, false).addCard();
let bats = new Cards(39, "Bats", "Common", "Troop", 2, imgCardsPath + "bats.png", 5, 1707, false, false).addCard();
let fireSpirits = new Cards(40, "Fire Spirits", "Common", "Troop", 2, imgCardsPath + "fireSpirits.png", 5, 1605, false, false).addCard();
let furnace = new Cards(41, "Furnace", "Rare", "Building", 4, imgCardsPath + "furnace.png", 5, 1605, false, false).addCard();
let wizard = new Cards(42, "Wizard", "Rare", "Troop", 5, imgCardsPath + "wizard.png", 5, 1601, false, false).addCard();
let tornado = new Cards(43, "Tornado", "Epic", "Spell", 3, imgCardsPath + "tornado.png", 5, 1611, false, false).addCard();
let poison = new Cards(44, "Poison", "Epic", "Spell", 4, imgCardsPath + "poison.png", 5, 1602, false, false).addCard();
let magicArcher = new Cards(45, "Magic Archer", "Legendary", "Troop", 4, imgCardsPath + "magicArcher.png", 5, 1804, false, false).addCard();
let nightWitch = new Cards(46, "Night Witch", "Legendary", "Troop", 4, imgCardsPath + "nightWitch.png", 5, 1705, false, false).addCard();
let mortar = new Cards(47, "Mortar", "Common", "Building", 4, imgCardsPath + "mortar.png", 6, 1601, true, false).addCard();
let skeletonBarrel = new Cards(48, "Skeleton Barrel", "Common", "Troop", 3, imgCardsPath + "skeletonBarrel.png", 6, 1711, true, false).addCard();
let rocket = new Cards(49, "Rocket", "Rare", "Spell", 6, imgCardsPath + "rocket.png", 6, 1601, true, false).addCard();
let flyingMachine = new Cards(50, "FlyingMachine", "Rare", "Troop", 4, imgCardsPath + "flyingMachine.png", 6, 1710, false, false).addCard();
let xBow = new Cards(51, "X-Bow", "Epic", "Building", 6, imgCardsPath + "x-Bow.png", 6, 1601, true, false).addCard();
let balloon = new Cards(52, "Balloon", "Epic", "Troop", 5, imgCardsPath + "balloon.png", 6, 1601, true, false).addCard();
let theLog = new Cards(53, "The Log", "Legendary", "Spell", 2, imgCardsPath + "theLog.png", 6, 1607, false, false).addCard();
let infernoDragon = new Cards(54, "Inferno Dragon", "Legendary", "Troop", 4, imgCardsPath + "infernoDragon.png", 6, 1609, false, false).addCard();
let royalRecruits = new Cards(55, "Royal Recruits", "Common", "Troop", 7, imgCardsPath + "royalRecruits.png", 7, 1910, false, false).addCard();
let royalGiant = new Cards(56, "Royal Giant", "Common", "Troop", 6, imgCardsPath + "royalGiant.png", 7, 1602, true, false).addCard();
let royalHogs = new Cards(57, "Royal Hogs", "Rare", "Troop", 5, imgCardsPath + "royalHogs.png", 7, 1806, true, false).addCard();
let threeMusketeers = new Cards(58, "Three Musketeers", "Rare", "Troop", 9, imgCardsPath + "threeMusketeers.png", 7, 1602, true, false).addCard();
let darkPrince = new Cards(59, "Dark Prince", "Epic", "Troop", 4, imgCardsPath + "darkPrince.png", 7, 1602, false, false).addCard();
let guards = new Cards(60, "Guards", "Epic", "Troop", 3, imgCardsPath + "guards.png", 7, 1605, false, false).addCard();
let megaKnight = new Cards(61, "Mega Knight", "Legendary", "Troop", 7, imgCardsPath + "megaKnight.png", 7, 1709, false, false).addCard();
let princess = new Cards(62, "Princess", "Legendary", "Troop", 3, imgCardsPath + "princess.png", 7, 1602, false, false).addCard();
let giantSnowball = new Cards(63, "Giant Snowball", "Common", "Spell", 2, imgCardsPath + "giantSnowball.png", 8, 1806, false, false).addCard();
let iceSpirit = new Cards(64, "Ice Spirit", "Common", "Troop", 1, imgCardsPath + "iceSpirit.png", 8, 1607, false, false).addCard();
let elixirCollector = new Cards(65, "Elixir Collector", "Rare", "Building", 6, imgCardsPath + "elixirCollector.png", 8, 1601, false, false).addCard();
let iceGolem = new Cards(66, "ice Golem", "Rare", "Troop", 2, imgCardsPath + "iceGolem.png", 8, 1610, false, false).addCard();
let freeze = new Cards(67, "Freeze", "Epic", "Spell", 4, imgCardsPath + "freeze.png", 8, 1601, false, false).addCard();
let bowler = new Cards(68, "Bowler", "Epic", "Troop", 5, imgCardsPath + "bowler.png", 8, 1607, false, false).addCard();
let lumberjack = new Cards(69, "Lumberjack", "Legendary", "Troop", 4, imgCardsPath + "lumberjack.png", 8, 1607, false, false).addCard();
let iceWizard = new Cards(70, "Ice Wizard", "Legendary", "Troop", 3, imgCardsPath + "iceWizard.png", 8, 1602, false, false).addCard();
let rascals = new Cards(71, "Rascals", "Common", "Troop", 5, imgCardsPath + "rascals.png", 9, 1805, false, false).addCard();
let goblinGang = new Cards(72, "Goblin Gang", "Common", "Troop", 3, imgCardsPath + "goblinGang.png", 9, 1702, false, false).addCard();
let earthquake = new Cards(73, "Earthquake", "Rare", "Spell", 3, imgCardsPath + "earthquake.png", 9, 1904, false, false).addCard();
let dartGoblin = new Cards(74, "Dart Goblin", "Rare", "Troop", 3, imgCardsPath + "dartGoblin.png", 9, 1701, false, false).addCard();
let goblinGiant = new Cards(75, "Goblin Giant", "Epic", "Troop", 6, imgCardsPath + "goblinGiant.png", 9, 1809, true, false).addCard();
let bandit = new Cards(76, "Bandit", "Legendary", "Troop", 3, imgCardsPath + "bandit.png", 9, 1703, false, false).addCard();
let firecracker = new Cards(77, "Firecracker", "Common", "Troop", 3, imgCardsPath + "firecracker.png", 10, 2002, false, false).addCard();
let eliteBarbarians = new Cards(78, "Elite Barbarians", "Common", "Troop", 6, imgCardsPath + "eliteBarbarians.png", 10, 1611, true, false).addCard();
let healSpirit = new Cards(79, "Heal Spirit", "Rare", "Troop", 1, imgCardsPath + "healSpirit.png", 10, 2004, false, false).addCard();
let bombTower = new Cards(80, "Bomb Tower", "Rare", "Building", 4, imgCardsPath + "bombTower.png", 10, 1601, false, false).addCard();
let rage = new Cards(81, "Rage", "Epic", "Spell", 2, imgCardsPath + "rage.png", 10, 1601, false, false).addCard();
let cannonCart = new Cards(82, "Cannon Cart", "Epic", "Troop", 5, imgCardsPath + "cannonCart.png", 10, 1708, false, false).addCard();
let ramRider = new Cards(83, "Ram Rider", "Legendary", "Troop", 5, imgCardsPath + "ramRider.png", 10, 1812, true, false).addCard();
let fisherman = new Cards(84, "Fisherman", "Legendary", "Troop", 3, imgCardsPath + "fisherman.png", 10, 1908, false, false).addCard();
let tesla = new Cards(85, "Tesla", "Common", "Building", 4, imgCardsPath + "tesla.png", 11, 1601, false, false).addCard();
let elixirGolem = new Cards(86, "Elixir Golem", "Rare", "Troop", 3, imgCardsPath + "elixirGolem.png", 11, 1911, true, false).addCard();
let zappies = new Cards(87, "Zappies", "Rare", "Troop", 4, imgCardsPath + "zappies.png", 11, 1712, false, false).addCard();
let clone = new Cards(88, "Clone", "Epic", "Spell", 3, imgCardsPath + "clone.png", 11, 1612, false, false).addCard();
let electroDragon = new Cards(89, "Electro Dragon", "Epic", "Troop", 5, imgCardsPath + "electroDragon.png", 11, 1811, false, false).addCard();
let electroWizard = new Cards(90, "Electro Wizard", "Legendary", "Troop", 4, imgCardsPath + "electroWizard.png", 11, 1612, false, false).addCard();
let sparky = new Cards(91, "Sparky", "Legendary", "Troop", 6, imgCardsPath + "sparky.png", 11, 1605, true, false).addCard();
let royalDelivery = new Cards(92, "Royal Delivery", "Common", "Spell", 3, imgCardsPath + "royalDelivery.png", 12, 2004, false, false).addCard();
let goblinCage = new Cards(93, "Goblin Cage", "Rare", "Building", 4, imgCardsPath + "goblinCage.png", 12, 1905, false, false).addCard();
let battleHealer = new Cards(94, "Battle Healer", "Rare", "Troop", 4, imgCardsPath + "battleHealer.png", 12, 2001, false, false).addCard();
let mirror = new Cards(95, "Mirror", "Epic", "Spell", 0, imgCardsPath + "mirror.png", 12, 1601, false, false).addCard();
let executioner = new Cards(96, "Executioner", "Epic", "Troop", 5, imgCardsPath + "executioner.png", 12, 1701, false, false).addCard();
let royalGhost = new Cards(97, "Royal Ghost", "Legendary", "Troop", 3, imgCardsPath + "royalGhost.png", 12, 1801, false, false).addCard();
let graveyard = new Cards(98, "Graveyard", "Legendary", "Spell", 5, imgCardsPath + "graveyard.png", 12, 1610, true, false).addCard();

// Arrays spécifique
let cardsSpell = allCards.filter(card => card.type == "Spell" && card.winCondition == false); // Que les spells
let cardsBuilding = allCards.filter(card => card.type == "Building" && card.winCondition == false); // Que les buildings
let cardsWinCondition = allCards.filter(card => card.winCondition == true); // Que les win conditions
let cardsTroop = allCards.filter(card => card.type == "Troop" && card.winCondition == false); // Que les troops
let cardsCommon = allCards.filter(card => card.rarety == "Common"); // Que les commons
let cardsRare = allCards.filter(card => card.rarety == "Rare"); // Que les rares
let cardsEpic = allCards.filter(card => card.rarety == "Epic"); // Que les epics
let cardsLegendary = allCards.filter(card => card.rarety == "Legendary"); // Que les legendary

// Donne un aléatoire selon la longueur de l'array qui doit être traité
function getRandom(array){
	return Math.floor(Math.random() * array.length);
}
// Donne le coût moyen du deck en fonction du nombre de cartes
function getAverageCost(){
	let totalCost = 0;
	let averageCost;
	for(let card of currentDeck){ // Pour chaque cartes on récupère son coût
		totalCost += card.cost; // On l'ajoute a totalCost
	}
	averageCost = totalCost / currentDeck.length; // On fait la moyenne
	return averageCost.toFixed(1); // On retourne le résultat avec 1 décimale
}

//Récupère le mode sélectionné
let modes = document.getElementsByName("mode"); // On récupère les 3 boutons radio des modes
for(let i = 0; i < modes.length; i++){
	modes[i].addEventListener("change", function(){
		if(modes[i].checked && modes[i].value == "2"){ // On check si le mode Custom est sélectionné
			modeDeckSelection = modes[i].value; // On attribut sa valeur a modeDeckSelection
			// Affiche les nombres choisis dans How Many à chaque changement
			let howManyOption = document.getElementsByName("howMany"); // On récupère les 4 options
			for(let i=0; i < howManyOption.length; i++){
				howManyOption[i].addEventListener("change", function(){
					if(howManyOption[i].value <= 8){
						howManyOption[i].nextElementSibling.firstElementChild.textContent = howManyOption[i].value;
					}else{
						howManyOption[i].nextElementSibling.firstElementChild.textContent = "?"; // Si value = 9 --> ? (aléatoire)
					}
				})
			}
			// L'affiche également mais dès que le document est chargé (corrige l'affichage sur phone)
			document.addEventListener("DOMContentLoaded", function(){
				for(let i=0; i < howManyOption.length; i++){
					if(howManyOption[i].value <= 8){
						howManyOption[i].nextElementSibling.firstElementChild.textContent = howManyOption[i].value;
					}else{
						howManyOption[i].nextElementSibling.firstElementChild.textContent = "?"; // Si value = 9 --> ? (aléatoire)
					}
				}
			})
			// On affiche dans le DOM la liste des cartes banned
			let bannedOption = document.getElementsByName("banned")[0];
			for(let card in allCards){
				bannedOption.innerHTML += `<option value="${allCards[card].name}">${allCards[card].name}</option>`;
			}
			// On affiche aussi les cartes required
			let requiredOption = document.getElementsByName("required")[0];
			for(let card in allCards){
				requiredOption.innerHTML += `<option value="${allCards[card].id}">${allCards[card].name}</option>`;
			}
			document.getElementById("customOptions").style.display = "block"; // On affiche enfin toutes les options dans le DOM
		}else if(modes[i].checked && modes[i].value != "2"){ // On check les autres modes
			modeDeckSelection = modes[i].value; // On attribut leur valeur a modeDeckSelection
			document.getElementById("customOptions").style.display = "none" // On cache les custom options du DOM
		}else{
			modeDeckSelection = 0; // Mode Yolo par défaut
		}
	})
}

// Mode de sélection 0 - choisi 8 cartes totalement aléatoire
function genDeckYolo(){
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(allCards); // On définit une carte aléatoire
		if(allCards[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			allCards[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(allCards[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}

// Algo déterminant les probas pour spell
function getRandomSpell(){
	let randomSpell = Math.random();
	switch(true){
		case (randomSpell < 0.6):
		nbrSpells = 2;
		break;
		case (randomSpell >= 0.6 && randomSpell < 0.9):
		nbrSpells = 3;
		break;
		case (randomSpell >= 0.9 && randomSpell < 0.98):
		nbrSpells = 1;
		break;
		case (randomSpell >= 0.98 && randomSpell < 1):
		nbrSpells = 0;
		break;
		default:
		nbrSpells = 2;
	}
}
// Algo déterminant les probas pour building
function getRandomBuilding(){
	let randomBuilding = Math.random();
	switch(true){
		case (randomBuilding < 0.6):
		nbrBuildings = 0;
		break;
		case (randomBuilding >= 0.6 && randomBuilding < 0.9):
		nbrBuildings = 1;
		break;
		case (randomBuilding >= 0.9 && randomBuilding < 0.98):
		nbrBuildings = 2;
		break;
		case (randomBuilding >= 0.98 && randomBuilding < 1):
		nbrBuildings = 3;
		break;
		default:
		nbrBuildings = 0;
	}
}

// Algo déterminant les probas pour winCondition
function getRandomWinCondition(){
	let randomWinCondition = Math.random();
	switch(true){
		case (randomWinCondition < 0.55):
		nbrWinConditions = 1;
		break;
		case (randomWinCondition >= 0.55 && randomWinCondition < 0.9):
		nbrWinConditions = 2;
		break;
		case (randomWinCondition >= 0.9 && randomWinCondition < 0.95):
		nbrWinConditions = 3;
		break;
		case (randomWinCondition >= 0.95 && randomWinCondition < 1):
		nbrWinConditions = 0;
		break;
		default:
		nbrWinConditions = 1;
	}
}

// Mode de sélection 1 - choisi 8 cartes en fonction d'aléatoire prédéterminé avec getRandom...()
function genDeckBalanced(){
	let randomCard; 
	getRandomSpell(); // Détermine nbrSpells
	getRandomBuilding(); // détermine nbrBuildings
	getRandomWinCondition(); // détermine nbrWinConditions

	// On sélectionne dans l'array le nombre de cartes déterminé au dessus
	for(let i = 0; i < nbrSpells; i++){
		randomCard = getRandom(cardsSpell);
		if(cardsSpell[randomCard].isUsed){
			i--;
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsSpell[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsSpell[randomCard]); // Et on la push dans l'array contenant le deck displayed (currentDeck)
		}
	}
	// On sélectionne dans l'array le nombre de cartes déterminé au dessus
	for(let i = 0; i < nbrBuildings; i++){
		randomCard = getRandom(cardsBuilding);
		if(cardsBuilding[randomCard].isUsed){
			i--;
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsBuilding[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsBuilding[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
	// On sélectionne dans l'array le nombre de cartes déterminé au dessus
	for(let i = 0; i < nbrWinConditions; i++){
		randomCard = getRandom(cardsWinCondition);
		if(cardsWinCondition[randomCard].isUsed){
			i--;
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsWinCondition[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsWinCondition[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
	// On complète currentDeck avec le nombre de cartes restantes pour arriver à 8 (Avec des cartes Troops)
	while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(cardsTroop); // On définit une carte aléatoire
		if(cardsTroop[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsTroop[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsTroop[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}

// Mode de sélection 2 - choisi 8 cartes en fonction...
function genDeckCustom(){
	let randomCard;
	// Détermine si telle ou telle rareté a été sélectionné
	commonActive = document.getElementById("raretyCommon").checked;
	rareActive = document.getElementById("raretyRare").checked;
	epicActive = document.getElementById("raretyEpic").checked;
	legendaryActive = document.getElementById("raretyLegendary").checked;
	// Pour chaque rareté sélectionné: on aggrémente customCards
	if(commonActive){customCards = customCards.concat(cardsCommon);}
	if(rareActive){customCards = customCards.concat(cardsRare);}
	if(epicActive){customCards = customCards.concat(cardsEpic);}
	if(legendaryActive){customCards = customCards.concat(cardsLegendary);}
	// On détermine le nombre de tel ou tel type sélectionné
	nbrSpells = parseFloat(document.getElementById("howManySpell").value);
	nbrBuildings = parseFloat(document.getElementById("howManyBuilding").value);
	nbrTroops = parseFloat(document.getElementById("howManyTroop").value);
	nbrWinConditions = parseFloat(document.getElementById("howManyWC").value);
	// On détermine si telle ou telle arène a été sélectionnée
	let arenas = {}; // Objet qui contiendra un bouléen pour chaque arène
	let arenaOption = document.getElementsByName("arena");
	let arenaOptions = arenaOption[0].getElementsByTagName("option");
	for(let i = 0; i < arenaOptions.length; i++){
		arenas[i] = arenaOptions[i].selected; // L'objet arenas sera donc {O: true, 1: false...}
	}
	for(let arena in arenas){
		if(!arenas[arena]){
			customCards = customCards.filter(card => card.arena != arena); // Si une arène est false --> On supp ces cartes de customCards
		}
	}
	// On détermine les cartes bannies
	let bannedOption = document.getElementsByName("banned")[0];
	let bannedOptions = bannedOption.getElementsByTagName("option");
	for(let options of bannedOptions){
		if(options.selected){
			customCards = customCards.filter(card => card.name != options.value); // On supp de customCards chaque cartes bannies
		}
	}
	// On détermine les cartes requises
	let requiredOption = document.getElementsByName("required")[0];
	let requiredOptions = requiredOption.getElementsByTagName("option");
	for(let options of requiredOptions){
		if(options.selected){
			currentDeck.push(allCards[options.value - 1]); // On ajoute directement à currentDeck les cartes requises
			customCards = customCards.filter(card => card.id != options.value); // On supp celles-ci de customCards pour éviter les doublons
		}
	}
	// On détermine les coûts en elixir choisis
	let elixirOption = document.getElementsByName("elixir")[0];
	let elixirOptions = elixirOption.getElementsByTagName("option");
	for(let options of elixirOptions){
		if(!options.selected){
			customCards = customCards.filter(card => card.cost != options.value);
		}
	}
	// On créé des arrays contenant chaque type de cartes en ayant prit en compte toutes les options précédentes
	cardsSpell = customCards.filter(card => card.type == "Spell" && card.winCondition == false);
	cardsBuilding = customCards.filter(card => card.type == "Building" && card.winCondition == false);
	cardsWinCondition = customCards.filter(card => card.winCondition == true);
	cardsTroop = customCards.filter(card => card.type == "Troop" && card.winCondition == false);
	//Enfin on ajoute à currentDeck le nombre de cartes déterminées par l'user
	// Spells
	if(nbrSpells <= 8){
		if(nbrSpells < cardsSpell.length){ // Si le nombre de sort est bien viable selon les sorts disponibles
			for(let i = 0; i < nbrSpells; i++){
				randomCard = getRandom(cardsSpell);
				if(cardsSpell[randomCard].isUsed){
					i--;
					continue; // Si la carte a déjà été utilisé
				}else{
				cardsSpell[randomCard].isUsed = true; // Sinon on change son état
				currentDeck.push(cardsSpell[randomCard]); // Et on la push dans l'array contenant le deck displayed
			}
		}
	}else{
		customModeIsOk = false;
	}
	}else{ // Aléatoire sélectionné donc on l'ajoute dans customComplete qui servira à compléter le deck final
	customComplete = customComplete.concat(cardsSpell);
}
	 //Buildings
	 if(nbrBuildings <= 8){
	 	if(nbrBuildings < cardsBuilding.length){
	 		for(let i = 0; i < nbrBuildings; i++){
	 			randomCard = getRandom(cardsBuilding);
	 			if(cardsBuilding[randomCard].isUsed){
	 				i--;
					continue; // Si la carte a déjà été utilisé
				}else{
					cardsBuilding[randomCard].isUsed = true; // Sinon on change son état
					currentDeck.push(cardsBuilding[randomCard]); // Et on la push dans l'array contenant le deck displayed
				}
			}
		}else{
			customModeIsOk = false;
		}
	}else{
		customComplete = customComplete.concat(cardsBuilding);
	}
	// Troops
	if(nbrTroops <= 8){
		if(nbrTroops < cardsTroop.length){
			for(let i = 0; i < nbrTroops; i++){
				randomCard = getRandom(cardsTroop);
				if(cardsTroop[randomCard].isUsed){
					i--;
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsTroop[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsTroop[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}else{
	customModeIsOk = false;
}
}else{
	customComplete = customComplete.concat(cardsTroop);
}
	// Win Conditions
	if(nbrWinConditions <= 8){
		if(nbrWinConditions < cardsWinCondition.length){
			for(let i = 0; i < nbrWinConditions; i++){
				randomCard = getRandom(cardsWinCondition);
				if(cardsWinCondition[randomCard].isUsed){
					i--;
			continue; // Si la carte a déjà été utilisé
		}else{
			cardsWinCondition[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(cardsWinCondition[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}else{
	customModeIsOk = false;
}
}else{
	customComplete = customComplete.concat(cardsWinCondition);
}
// Enfin on complète le deck
if(customComplete.length >= (cardsNumberInDeck - currentDeck.length)){ // On s'assure qu'on ait bien assez de cartes
	if(currentDeck.length != cardsNumberInDeck){ // On s'assure que l'on ait bien moins de 8 cartes
		if(currentDeck.length < cardsNumberInDeck && (nbrSpells == 9 || nbrBuildings == 9 || nbrTroops == 9 || nbrWinConditions == 9)){
			while(currentDeck.length < cardsNumberInDeck){
		randomCard = getRandom(customComplete); // On définit une carte aléatoire
		if(customComplete[randomCard].isUsed){
			continue; // Si la carte a déjà été utilisé
		}else{
			customComplete[randomCard].isUsed = true; // Sinon on change son état
			currentDeck.push(customComplete[randomCard]); // Et on la push dans l'array contenant le deck displayed
		}
	}
}
}
}else{ // Sinon un défini un problème
	customModeIsOk = false
}
}

// Réinitialise les états isUsed des cartes d'un Array
function resetArray(array){
	for(let card of array){
		card.isUsed = false; // On réinitialise l'état isUsed de chaque cartes 
	}
}

// Shuffle un array
function shuffle(arra1) {
	var ctr = arra1.length, temp, index;

// While there are elements in the array
while (ctr > 0) {
// Pick a random index
index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
ctr--;
// And swap the last element with it
temp = arra1[ctr];
arra1[ctr] = arra1[index];
arra1[index] = temp;
}
return arra1;
}

// Réinitialise toutes les data nécessaires 
function resetData(){
		currentDeck = []; // On réinitialise le deck displayed
		customCards = []; // On réinitialise l'array contenant les choix fait par l'user
		customComplete = []; // On réinitialise l'array contenant les cartes pour compléter custom mode
		resetArray(allCards); // On réinitialise l'état isUsed 
		resetArray(cardsSpell); // On réinitialise l'état isUsed
		resetArray(cardsBuilding); // On réinitialise l'état isUsed
		resetArray(cardsWinCondition); // On réinitialise l'état isUsed
		resetArray(cardsTroop); // On réinitialise l'état isUsed
		resetArray(customCards); // On réinitialise l'état isUsed
		nbrSpells = 0; // On réinitialise le nombre de sort déterminé
		nbrBuildings = 0; // On réinitialise le nombre de bat déterminé
		nbrWinConditions = 0; // On réinitialise le nombre de win condition déterminé
		nbrTroops = 0; // On réinitialise le nombre de troops déterminé
		customModeIsOk = true; // On réinitialise le bouléen déterminant un probléme
	}

// S'occupe d'afficher tous les éléments à leur place dans le DOM
function displayInDom(){
	if(currentDeck.length == cardsNumberInDeck && customModeIsOk){ // On check d'éventuels problémes avant
		shuffle(currentDeck); // On shuffle currentDeck
		// On ajoute chaque cartes à leur emplacement
		let cardNumber = 0;
		let slots = document.getElementsByClassName("image");
		for(let slot of slots){
			slot.setAttribute("src", currentDeck[cardNumber].image);
			slot.parentElement.setAttribute("id", `slot--${cardNumber}`);
			cardNumber++;
		}
		// On affiche également l'élixir moyen
		let averageCost = getAverageCost();
		let elixir = document.getElementsByClassName("deck-builder__deck__elixir")[0];
		elixir.getElementsByTagName("span")[0].textContent = averageCost;
		//Si un problème a été détecté
	}else{
		alert("Sorry, impossible to build a deck...You should maybe check your choices 😶")
	}
}

// Affichage des 8 cartes dans le DOM
function displayDeck(e){
	e.preventDefault();
	resetData(); // On s'assure de repartir de 0 à chaque génération
	switch(parseFloat(modeDeckSelection)){ // Selon le mode on appelle telle ou telle fonction
		case 0:
		genDeckYolo(); // Génère le deck
		displayInDom(); // L'affiche
		break;
		case 1:
		genDeckBalanced(); // Génère le deck
		displayInDom(); // L'affiche
		break;
		case 2:
		genDeckCustom(); // Génère le deck
		displayInDom(); // L'affiche
		break;
		default:
		genDeckYolo();
		displayInDom();
	}
}

document.getElementsByName("deck-it")[0].addEventListener("click", displayDeck);
