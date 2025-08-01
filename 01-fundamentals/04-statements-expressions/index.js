/*
  Topic: 04 - Statements & Expressions

  Demonstrates the difference between statements and expressions:
    - Statements perform actions
    - Expressions produce values
  Understanding this distinction helps write clear, bug-free code.
*/

// --- 1. Declaration Statement with Expression ---
// '5' is an expression; the whole line is a statement.

const number = 5;

// --- 2. Assignment with Expression ---
// 'number * 2' is an expression assigned to doubled.

const doubled = number * 2;

// --- 3. Conditional Statement Using Expression as Condition ---
// if statement uses expression 'doubled > 5' as condition.

if (doubled > 5) {
    console.log('Doubled value is greater than 5'); // Statement: function call
}

// --- 4. Function Declaration Statement ---
// Defines a function using a statement.

function greet(name) {
    return 'Hello, ' + name; // Expression: string concatenation
}

// --- 5. Function Call Expression Inside Statement ---
// console.log call is a statement; greet('Sumaya') is an expression argument.

console.log(greet('Sumaya'));

// --- 6. Expression by Itself ---
// An expression alone; valid but has no effect here.

3 + 4;
