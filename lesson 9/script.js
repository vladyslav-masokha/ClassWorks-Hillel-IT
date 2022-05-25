// const DEFAULT_MARKS_AMOUNT = 5;
// // let students = [];

// function gemerateStudents(amount) {
// 	const students = [];

// 	for (let i = 0; i < amount; i++) {
// 		students[i] = {
// 			name: prompt('Enter student name'),
// 			marks: getRandomMarks()
// 		}
// 	}
// 	return students;
// }

// function getRandomMarks() {
// 	const marks = [];
// 	for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {

// 	}
// 	return marks;
// }

// function getBestStudent(students) {
// 	let bestStudent = students[0];
// 	for(let i = 0; i < students.length; i++) {
// 		if (bestStudent.avgMark < students[i].avgMark) {
// 			bestStudent = students[i];
// 		}
// 	}
// }

// function addAvgMarkForStudents(students) {
// 	for (let i = 0; i < students.length; i++) {
// 		students[i].avg = 5;
// 	}
// 	return students;
// }

// let students = gemerateStudents(+prompt('How many students?'));
// do {
// 	console.log(students);
// } while (confirm('Do you want countinue?'));



// let a = 22;
// let b = a;

// console.log('a =', a, ' b = ', b);
// b = 3;
// console.log('a =', a, ' b = ', b);

// let obj = {
// 	name: 'Alex',
// 	age: 22
// }

// let anotherObject = obj;

// console.log('obj = ', obj);
// console.log('anotherObject = ', anotherObject);

// anotherObject.name = 'Bob';

// console.log('obj = ', obj);
// console.log('anotherObject = ', anotherObject);

// anotherObject = {
// 	prop1: 'value'
// }

// console.log('obj = ', obj);
// console.log('anotherObject = ', anotherObject);






// function doSmt(o) {
// 	console.log(o);
// 	o.someProp = 'value';
// }

// const obj = {
// 	name: 'obj',
// 	isSystem: true
// }

// const obj2 = {
// 	content: 'test'
// }

// doSmt(obj);
// doSmt(obj2);

// console.log(obj);
// console.log(obj2);


// Methods
// const obj = {
// 	name: 'obj',
// 	getName: function ()  {
// 		return obj;
// 	}
// }

// function doSmt() {
// 	console.log(`I'm working!`);
// }

// const newObj = {
// 	doSomething: doSmt
// }

// newObj.doSomething();

// console.log(obj.getName());



// Boxing
// String(), Number(), Boolean()

let str = 'Hello Hillel';

console.log(str[1]);
console.log(str.length);

// cases
// toUpperCase() - returns new string

console.log('toUpperCase():', str.toUpperCase());
console.log('source: ', str);


// toLowerCase() - returns new string
console.log('toLowerCase():', str.toLowerCase());
console.log('source: ', str);


// checking
// indexOf - returns frist index of substring
console.log('indexOf():', str.indexOf('lel')); // 9
console.log('indexOf():', str.indexOf('12')); // -1
console.log('source: ', str);


if(str.indexOf('lel' > -1)) {
	console.log('lel is in str');
}


// lastIndexOf
console.log('lastIndexOf():', str.lastIndexOf('lel')); // 9
console.log('lastIndexOf():', str.lastIndexOf('12')); // -1
console.log('source: ', str);

// includes() - return boolean
console.log('includes():', str.includes('lel')); // 9
console.log('includes():', str.includes('12')); // -1
console.log('source: ', str);


if(str.includes('lel' > -1)) {
	console.log('lel is in str');
}

console.log(`split()`,str.split());
console.log(`split('')`,str.split(''));
console.log(`split(' '): `, str.split(' '));


