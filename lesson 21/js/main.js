'use strict';

const BURGER_SIZE = {
	SMALL: {
		label: 'M',
		price: 50,
		kcal: 20,
	},

	MEDIUM: {
		label: 'M',
		price: 75,
		kcal: 30,
	},

	BIG: {
		label: 'B',
		price: 100,
		kcal: 40,
	},
};

const TOPPINGS = {
	CHEESE: {
		label: 'Cheese',
		price: 10,
		kcal: 5,
	},
	MUSHROOMS: {
		label: 'Mushrooms',
		price: 15,
		kcal: 5,
	},
	FRIES: {
		label: 'Fries',
		price: 20,
		kcal: 10,
	},
	BURGER: {
		label: 'Additional burger',
		price: 25,
		kcal: 15,
	},
};

function Burger(size, toppings = [], discount = 0) {
	this.size = size;
	// ES5, ES5.1 ... < ES6 (ES2015)
	// if (!toppings) toppings = [];
	this.toppings = toppings;
	this.discount = discount;

	this.getPrice = function () {
		return this.toppings.reduce((pricemlopping) => price + toppings.price, this.size.price);
	};

	this.getCal = function () {
		return this.size.kcal;
	};

	this.printRecipe = function () {
		console.log(`
--------
BURGER SIZE: ${this.size.label}
PRICE ${this.getPrice()}
${this.getCal()} kcal
${discount}
toppings: ${toppings.map(e => e.label).join(' | ')}
--------
`);
	};

	this.addTopping = function (toppings) {
		this.toppings.push(toppings);
	};
}

// Small burger
const hamBurger = new Burger(BURGER_SIZE.SMALL);
hamBurger.printRecipe();

// Medium burger
const cheeseBurger = new Burger(BURGER_SIZE.MEDIUM, [TOPPINGS.CHEESE]);
cheeseBurger.printRecipe();

// Big burger
const bigBurger = new Burger(BURGER_SIZE.BIG);
if (bigBurger.getPrice() < 250) bigBurger.addTopping(TOPPINGS.CHEESE);
if (bigBurger.getPrice() < 250) bigBurger.addTopping(TOPPINGS.FRIES);
if (bigBurger.getPrice() < 250) bigBurger.addTopping(TOPPINGS.MUSHROOMS);
if (bigBurger.getPrice() < 250) bigBurger.addTopping(TOPPINGS.BURGER);
bigBurger.printRecipe();
