/*
    Topic: ternary.js

    This file demonstrates the JavaScript ternary operator,
    a shorthand for simple conditional expressions.
*/

/* ---------------------------------
    1. Basic Ternary Usage
--------------------------------- */
let age = 18;

let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log('Can vote:', canVote); // "Yes, can vote"

/* ---------------------------------
    2. Nested Ternary (use sparingly)
--------------------------------- */
let score = 75;

let grade = (score >= 90) ? "A" :
    (score >= 75) ? "B" :
        (score >= 60) ? "C" : "F";

console.log('Grade:', grade); // "B"

/* ---------------------------------
    3. Using Ternary in Expressions
--------------------------------- */
let access = (age >= 18) ? true : false;
console.log('Access granted:', access); // true

/* ---------------------------------
    🔗 Note:
    - Ternary operator is concise but avoid complex nested usage for readability.
*/
