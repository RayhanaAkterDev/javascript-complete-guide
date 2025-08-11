/*
  Topic: 04 - Statements & Expressions

  Demonstrates the difference between statements and expressions:
    - Statements perform actions.
    - Expressions produce values.
  Understanding this distinction helps write clear, bug-free code.
*/

// --- 1. Declaration Statement with Expression ---
// '5' is an expression; the whole line is a statement.

const number = 5;

// --- 2. Assignment with Expression ---
// 'number * 2' is an expression assigned to the variable 'doubled'.

const doubled = number * 2;

// --- 3. Conditional Statement Using Expression as Condition ---
// The if statement uses the expression 'doubled > 5' as its condition.

if (doubled > 5) {
    console.log('Doubled value is greater than 5'); // Statement: function call
}

// --- 4. Function Declaration Statement ---
// Defines a function using a statement.

function greet(name) {
    return 'Hello, ' + name; // Expression: string concatenation
}

// --- 5. Function Call Expression Inside Statement ---
// 'console.log' call is a statement; 'greet("Sumaya")' is an expression passed as argument.

console.log(greet('Sumaya'));

// --- 6. Expression Statement by Itself ---
// An expression alone; valid syntax but produces a value that is not used here.

3 + 4;  // Expression statement — produces 7 but result is ignored.
