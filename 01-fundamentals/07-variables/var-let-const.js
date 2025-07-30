/*
  Topic: var-let-const.js

  Demonstrates differences between var, let, and const in:
    - Declaration behavior
    - Redeclaration
    - Reassignment
    - Basic block scope visibility

  For detailed scope rules, see: scope.js
*/

// --- var: function-scoped, redeclarable, hoisted with undefined ---

var a = 10;           // initial assignment
var a = 20;           // ✅ Redeclaration allowed
a = 30;               // ✅ Reassignment allowed

console.log("var a:", a); // 30

// --- let: block-scoped, no redeclaration, reassignment allowed ---

let b = 40;           // initial assignment

// ❌ SyntaxError: Identifier 'b' has already been declared
// let b = 50;

b = 60;               // ✅ Reassignment allowed

console.log("let b:", b); // 60

// --- const: block-scoped, no redeclaration or reassignment ---

const c = 70;         // initial assignment

// ❌ SyntaxError: Identifier 'c' has already been declared
// const c = 80;

// ❌ TypeError: Assignment to constant variable
// c = 90;

console.log("const c:", c); // 70

// --- Scope behavior in blocks: var leaks outside block, let and const do not ---

if (true) {
    var d = 100;        // function-scoped
    let e = 200;        // block-scoped
    const f = 300;      // block-scoped

    console.log("Inside block → var d:", d);   // 100
    console.log("Inside block → let e:", e);   // 200
    console.log("Inside block → const f:", f); // 300
}

console.log("Outside block → var d:", d);     // 100

// ❌ ReferenceError: e is not defined
// console.log(e);

// ❌ ReferenceError: f is not defined
// console.log(f);
