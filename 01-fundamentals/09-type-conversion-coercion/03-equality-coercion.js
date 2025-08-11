/*
  Topic: equality-coercion.js

  Demonstrates how type coercion affects equality:
    - Loose equality (==)
    - Strict equality (===)
    - Best practices for safe comparison

  ✅ Prefer strict checks (=== / !==) to avoid hidden bugs.
*/

// --- Loose Equality (==): allows type coercion, can be unpredictable ---

console.log("5" == 5);             // ✅ true → "5" coerced to number 5
console.log(0 == false);           // ✅ true → false → 0
console.log("" == false);          // ✅ true → "" → 0
console.log(null == undefined);    // ✅ true → special-case rule in JS
console.log("0" == false);         // ✅ true → "0" → 0

// Edge cases:
console.log([] == false);          // ✅ true → [] → "" → 0
console.log([0] == false);         // ✅ true → [0] → "0" → 0
console.log([1] == true);          // ✅ true → [1] → "1" → 1

// --- Strict Equality (===): no coercion, types must match exactly ---

console.log("5" === 5);            // ❌ false → string !== number
console.log(0 === false);          // ❌ false → number !== boolean
console.log(null === undefined);   // ❌ false → different types
console.log(true === 1);           // ❌ false → boolean !== number

// --- Recommended: Always use === for accurate, predictable checks ---

function isZero(value) {
    return value === 0;            // ✅ safer strict check
}

console.log(isZero(0));            // ✅ true
console.log(isZero(false));        // ❌ false → false !== 0

// --- Tricky Equality Table Example ---

// Loose equality corner cases:
console.log(false == "false");     // ❌ false → "false" → NaN
console.log(false == "0");         // ✅ true → "0" → 0
console.log(null == 0);            // ❌ false → null only == undefined
console.log(undefined == 0);       // ❌ false

// --- 🔗 Note: Avoid relying on == unless you fully understand the coercion rules.
// Use === and !== for safer, more predictable comparisons.
