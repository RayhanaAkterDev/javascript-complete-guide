/*
  Topic: implicit-coercion.js

  Demonstrates implicit type coercion in:
    - Arithmetic operations
    - Boolean contexts
    - Logical operators

  For safer and more predictable results, see: explicit-conversion.js
*/

// --- Coercion in Arithmetic: automatic type conversion ---

console.log("5" + 1);             // ✅ "51" → number coerced to string
console.log("5" - 1);             // ✅ 4 → string coerced to number
console.log("5" * "2");           // ✅ 10 → both strings coerced to numbers
console.log(true + 1);            // ✅ 2 → true → 1
console.log(false + 1);           // ✅ 1 → false → 0
console.log(null + 1);            // ✅ 1 → null → 0
console.log(undefined + 1);       // ❌ NaN → undefined → NaN
console.log("abc" * 3);           // ❌ NaN → invalid numeric string

// --- Coercion in Boolean Contexts: truthy/falsy evaluation ---

if ("") console.log("Falsy");             // ❌ won't run → empty string is falsy
if ("hello") console.log("Truthy");       // ✅ runs → non-empty string is truthy

if (0) console.log("Falsy");              // ❌ won't run → 0 is falsy
if (100) console.log("Truthy");           // ✅ runs → non-zero number is truthy

if (null) console.log("Falsy");           // ❌ won't run → null is falsy
if ([]) console.log("Truthy");            // ✅ runs → empty array is truthy
if ({}) console.log("Truthy");            // ✅ runs → empty object is truthy

// --- Coercion in Logical Operators: short-circuit behavior ---

console.log("hello" || "world");          // ✅ "hello" → first truthy value
console.log("" || "fallback");            // ✅ "fallback" → empty string is falsy
console.log(null && "value");             // ✅ null → stops at falsy
console.log(true && "yes");               // ✅ "yes" → both truthy
console.log(false && "ignored");          // ✅ false → first falsy value

// --- Edge Cases: tricky coercion results ---

console.log([] + []);                     // ✅ "" → empty arrays → empty string
console.log([] + {});                     // ✅ "[object Object]"
console.log({} + []);                     // ✅ 0 or "[object Object]" (depends on context)
console.log([1, 2] + [3, 4]);              // ✅ "1,23,4" → arrays coerced to strings

// --- 🔗 Note: Implicit coercion can be handy, but test edge cases.
// Prefer explicit conversion when clarity is more important than brevity.
