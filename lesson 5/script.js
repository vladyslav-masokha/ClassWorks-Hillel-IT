// const operation = +prompt(`What you want to do? Choose a number:
// 1. +
// 2. -
// 3. /
// 4. *
// 5. sin
// 6. cos`);

// if (operation != operation) {
// 	alert('Wrong operation');
// } else {
// 	let result;
// 	if (operation <= 0) {
// 		alert('Wrong operation')
// 	}	else if (operation < 5) {
// 			const firstOperand = +prompt('Insert the first operand:');
// 			const secondOperand = +prompt('Insert the second operand:');
// 			// TODO: add calcs
// 			if (operation == 1) {
// 				result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`
// 			} else if(operation == 2) {
// 				result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`
// 			} else if(operation == 3) {
// 				result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`
// 			}
// 		} else if (operation < 7) {
// 			const operand = +prompt('Insert the first operand:');
// 			if(operation == 5) {
// 				result = `sin(${operand} is ${Math.sin(operand)})`
// 			} else {
// 				result = `cos(${operand} is ${Math.cos(operand)})`
// 			}
// 		}
// 		if (result != undefined) {
// 			alert(`Result of your operation is ${result}`)
// 		}
// }


// || &&

// const number = +prompt('Insert random number: ');

// if (number >= 42 && number <= 96 && number != 52) {
// 	alert('Magic happaned! You are lucky!')
// } else {
// 	alert('Try again later!');
// }

// const someValue = 42 && 32 && undefined;
// console.log(someValue);

// const a = 5;
// const b = 12;

// a > 3 && b < 8 && alert('SOME MESSAGE!');

// const someObj = {
// 	name: 'John Doe',
// 	citizen: {
// 		country: 'UA'
// 	}
// };

// delete someObj.citizen;

// const country = someObj.citizen && someObj.citizen.country;
// console.log(country);

// Don't user &(binary operations) - user &&(logical operation)

// ||
// const someObj = {
// 	name: 'John Doe',
// 	citizen: {
// 		country: 'UA'
// 	}
// };

// delete someObj.citizen.country;

// const country = someObj.citizen.country || 'PL';
// console.log(country);

// const number = +prompt('Insert random number: ');

// console.log(number <= 42 || number >= 96);

// if (number <= 42 || number >= 96) {
// 	alert('Magic happaned! You are lucky!')
// } else {
// 	alert('Try again later!');
// }	


// if (operation != operation || operation <= 0 || operation > 6) {
// 	alert('Wrong operation');
// } else {
// 	let result;
// 	 if (operation < 5) {
// 			const firstOperand = +prompt('Insert the first operand:');
// 			const secondOperand = +prompt('Insert the second operand:');
// 			// TODO: add calcs
// 			// if (operation == 1) {
// 			// 	result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`
// 			// } else if(operation == 2) {
// 			// 	result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`
// 			// } else if(operation == 3) {
// 			// 	result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`
// 			// }
			
// 		} else if (operation < 7) {
// 			const operand = +prompt('Insert the first operand:');
// 			if(operation == 5) {
// 				result = `sin(${operand} is ${Math.sin(operand)})`
// 			} else {
// 				result = `cos(${operand} is ${Math.cos(operand)})`
// 			}
// 		}
// 		alert(`Result of your operation is ${result}`)
// }


// switch
// const operation = +prompt(`What you want to do? Choose a number:
// 1. +
// 2. -
// 3. /
// 4. *
// 5. sin
// 6. cos`);
// let result;
// switch (operation) {
// 	case 1: 
// 		result = 'sum';
// 		break;
// 	case 2:
// 		result = 'diff';
// 		break;
// 	case 3: 
// 		result = 'mult';
// 		break;
// 	case 4:
// 		result = 'div';
// 		break;
// 	default:
// 		result = 'operation is undefined';
// 		break;
// }

// alert(result);

// ternary operator

// const a = 12;
// const b = 45;

// let c;
// if (a > b) {
// 	c = a;
// } else {
// 	c = b;
// }

// const c = (a > b && a !== 0 && b !== 1) ? a : b;
// const c = a ? a : b; // -> a || b


// loops (while, do/while, for, for/in, for/of)

// let num = +prompt('Insert a number: ')
// while (num != num) {
// 	num = +prompt('Please, insert correct number: ')
// }


let num;
do {
  num = +prompt('Insert a number: ');
} while (num != num || num != '');

// const vard = confirm('Yes/No');
