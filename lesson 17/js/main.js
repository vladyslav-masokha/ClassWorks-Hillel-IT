'use strict';
// ! stopPropagation, stopImmediatePropagation

const bgBodyEl = (document.getElementsByTagName('body')[0].style.background =
	'#000');

// Array.isArray()
// const arr = new Array(12, 13, 14);
// console.log(Array.isArray(arr)); // true

// const a = 5;
// console.log(Array.isArray(a)); // false

// const obj = {};
// console.log(Array.isArray(obj));

// Array.from()
// HTMLCollection, NodeList
// Doesn't work
// const elms = document.getElementsByTagName('div');
// elms.forEach(e => {
// 	e.classList.add('container');
// });

// Works
// const elmsArray = Array.from(elms);
// elmsArray.forEach(e => {
// 	e.classList.add('container');
// });

// Array.of()
// const arr2 = Array.of(12, 34, 55, 32, 234);
// console.log(arr2);

// target, currentTarget
// const mainEl = document.getElementById('main');
// mainEl.addEventListener('click', e => {
// console.log(e);
// e.target.classList.add('bold');
// e.currentTarget.classList.add('bold');
// });

// const hrefDemoEl = document.getElementById('demo-href');
// hrefDemoEl.addEventListener('click', e => {
// 	console.log(`href clicked`);
// 	// alert('clicked');
// 	e.preventDefault();
// 	window.location.href = 'https://ithillel.ua';
// });

// Closures
// lexical environment
// function main() {
// 	let a = 12;
// 	let b = 23;

// 	let obj = { name: 'Alex', city: 'Texas' };

// 	console.log(a, b, obj);
// }
// main();
// main();

// ? Demo 1.
// closured function
// function main() {
// 	let a = 42;

// 	const bar = () => {
// 		let b = 84;
// 		console.log(b / a);
// 	};

// 	return bar;
// }

// // LE main()
// const foo = main();
// console.log(typeof foo);

// ? Demo 2.
// const add = function (a) {
// 	return function (b) {
// 		return a + b;
// 	};
// };

// const addToS = add(5);
// console.log(addToS(14));
// console.log(addToS(2));
// console.log(addToS(34));
// console.log(addToS(67));
// console.log(addToS(789));

// ? Demo 3.
// ...........................

// ? Demo 4. Curry
// function foo(a, b, c) {
// 	console.log(a, b, c);
// }

// function curry(cb) {
// 	// return cb
// 	return a => b => c => cb(a, b, c);
// }

// const curriedFoo = curry(foo);
// foo('Normal:', 24, 'Bob');
// curriedFoo('Curried:')(42)('Alex');

// const arr = [12, 22, 44];
// console
// 	.log(arr.join('|').replaceAll('2', '$'))
// 	.split('|')
// 	.map(e => (Number.isNaN(+e) ? e : e));
