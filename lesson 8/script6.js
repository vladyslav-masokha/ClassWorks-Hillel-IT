let DEFAULT_MARKS_AMOUNT = 5;

function getRandomMarks() {
	const marks = [];
		for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
			marks.push(Math.round(Math.random() * 12));
		}
		return marks;
}

function getBestStudent (students) { // [{ name: 'John', marks: [10,12, 4, 6], avgMark: 8.7 }, ...]
	let bestStudent = students[0];
	for (let i = 1; i < students.length; i++) {
		if (bestStudent.avg < students[i].avgMark) {
			bestStudent = students[i];
		}
	}
	console.log(bestStudent);
	return bestStudent;
}
getBestStudent();



///


function main() {
	// let students = generateList(+prompt('How many students in your group?'));
	do {
	// some code
	} while (confirm('Do you want to countinue'));
}

main();


// IIFE -> immediately invoked functional expression
(function() {
	let students = generateList(+prompt('How many students in your group?'));
	do {
		// some code
		} while (confirm('Do you want to countinue'));
})();

(() => {
	let students = generateList(+prompt('How many students in your group?'));
	do {
		// some code
		} while (confirm('Do you want to countinue'));
})();