// // context / this (good)
const student = {
	name: 'Bob',
	surname: 'Kwin',
	getFullName() {
		return this.name + ' ' + this.surname;
	},
};

console.log(student.getFullName());

student.surname = 'Shotland';

console.log(student.getFullName());

// //  w/o context (bad)
const student2 = {
	name: 'Jonny',
	surname: 'Walker',
	getFullName() {
		return student2.name + ' ' + student2.surname;
	},
};

console.log(student2.getFullName());

student2.surname = 'McAdams';

console.log(student2.getFullName());

// universal function/method

const getFullName = function () {
	// TBD
	return `${this.name} ${this.surname}`;
};

const student3 = {
	name: 'Tonny',
	surname: 'Smt',
	getFullName: getFullName,
};

console.log(student3.getFullName());

const student4 = {
	name: 'Eizikeil',
	surname: 'McSaint',
	getFullName: getFullName,
};
console.log(student4.getFullName());

// inline function applying

const getFullName3 = function () {
	return `${this.name} ${this.surname}`;
};

const student5 = {
	name: 'Tonny',
	surname: 'Smt',
	getFullName: getFullName,
};

console.log(student5.getFullName());

// const student6 = {
// 	name: 'Bob',
// 	surname: 'null',
// 	getFullName: student6.getFullName(),
// 	applyGettingInfo: function (cb) {
// 		const fullName = cb();
// 		return fullName;
// 	},
// };

// console.log(student6.getFullName());

// // content losing
// const res = student6.applyGettingInfo(student6.getFullName);
// console.log(res);

// 2. apply
function doSmt(arg, name) {
	console.log('starting doing smt');
	console.log(`function args ${arg} ${name}`);
	console.log('getting context', this);
	console.log('finishing doing smt');
}

// 2.1 apply
doSmt.apply({ name: 'cyber object' }, 42, '77');
doSmt.apply(document, 42, '77');

// 2.2 call
doSmt({ length: 22 }, 'text', 'html');
