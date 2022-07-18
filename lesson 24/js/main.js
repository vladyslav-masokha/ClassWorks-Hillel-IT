'use strict';

function User(name, balance) {
	this.name = name;
	this.balance = balance;

	this.setBalance = function(value) {
		this.balance += value;
		console.log('you send ' + value)
	}
}

const myUser = new User('current user', 1000)

myUser.setBalance(-100);
myUser.setBalance(-500);

let person = {
	firstName: 'Vlad',
	secondName: 'Masokha',

	get fullName() {
		return this.firstName + ' ' + this.secondName
	}
}
console.log(person.fullName)

const person = {
	name: 'Ivan',
	surname: 'Ivanov',
	age: 25,
	gender: 'Male'
}

const programmer = {

}

function Human() {
	this.name = ''
	this.age = ''
	this.getInfo = function() {}
}

Human.prototype = {
	parent: true
}

let x = new Human()
x.parent