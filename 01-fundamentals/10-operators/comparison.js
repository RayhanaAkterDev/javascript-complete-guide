/*
    Topic: comparison.js

    This file demonstrates JavaScript comparison operators,
    showing how values are compared for equality, inequality,
    and relative ordering.
*/

/* ---------------------------------
    1. Equality and Inequality
--------------------------------- */
console.log('5 == "5":', 5 == '5'); // true  (loose equality, type coercion)
console.log('5 === "5":', 5 === '5'); // false (strict equality, no coercion)
console.log('5 != "5":', 5 != '5'); // false (loose inequality)
console.log('5 !== "5":', 5 !== '5'); // true  (strict inequality)

/* ---------------------------------
    2. Relational Comparisons
--------------------------------- */
console.log('3 > 2:', 3 > 2); // true
console.log('3 >= 3:', 3 >= 3); // true
console.log('2 < 5:', 2 < 5); // true
console.log('2 <= 1:', 2 <= 1); // false

/* ---------------------------------
    3. Comparing Objects
--------------------------------- */
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log('obj1 == obj2:', obj1 == obj2); // false (different references)
console.log('obj1 === obj2:', obj1 === obj2); // false
console.log('obj1 === obj3:', obj1 === obj3); // true  (same reference)

/* ---------------------------------
    🔗 Note:
    - Use strict equality (`===`) to avoid type coercion pitfalls.
    - Objects are compared by reference, not by content.
*/
