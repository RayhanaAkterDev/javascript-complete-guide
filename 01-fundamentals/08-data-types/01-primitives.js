/*
  Topic: primitives.js

  Demonstrates JavaScript primitive data types, focusing on:
    - String, Number, Boolean, Null, Undefined, Symbol, BigInt
    - Immutability and direct value storage
    - Basic usage examples and type checking
*/

// --- 1. String — sequence of characters ---

const name = "Sumaya";
console.log("String (name):", name);                 // ✅ "Sumaya"
console.log("Type of name:", typeof name);           // ✅ "string"

// --- 2. Number — numeric values (integers and floats) ---

const age = 25;
const pi = 3.1416;
console.log("Number (age):", age);                    // ✅ 25
console.log("Number (pi):", pi);                      // ✅ 3.1416
console.log("Type of age:", typeof age);              // ✅ "number"

// --- 3. Boolean — true or false values ---

const isActive = true;
const hasPaid = false;
console.log("Boolean (isActive):", isActive);        // ✅ true
console.log("Boolean (hasPaid):", hasPaid);          // ✅ false
console.log("Type of isActive:", typeof isActive);   // ✅ "boolean"

// --- 4. Null — intentional absence of value ---

const emptyValue = null;
console.log("Null (emptyValue):", emptyValue);       // ✅ null
console.log("Type of emptyValue:", typeof emptyValue); // ✅ "object" (historic JS quirk)

// --- 5. Undefined — declared but not assigned ---

let notAssigned;
console.log("Undefined (notAssigned):", notAssigned); // ✅ undefined
console.log("Type of notAssigned:", typeof notAssigned); // ✅ "undefined"

// --- 6. Symbol — unique identifiers ---

const id = Symbol("id");
console.log("Symbol (id):", id);                      // ✅ Symbol(id)
console.log("Type of id:", typeof id);                // ✅ "symbol"

// --- 7. BigInt — large integers beyond Number limits ---

const bigNumber = 9007199254740991n;
console.log("BigInt (bigNumber):", bigNumber);        // ✅ 9007199254740991n
console.log("Type of bigNumber:", typeof bigNumber);  // ✅ "bigint"

// --- 8. Immutability of primitives ---

let greeting = "Hello";
let upperGreeting = greeting.toUpperCase();

console.log("Original string:", greeting);            // ✅ "Hello"
console.log("Uppercase string:", upperGreeting);      // ✅ "HELLO"

greeting[0] = "h";  // Attempt to change first character (ignored)
console.log("After mutation attempt:", greeting);     // ✅ "Hello"

/*
  🔗 Notes:
  - Primitive types store actual values directly in variables.
  - Primitives are immutable — operations create new values, original stays unchanged.
  - typeof operator returns the data type string.
  - Null type quirk: typeof null === "object".
  - Symbols are unique and useful for unique identifiers.
  - BigInt allows safe handling of very large integers.
  - See type-checking.js for detailed type tests.
*/
