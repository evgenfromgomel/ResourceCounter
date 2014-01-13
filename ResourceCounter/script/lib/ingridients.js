//Source items

var wood = new SrcIngr("Древесина");
var cobblestone = new SrcIngr("Булыжник");

//Craft items

var recPlank = new Recipe("Доска");
recPlank.numOfOutput = 4;
recPlank.addIngridient(wood, 1);
var plank = new ItemIngr(recPlank);


var recStick = new Recipe("Палка");
recStick.numOfOutput = 4;
recStick.addIngridient(plank, 2);
var stick = new ItemIngr(recStick);


function makePickaxeRec(ingr){
	var recPickaxe = new Recipe("кирка");
	recPickaxe.numOfOutput = 1;
	recPickaxe.addIngridient(stick, 2);
	if(ingr.name == 'Доска'){
		recPickaxe.name = "Деревянная " + recPickaxe.name;
		recPickaxe.addIngridient(wood, 3);
	}
	if(ingr.name == 'Булыжник'){
		recPickaxe.name = "Каменная " + recPickaxe.name;
		recPickaxe.addIngridient(cobblestone, 3);
	}
	return recPickaxe;
}

var woodPickAxe = new ItemIngr(makePickaxeRec(plank));
var stonePickAxe = new ItemIngr(makePickaxeRec(cobblestone));