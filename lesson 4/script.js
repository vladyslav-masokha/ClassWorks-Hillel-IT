// // Bad
// // alert ('Hello');
// // console.log ('hello from console');

// // Good
// // alert('Hello');
// // console.log('hello from console');


// // String

// // \n - new line
// // \t - tab
// // \ - no action needed
// const demoString = 'lorem \nipsum \tfds';

// const demoTemplateString = `
// fwe
// wf
// wefwef
// wef
// `;

// console.log(demoString);
// console.log(demoTemplateString);

// Array
// const demoArray = ['test', true, 12, null, { name: 'alex' }];
// console.log(typeof demoArray);

// console.log(demoArray[1]); // true
// console.log(demoArray.length); // 5

// String
// const demoString = 'lorem ipsum';
// console.log(demoString[7]);
// console.log(demoString.length);

// const demoObject = {
// 	name: 'Alex',
// 	age: 17,
// 	marks: [12,2,7],
// 	adress: {
// 		city: 'Odesa',
// 		country: {
// 			full: 'Ukraine',
// 			short: 'UA'
// 		}
// 	},
// };

// const str = `{
// 	value: 54
// }`;
// console.log(str);

// const a = 42;
// const obj = {
// 	value: 54
// };

// const result = a + obj;
// console.log(result); // 42[object Object]

// Array
// const demoArray = [12, 42, 55, 'test'];
// const tempValue = demoArray + '';
// console.log(demoArray);
// console.log(typeof demoArray);
// console.log(typeof tempValue);

// const secondTempValue = +demoArray;
// console.log(secondTempValue); // NaN
// console.log(typeof secondTempValue); // Numer

// // const anotherDEmoArray = [472];
// // const thirdDemoValue = +anotherDEmoArray;
// // console.log(thirdDemoValue); // 472
// // console.log(typeof thirdDemoValue); // Number

// const anotherDEmoArray = [472, 65];
// const thirdDemoValue = +anotherDEmoArray;
// console.log(thirdDemoValue); // NaN
// console.log(typeof thirdDemoValue); // Number

// Boolean
// const demoArray = [];
// console.log(!!demoArray); // !!'' -> !false -> true

// Console
// const demoNumber = 23;
// const demoString = 'demo';
// const demoBool = false;
// const demoNull = null;
// const demoUndefined = undefined;

// // console.log(typeof console);
// // console.log(typeof console.log);

// console.info('some info message');
// console.log('some info message');

// // Yellow text warn
// console.warn('some info message');
// Red text error
// console.error('some info message');

// const users = [
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'},
// 	{login: 'admin', pass: 12345, name: 'Vlad'}
// ];

// Console table
// console.table(users);

// Logical operators
// >,<,>=,<=,==,===,!=,!==

// const a = 5;
// const b = 6;
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= b); // true
// console.log(a <= b); // false

// console.log(a == b); // false
// console.log(a != b); // true

// console.log(a === b); // false
// console.log(a !== b); // true

// const c = 42;
// const d = '42';

// console.log(c == d); // number == string -> number == number -> 42 == 42 -> true
// console.log(c === d); // number === string -> false | number === number -> 42 === 42 -> true

// ==
// number == other type (string, boolean, null, undefined, object) -> number == number -> value == value
// console.log(1 == true); // 1 == 1 -> true
// console.log(0 == null); // 0 == 0 -> false
// console.log(0 == undefined); // false

// console.log(NaN == NaN); // false
// console.log(NaN === NaN);

// let someVar = NaN;
// console.log(someVar == someVar); // false
// console.log(someVar != someVar); // true

// console.log(undefined == undefined); // true
// console.log(undefined != undefined); // true
// console.log(null == null); // true
// console.log(null != null); // true
const demoValue = prompt('What\'s your name?');
// if (demoValue == 'Alex') {
// 	alert('Nice to meet you, Alex');
// } else {
// 	alert('I don\'t know you!');
// }

// if (demoValue == 'Alex') {
// 	alert('Nice to meet you, Alex');
// 	console.log('Nice to meet you, Alex');
// } else {
// 	alert('I don\'t know you!');
// }

// if (demoValue == 'Alex') {
// 	console.log('Nice to meet you, Alex');
// } else if (demoValue == 'Bob'){
// 	console.log('Nice to meet you, Bob');
// } else {
// 	console.log('I don\'t know you!');	
// }


// --------------
// Lecture 5
// && || 
// switch
// loops - while, do/while,for
// break, continue
// --------------