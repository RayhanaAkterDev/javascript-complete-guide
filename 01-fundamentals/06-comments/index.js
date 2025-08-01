/*
  Topic: comments.js

  Demonstrates different types of comments in JavaScript:
    - Single-line comments
    - Multi-line comments
    - TODO and FIXME tags
    - Use of comments for clarity and debugging

  For usage context, see: documentation.js
*/

// --- Single-line comments: describe the purpose of individual lines ---

let userName = 'Sumaya';       // Store the user's name

// --- Multi-line comments: group related context or explain logic clearly ---

/*
  These variables hold additional user information.
  Useful for condition checks and profile setup.
*/
let age = 22;
let isStudent = true;

// --- TODO comments: indicate pending tasks or enhancements ---

// TODO: Implement function to validate user input

/*
  Multi-line comments can also be used
  to explain logic inside functions or blocks.
*/
function greetUser(name) {
    // Use of template literal for better readability
    return `Hello, ${name}! 👋`;
}

console.log(greetUser(userName)); // Output: Hello, Sumaya!

// --- FIXME comments: highlight known issues to fix later ---

// FIXME: Adjust this if age-based rules change
let yearsToGraduate = 4 - 2;     // Assuming 2 years completed

// --- Disabled lines: helpful for temporary debugging ---

// console.log("Debug: age =", age);

// --- Notes: reminders or developer hints ---

// Note: Comments should be clear, relevant, and not overused
