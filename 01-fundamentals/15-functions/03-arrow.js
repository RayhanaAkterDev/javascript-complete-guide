/*
  Topic: 03-arrow.js

  Demonstrates arrow functions, starting from basic syntax
  and progressing to more advanced use cases:
    - Concise function expressions (ES6+)
    - Implicit returns
    - Parameter variations
    - Returning objects with shorthand syntax
    - Usage in array methods
    - Behavior of `this` context and its limitations
*/

// --- 1. Basic arrow function (single-line return) ---

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Sumaya")); // Hello, Sumaya!

// --- 2. Arrow function with multiple parameters ---

const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20

// --- 3. Arrow function with no parameters ---

const getTime = () => new Date().toLocaleTimeString();

console.log("Current time:", getTime());

// --- 4. Multi-line arrow function with explicit return ---

const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};

console.log("Area:", calculateArea(4, 3)); // 12

// --- 5. Returning an object literal with shorthand property names ---

const getUser = (name, role) => ({
    name,       // shorthand for name: name
    role,       // shorthand for role: role
    active: true,
});

console.log(getUser("Sumaya", "Developer"));
// { name: 'Sumaya', role: 'Developer', active: true }

// --- 6. Arrow function in array methods (map, filter) ---

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// --- 7. ⚠️ Arrow functions do NOT bind their own `this` ---

const person = {
    name: "Lina",
    sayHi: () => {
        console.log("Hi, I'm " + this.name); // ❌ 'this' is NOT the person object
    },
};

person.sayHi(); // Hi, I'm undefined

// ✅ Correct way: use regular function to access `this`

const personFixed = {
    name: "Lina",
    sayHi() {
        console.log("Hi, I'm " + this.name); // ✅ 'this' correctly refers to personFixed
    },
};

personFixed.sayHi(); // Hi, I'm Lina
