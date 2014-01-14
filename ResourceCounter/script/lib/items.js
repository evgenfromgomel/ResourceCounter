var mc = (function() {
	
	//Recipes
var rec = (function() {
		return {
			
			plank: function(){
				var recPlank = new Recipe("Доска");
				recPlank.numOfOutput = 4;
				recPlank.addIngridient(wood, 1);
				return recPlank;
			},
		
			stick: function(){
				var recStick = new Recipe("Палка");
				recStick.numOfOutput = 4;
				recStick.addIngridient(plank, 2);
				return recStick;
			},
		
			pickaxe: function(ingr){
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
		}
		
	})();	
	
var wood = new SrcIngr("Древесина");
var cobblestone = new SrcIngr("Булыжник");
var plank = new ItemIngr(rec.plank());
var stick = new ItemIngr(rec.stick());
var woodPickAxe = new ItemIngr(rec.pickaxe(plank));
var stonePickAxe = new ItemIngr(rec.pickaxe(cobblestone));



return {
	wood : new SrcIngr("Древесина"),
	plank : new SrcIngr("Булыжник"),
	stick : new ItemIngr(rec.plank()),
	woodPickAxe : new ItemIngr(rec.pickaxe(plank)),
	stonePickAxe : new ItemIngr(rec.pickaxe(cobblestone))
}

})();