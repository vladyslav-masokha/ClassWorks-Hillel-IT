function Person(name,age) {
	this.name = name;
	this.age = age;

	this.getInfo = function() {
		console.log(`Person: ${this.name} ${this.age}`)
	}
}