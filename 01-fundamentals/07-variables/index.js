/*
  Topic: var-let-const.js

  Demonstrates:
    - var is function-scoped and can be redeclared and reassigned
    - let is block-scoped, cannot be redeclared, but can be reassigned
    - const is block-scoped, cannot be redeclared or reassigned

  ⚠️ Note:
  This file does not cover full hoisting or scoping rules.
  For complete examples, see:
    → 16-scope/index.js
    → 17-hoisting/index.js
*/

// --- 1. var: function-scoped, redeclarable, hoisted with undefined ---

var a = 10;           // initial assignment
var a = 20;           // ✅ Redeclaration allowed
a = 30;               // ✅ Reassignment allowed

console.log("var a:", a); // 30

// --- 2. let: block-scoped, no redeclaration, reassignment allowed ---

let b = 40;           // initial assignment

// Uncommenting the following line throws a SyntaxError due to redeclaration:
// let b = 50;

b = 60;               // ✅ Reassignment allowed

console.log("let b:", b); // 60

// --- 3. const: block-scoped, no redeclaration or reassignment ---

const c = 70;         // initial assignment

// Uncommenting the following line throws a SyntaxError due to redeclaration:
// const c = 80;

// Uncommenting the following line throws a TypeError due to reassignment:
// c = 90;

console.log("const c:", c); // 70

// Note: const prevents reassignment but does NOT make objects immutable

// --- 4. Block behavior: var leaks, let and const are scoped properly ---

if (true) {
    var d = 100;        // function-scoped
    let e = 200;        // block-scoped
    const f = 300;      // block-scoped

    console.log("Inside block → var d:", d);   // 100
    console.log("Inside block → let e:", e);   // 200
    console.log("Inside block → const f:", f); // 300
}

console.log("Outside block → var d:", d);     // 100

// Uncommenting the following lines throws ReferenceError because e and f are block scoped:
// console.log(e);
// console.log(f);


// --- Optional: function scope demonstration ---

function testScope() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }
    console.log("Inside function → var x:", x); // 1
    // console.log(y); // ReferenceError: y is not defined
    // console.log(z); // ReferenceError: z is not defined
}
testScope();
