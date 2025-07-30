/*
  Topic: hoisting-tdz.js

  Demonstrates:
    - Variable hoisting with var, let, and const
    - Function hoisting
    - Temporal Dead Zone (TDZ) with let and const

  Hoisting moves declarations to the top of their scope.
  Only var and function declarations are hoisted to allow usage before declaration.
*/

// --- var is hoisted and initialized as undefined ---

console.log(a); // undefined (hoisted but not assigned)
var a = 10;
console.log(a); // 10

// --- let is hoisted but not initialized (TDZ) ---
// ❌ ReferenceError: Cannot access 'b' before initialization
// console.log(b);
let b = 20;
console.log(b); // 20

// --- const is hoisted but not initialized (TDZ) ---
// ❌ ReferenceError: Cannot access 'c' before initialization
// console.log(c);
const c = 30;
console.log(c); // 30

// --- Function declarations are hoisted completely ---
// ✅ Can be called before declaration

sayHello(); // "Hello from function declaration"

function sayHello() {
    console.log('Hello from function declaration');
}

// --- Function expressions are NOT hoisted ---
// ❌ TypeError: greet is not a function
// greet();
const greet = function () {
    console.log('Hello from function expression');
};
greet(); // ✅ Works when called after declaration

// --- Arrow functions behave like const assignments ---
// ❌ ReferenceError or TypeError if accessed before declaration
// arrowGreet();
const arrowGreet = () => {
    console.log('Hello from arrow function');
};
arrowGreet(); // ✅ Works when called after declaration
