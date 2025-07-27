/*
    Topic: explicit-conversion.js

    This file demonstrates explicit type conversion (type casting)
    using built-in global functions and methods:
        - String()
        - Number()
        - Boolean()
        - parseInt()
        - parseFloat()
        - .toString()

    These conversions are manual and controlled by the developer.
*/

/* ---------------------------------
    1. Number to String
--------------------------------- */
const num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"

/* ---------------------------------
    2. Boolean to String
--------------------------------- */
const isLoggedIn = true;
console.log(String(isLoggedIn)); // "true"
console.log(isLoggedIn.toString()); // "true"

/* ---------------------------------
    3. String to Number
--------------------------------- */
console.log(Number('123')); // 123
console.log(Number('3.14')); // 3.14
console.log(Number('abc')); // NaN

/* ---------------------------------
    4. Boolean to Number
--------------------------------- */
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/* ---------------------------------
    5. String to Boolean
--------------------------------- */
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true

/* ---------------------------------
    6. Number to Boolean
--------------------------------- */
console.log(Boolean(0)); // false
console.log(Boolean(100)); // true

/* ---------------------------------
    7. Using parseInt and parseFloat
--------------------------------- */
console.log(parseInt('42px')); // 42
console.log(parseFloat('3.14kg')); // 3.14

console.log(parseInt('abc')); // NaN
console.log(parseFloat('')); // NaN

/* ---------------------------------
    🔗 Note:
    Explicit conversion is clearer and avoids the unpredictable results
    often caused by JavaScript’s automatic coercion.
*/
