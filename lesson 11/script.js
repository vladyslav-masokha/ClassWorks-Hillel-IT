// function main() {

// 	let obj = {};

// 	function foo() {
// 		return {
// 			age: 22,
// 			name: 'Alex',
// 		};
// 	}

// 	function buz(arg) {
// 		console.log(arg);
// 	};

// 	Object.defineProperty(obj, 'name', {
// 		writable: false,
// 		value: 'Test',
// 	});

// 	const local = foo();
// 	buz(local);

// };

// main();

// const marks = generateMarks(10);


// -----------------------------
// const names = ['Alex','John','Sandra'];
// const students = names.map(e => {
// 	return {
// 		name: e,
// 	};
// });

// console.log(names);
// console.log(students);
// -----------------------------


// -----------------------------
// Function expression
// const doSmt = function(arg) {
// 	const newValue = `arg: ${arg}`;
// 	return newValue;
// }
// console.log(doSmt('Test'));
// -----------------------------


// -----------------------------
// Arrow function
// const arrowDoSmt = (arg) => {
// 	return `arrow arg: ${arg}`;
// };

// const arrowDoSmt = (arg) => `arrow arg: ${arg}`;

// const arrowDoSmt = arg => `arrow arg: ${arg}`;

// console.log(doSmt('Test'));
// console.log(arrowDoSmt('Test'));
// -----------------------------


// const marks = [12,11,9,9,7,12,10,4];

// const sum = marks.reduce((result,element) => {
// 	return result + element;
// }, 0);
// console.log(sum);

// const goodMarks = marks.reduce((result,mark) => {
// 	if(mark > 9) {
// 		result.push(mark);
// 	}
// 	return result;
// }, []);
// console.log(goodMarks);



// function createStudent(name,surname) {
// 	return {
// 		name: name,
// 		surname: surname,
// 		marks: [12,11,9,9,7,12,10,4],
// 	};
// };

// const student = createStudent('Ahmed','Jaffa');
// console.log(student);

// student.name = 'alex'
// console.log(student);

// const name = prompt('Enter your name!');




// const marks = [12,11,9,9,7,12,10,4];
// const MARKS_SYSTEM = {
// 	TWELVE: 12,
// 	HUNDRED: 100,
// };
// const descriptedMarks = marks.reduce((result,mark) => {
// 	result.push({
// 		system: MARKS_SYSTEM.TWELVE,
// 		value: mark,
// 	});
// 	return result;
// }, []);
// console.log(descriptedMarks);


// function reduce(array,cb,initialValue) {
// 	let result = initialValue;
// 	for (let index = 0; index < array.length; index++) {
// 		result = cb(result, array[index],index, array);
// 	};
// 	return result;
// };






// Call stack
// function foo() {
// 	return 12;
// }

// function bar(num) {
// 	return num + foo();
// }

// function buz(first,second) {
// 	return bar(first * second) + bar(first / second);
// }

// const result = buz(2,5);
// console.log(result);


// function recurseFoo(num) {
// 	if(num <= 0) return num;
// 	return num + recurseFoo(--num);
// }

// console.log(recurseFoo(12));