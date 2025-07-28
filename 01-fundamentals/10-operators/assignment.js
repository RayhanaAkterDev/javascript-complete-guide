/*
    Topic: assignment.js

    This file demonstrates JavaScript assignment operators,
    showing how values can be assigned and combined with
    arithmetic in shorthand form.
*/

/* ---------------------------------
    1. Basic Assignment
--------------------------------- */
let x = 10; // Assign 10 to x
console.log('x =', x); // 10

/* ---------------------------------
    2. Compound Assignment Operators
    Combines arithmetic with assignment
--------------------------------- */
x += 5; // Equivalent to: x = x + 5
console.log('x += 5:', x); // 15

x -= 3; // Equivalent to: x = x - 3
console.log('x -= 3:', x); // 12

x *= 2; // Equivalent to: x = x * 2
console.log('x *= 2:', x); // 24

x /= 4; // Equivalent to: x = x / 4
console.log('x /= 4:', x); // 6

x %= 5; // Equivalent to: x = x % 5
console.log('x %= 5:', x); // 1

/* ---------------------------------
    3. Assignment with Strings
--------------------------------- */
let str = 'Hello';
str += ' World'; // Append " World" to str
console.log('str += " World":', str); // "Hello World"

/* ---------------------------------
    🔗 Note:
    Compound assignments are shorthand for
    combining operations and assignments.
*/
