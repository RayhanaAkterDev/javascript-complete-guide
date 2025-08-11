/*
  Topic: logical.js

  Demonstrates JavaScript logical operators,
  showing how to combine and invert boolean expressions.
*/

// --- 1. Logical AND (&&) ---

console.log('true && true:', true && true);     // true
console.log('true && false:', true && false);   // false
console.log('false && true:', false && true);   // false
console.log('false && false:', false && false); // false

// --- 2. Logical OR (||) ---

console.log('true || true:', true || true);     // true
console.log('true || false:', true || false);   // true
console.log('false || true:', false || true);   // true
console.log('false || false:', false || false); // false

// --- 3. Logical NOT (!) ---

console.log('!true:', !true);    // false
console.log('!false:', !false);  // true

// --- 4. Short-Circuit Evaluation ---

function logAndReturn(value) {
    console.log('Evaluated:', value);
    return value;
}

console.log('false && logAndReturn(true):', false && logAndReturn(true));
// false — second operand not evaluated

console.log('true || logAndReturn(false):', true || logAndReturn(false));
// true — second operand not evaluated

/*
  🔗 Note:
  - Logical operators return the last evaluated operand.
  - Use short-circuit behavior to optimize code.
*/
