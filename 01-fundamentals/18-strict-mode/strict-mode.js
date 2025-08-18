/*
  Topic: index.js

  Demonstrates core JavaScript strict mode behaviors:
    - No implicit globals allowed
    - Silent errors become thrown errors
    - `this` in functions is undefined
    - Syntax restrictions like duplicate parameters and reserved keywords
*/

"use strict";

// --- 1. No implicit globals (undeclared variables) ---

function testUndeclaredVariable() {
    try {
    // eslint-disable-next-line no-undef
        undeclaredVar = 123; // ReferenceError in strict mode
    } catch (err) {
        console.log("❌ No implicit globals:", err.message);
    }
}
testUndeclaredVariable();

// --- 2. Silent errors become thrown errors ---

try {
    const obj = {};
    Object.defineProperty(obj, "prop", {
        value: 42,
        writable: false,
    });
    obj.prop = 100; // TypeError in strict mode
} catch (err) {
    console.log("❌ Silent errors thrown:", err.message);
}

// --- 3. `this` is undefined in standalone functions ---

function logThis() {
    console.log("🔍 'this' value:", this); // undefined in strict mode
}
logThis();

// --- 4. Duplicate parameters (uncomment to see SyntaxError) ---

// function sum(a, a) {
//   return a + a;
// }

// --- 5. `with` statement forbidden (uncomment to see SyntaxError) ---

// const obj = { a: 1 };
// with (obj) {
//   console.log(a);
// }

// --- 6. Reserved keywords disallowed (uncomment to see SyntaxError) ---

// let interface = "reserved";

console.log("✅ Strict mode demonstrations complete.");
