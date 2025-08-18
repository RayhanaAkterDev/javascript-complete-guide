/*
  Topic: index.js (Hoisting)

  Demonstrates JavaScript hoisting in:
    - Variable declarations (var vs let/const)
    - Function declarations vs expressions
    - Arrow functions and hoisting
    - Temporal Dead Zone (TDZ) behavior

  Hoisting moves declarations to the top of their scope.
  Only `var` and function declarations are initialized during hoisting.
  `let`, `const`, and function expressions stay uninitialized (TDZ).
*/

// --- 1. Function declaration is hoisted fully ---

sayHello();  // ✅ Works: Function declaration is hoisted

function sayHello() {
    console.log("Hello from declared function!");
}

// --- 2. Function expression is not hoisted ---

// greet();  // ❌ ReferenceError: Cannot access 'greet' before initialization

const greet = function () {
    console.log("Hello from function expression!");
};

greet(); // ✅ Works after the declaration

// --- 3. var is hoisted but initialized with undefined ---

console.log("var a:", a); // ✅ undefined due to hoisting

var a = 10;

// --- 4. let is hoisted but not initialized (TDZ) ---

// console.log("let b:", b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log("let b:", b); // ✅ 20

// --- 5. const is hoisted but not initialized (TDZ) ---

// console.log("const c:", c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 30;

console.log("const c:", c); // ✅ 30

// --- 6. Arrow functions behave like const assignments ---

// ❌ ReferenceError or TypeError if accessed before declaration
// arrowGreet(); // Uncommenting this will throw an error

const arrowGreet = () => {
    console.log("Hello from arrow function!");
};

arrowGreet(); // ✅ Works after declaration
