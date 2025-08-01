/*
  Topic: equality-coercion.js

  Demonstrates how type coercion affects equality:
    - Loose equality (==)
    - Strict equality (===)
    - Best practices for safe comparison

  Prefer strict checks to avoid hidden bugs.
*/

// --- Loose Equality (==): allows coercion, can cause confusion ---

console.log('5' == 5);             // ✅ true → string "5" == number 5
console.log(0 == false);           // ✅ true → false → 0
console.log('' == false);          // ✅ true → "" → 0
console.log(null == undefined);    // ✅ true → special case
console.log('0' == false);         // ✅ true → '0' → 0

// --- Strict Equality (===): no coercion, types must match ---

console.log('5' === 5);            // ❌ false → string !== number
console.log(0 === false);          // ❌ false → number !== boolean
console.log(null === undefined);   // ❌ false → different types
console.log(true === 1);           // ❌ false → boolean !== number

// --- Recommended: Always use === for accurate, predictable checks ---

function isZero(value) {
    return value === 0;             // ✅ safer strict check
}

console.log(isZero(0));            // ✅ true
console.log(isZero(false));        // ❌ false → false !== 0

// --- 🔗 Note: Always use === and !== to avoid unexpected coercion bugs ---
