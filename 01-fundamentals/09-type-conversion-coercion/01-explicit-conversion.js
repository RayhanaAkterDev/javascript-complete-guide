/*
  Topic: explicit-conversion.js

  Demonstrates explicit type conversion using:
    - String(), .toString()
    - Number()
    - Boolean()
    - parseInt(), parseFloat()

  These conversions are manually controlled by the developer.
  For automatic (implicit) behaviors, see: implicit-coercion.js
*/

// --- Number → String: convert numeric values to string ---

const num = 42;

console.log(String(num));        // ✅ "42" → using String()
console.log(num.toString());     // ✅ "42" → using .toString()

// Edge case: NaN and Infinity
console.log(String(NaN));        // "NaN"
console.log(String(Infinity));   // "Infinity"

// --- Boolean → String: true/false to "true"/"false" ---

const isLoggedIn = true;

console.log(String(isLoggedIn));      // ✅ "true"
console.log(isLoggedIn.toString());   // ✅ "true"

// --- String → Number: numeric strings to actual numbers ---

console.log(Number("123"));       // ✅ 123
console.log(Number("3.14"));      // ✅ 3.14
console.log(Number("abc"));       // ❌ NaN → invalid string
console.log(Number(""));          // ✅ 0 → empty string converts to 0
console.log(Number("   "));       // ✅ 0 → whitespace string converts to 0

// --- Boolean → Number: true → 1, false → 0 ---

console.log(Number(true));        // ✅ 1
console.log(Number(false));       // ✅ 0

// --- String → Boolean: empty → false, non-empty → true ---

console.log(Boolean(""));         // ❌ false → empty string
console.log(Boolean("hello"));    // ✅ true → non-empty string
console.log(Boolean("0"));        // ✅ true → non-empty string still truthy

// --- Number → Boolean: 0 → false, others → true ---

console.log(Boolean(0));          // ❌ false
console.log(Boolean(100));        // ✅ true
console.log(Boolean(-5));         // ✅ true → negative numbers are also truthy

// --- Using parseInt() and parseFloat(): extract numbers from strings ---

console.log(parseInt("42px"));       // ✅ 42 → parses integer part
console.log(parseFloat("3.14kg"));   // ✅ 3.14 → parses float part

console.log(parseInt("abc"));        // ❌ NaN → invalid input
console.log(parseFloat(""));         // ❌ NaN → empty string

// Edge case: parseInt with radix
console.log(parseInt("101", 2));     // ✅ 5 → binary to decimal

// --- 🔗 Note: Explicit conversion avoids unpredictable type coercion ---
