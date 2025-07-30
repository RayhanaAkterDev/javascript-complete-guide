/*
  Topic: 04 - Statements & Expressions

  Key Idea:
  - Statements do things (actions)
  - Expressions produce values (data)
  Understanding this helps write clean, bug-free code.
*/

// 1. Declaration statement with an expression
const number = 5; // '5' is an expression; the whole line is a statement

// 2. Assignment with an expression
const doubled = number * 2; // 'number * 2' is an expression

// 3. Conditional statement uses an expression as condition
if (doubled > 5) {
  console.log('Doubled value is greater than 5'); // Statement: function call
}

// 4. Function declaration statement
function greet(name) {
  return 'Hello, ' + name; // Expression: concatenation
}

// 5. Calling a function (expression) inside a statement
console.log(greet('Sumaya')); // Statement: function call with expression argument

// 6. Expression by itself (rare in real code but valid)
3 + 4; // Expression only — no effect here
