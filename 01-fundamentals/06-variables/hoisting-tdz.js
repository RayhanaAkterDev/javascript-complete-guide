/*
    Topic: hoisting-tdz.js

    This file demonstrates:
        - Variable hoisting with var, let, and const
        - Function hoisting
        - Temporal Dead Zone (TDZ) with let and const

    Hoisting is JavaScript's behavior of moving declarations to the top of their scope.
    However, only `var` and function declarations are hoisted in a way that allows usage before declaration.
*/

/* ---------------------------------
    1. var is hoisted and initialized as undefined
--------------------------------- */
console.log(a); // undefined (hoisted but not assigned)
var a = 10;
console.log(a); // 10

console.log('------');

/* ---------------------------------
    2. let is hoisted but not initialized (TDZ)
    - Accessing before declaration causes ReferenceError
--------------------------------- */
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

console.log('------');

/* ---------------------------------
    3. const is hoisted but not initialized (TDZ)
    - Must be declared and initialized before use
--------------------------------- */
// console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30

console.log('------');

/* ---------------------------------
    4. Function declarations are hoisted completely
    - Can be called before declaration
--------------------------------- */
sayHello(); // ✅ Works: "Hello from function declaration"

function sayHello() {
    console.log('Hello from function declaration');
}

console.log('------');

/* ---------------------------------
    5. Function expressions are NOT hoisted
    - Only the variable is hoisted, not the function body
--------------------------------- */
// greet(); // ❌ TypeError: greet is not a function
const greet = function () {
    console.log('Hello from function expression');
};
greet(); // ✅ Works when called after declaration

console.log('------');

/* ---------------------------------
    6. Arrow functions behave like const assignments
    - Not hoisted as callable functions
--------------------------------- */
// arrowGreet(); // ❌ ReferenceError or TypeError depending on declaration
const arrowGreet = () => {
    console.log('Hello from arrow function');
};
arrowGreet(); // ✅ Works when called after declaration
