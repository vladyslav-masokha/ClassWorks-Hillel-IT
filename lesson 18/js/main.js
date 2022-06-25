'use strict';

document.body.style.background = '#c4c4c4';

// !Есть 2 типа методов: статические и динамические
// Object keys - returns a list with objects keys
// const student = {
// 	name: 'Bob',
// 	age: 19,
// 	marks: [12, 11, 10, 12, 11, 9],
// 	faculty: 'IMEM',
// };
// const keys = Object.keys(student);
// console.log(keys);

// keys.forEach(key => {
// 	console.log(`key: ${key} value: ${student[key]}`);
// });

// const student = {
// 	name: 'Bob',
// 	age: 19,
// 	marks: [12, 11, 10, 12, 11, 9],
// 	faculty: 'IMEM',
// };

// const values = Object.values(student);
// console.log(values);

// ------- HTML Templates -------
// const toDoItemTemplate =
// 	document.getElementById('todo-item-template').innerHTML;
// const todoValueEl = document.getElementById('todo-value');
// const demoListEl = document.getElementById('demo-list');
// const addMoreEl = document.getElementById('add-more');

// const onAddToDoItem = () => {
// 	const liEl = document.createElement('li');
// 	liEl.innerHTML = toDoItemTemplate
// 		.replace('{{orderNumber}}', demoListEl.childElementCount + 1)
// 		.replace('{{todoItemText}}', todoValueEl.value);

// 	demoListEl.append(liEl);
// 	todoValueEl.value = '';

// 	// [...liEl.getElementsByTagName('span')].forEach(
// 	// 	e => !e.classList.contains('bold') && e.classList.add('bold')
// 	// );
// };

// addMoreEl.addEventListener('click', onAddToDoItem);

// SOLID

const studentListEl = document.getElementById('students-list');
const studentItemTemplate = document.getElementById(
	'student-item-template'
).innerHTML;

const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

const students = studentsMock.getStudentList(10).map(e => {
	e.avatarUrl = faker.image.cats(256, 256, true);
	return e;
});

studentListEl.insertAdjacentHTML(
	'afterbegin',
	students.map(e => render(studentItemTemplate, e)).join('')
);
