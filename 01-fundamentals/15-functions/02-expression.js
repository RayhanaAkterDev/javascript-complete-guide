/*
  Topic: 02-expression.js

  Demonstrates function expressions, starting from basic usage
  and progressing to advanced behaviors and use cases:
    - Assigning anonymous functions to variables
    - Lack of hoisting behavior
    - Using parameters and return values
    - Passing expressions as callbacks
    - Expression used in conditional logic
    - Reusability in dynamic code patterns
*/

// --- 1. Basic function expression assigned to a variable ---

const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Sumaya")); // Hello, Sumaya!

// --- 2. Function expression with multiple parameters ---

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// --- 3. ❌ Not hoisted — calling before definition causes ReferenceError ---

// console.log(divide(10, 2)); // ❌ ReferenceError: Cannot access 'divide' before initialization

const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2)); // 5

// --- 4. Using function expression as a callback ---

function process(callback) {
    console.log("Processing...");
    callback("✅ Task complete");
}

process(function(msg) {
    console.log("Callback says:", msg);
});

// --- 5. Conditional logic with function expressions ---

let operation;

const action = "subtract";

if (action === "add") {
    operation = function(x, y) {
        return x + y;
    };
} else if (action === "subtract") {
    operation = function(x, y) {
        return x - y;
    };
}

console.log("Result:", operation(10, 3)); // 7

// --- 6. Return function from another function (function factory pattern) ---

function makeGreeting(message) {
    return function(name) {
        return message + ", " + name + "!";
    };
}

const morningGreet = makeGreeting("Good morning");
console.log(morningGreet("Rayhan")); // Good morning, Rayhan!
