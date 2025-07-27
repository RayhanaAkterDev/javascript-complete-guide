/*
    Topic: implicit-coercion.js

    This file demonstrates implicit type coercion in JavaScript,
    which happens automatically when values of different types are
    used together in expressions or conditionals.
*/

/* ---------------------------------
    1. Coercion in Arithmetic
--------------------------------- */
console.log('5' + 1); // "51"  (number -> string)
console.log('5' - 1); // 4     (string -> number)
console.log(true + 1); // 2     (true -> 1)
console.log(false + 1); // 1
console.log(null + 1); // 1     (null -> 0)
console.log(undefined + 1); // NaN (undefined -> NaN)

/* ---------------------------------
    2. Coercion in Boolean Contexts
--------------------------------- */
if ('') console.log('Falsy'); // won't run
if ('hello') console.log('Truthy'); // ✅ runs
if (0) console.log('Falsy'); // won't run
if (100) console.log('Truthy'); // ✅ runs

/* ---------------------------------
    3. Coercion in Logical Operators
--------------------------------- */
console.log('hello' || 'world'); // "hello"
console.log('' || 'fallback'); // "fallback"
console.log(null && 'value'); // null
console.log(true && 'yes'); // "yes"

/* ---------------------------------
    🔗 Note:
    Coercion is automatic and often useful, but can be error-prone
    when not fully understood. Always test edge cases!
*/
