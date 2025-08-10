/*
  Topic: explicit-conversion.js

  Demonstrates explicit type conversion using:
    - String(), .toString()
    - Number()
    - Boolean()
    - parseInt(), parseFloat()

  These conversions are controlled by the developer.
  For implicit behaviors, see: implicit-coercion.js
*/

// --- Number to String: converting numeric values to string ---

const num = 42;

console.log(String(num));        // ✅ "42" → using String()
console.log(num.toString());     // ✅ "42" → using .toString()

// --- Boolean to String: true/false to "true"/"false" ---

const isLoggedIn = true;

console.log(String(isLoggedIn));      // ✅ "true"
console.log(isLoggedIn.toString());   // ✅ "true"

// --- String to Number: numeric strings to actual numbers ---

console.log(Number('123'));      // ✅ 123
console.log(Number('3.14'));     // ✅ 3.14
console.log(Number('abc'));      // ❌ NaN → invalid string

// --- Boolean to Number: true → 1, false → 0 ---

console.log(Number(true));       // ✅ 1
console.log(Number(false));      // ✅ 0

// --- String to Boolean: empty → false, non-empty → true ---

console.log(Boolean(''));        // ❌ false → empty string
console.log(Boolean('hello'));   // ✅ true → non-empty string

// --- Number to Boolean: 0 → false, others → true ---

console.log(Boolean(0));         // ❌ false
console.log(Boolean(100));       // ✅ true

// --- Using parseInt and parseFloat: extract numbers from strings ---

console.log(parseInt('42px'));       // ✅ 42 → parses integer
console.log(parseFloat('3.14kg'));   // ✅ 3.14 → parses float

console.log(parseInt('abc'));        // ❌ NaN → invalid input
console.log(parseFloat(''));         // ❌ NaN → empty string

// --- 🔗 Note: Use explicit conversion to avoid unpredictable coercion ---
