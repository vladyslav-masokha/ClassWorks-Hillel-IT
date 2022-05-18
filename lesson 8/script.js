// // IIFE -> immediately invoked functional expression
// (function() {
// 	// some code
// })();

// (() => {
// 	// some code
// })();

// Hosting (всплытие)

// foo()

// function foo() {}
// console.log(b);
// const a = 'new';

// var b = 42;
// let bar = () => {
// 	console.log('hello');
// }



// Global / Local

// Global
// const qwe = 42;
// function foo() {
// 	console.log(qwe);
// }
// foo();


// Local
// function bar() {
// 	const someq = 24;
// }






// blockScopeDemo();

// 

function foo() {
	var a = b = c = 42;
	console.log(a);
	console.log(b);
	console.log(c);
}

foo();

console.log(a);
console.log(b);
console.log(c);