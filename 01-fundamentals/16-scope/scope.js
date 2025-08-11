/*
  Topic: scope.js

  Demonstrates core JavaScript scope concepts:
    - Global scope
    - Function scope
    - Block scope (let, const)
    - Lexical scope and closures
    - Variable shadowing

  Examples progress from basic to slightly advanced.
*/

// --- 1. Global Scope ---

var globalVar = "I am a var in global scope (hoisted)";
let globalLet = "I am a let in global scope (not hoisted)";

function accessGlobal() {
    console.log("Inside function, globalVar:", globalVar);
    console.log("Inside function, globalLet:", globalLet);
}

accessGlobal();

console.log("Outside function, globalVar:", globalVar);
console.log("Outside function, globalLet:", globalLet);

// --- 2. Function Scope ---

function functionScopeExample() {
    var funcVar = "I'm function scoped (var)";
    let funcLet = "I'm function scoped (let)";

    console.log(funcVar);
    console.log(funcLet);
}

functionScopeExample();

// The following lines will cause ReferenceError if uncommented:
// console.log(funcVar); // ❌ Not accessible here
// console.log(funcLet); // ❌ Not accessible here

// --- 3. Block Scope ---

if (true) {
    var blockVar = "var ignores block, scoped to function/global";
    let blockLet = "let is block scoped, not accessible outside block";
    const blockConst = "const is block scoped, not accessible outside block";

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

console.log("Outside block, blockVar (var):", blockVar);

// The following lines will cause ReferenceError if uncommented:
// console.log(blockLet);   // ❌ Not accessible outside block
// console.log(blockConst); // ❌ Not accessible outside block

// --- 4. Lexical Scope and Closures ---

function outerFunction() {
    let outerVar = "I am from outer scope";

    function innerFunction() {
    // innerFunction remembers the environment it was created in
        console.log("Accessing outerVar inside innerFunction:", outerVar);
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // The inner function retains access to outerVar

// --- 5. Variable Shadowing ---

let shadowVar = "Global shadowVar";

function shadowExample() {
    let shadowVar = "Local shadowVar";  // Shadows global variable inside this scope
    console.log("Inside function, shadowVar:", shadowVar);
}

shadowExample();
console.log("Outside function, shadowVar:", shadowVar);

// --- 6. Closure with Parameter ---

function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;  // `multiplier` captured in closure
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double 5:", double(5));  // 10
console.log("Triple 5:", triple(5));  // 15
