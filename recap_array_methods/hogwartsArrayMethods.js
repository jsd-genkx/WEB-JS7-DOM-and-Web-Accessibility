/* 
forEach();
map();
filter();
find();
reduce(); 
*/

// Array of Harry Potter student characters with IDs
const students = [
	{ id: 1, name: "Harry Potter", house: "Gryffindor", age: 17, points: 50 },
	{
		id: 2,
		name: "Hermione Granger",
		house: "Gryffindor",
		age: 17,
		points: 120,
	},
	{ id: 3, name: "Ron Weasley", house: "Gryffindor", age: 17, points: 40 },
	{
		id: 4,
		name: "Neville Longbottom",
		house: "Gryffindor",
		age: 17,
		points: 60,
	},
	{ id: 5, name: "Draco Malfoy", house: "Slytherin", age: 17, points: 30 },
	{ id: 6, name: "Pansy Parkinson", house: "Slytherin", age: 17, points: 20 },
	{ id: 7, name: "Gregory Goyle", house: "Slytherin", age: 17, points: 10 },
	{ id: 8, name: "Vincent Crabbe", house: "Slytherin", age: 17, points: 10 },
	{ id: 9, name: "Luna Lovegood", house: "Ravenclaw", age: 16, points: 80 },
	{ id: 10, name: "Cho Chang", house: "Ravenclaw", age: 18, points: 70 },
	{ id: 11, name: "Padma Patil", house: "Ravenclaw", age: 17, points: 60 },
	{ id: 12, name: "Terry Boot", house: "Ravenclaw", age: 17, points: 40 },
	{ id: 13, name: "Cedric Diggory", house: "Hufflepuff", age: 17, points: 90 },
	{ id: 14, name: "Hannah Abbott", house: "Hufflepuff", age: 18, points: 50 },
	{ id: 15, name: "Susan Bones", house: "Hufflepuff", age: 17, points: 40 },
	{ id: 16, name: "Ernie Macmillan", house: "Hufflepuff", age: 17, points: 30 },
];

// forEach: Print the name and house of each student
// Output: The name and house of each student
/* students.forEach((student) => {
	console.log(`Name: ${student.name}, House: ${student.house}`);
}); */

// map: Create an array of student names and IDs
// Output: An array of student names and IDs
// Format: Array.map((item) => ({})); // retuen new array of objects
const studentNamesAndIds = students.map((student) => {
	return {
		id: student.id,
		name: student.name,
	};
});
console.log(studentNamesAndIds);

/* const array = [1, 2, 3];
const result = array.map((student) => ({}));
console.log(result); */

// filter: Create an array of all students from Ravenclaw house
// Output: An array of students from Ravenclaw
// const ravenclaws = students.filter((student) => student.house === "Ravenclaw");
// console.log(ravenclaws);

// find: Find the student with ID 10
// Output: The student object with ID 10
// const studentWithId10 = students.find((student) => student.id === 10);
// console.log(studentWithId10);

// Reduce method to calculate total points for each house
// Output: The total points for each house
// Function to calculate total points for each house
/* function calculateHousePoints() {
	return students.reduce((acc, student) => {
		if (!acc[student.house]) {
			acc[student.house] = 0;
		}
		acc[student.house] += student.points;
		return acc;
	}, {});
}

// Initial house points calculation
let housePoints = calculateHousePoints();
console.log("Initial House Points:", housePoints); */

/* // Function to add points to a student
function addPointsToStudent(studentId, points) {
	const student = students.find((student) => student.id === studentId);
	if (student) {
		student.points += points;
		housePoints = calculateHousePoints(); // Recalculate house points
		console.log(
			`${points} points added to ${student.name}. Total now: ${student.points}`
		);
	} else {
		console.log(`Student with ID ${studentId} not found.`);
	}
} */

/* // Function to remove points from a student
function removePointsFromStudent(studentId, points) {
	const student = students.find((student) => student.id === studentId);
	if (student) {
		student.points = Math.max(0, student.points - points); // Ensure points don't go negative
		housePoints = calculateHousePoints(); // Recalculate house points
		console.log(
			`${points} points removed from ${student.name}. Total now: ${student.points}`
		);
	} else {
		console.log(`Student with ID ${studentId} not found.`);
	}
} */

/* // Function to announce the winning house
function announceWinningHouse() {
	const winningHouse = Object.keys(housePoints).reduce((a, b) =>
		housePoints[a] > housePoints[b] ? a : b
	);
	console.log(
		`The winning house is ${winningHouse} with ${housePoints[winningHouse]} points.`
	);
} */

// Examples of using the functions
// addPointsToStudent(1, 20); // Add points to Harry Potter
// removePointsFromStudent(5, 10); // Remove points from Draco Malfoy

// console.log("Updated House Points:", housePoints);

// Announce the winning house
// announceWinningHouse();

/////////////////////////////////

/* // Function to find the student with the maximum house points
function findStudentWithMaxPoints() {
	const student = students.reduce(
		(maxStudent, currentStudent) =>
			currentStudent.points > maxStudent.points ? currentStudent : maxStudent,
		students[0]
	);
	console.log(
		`The student with the maximum points is ${student.name} from ${student.house} with ${student.points} points.`
	);
}

// Find the student with the maximum house points
findStudentWithMaxPoints(); */

///////////////////////////////////
// Array Methods Chaining
// Function to find the top student from each house
function findTopStudentFromEachHouse(students) {
	// Get a list of unique houses
	const houseNameAll = students.map((student) => student.house);
	// console.log(houseNameAll);
	const uniqueHouseName = new Set(houseNameAll);
	// console.log(uniqueHouseName);
	const houses = [...uniqueHouseName];
	// console.log(houses);

	// Use chaining to find the top student from each house
	return houses.map((house) => {
		return students
			.filter((student) => student.house === house)
			.reduce((topStudent, currentStudent) =>
				currentStudent.points > topStudent.points ? currentStudent : topStudent
			);
	});
}

// Get the top students from each house
const topStudents = findTopStudentFromEachHouse(students);

// Display the top students
/* console.log("Top Students from Each House:");
topStudents.forEach((student) => {
	console.log(
		`${student.name} from ${student.house} with ${student.points} points.`
	);
}); */
