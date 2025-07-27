/*
    Topic: 04 - Statements & Expressions

    This file demonstrates the difference between statements and expressions in JavaScript.
    - Statements perform actions.
    - Expressions evaluate to values.
*/

/* ---------------------------------
    1. Variable Declaration Statement
    - Declares a variable and assigns an expression value
--------------------------------- */
let number = 5; // Expression: 5; Statement: entire declaration line

/* ---------------------------------
    2. Assignment Statement with Expression
    - Assigns the result of an expression to a variable
--------------------------------- */
let doubled = number * 2; // Expression: number * 2; Statement: entire assignment line

/* ---------------------------------
    3. Conditional Statement with Expression
    - Uses an expression in the if condition
--------------------------------- */
if (doubled > 5) { // Expression: doubled > 5
    console.log('Doubled value is greater than 5'); // Statement: function call
}

/* ---------------------------------
    4. Function Declaration Statement
    - Function contains an expression in the return statement
--------------------------------- */
function greet(name) {
    return 'Hello, ' + name; // Expression: 'Hello, ' + name
}

/* ---------------------------------
    5. Expression Used as Statement
    - Function call expression passed as argument
--------------------------------- */
console.log(greet('Sumaya')); // Expression: greet('Sumaya'); Statement: console.log call

/* ---------------------------------
    6. Expression Alone
    - Expression by itself; valid but no effect
--------------------------------- */
3 + 4; // Expression only, no statement
