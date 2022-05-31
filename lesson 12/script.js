'use strict';

// const studentsMock = (() => {
// 	const generateMarksArray = (qtt, min, max) =>
// 		new Array(qtt).fill(min).map(() => faker.datatype.number({ min, max }));

// 	const getStudent = () => ({
// 		name: faker.name.findName(),
// 		specialty: faker.name.jobTitle(),
// 		marks: generateMarksArray(10, 20, 100),
// 	});

// 	const getStudentList = qtt => new Array(qtt).fill(null).map(getStudent);

// 	return {
// 		getStudent,
// 		getStudentList,
// 	};
// })();

// ? Q&A session

// ? Q1: for in / for of / [].forEach

const demoArray = [12, 22, 33, 44, 55, 66];

// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// 	console.log(element);
// }

// for (const index in demoArray) {
// 	console.log(demoArray[index]);
// }

// const student = studentsMock.getStudent();
// for (const index in student) {
// 	console.log(student[index]);
// }

// // ! For..of
// for (const element of demoArray) {
// 	console.log(`for..of:`, element);
// }

 