/*
  Topic: 05 - JavaScript Keywords

  This file demonstrates common JavaScript keywords categorized by their purpose.
  It focuses on clarity and simplicity for beginners, following modern best practices.
  Keywords are reserved words that define JS syntax and cannot be used as identifiers.
*/

/* ---------------------------------
  1. Variable Declarations
  Use let and const for block-scoped variables and constants.
--------------------------------- */
let age = 25;           // Variable that can change
const name = 'Sumaya';  // Constant value that cannot change

console.log(age, name);

/* ---------------------------------
  2. Control Flow Keywords
  Use keywords to make decisions and control program flow.
--------------------------------- */
if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

/* ---------------------------------
  3. Loops
  Repeat tasks using for and while loops.
--------------------------------- */
for (let i = 0; i < 3; i++) {
  console.log('For loop iteration:', i);
}

let count = 0;
while (count < 3) {
  console.log('While loop count:', count);
  count++;
}

/* ---------------------------------
  4. Functions
  Define reusable blocks of code with the function keyword.
--------------------------------- */
function greet(userName) {
  return `Hello, ${userName}!`;
}

console.log(greet(name));

/* ---------------------------------
  5. Error Handling
  Use try-catch-finally to handle errors gracefully.
--------------------------------- */
try {
  throw new Error('Something went wrong!');
} catch (error) {
  console.log('Caught error:', error.message);
} finally {
  console.log('Cleanup code runs regardless of errors');
}

/* ---------------------------------
  6. Classes (Basic Example)
  Use class and extends keywords to create and inherit classes.
--------------------------------- */
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`${this.type} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.type} barks.`);
  }
}

const pet = new Dog('Dog');
pet.speak();

/* ---------------------------------
  7. Logical & Contextual Keywords
  Examples of typeof, instanceof, and in keywords.
--------------------------------- */
console.log(typeof age);            // "number"
console.log(pet instanceof Dog);   // true
console.log('type' in pet);         // true

/* ---------------------------------
  8. Strict Mode
  Use 'use strict' to enforce stricter parsing and error handling.
--------------------------------- */
'use strict';
// Uncommenting below line causes ReferenceError in strict mode:
// undeclaredVar = 10;

/* ---------------------------------
  9. Invalid Keyword Usage (Examples)
  These are invalid uses of reserved keywords (commented out).
--------------------------------- */
// let let = 5;           // ❌ SyntaxError: 'let' is reserved
// function return() {}   // ❌ SyntaxError: 'return' is reserved
// const class = 10;      // ❌ SyntaxError: 'class' is reserved
