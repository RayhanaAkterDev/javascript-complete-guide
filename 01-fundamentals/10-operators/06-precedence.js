/*
  Topic: precedence.js

  Demonstrates JavaScript operator precedence,
  showing how the order of operations affects expression evaluation.
*/

// --- 1. Basic Precedence Example ---

let result = 3 + 4 * 5; // Multiplication has higher precedence than addition
console.log('3 + 4 * 5 =', result); // 23

// --- 2. Using Parentheses to Override Precedence ---

result = (3 + 4) * 5;
console.log('(3 + 4) * 5 =', result); // 35

// --- 3. Precedence in Mixed Operators ---

let a = 10,
    b = 5,
    c = 2;

let value = a - b + c * 2; // Multiplication first, then left-to-right addition/subtraction
console.log('a - b + c * 2 =', value); // 9

// --- 4. Precedence and Assignment ---

let x = 5,
    y = 10;

x = y += 2; // y = y + 2 first, then x = y
console.log('x = y += 2:', x); // 12
console.log('y:', y);           // 12

/*
  🔗 Note:
  - Operator precedence determines the order operators are evaluated.
  - Use parentheses to make expressions clearer and avoid bugs.
*/
