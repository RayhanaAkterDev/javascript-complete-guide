/*
    Topic: keywords.js

    This file demonstrates usage of common JavaScript keywords
    categorized by their purpose in the language.

    Keywords are reserved words used to define JS syntax and structure.
    They cannot be used as variable, function, or class names.
*/

/* ---------------------------------
    1. Variable Declarations
--------------------------------- */
var x = 10; // function-scoped variable
let y = 20; // block-scoped variable (ES6)
const PI = 3.14; // block-scoped constant (ES6)

/* ---------------------------------
    2. Control Flow
--------------------------------- */
if (x < y) {
    console.log('x is less than y');
} else {
    console.log('x is greater or equal to y');
}

switch (x) {
    case 5:
        console.log('x is 5');
        break;
    case 10:
        console.log('x is 10');
        break;
    default:
        console.log('x is something else');
}

/* ---------------------------------
    3. Loops
--------------------------------- */
for (let i = 0; i < 3; i++) {
    console.log('For loop i =', i);
}

let j = 0;
while (j < 3) {
    console.log('While loop j =', j);
    j++;
}

/* ---------------------------------
    4. Functions
--------------------------------- */
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Sumaya'));

/* Generator function using 'yield' */
function* idGenerator() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

/* ---------------------------------
    5. Error Handling
--------------------------------- */
try {
    throw new Error('Something went wrong!');
} catch (err) {
    console.log('Caught error:', err.message);
} finally {
    console.log('Cleanup runs regardless of error');
}

/* ---------------------------------
    6. Classes & Modules (basic usage)
--------------------------------- */
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const pet = new Dog('Droopy');
pet.speak(); // Droopy barks.

/* ---------------------------------
    7. Logical & Contextual
--------------------------------- */
let isActive = true;
let result = typeof isActive; // "boolean"
let isDog = pet instanceof Dog; // true
let hasName = 'name' in pet; // true

console.log(result, isDog, hasName);

/* ---------------------------------
    8. Strict Mode
--------------------------------- */
('use strict');
// undeclaredVar = 50; // ❌ ReferenceError in strict mode

/* ---------------------------------
    9. Invalid Keyword Usage (Examples Only)
--------------------------------- */
// let let = 5;          // ❌ SyntaxError
// function return() {} // ❌ SyntaxError
// const class = 10;     // ❌ SyntaxError
