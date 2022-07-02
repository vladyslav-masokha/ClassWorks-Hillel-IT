// Array.prototype.

// function Student(name, surname, age, faculty) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	this.faculty = faculty;

// 	this.getInfo = () => {
// 		return `Name: ${name} ${surname}
// Faculty: ${this.faculty}
// Age: ${this.age}`;
// 	};
// }

// // student value is object
// const student = new Student('Tony', 'Kent', 22, 'math');
// console.log(student.getInfo());

// const anotherStudent = Student('Bob', 'Scott', 28, 'biolody');
// console.log(anotherStudent);

// function Number_(value) {
// 	this.value = +value;
// 	this.initialValue = value;
// 	return +value;
// }

// const a = Number_('55');
// console.log(a);

// const b = new Number_('55');
// console.log(b);

function User(login, email, password) {
	this.login = login;
	this.email = email;
	this.password = password;

	this.checkPassword = password => {
		return this.password === password;
	};

	return {
		login,
		email,
		role: 1,
	};
}

const newUser = User('admin', 'admin@admin.com', '12345');
console.log(newUser);

console.log(newUser instanceof User);
console.log(newUser instanceof Number);

function Burger(toppings) {}

const cheeseBurger = newBurger(/*Cheese */);
cheeseBurger.getPrice(); // number price
cheeseBurger.getCal(); // number calories
cheeseBurger, addTopping(); // addong topping
