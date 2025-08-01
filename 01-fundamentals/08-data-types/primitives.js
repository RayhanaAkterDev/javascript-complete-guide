/*
  Topic: primitives.js

  Demonstrates JavaScript's 7 primitive data types.
  Primitives:
    - Store actual values directly
    - Are immutable (operations return new values)
    - Compared by value
*/

// --- String: sequence of characters ---
let name = "Sumaya";              // ✅ valid string
console.log("String:", name);     // "Sumaya"

// --- Number: integer and floating-point values ---
let age = 25;                     // ✅ integer
let pi = 3.1416;                  // ✅ float
console.log("Number (age):", age); // 25
console.log("Number (pi):", pi);   // 3.1416

// --- Boolean: true or false values ---
let isLoggedIn = true;            // ✅ boolean true
let isAdmin = false;              // ✅ boolean false
console.log("Boolean (isLoggedIn):", isLoggedIn); // true
console.log("Boolean (isAdmin):", isAdmin);       // false

// --- Null: intentional absence of value ---
let empty = null;                 // ✅ explicitly set to null
console.log("Null:", empty);      // null

// --- Undefined: declared but not assigned ---
let unassigned;                   // ✅ declared without value
console.log("Undefined:", unassigned); // undefined

// --- Symbol: unique, immutable identifiers ---
let id = Symbol("userID");        // ✅ unique symbol
let anotherId = Symbol("userID"); // ✅ different despite same description
console.log("Symbol (id):", id);
console.log("Symbol equality:", id === anotherId); // false

// --- BigInt: integers beyond Number limits ---
let big = 9007199254740993n;      // ✅ BigInt literal
console.log("BigInt:", big);      // 9007199254740993n

// End of file. Reference types are shown in: reference.js
