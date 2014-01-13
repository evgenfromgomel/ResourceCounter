function SrcIngr(name){
	this.name = name;
	this.quantity = 1;
	this.type = "SrcIngr";
}

function ItemIngr(recipe){
	this.name = recipe.name;
	this.recipe = recipe;
	this.quantity = 1;
	this.type = "ItemIngr";

}

function Recipe(name){
	this.ingridients = [];
	this.name = name;
	this.numOfOutput = 1;
	
	this.addIngridient = function(ingr, quantity){
		ingr.quantity = quantity;
		this.ingridients.push(ingr);
	};
	
	
}