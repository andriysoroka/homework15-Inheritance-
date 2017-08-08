var Fighter = function (name, attack, hitpoints) {
	this.name = name;
	this.attack = attack;
	this.hitpoints = hitpoints;
	this.totalHitpoints = this.hitpoints;
	this.alive = true;
}
Fighter.prototype.getHitpoints = function () {
	return this.hitpoints;
}
Fighter.prototype.setHitpoints = function (hitpoints) {
	this.hitpoints = hitpoints;
}
Fighter.prototype.getTotalHitpoints = function () {
	return this.totalHitpoints;
}
Fighter.prototype.setTotalHitpoints = function (totalHitpoints) {
	this.totalHitpoints = totalHitpoints;
}
Fighter.prototype.getAttack = function () {
	return this.attack;
}
Fighter.prototype.setAttack = function (attack) {
	this.attack = attack;
}
Fighter.prototype.fight = function (obj) {
	if (this instanceof Champion) {
		obj.hitpoints -= this.attack;
	} else {
		if (obj.def) {
			obj.def = false;
			return console.log("defenced")
		}
		if (this.rage) {
			if (this.number > 0) {
				this.attack = this.doubleDmg;
				this.number -= 1;
				obj.hitpoints -= this.attack;
			} else {
				this.rage = false;
				this.attack = this.currentAttack;
				obj.hitpoints -= this.attack;
			}
		} else {
			obj.hitpoints -= this.attack;
		}
	}
}
Fighter.prototype.isAlive = function () {
	this.alive = this.hitpoints > 0;
	return this.alive;
}


var Champion = function (name, attack, hitpoints) {
	Fighter.call(this, name, attack, hitpoints);
	this.def = false;
}


var Monster = function (name, attack, hitpoints) {
	Fighter.call(this, name, attack, hitpoints);
	this.rage = false;
	this.doubleDmg = this.attack * 2;
	this.number = 2;
	this.currentAttack = this.attack;
}

Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Fighter;
Champion.prototype.rest = function () {
	this.hitpoints += 5;
	if (this.hitpoints > this.totalHitpoints) {
		this.hitpoints = this.totalHitpoints;
		return console.log("Rested enough")
	}
}
Champion.prototype.defence = function () {
	this.def = true;
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Fighter;
Monster.prototype.enrage = function () {
	this.rage = true;
	
}
