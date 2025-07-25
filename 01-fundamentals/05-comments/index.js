// =========================
// 05 - Comments in JavaScript
// =========================

// This is a single-line comment
// It explains the next line of code

let userName = 'Sumaya'; // Store user's name

/*
    This block is used to store the user's basic info.
    Using comments like this helps other developers understand
    the purpose of grouped code.
*/
let age = 22;
let isStudent = true;

// TODO: Add function to validate user input

/*
    Multi-line comments are helpful when
    documenting sections or complex logic.
*/
function greetUser(name) {
    // Explain why we're using template literals
    return `Hello, ${name}! 👋`;
}

console.log(greetUser(userName)); // Output: Hello, Sumaya!

// FIXME: Update this calculation if we change age rules
let yearsToGraduate = 4 - 2; // Assuming 2 years completed

// Example of disabling a line during debugging
// console.log("Debug: age =", age);
