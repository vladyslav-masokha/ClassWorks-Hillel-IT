'use strict';
// console.log(document);
// console.dir(document);

// Node Types (4/12)

// 1. #document
console.dir(document);

// 2. HTMLElement
// console.dir(document.body.children[0]);
console.dir(document.body.firstElementChild);

// 3. TextNode
// TBD
console.dir(document.body.childNodes[0]);

// 4. CommentNode
// TBD

// ! add,remove,replace,contains,toggle

// heading is global variable created in HTML with element id
console.dir(heading);

document.body.children[2].onclick = () => {
	document.body.firstElementChild.classList.toggle('hidden');
	document.body.children.classList.toggle('hidden');
};

const btnElement = document.getElementById('toggle-btn');
const mainEl = document.getElementById('main');
const hiddenEl = document.getElementById('hidden');
