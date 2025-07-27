/*
    Topic: scope.js

    This file explains the main types of scope in JavaScript:
        - Global Scope
        - Function Scope
        - Block Scope

    It demonstrates how var, let, and const behave in different scopes,
    and also covers lexical scope (nested function access).
*/

/* ---------------------------------
    1. Global Scope
    - Variables declared outside any function or block
    - Accessible anywhere in the file (including inside functions)
--------------------------------- */
let globalVar = 'I am global';

function accessGlobal() {
    console.log('Inside function accessing globalVar:', globalVar); // I am global
}

accessGlobal();
console.log('Outside function globalVar:', globalVar); // I am global

console.log('------');

/* ---------------------------------
    2. var - Function Scoped
    - Can be redeclared and reassigned inside same function
    - Block statements do NOT create new scope for var
--------------------------------- */
function varExample() {
    var message = 'Hello';
    console.log('Initial message:', message); // Hello

    if (true) {
        var message = 'Hi'; // redeclares & overwrites the same variable
        console.log('Inside if block:', message); // Hi
    }

    console.log('After if block:', message); // Hi - outer message changed
}
varExample();

console.log('------');

/* ---------------------------------
    3. let - Block Scoped
    - Cannot be redeclared in the same scope
    - Can be reassigned
    - Block statements create a new scope for let
--------------------------------- */
function letExample() {
    let count = 1;
    console.log('Initial count:', count); // 1

    if (true) {
        let count = 2; // new variable inside this block scope
        console.log('Inside if block:', count); // 2
    }

    console.log('After if block:', count); // 1 - outer count unchanged
}
letExample();

console.log('------');

/* ---------------------------------
    4. const - Block Scoped and Immutable
    - Behaves like let in terms of block scope
    - Value cannot be reassigned once assigned
--------------------------------- */
function constExample() {
    const pi = 3.14;
    console.log('Initial pi:', pi); // 3.14

    // pi = 3.14159; // ❌ Error: Assignment to constant variable

    if (true) {
        const pi = 3; // new constant inside block scope
        console.log('Inside if block pi:', pi); // 3
    }

    console.log('After if block pi:', pi); // 3.14 - outer pi unchanged
}
constExample();

console.log('------');

/* ---------------------------------
    5. Lexical Scope (Nested Functions)
    - Inner functions can access variables from outer functions
--------------------------------- */
function outerFunction() {
    let outerVar = 'I am outside!';

    function innerFunction() {
        console.log('Accessing outerVar inside innerFunction:', outerVar); // I am outside!
    }

    innerFunction();
}

outerFunction();

console.log('------');

/* ---------------------------------
    6. Summary
    - Global scope variables are accessible everywhere
    - var is function scoped and ignores blocks
    - let and const are block scoped and do not leak out of blocks
    - const cannot be reassigned after declaration
    - Inner functions have access to outer function variables (lexical scope)
--------------------------------- */
