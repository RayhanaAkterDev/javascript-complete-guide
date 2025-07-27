/*
    Topic: type-checking.js

    This file demonstrates various techniques to check
    data types in JavaScript, including:
        - typeof operator
        - instanceof operator
        - Array.isArray()
        - Checking for null
        - Checking for NaN
*/

/* ---------------------------------
    1. typeof operator for primitives and functions
--------------------------------- */
console.log(typeof 'text'); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (known quirk)
console.log(typeof Symbol()); // symbol
console.log(typeof 10n); // bigint
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are objects)

/* ---------------------------------
    2. instanceof operator for objects and classes
--------------------------------- */
console.log([] instanceof Array); // true
console.log(new Date() instanceof Date); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true

/* ---------------------------------
    3. Checking arrays safely
--------------------------------- */
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

/* ---------------------------------
    4. Checking for null explicitly
--------------------------------- */
const val = null;
console.log(val === null); // true

/* ---------------------------------
    5. Checking for NaN (Not a Number)
    NaN is the only JS value not equal to itself.
--------------------------------- */
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

/* ---------------------------------
    6. Example: robust type check function
--------------------------------- */
function getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

console.log(getType(null)); // null
console.log(getType([])); // array
console.log(getType({})); // object
console.log(getType(123)); // number
console.log(getType('text')); // string

/*
    🔗 Note:
    Use typeof for primitives,
    instanceof for class instances,
    Array.isArray for arrays,
    and explicit checks for null and NaN.
*/
