/*
  Topic: implicit-coercion.js

  Demonstrates implicit type coercion in:
    - Arithmetic operations
    - Boolean contexts
    - Logical operators

  For safe and predictable results, see: explicit-conversion.js
*/

// --- Coercion in Arithmetic: automatic conversion of types ---

console.log('5' + 1);             // ✅ "51" → number + string → string
console.log('5' - 1);             // ✅ 4 → string - number → number
console.log(true + 1);            // ✅ 2 → true → 1
console.log(false + 1);           // ✅ 1 → false → 0
console.log(null + 1);            // ✅ 1 → null → 0
console.log(undefined + 1);       // ❌ NaN → undefined → NaN

// --- Coercion in Boolean Contexts: truthy/falsy values in conditionals ---

if ('') console.log('Falsy');             // ❌ won't run → empty string is falsy
if ('hello') console.log('Truthy');       // ✅ runs → non-empty string is truthy

if (0) console.log('Falsy');              // ❌ won't run → 0 is falsy
if (100) console.log('Truthy');           // ✅ runs → non-zero number is truthy

// --- Coercion in Logical Operators: short-circuit evaluation ---

console.log('hello' || 'world');          // ✅ "hello" → first truthy value
console.log('' || 'fallback');            // ✅ "fallback" → empty string is falsy
console.log(null && 'value');             // ✅ null → stops at falsy
console.log(true && 'yes');               // ✅ "yes" → both are truthy

// --- 🔗 Note: Implicit coercion is useful but can lead to bugs.
// Always test edge cases and prefer explicit conversion when in doubt. ---
