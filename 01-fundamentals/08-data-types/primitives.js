/*
  Topic: objects.js

  Demonstrates JavaScript reference data types, focusing on:
    - Objects, Arrays, Functions, Dates, RegExp
    - Reference behavior: assignment, mutation, and equality
    - Shared references and cloning basics
*/

// --- 1. Objects — key-value collections ---

const person = {
    name: "Sumaya",
    age: 23,
};
console.log("Object (person):", person);           // ✅ { name: "Sumaya", age: 23 }

// --- 2. Arrays — ordered lists ---

const numbers = [1, 2, 3];
console.log("Array (numbers):", numbers);          // ✅ [1, 2, 3]

// --- 3. Functions — callable objects ---

function greet() {
    console.log("Hello!");
}
console.log("Function (typeof greet):", typeof greet); // ✅ function
greet();                                               // ✅ Hello!

// --- 4. Date — date and time object ---

const now = new Date();
console.log("Date (now):", now);                       // ✅ current date-time object

// --- 5. RegExp — regular expressions ---

const pattern = /abc/gi;
console.log("RegExp (pattern):", pattern);             // ✅ /abc/gi

// --- 6. Reference behavior: Assignment & Mutation ---
// Variables hold references to the same object in memory,
// so changes via one reference affect all others.

const obj1 = { value: 10 };
const obj2 = obj1;                                     // ✅ obj2 references the same object

obj2.value = 20;                                       // Mutation through obj2
console.log("obj1.value (after mutation):", obj1.value); // ✅ 20
console.log("obj2.value:", obj2.value);                  // ✅ 20

console.log("------");

// --- 7. Equality by reference ---
// Two distinct objects with same content are NOT equal by ===
// Only identical references are strictly equal.

const o1 = { a: 1 };
const o2 = { a: 1 };
const o3 = o1;

console.log("o1 === o2:", o1 === o2);                  // ❌ false
console.log("o1 === o3:", o1 === o3);                  // ✅ true

console.log("------");

// --- 8. Shallow cloning objects ---
// Copies only the top-level properties, nested objects are shared references.

const original = { x: 1, y: { z: 2 } };
const clone = Object.assign({}, original);

clone.x = 10;                                          // Changes clone.x only
clone.y.z = 20;                                        // Mutates original.y.z (nested reference)

console.log("Original object:", original);             // ✅ { x: 1, y: { z: 20 } }
console.log("Cloned object:", clone);                  // ✅ { x: 10, y: { z: 20 } }

/*
  🔗 Note:
  Reference types store memory addresses pointing to objects.
  Mutations affect all references to the same object.
  Deep cloning requires special techniques or libraries.
  See type-checking.js for detecting reference types.
*/
