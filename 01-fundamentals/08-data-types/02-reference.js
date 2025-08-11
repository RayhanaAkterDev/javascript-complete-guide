/*
  Topic: reference.js

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
// Variables store references (memory addresses) to objects, not the objects themselves.
// Assigning an object to another variable copies the reference, not the object.
// Mutations through any reference affect the original object.

const obj1 = { value: 10 };
const obj2 = obj1;                                      // obj2 references the same object as obj1

obj2.value = 20;                                        // Mutation via obj2 changes obj1 as well
console.log("obj1.value (after mutation):", obj1.value); // ✅ 20
console.log("obj2.value:", obj2.value);                 // ✅ 20

console.log("------");

// --- 7. Equality by reference ---
// Strict equality (===) compares references for objects, not their content.
// Two distinct objects with the same content are NOT equal.
// Only variables referencing the exact same object are strictly equal.

const o1 = { a: 1 };
const o2 = { a: 1 };
const o3 = o1;

console.log("o1 === o2:", o1 === o2);                   // ❌ false (different objects)
console.log("o1 === o3:", o1 === o3);                   // ✅ true (same reference)

console.log("------");

// --- 8. Shallow cloning objects ---
// Object.assign() creates a shallow copy: top-level properties are copied,
// but nested objects remain shared references between original and clone.

const original = { x: 1, y: { z: 2 } };
const clone = Object.assign({}, original);

clone.x = 10;                                           // Changes clone.x only (primitive)
clone.y.z = 20;                                         // Mutates original.y.z (nested reference)

console.log("Original object:", original);              // ✅ { x: 1, y: { z: 20 } }
console.log("Cloned object:", clone);                    // ✅ { x: 10, y: { z: 20 } }

/*
  🔗 Notes:
  - Reference types store memory addresses pointing to objects.
  - Assigning references copies the address, not the object itself.
  - Mutations via any reference affect the shared object.
  - Strict equality (===) compares references, not object content.
  - Shallow cloning copies only top-level properties; nested objects remain shared.
  - Deep cloning requires specialized methods or external libraries (e.g., lodash).
  - Use `typeof` and `instanceof` or `Object.prototype.toString.call()` for detecting reference types.
  - See type-checking.js for detailed type detection techniques.
*/
