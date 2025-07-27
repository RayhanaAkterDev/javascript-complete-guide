/*
    Topic: equality-coercion.js

    This file demonstrates how type coercion affects comparisons
    using `==` (loose equality) vs `===` (strict equality).
*/

/* ---------------------------------
    1. Loose Equality (==)
--------------------------------- */
console.log('5' == 5); // true  (string -> number)
console.log(0 == false); // true  (false -> 0)
console.log('' == false); // true  ("" -> 0)
console.log(null == undefined); // true
console.log('0' == false); // true

/* ---------------------------------
    2. Strict Equality (===)
--------------------------------- */
console.log('5' === 5); // false
console.log(0 === false); // false
console.log(null === undefined); // false
console.log(true === 1); // false

/* ---------------------------------
    3. Recommended: Avoid ==
--------------------------------- */
function isZero(value) {
    return value === 0; // safer
}

console.log(isZero(0)); // true
console.log(isZero(false)); // false

/* ---------------------------------
    🔗 Note:
    Always use === and !== to avoid unexpected coercion bugs.
*/
