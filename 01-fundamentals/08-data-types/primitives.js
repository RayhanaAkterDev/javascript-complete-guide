/*
    Topic: var-let-const.js

    This file demonstrates the differences between var, let, and const
    in terms of:
        - Declaration behavior
        - Reassignment
        - Redeclaration
        - Basic block visibility

    Note: For a deeper understanding of scope rules,
    refer to the separate file: scope.js
*/

/* ---------------------------------
    1. var — function-scoped
    - Can be redeclared
    - Can be reassigned
--------------------------------- */
var a = 10;
var a = 20; // ✅ Redeclaration allowed
a = 30; // ✅ Reassignment allowed
console.log('var a:', a); // 30

/* ---------------------------------
    2. let — block-scoped
    - Cannot be redeclared in the same scope
    - Can be reassigned
--------------------------------- */
let b = 40;
// let b = 50; // ❌ SyntaxError: Identifier 'b' has already been declared
b = 60; // ✅ Reassignment allowed
console.log('let b:', b); // 60

/* ---------------------------------
    3. const — block-scoped
    - Cannot be redeclared
    - Cannot be reassigned
--------------------------------- */
const c = 70;
// const c = 80; // ❌ SyntaxError
// c = 90;       // ❌ TypeError
console.log('const c:', c); // 70

console.log('------');

/* ---------------------------------
    4. Basic Block Behavior
    Demonstrates that:
    - var is NOT block-scoped (leaks out)
    - let and const ARE block-scoped
--------------------------------- */
if (true) {
    var d = 100;
    let e = 200;
    const f = 300;

    console.log('Inside block: var d =', d); // 100
    console.log('Inside block: let e =', e); // 200
    console.log('Inside block: const f =', f); // 300
}

console.log('Outside block: var d =', d); // 100
// console.log(e); // ❌ ReferenceError
// console.log(f); // ❌ ReferenceError

console.log('------');

/*
    🔗 Note:
    This file focuses only on how var, let, and const differ in their declaration behavior.
    For in-depth understanding of scopes (global, function, block),
    please refer to: scope.js
*/
