/*
  Topic: memory-management.js

  Demonstrates:
    - Memory allocation for variables, objects, and functions
    - Memory usage during execution
    - Garbage collection via nullifying references
    - Reference counting vs. Mark-and-Sweep
    - Circular reference issue and cleanup
*/

// --- 1. Memory Allocation & Usage ---

let name = "Sumaya"; // Allocated memory for a string
let user = { name: "Sumaya", age: 21 }; // Allocated memory for an object

console.log("User created:", user); // Using allocated memory

// --- 2. Nullifying Reference (eligible for GC) ---

user = null; // Object memory becomes unreachable → eligible for GC

// --- 3. Reference Counting Example ---

let a = {};
let b = a; // Object referenced by both 'a' and 'b'

console.log("Reference counting example:", a, b);

b = null; // Still referenced by 'a'
a = null; // No references left → eligible for GC

// --- 4. Circular Reference Problem ---

let obj1 = {};
let obj2 = {};

obj1.ref = obj2;
obj2.ref = obj1;

console.log("Circular reference created");

// Nullify both
obj1 = null;
obj2 = null;

// Reference counting would fail here (memory leak),
// but Mark-and-Sweep detects unreachable cycle → memory freed

// --- 5. Mark-and-Sweep Example ---

function createUser() {
    let tempUser = { name: "Temporary" };
    return tempUser;
}

let activeUser = createUser();
console.log("Active user:", activeUser);

activeUser = null; // tempUser becomes unreachable → GC reclaims it

/*
  📊 Memory Lifecycle (step by step):

  1. Allocation
     - Variables, objects, and functions reserved in memory

  2. Usage
     - Values accessed and updated during execution

  3. Garbage Collection
     - Unreachable memory (no references) is reclaimed
     - Done automatically by JS engine (usually Mark-and-Sweep)

  ⚠️ Key Notes:
  - Reference counting alone can fail with circular references
  - Mark-and-Sweep is the standard algorithm in modern JS engines
*/
