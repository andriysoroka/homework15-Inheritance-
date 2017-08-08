var Pocemon = function (obj) {
	this.height = obj.height;
	this.weight = obj.weight;
	this.type = "fire";
	this.fly = false;
	this.walk = true;
}
Pocemon.prototype.getType = function () {
	console.log(this.type);
}
Pocemon.prototype.getSpecie = function () {
	console.log(this.specie)
}
Pocemon.prototype.getHeight = function () {
	console.log(this.height);
}
Pocemon.prototype.canFly = function () {
	console.log(this.fly);
}
Pocemon.prototype.canWalk = function () {
	console.log(this.walk);
}

function Charmander(obj) {
	Pocemon.call(this, obj);
	this.specie = "Lizard Pokémon";
	this.up = new Charmeleon;
}

function Charmeleon(obj) {
	Pocemon.call(this, obj);
}

function Charizard(obj) {
	Pocemon.call(this, obj);
	this.fly = true;
	this.type = "fire fly";
	this.specie = "Flame Pokémon";
}

//var Pocemons = new Pocemon;
Charmander.prototype = Object.create(Pocemon.prototype);
Charmander.prototype.constructor = Charmander;

Charmeleon.prototype = Object.create(Pocemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

Charizard.prototype = Object.create(Pocemon.prototype);
Charizard.prototype.constructor = Charizard;

var embury = new Charmander({
	height: 1,
	weight: 15
});
var mercury = new Charmeleon({
	height: 2,
	weight: 45
});
var morderbrand = new Charizard({
	height: 10,
	weight: 200
});
// task 2


var MyPocemon = function (obj) {
	this.name = obj.name;
	this.height = obj.height;
	this.weight = obj.weight;
	this.type = "fire";
	this.fly = false;
	this.walk = true;
	this.lvl = obj.lvl;
	this.type = obj.type;
	switch (lvl) {
		case lvl < 7:
			MyPocemon = new Charmander(obj);
			break;
		case lvl => 10:
			MyPocemon = new Charizard(obj);
			break;
		default:
			MyPocemon = new Charmeleon(obj);
			break;
	}

}
