// // Number
// const stringValuebyUser = prompt('Insert num value:');
// const anotherNumExample = parseInt(stringValuebyUser);
// alert(`value: ${anotherNumExample}
//  type: ${typeof anotherNumExample}
//  source type: ${typeof stringValuebyUser}`);

// Boolean
// const numToBool = Boolean(0); // false
// const secNumToBool = Boolean(123); // true
// const negetiveNumToBool = Boolean(-100); // true

// const stringToBool = Boolean('Lorem ipsum'); // true
// const secStringToBool = Boolean(''); // false

// const nullToBool = Boolean(null); // false
// const undefinedToBool = Boolean(undefined); // false


// !
// true -> !true -> false
// const numToBool2 = !0; // !0 -> !false ->  true
// // const numToBool2 = !!0; // false

// const undefinedToBool2 = !!undefined;

// Null
// Null() - doesn't exist

// Undefined
// Undefined() - doesn't exist

// ------------------ Start ------------------
// let someValue = 'value'; // ASI - automatic semicolon insertion
// console.log(someValue);
// someValue = someValue + 1;
// console.log(someValue);

// Demo with semicolon
// alert('Hello');
// [1,2,3].map(function(e) {
// 	console.log(e);
// 	return +e;
// });

// Demo with semicolons
// alert('Hello')
// [1,2,3].map(function(e) {
// 	console.log(e)
// 	return +e
// })

// 5 примитивных типой данных(1 категория)


// Object (reference type)

// const studentName = 'John Doe';
// const studentAge = 21;
// const studentFaculty = 'Math';
// const studebtavgMark = 85;

// // const student2Name = 'John Doe';
// // const student2Age = 21;
// // const student2Faculty = 'Math';
// // const avg2Mark = 85;

// const student2 = {
// 	name: 'James Kirk',
// 	age: 45,
// 	faculty: 'Math',
// 	avgMark: 95
// };

// console.log(student);

// // get value by dot (.)
// console.log(student.name);
// console.log(student2.name);

// // get value by brakes []
// console.log(student['age']);
// console.log(student2['age']);

// // set value by dot (.)
// student.age = 22;
// console.log(student.age);

// // set value by brakes []
// student['age'] = 96;
// console.log(student['age']);

// // get not declare property
// console.log(student.citizen); // undefined

// // set not declare property
// student.citizen = 'ua';
// console.log(student.citizen);
// console.log(student);

// const demoObj = {};

// // Crete field -> key: value
// demoObj.field1 = 12;
// demoObj.field2 = 'test';
// console.log(demoObj);

// const someVar = 42;
// someVar = 24;

// const someObj = {
// 	name: 'Test'
// };

// someObj.name = 12;
// console.log(someObj['name']);

// delete field
// const student = {
// 	name: 'John Doe', // property - key: value 
// 	age: 21,
// 	faculty: 'Math',
// 	avgMark: 85
// };

// // console.log(student);
// // delete student.age;
// // console.log(student);

// // name -> fullname

// student.fullname = student.name;
// delete student.name;
// console.log(student);


// Array
const marks = [95,90,97,100,85,60];
/* 
* [
* 95
* 90
* 97
* ...
* ]
*/


// get by index
// console.log(marks[1]);
// console.log(marks['1']); // '1' -> 1
// console.log(marks['dsfdsf']); // 'dsfdsf' -> NaN
// console.log(marks[marks.length - 1]);

// marks[marks.length] = 89;
// console.log(marks);
// marks[marks.length] = 89;
// console.log(marks);

// // delete by index
// delete marks[1];
// console.log(marks);

// // 
// marks[14] = 67;
// console.log(marks);

// different types
const demoArray = [123,true, 'Lorem ipsum', null, {name: 'Alex'}];
console.log(demoArray);

const demoObj = {
	name: 'John',
	marks: [95,90,97,100,85,60],
	gfd: {
		werw: 345,
		sdf: 'fsdsf4',
		sdfwer: 'WritableStreamDefaultController'
	},
	some: null
};

