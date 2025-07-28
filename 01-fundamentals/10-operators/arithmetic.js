/*
    Topic: arithmetic.js

    This file demonstrates JavaScript arithmetic operators,
    showing how they work with numbers and their common usage.
*/

/* ---------------------------------
    1. Basic Arithmetic Operations
--------------------------------- */
let a = 10;
let b = 3;

console.log('a + b =', a + b); // 13 (Addition)
console.log('a - b =', a - b); // 7  (Subtraction)
console.log('a * b =', a * b); // 30 (Multiplication)
console.log('a / b =', a / b); // 3.3333... (Division)
console.log('a % b =', a % b); // 1  (Modulus - remainder)
console.log('a ** b =', a ** b); // 1000 (Exponentiation: 10^3)

/* ---------------------------------
    2. Increment and Decrement
--------------------------------- */
let x = 5;

console.log('x =', x); // 5
console.log('++x =', ++x); // 6 (Pre-increment: increments, then returns)
console.log('x++ =', x++); // 6 (Post-increment: returns, then increments)
console.log('x after x++ =', x); // 7

console.log('--x =', --x); // 6 (Pre-decrement)
console.log('x-- =', x--); // 6 (Post-decrement)
console.log('x after x-- =', x); // 5

/* ---------------------------------
    3. Numeric Coercion with Arithmetic
--------------------------------- */
console.log('"5" + 2 =', '5' + 2); // "52" (string concatenation)
console.log('"5" - 2 =', '5' - 2); // 3 (string coerced to number)
console.log('true + 1 =', true + 1); // 2 (true coerced to 1)
console.log('false + 1 =', false + 1); // 1 (false coerced to 0)

/* ---------------------------------
    🔗 Note:
    Operators follow precedence rules.
    Use parentheses to control evaluation order.
*/
