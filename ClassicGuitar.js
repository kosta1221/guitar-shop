//Constructor function for ClassicGuitar objects
function ClassicGuitar(manufactureYear, brand, price) {
	this.manufactureYear = manufactureYear;
	this.brand = brand;
	this.price = price;
	this.numberOfStrings = 6;
	this.used = false;

	this.play = function () {
		this.price *= 0.9;
		return "🎶🎶🎶";
	};

	this.getManufactureYear = function () {
		return this.getManufactureYear;
	};

	this.getBrand = function () {
		return this.brand;
	};

	this.getPrice = function () {
		return this.price;
	};

	this.setPrice = function (newPrice) {
		this.price = newPrice;
	};
}

function detectSound(sound) {
	if (sound === "🎸") {
		return "ElectricGuitar";
	} else if (sound === "🔊") {
		return "BassGuitar";
	}
}

/* module.exports = {
	ClassicGuitar: ClassicGuitar,
	detectSound: detectSound,
}; */
