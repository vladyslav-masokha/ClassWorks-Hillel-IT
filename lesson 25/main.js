'use strict';

// class Base {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// class Child extends Base {
// 	constructor(name) {
// 		super(name);
// 		console.log(this.name);
// 	}

// 	someMethod() {
// 		console.log('some');
// 	}
// }

class Div {
	constructor(tagName, atribute, valueAtr, text) {
		this.tagName = tagName;
		this.atribute = atribute;
		this.valueAtr = valueAtr;
		this.text = text;
	}

	render() {
		const blockEl = document.getElementById('block');
		const newElem = document.createElement(this.tagName);
		blockEl.append(newElem);

		newElem.setAttribute(this.atribute, this.valueAtr);

		newElem.innerText = this.text;
	}
}

const myDiv = new Div('button', 'value', 'block', 'Hello');
myDiv.render();
