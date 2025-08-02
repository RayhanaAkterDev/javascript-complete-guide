/*
  Topic: for-of.js (Step-by-step Advanced Examples)

  Demonstrates usage of the `for...of` loop, starting from basic iteration
  and building up to more advanced patterns:
    - Iterating over arrays and strings
    - Working with Sets and Maps
    - Destructuring in loop
    - Skipping/filtering values
    - Nested iteration
    - Use in data transformation and validation
*/

// --- 1. Loop over array values ---

const languages = ["JavaScript", "Python", "Go"];

for (const lang of languages) {
    console.log("Language:", lang);
}

// --- 2. Loop over characters in a string ---

const word = "loop";

for (const char of word) {
    console.log("Character:", char);
}

// --- 3. Loop through a Set (unique values only) ---

const tools = new Set(["VSCode", "Atom", "Sublime", "VSCode"]); // duplicate ignored

for (const tool of tools) {
    console.log("Editor:", tool);
}
// Output: VSCode, Atom, Sublime

// --- 4. Loop through a Map (with destructuring) ---

const roles = new Map([
    ["Sumaya", "Developer"],
    ["Rayhan", "Designer"],
]);

for (const [name, role] of roles) {
    console.log(`${name} → ${role}`);
}

// --- 5. Skip certain values using `continue` in for...of ---

const scores = [90, 45, 80, 33, 100];

for (const score of scores) {
    if (score < 50) continue; // Skip failing scores
    console.log("Passed:", score);
}

// --- 6. Nested for-of: loop over 2D array ---

const matrix = [
    [1, 2],
    [3, 4],
];

for (const row of matrix) {
    for (const cell of row) {
        console.log("Cell:", cell);
    }
}

// --- 7. Transform items while looping (e.g., uppercase all) ---

const fruits = ["apple", "banana", "grape"];
const upperFruits = [];

for (const fruit of fruits) {
    upperFruits.push(fruit.toUpperCase());
}
console.log("Uppercase fruits:", upperFruits); // ['APPLE', 'BANANA', 'GRAPE']

// --- 8. Loop with condition check: validate data entries ---

const users = [
    { name: "Amina", age: 21 },
    { name: "Tariq", age: 17 },
    { name: "Lina", age: 19 },
];

for (const user of users) {
    if (user.age >= 18) {
        console.log(`${user.name} is an adult.`);
    } else {
        console.log(`${user.name} is a minor.`);
    }
}
