/*
  Topic: objects.js

  Demonstrates JavaScript reference data types, focusing on:
    - Objects, Arrays, Functions, Dates, RegExp
    - Reference behavior: assignment, mutation, and equality
    - Shared references and shallow cloning basics
*/

// --- 1. Objects — key-value collections ---

const person = {
    name: "Sumaya",
    age: 23,
};
console.log("Object (person):", person);              // ✅ { name: "Sumaya", age: 23 }

// --- 2. Arrays — ordered lists ---

const numbers = [1, 2, 3];
console.log("Array (numbers):", numbers);              // ✅ [1, 2, 3]

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
// Variables hold references to the same object in memory.
// Mutations through any reference affect the shared object.

const obj1 = { value: 10 };
const obj2 = obj1;                                      // obj2 references the same object as obj1

obj2.value = 20;                                        // Mutation via obj2 changes obj1 as well
console.log("obj1.value (after mutation):", obj1.value); // ✅ 20
console.log("obj2.value:", obj2.value);                 // ✅ 20

console.log("------");

// --- 7. Equality by reference ---
// Objects with identical content are NOT equal by strict equality (===).
// Only references to the exact same object are strictly equal.

const o1 = { a: 1 };
const o2 = { a: 1 };
const o3 = o1;

console.log("o1 === o2:", o1 === o2);                   // ❌ false
console.log("o1 === o3:", o1 === o3);                   // ✅ true

console.log("------");

// --- 8. Shallow cloning objects ---
// Object.assign copies only top-level properties.
// Nested objects remain shared references between original and clone.

const original = { x: 1, y: { z: 2 } };
const clone = Object.assign({}, original);

clone.x = 10;                                           // Changes clone.x only
clone.y.z = 20;                                         // Mutates original.y.z (nested reference)

console.log("Original object:", original);              // ✅ { x: 1, y: { z: 20 } }
console.log("Cloned object:", clone);                    // ✅ { x: 10, y: { z: 20 } }

/*
  🔗 Notes:
  - Reference types store memory addresses pointing to objects.
  - Mutations affect all references to the same object.
  - Strict equality (===) compares references, not content.
  - Shallow cloning copies only top-level properties; nested objects remain shared.
  - Deep cloning requires special methods or libraries.
  - See type-checking.js for detecting reference types.
*/
