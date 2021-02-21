//Constructor function for ClassicGuitar objects
function ClassicGuitar(manufactureYear, brand, price) {
	this.manufactureYear = manufactureYear;
	this.brand = brand;
	this.price = price;
	this.numberOfStrings = 6;
	this.used = false;
}

ClassicGuitar.prototype.play = function () {
	if (!this.used) {
		this.price *= 0.9;
	}
	this.used = true;
	return "🎶🎶🎶";
};

ClassicGuitar.prototype.getManufactureYear = function () {
	return this.getManufactureYear;
};

ClassicGuitar.prototype.getBrand = function () {
	return this.brand;
};

ClassicGuitar.prototype.getPrice = function () {
	return this.price;
};

ClassicGuitar.prototype.setPrice = function (newPrice) {
	this.price = newPrice;
};

ClassicGuitar.detectSound = (sound) => {
	if (sound === "🎸") {
		return "ElectricGuitar";
	} else if (sound === "🔊") {
		return "BassGuitar";
	} else return "not Electric or Bass";
};
