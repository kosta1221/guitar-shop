// Constructor function for ClassicGuitar objects
function ElectricGuitar(manufactureYear, brand, price, longNeck) {
	ClassicGuitar.call(this, manufactureYear, brand, price);

	this.longNeck = longNeck;
}

ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
ElectricGuitar.prototype.constructor = ElectricGuitar;

ElectricGuitar.prototype.play = function () {
	if (!this.used) {
		this.price *= 0.9;
	}
	this.used = true;
	return "🎸🎸🎸";
};
