'use strict';
// Element queries

// 1. element by id
const mainEl = document.getElementById('main');
console.dir(mainEl);

// 2. elements!! by className | return htmlCollection
const hiddenEls = document.getElementsByClassName('hidden');
console.dir(hiddenEls);

// 3. elements by tagName | returns htmlCollection
const ulEls = document.getElementsByTagName('ul');
console.dir(ulEls);

// 4. elements by name | return nodeList
const studentsEls = document.getElementsByName('students');
const classStudentsEls = document.getElementsByClassName('list');
console.dir(studentsEls);
console.dir(classStudentsEls);

// 5. Nodes by query
const studentsNode = document.querySelector('.hidden');
console.dir(studentsNode);

// 6. Nodes by query
const studentsNodes = document.querySelectorAll('.hidden');
console.dir(studentsNodes);

// // Pseudo-Array
// const uls = Array.from(ulEls);
// uls.forEach(e => e.classList.add('hidden'));

// 1. Remove from DOM
// mainEl.remove();

// 2. Attach to DOM
// 2.1 prepend -> insert element/node to begging of childNodes/children
// setTimeout(() => {
// 	document.body.prepend(mainEl);
// }, 1000);
// // 2.2 append -> insert\move element/node to end of childNodes/children
// setTimeout(() => {
// 	document.body.append(mainEl);
// }, 3000);

// 3. Clone element/node
// const anotherMainEl = document.cloneNode(true);
// setTimeout(() => {
// 	document.body.append(anotherMainEl);
// }, 5000);

// // 4. insert on concrete position
// const mainChildEl = mainEl.children[0].cloneNode(true);
// mainEl.insertBefore(mainChildEl);

// 5. create element
// const newEl = document.createElement('span');
// newEl.innerText = 'Some new span element';
// newEl.classList.add('color-red');
// newEl.style.color = 'red';
// console.log(newEl);

// mainEl.append(newEl);

// 6. innerHTML
// mainEl.innerHTML = `${mainEl.innerHTML}
// <br>
// <span>Span via innerHTML</span>`;

// 6.1 create element (doesnt work)
// const newEmptyEl = document.createElement('');
// newEmptyEl.outerHTML = `
// <br>
// <span>Span via innerHTML</span>`;
// mainEl.append()

// 6.2 insertAdjacentHTML
// mainEl.insertAdjacentHTML('afterbegin', '<span>insertAdjacentHTML</span>');
// mainEl.insertAdjacentHTML('beforebegin', '<span>insertAdjacentHTML</span>');

// 6.3 insertAdjacentElement
mainEl.insertAdjacentElement('afterbegin', document.createElement('a'));

// 6.4 insertAdjacentText
mainEl.insertAdjacentElement('afterbegin', 'Some text');
