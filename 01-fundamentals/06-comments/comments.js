/*
  Topic: comments.js

  Demonstrates different types of comments in JavaScript:
    - Single-line comments
    - Multi-line comments
    - TODO and FIXME tags for task tracking
    - Using comments to improve code clarity and aid debugging

  For usage context, see: documentation.js
*/

// --- 1. Single-line comments ---
// Used to describe the purpose of specific lines or inline notes

let userName = 'Sumaya';       // Store the user's name

// --- 2. Multi-line comments ---
// Group related context or explain complex logic clearly

/*
  These variables hold additional user information,
  useful for condition checks and profile setup.
*/
let age = 22;
let isStudent = true;

// --- 3. TODO comments ---
// Mark pending tasks or features to implement later

// TODO: Implement function to validate user input

/*
  Multi-line comments can also explain logic inside functions or blocks.
*/
function greetUser(name) {
    // Use template literals for clear string formatting
    return `Hello, ${name}! 👋`;
}

console.log(greetUser(userName)); // Output: Hello, Sumaya!

// --- 4. FIXME comments ---
// Highlight known issues or areas needing fixes

// FIXME: Adjust this if age-based rules change
let yearsToGraduate = 4 - 2;     // Assuming 2 years completed

// --- 5. Disabled code for debugging ---
// Temporarily comment out lines to test or debug

// console.log("Debug: age =", age);

// --- 6. Notes and reminders ---
// Helpful tips or developer hints

// Note: Write clear, relevant comments and avoid over-commenting
