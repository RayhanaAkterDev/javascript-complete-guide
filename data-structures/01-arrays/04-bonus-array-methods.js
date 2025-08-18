/*
  Topic: 04-bonus-array-methods.js
  Highlights bonus array techniques:
    - Converting other types to arrays
    - Filling arrays
    - Creating new arrays with patterns
    - Checking if value is an array

  💡 Note:
  These features are less used daily, but powerful when needed.
*/

// --- 1. Array.from(): convert iterable or array-like to array ---

const str = "hello";
const chars = Array.from(str);
console.log("Array from string:", chars); // ['h', 'e', 'l', 'l', 'o']

// --- 2. Array.fill(): fill all or part of array with a value ---

const filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]
console.log("Filled array:", filled);

// --- 3. Array.of(): create array from arguments ---

const ofArray = Array.of(1, 2, 3);
console.log("Array.of result:", ofArray); // [1, 2, 3]

// --- 4. Using spread (...) to copy or merge arrays ---

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Merged array:", merged); // [1, 2, 3, 4]

// --- 5. Destructuring arrays ---

const [first, second] = merged;
console.log("Destructured:", first, second); // 1 2

// --- 6. Array.isArray(): check if a value is an array ---

console.log("Is [1, 2, 3] an array?", Array.isArray([1, 2, 3])); // true
console.log("Is 'abc' an array?", Array.isArray("abc"));         // false
