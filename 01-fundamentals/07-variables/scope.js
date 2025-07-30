/*
  Topic: scope.js

  Demonstrates main scope types in JavaScript:
    - Global Scope
    - Function Scope
    - Block Scope
    - Lexical Scope (nested functions)
*/

// --- Global Scope ---

let globalVar = 'I am global';

function accessGlobal() {
    console.log('Inside function accessing globalVar:', globalVar); // I am global
}

accessGlobal();

console.log('Outside function globalVar:', globalVar); // I am global

// --- var: function-scoped, ignores blocks ---

function varExample() {
    var message = 'Hello';
    console.log('Initial message:', message); // Hello

    if (true) {
        var message = 'Hi'; // redeclares and overwrites
        console.log('Inside if block:', message); // Hi
    }

    console.log('After if block:', message); // Hi
}

varExample();

// --- let: block-scoped, no redeclaration, reassignment allowed ---

function letExample() {
    let count = 1;
    console.log('Initial count:', count); // 1

    if (true) {
        let count = 2; // new block-scoped variable
        console.log('Inside if block:', count); // 2
    }

    console.log('After if block:', count); // 1
}

letExample();

// --- const: block-scoped, no redeclaration or reassignment ---

function constExample() {
    const pi = 3.14;
    console.log('Initial pi:', pi); // 3.14

    // ❌ TypeError: Assignment to constant variable
    // pi = 3.14159;

    if (true) {
        const pi = 3; // new constant in block scope
        console.log('Inside if block pi:', pi); // 3
    }

    console.log('After if block pi:', pi); // 3.14
}


constExample();

// --- Lexical Scope: nested functions access outer variables ---

function outerFunction() {
    let outerVar = 'I am outside!';

    function innerFunction() {
        console.log('Accessing outerVar inside innerFunction:', outerVar); // I am outside!
    }

    innerFunction();
}

outerFunction();
