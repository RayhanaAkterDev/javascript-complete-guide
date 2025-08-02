/*
  Topic: differences.js

  Demonstrates key behavior changes introduced by JavaScript Strict Mode:
    - No implicit global variable declarations
    - Errors no longer fail silently
    - `this` in functions becomes undefined
    - Duplicate parameters are disallowed
    - `with` statements are forbidden
    - Reserved keywords are blocked

  ⚠️ Note:
  This file complements the main usage file:
    → index.js (general strict mode overview)
*/

"use strict";

// --- 1. No Undeclared Variables: ReferenceError on assignment without declaration ---

try {
    // eslint-disable-next-line no-undef
    undeclared = 10; // ❌ ReferenceError
} catch (err) {
    console.log("❌ No undeclared variables:", err.message);
}

// --- 2. Silent Errors Become Thrown: readonly or non-writable targets ---

try {
    const obj = {};
    Object.defineProperty(obj, "prop", {
        value: 42,
        writable: false,
    });
    obj.prop = 100; // ❌ TypeError
} catch (err) {
    console.log("❌ Silent errors become throw errors:", err.message);
}

// --- 3. `this` in Functions is Undefined (not global) ---

function showThis() {
    console.log("🔍 'this' in function:", this); // undefined
}
showThis();

// --- 4. No Duplicate Parameters: SyntaxError if uncommented ---

// ❌ SyntaxError: Duplicate parameter name not allowed
// function duplicate(a, a) {
//   return a + a;
// }

console.log("⚠️ Duplicate parameters not allowed in strict mode (code commented out).");

// --- 5. `with` Statement Disallowed ---

// ❌ SyntaxError: Strict mode code may not include a with statement
// const mathObj = { value: 10 };
// with (mathObj) {
//   console.log(value);
// }

console.log("⚠️ `with` statement is forbidden in strict mode (code commented out).");

// --- 6. Reserved Keywords Disallowed ---

// ❌ SyntaxError: Unexpected strict mode reserved word
// let interface = "reserved";

console.log("⚠️ Reserved keywords (e.g., 'interface') cannot be used (code commented out).");
