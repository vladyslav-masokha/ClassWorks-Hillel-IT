// // [...element...]
// const arr = [12, 22, 56, 'test'];

// // via new Array(all elements)
// const arrayObj = new Array(12, 22, 56, 'test');

// // via new Array(length)
// const anotherArrayObj = new Array(5);

// // Array methods

// // toString() - return string
// console.log('toString(): ', arr.toString());
// console.log('without toString(): ', arr + '');

// // join() - return string
// console.log(`join(|): `, arr.join('|'));
// console.log(`join(''): `, arr.join(''));
// console.log(`join(): `, arr.join());

// // indexOf() - return index of element
// console.log(`indexOf(22): `, arr.indexOf(22)); // 1
// console.log(`indexOf(42): `, arr.indexOf(42)); // -1

// // includes() - return boolean result
// console.log(`includes(22)): `, arr.includes(22)); // true
// console.log(`includes(42): `, arr.includes(42)); // false

// // push() - mutates source array and returns new length of one
// arr[arr.length] = 'new element';
// console.log(`arr after arr[arr.length]`, arr);
// arr.push('new element via push');
// console.log(`arr after arr.push`, arr);
// console.log(`arr.push(new element):`, arr.push(45));
// console.log(`arr.push(new element):`, arr.push(45, 234, 56, 'asd'));

// // pop() - mutates source array, deletes the last element and return one
// console.log(`pop():`, arr.pop());
// console.log(`arr after pop():`, arr);

// // unshift() - mutates source array and puts a new element to the begging
// arr.unshift('begin');
// console.log(`arr after unshift(): `, arr);
// console.log(`unshift('head'):`, arr.unshift('head'));

// // shift() - mutates source array, deletes the first element and returns it
// console.log(`arr.shift():`, arr.shift());
// console.log(`after arr.shift():`, arr);

// // concat() - concatenates a few array and return new one
// console.log(arr.concat(arrayObj));
// console.log(arr);

// // splice(starts, deleteCount, items) - mutates source array, deletes n elements from index and inserts new elements
// console.log(`arr.splice():`, arr.splice(3, 0, null, true));
// console.log(`aarr after splice`, arr);
// console.log(`arr.splice():`, arr.splice(1, 2));
// console.log(`aarr after splice`, arr);

// // slice()- return subarray by params
// console.log(`arr.slice(): `, arr.slice(4,8));
// console.log(`arr.slice(): `, arr.slice(4));

// HOF
// cb - callback
// function foo(cb) {
// 	cb('hi from foo!');
// }
// foo(console.log);
// foo(alert);

// HOF Array methods
// const arr = [123, 5543, null];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// forEach - applies callback for each array's element
// function logElementMeta(element, index, array) {
// 	console.log(element, index, array);
// };
// arr.forEach(logElementMeta);

// function forEach(array, cb) {
// 	for (let index = 0; index < array.length; index++) {
// 		cb(Array[index], index, array);
// 	}
// }

// map() - creates new array by applying cb for each element
const marks = '12,8,234,64,21'.split(',');
// console.log(marks);
// const result = [];
// for (let index = 0; index < marks.length; index++) {
// 	result.push(+marks[index]);
// }
// console.log(result);

// const result = marks.map(function(element, index, array) {
// 	return +element;
// });

const result = marks.map(element=> +element);

console.log(`result of map():`, result);
console.log(`result of map():`, marks);

// filter() - filtrate array by condition and returns new array
const filtered = result.filter(function(element) {
	return element >= 10;
});
console.log(filtered);


// find() - finds and returns first element by condition/predicate
const firstGoodMark = result.find(element => element >= 10);
console.log(`result of find():`, firstGoodMark);

// findIndex() - finds and returns first element's index by condition/predicate
const firstIndexGoodMark = result.findIndex(element => element >= 10);
