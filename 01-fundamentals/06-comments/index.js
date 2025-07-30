// =========================
// 06 - Comments in JavaScript
// =========================

// Single-line comment: describes the next code line
let userName = 'Sumaya'; // Store the user's name

/*
  Multi-line comment:
  Groups related variables with explanations.
  Useful for documenting purpose or context.
*/
let age = 22;
let isStudent = true;

// TODO: Implement function to validate user input

/*
  Multi-line comments help explain
  complex logic or sections clearly.
*/
function greetUser(name) {
  // Using template literals for readable output
  return `Hello, ${name}! 👋`;
}

console.log(greetUser(userName)); // Output: Hello, Sumaya!

// FIXME: Adjust this if age-based rules change
let yearsToGraduate = 4 - 2; // Assuming 2 years completed

// Example: Temporarily disable this for debugging
// console.log("Debug: age =", age);

// Note: Comments should be clear and concise
