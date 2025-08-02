/*
  Topic: 01-declaration.js

  Demonstrates function declarations, starting from basic usage
  and progressing to more advanced behaviors like:
    - Defining named functions
    - Function hoisting behavior
    - Parameters and return values
    - Default parameters
    - Reusability and single-responsibility
*/

// --- 1. Basic function declaration ---

function sayHello() {
    console.log("Hello!");
}

sayHello(); // Hello!

// --- 2. Function with parameters and return value ---

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Sumaya")); // Hello, Sumaya!

// --- 3. Function with multiple parameters ---

function fullName(first, last) {
    return first + " " + last;
}

console.log(fullName("Rayhan", "Akter")); // Rayhan Akter

// --- 4. Function with default parameters ---

function welcome(user = "Guest") {
    return "Welcome, " + user + "!";
}

console.log(welcome());         // Welcome, Guest!
console.log(welcome("Amina"));  // Welcome, Amina!

// --- 5. Function hoisting: can be called before it's defined ---

showMessage("World"); // Works due to hoisting

function showMessage(name) {
    console.log("Hi, " + name);
}

// --- 6. Reusable utility function (real-world style) ---

function calculateDiscount(price, percent) {
    const discount = (price * percent) / 100;
    return price - discount;
}

console.log("Price after discount:", calculateDiscount(1000, 15)); // 850

// --- 7. Function for single responsibility (best practice) ---

function isAdult(age) {
    return age >= 18;
}

function printEligibility(name, age) {
    if (isAdult(age)) {
        console.log(name + " is an adult.");
    } else {
        console.log(name + " is a minor.");
    }
}

printEligibility("Lina", 19);  // Lina is an adult.
printEligibility("Rafi", 16);  // Rafi is a minor.
