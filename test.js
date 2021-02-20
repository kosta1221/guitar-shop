// A function for getting object's prototypes
function getProtos({ __proto__ }) {
	if (!(__proto__ === null)) {
		return [__proto__.constructor.name, ...getProtos(__proto__)];
	} else {
		return [];
	}
}

const cg1 = new ClassicGuitar(1999, "Yamaha", 2000);
const eg1 = new ElectricGuitar(1988, "Ssdfa", 800, true);
const bg1 = new BassGuitar(1977, "Ibanez", 5000);

console.log("A ClassicGuitar object:");
console.log(cg1);
console.log("An ElecticGuitar object:");
console.log(eg1);
console.log("A Bass Guitar object:");
console.log(bg1);

console.log("ClassicGuitar prototypes:");
console.log(getProtos(cg1));
console.log("ElectricGuitar prototypes:");
console.log(getProtos(eg1));
console.log("BassGuitar prototypes:");
console.log(getProtos(bg1));

console.log("Classic original price: " + cg1.price);
console.log(cg1.play());
console.log("Classic price: " + cg1.price);
console.log(cg1.play());
console.log("Classic price: " + cg1.price);

console.log("Electric original price: " + eg1.price);
console.log(eg1.play());
console.log("Electric price: " + eg1.price);
console.log(eg1.play());
console.log("Electric price: " + eg1.price);

console.log("Bass original price: " + bg1.price);
console.log(bg1.play());
console.log("Bass price: " + bg1.price);
console.log(bg1.play());
console.log("Bass price: " + bg1.price);

console.log("Bass solo: " + bg1.playSolo());
console.log("Bass solo: " + bg1.playSolo());
console.log("Bass solo: " + bg1.playSolo());
console.log("Bass solo: " + bg1.playSolo());
