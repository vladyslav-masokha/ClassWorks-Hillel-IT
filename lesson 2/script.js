// let studentGroupStart = 'Your group starts in: ' + prompt('Put month');
// alert(studentGroupStart);
// alert('Your group starts in: ' + prompt('Put month'));

// 6. Data types

// ES5

// Primitives
// String
// let stringValue = 'text 123'; // 'I'm' <-- demo with string escaping
// let anotherStringValue = "text value"; // "I'm"

// ES6
// let thirdstringValue = `text value`; //template string

// let userName = 'Alex';
// let sameStringValue = 'test';

// alert('Hello, ' + userName + '! Nice to meet you! ' + sameStringValue + '!!!');
// alert(`Hello, ${userName}! Nice to meet you! ${sameStringValue}!!!`);

// Number
// let numberValue = 42;
// let anotherHumber = 12.5;
// let thirdNumberValue = -42;

// Boolean
// let boolValue = true;
// let anotherBoolValue = false;

// Null
// let nullValue = null;

// alert('stringValue: ' + stringValue);
// stringValue = 68;
// alert('stringValue: ' + stringValue);

// Undefined
// let undefinedValue;
// alert(undefinedValue);
// let anotherUndefinedValue = undefined;

// DON'T USER var
// var someVariable = 42;
// var someVariable = 'test';
// alert(someVariable);

// alert(typeof numberValue); 
// typeof - узнаёт тип переменых
// console.log('numberValue has type: ' + typeof numberValue);
// console.log('stringValue has type: ' + typeof stringValue);
// console.log('boolValue has type: ' + typeof boolValue);
// console.log('undefinedValue has type: ' + typeof undefinedValue);
// console.log('nullValue has type: ' + typeof nullValue);

// Operators

// Unary, Binary, Ternary

// Binarny: operand1 operator operand2

// Number -+,/,*,etc.
// const firstNumber = 12;
// const secondNumber = 42;

// const sum = firstNumber + secondNumber;
// const dif = firstNumber - secondNumber;
// console.log('Sum: ' + sum);
// console.log('Dif: ' + dif);

// String: +
// const firstString = 'Hello';
// const secondString = ' world!';

// const concatString = firstString + secondString;
// console.log(concatString);

// Unarny: oprand oprator, oprator oprand
// E.g.: ,=

// 

// Явное
// Number

// <----string to number---->
// console.log(typeof '32');
// const stringToNumber = Number('32');

// console.log(stringToNumber);
// console.log(typeof stringToNumber);

// const anotherStringToNumber = Number('fdsf');
// console.log(anotherStringToNumber); // Not a Number (NaN)
// const nanValue = NaN;
// const infinity = Infinity;
// const negetiveZeroValue = -0;

// <----boolean to number---->
// const boolToNumber = Number(true); // true = 1, false = 0

// <----null to number---->
// const nullToNumber = Number(null); // null = 0

// <----null to number---->
// const undefinedToNumber = Number(undefined); // undefined = NaN

// Неявное
// -,*,/,** - всё кроме бинарного +

// const stringToNumber = '10' - '5';
// const anotherDtringToNumber = 42 - '13';

// console.log(stringToNumber);
// console.log(anotherDtringToNumber);

// const firstString = '560';
// const secondString = '289';

// // -,*,/,^^,etc.
// const thirdStringNumber = firstString + secondString; // Number(firstString) - Number(secondString) | -> 560 -289

// console.log(thirdStringNumber);
// console.log(typeof thirdStringNumber);

// const anotherStringOperation = +firstString + +secondString;

// console.log(thirdStringNumber);
// console.log(typeof thirdStringNumber);
// console.log(typeof firstString);
// console.log(typeof secondString);


// String
// Явное
// const numToString = String(42);
// console.log(typeof numToString);
// console.log(numToString);

// const anotherNumToString = String(NaN);
// console.log(typeof anotherNumToString);
// console.log(anotherNumToString);

// Boolean to string
// const anotherNumToString = String(NaN);
// console.log(typeof anotherNumToString);
// console.log(anotherNumToString);

// Null to String
// const anotherNumToString = String(NaN);
// console.log(typeof anotherNumToString);
// console.log(anotherNumToString);

// Неявное
// Оператор + (конкатонации)

const numToString = '48' + 23; // will be type strings
console.log(typeof numToString);
console.log(numToString);

const boolToString = true + ''; // -> 'true