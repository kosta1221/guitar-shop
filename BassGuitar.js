// Constructor function for BassGuitar objects
function BassGuitar(manufactureYear, brand, price) {
	ClassicGuitar.call(this, manufactureYear, brand, price);

	this.numberOfStrings = 4;
}

BassGuitar.prototype = Object.create(ClassicGuitar.prototype);
BassGuitar.prototype.constructor = BassGuitar;

BassGuitar.prototype.play = function () {
	if (!this.used) {
		this.price *= 0.9;
	}
	this.used = true;
	return "🔊🔊🔊";
};

BassGuitar.prototype.playSolo = function () {
	const sounds = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
	let string = "";
	let random = Math.floor(Math.random() * 20);
	while (random === 0) {
		random = Math.floor(Math.random() * 20);
	}
	for (let i = 0; i < random; i++) {
		string += sounds[Math.floor(Math.random() * 6)];
	}
	return string;
};
