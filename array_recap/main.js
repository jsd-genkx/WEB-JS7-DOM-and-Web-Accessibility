// some code from Fun Fun JS Fundamentals (Sat, May 18)

/////////////////////////////////////////
//// For Loop without "var, let, const"
//// i is in global scope by default
// for (i = 0; i < 3; i++) {
// 	console.log("hi", i);
// }
// console.log(i);
// console.log("--------");

// for (i; i < 5; i++) {
// 	console.log("hello", i);
// }
// console.log(i);
// console.log("--------");

// for (i = 0; i < 3; ++i) {
// 	console.log("hi", i);
// }
// console.log(i);
// console.log("--------");

// for (i; i < 5; ++i) {
// 	console.log("hello", i);
// }

/////////////////////////////////////////
///// Difference between i++ and ++i
// console.log(i);
// // console.log("++i ", ++i);
// console.log("i++ ", i++);
// console.log("after i++ ", i);

// console.log("--------");

/////////////////////////////////////////
//// Using "let" and "const" in for() {}

// let count = 0;
// for (let i = 0; i < 3; i++) {
// 	console.log("hi");
// 	count++;
// }
// console.log(count);
// // console.log(i); // ReferenceError: i is not defined
// console.log("--------");

// for (const i = 0; i < 3; i++) {
// 	// TypeError: Assignment to constant variable.
// 	console.log("hi");
// }
// console.log("--------");

// for (let i = 3; i >= 1; i--) {
// 	console.log("hi i-- ", i);
// }
// // console.log(i);
// console.log("--------");

/////////////////////////////////////////
//// Object Bracket Notation: Looping through Object Properties
const harry = {
	id: 1,
	name: "Harry Potter",
	house: "Gryffindor",
	age: 17,
	points: 50,
	"favouite-colour": "Gryffin Crimson",
};

console.log(harry["favouite-colour"]);
// console.log(harry."favouite-colour"); // SyntaxError: Unexpected string
// console.log(harry.favouite-colour); // ReferenceError: colour is not defined

console.log(`loop with bracket notation:\n`);
for (let key in harry) {
	console.log(`${key} is ${harry[key]}`);
}

console.log(`---------`);
console.log(`loop with dot notation:\n`);

for (let key in harry) {
	console.log(`${key} is ${harry.key}`);
}
