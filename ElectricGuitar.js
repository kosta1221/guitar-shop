// const ClassicGuitar = require("./ClassicGuitar.js");

// Constructor function for ClassicGuitar objects
function ElectricGuitar(manufactureYear, brand, price, longNeck) {
	ClassicGuitar.call(this, manufactureYear, brand, price);

	this.longNeck = longNeck;
}

ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
ElectricGuitar.prototype.constructor = ElectricGuitar;

ElectricGuitar.prototype.play = function () {
	this.price *= 0.9;
	return "🎸🎸🎸";
};
