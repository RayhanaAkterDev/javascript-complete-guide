/*
  Topic: for.js (Step-by-step Advanced Examples)

  Demonstrates the `for` loop starting from basic usage and
  progressing to advanced concepts, including:
    - Basic iteration
    - Step increment
    - Reverse counting
    - Nested loops
    - Loop control with break and continue
    - Iterating arrays and filtering
    - Summation and practical use cases
*/

// --- 1. Basic for loop: counting from 0 to 4 ---

for (let i = 0; i < 5; i++) {
    console.log("Basic count:", i); // 0,1,2,3,4
}

// --- 2. For loop with step increment: even numbers 2 to 10 ---

for (let i = 2; i <= 10; i += 2) {
    console.log("Even number:", i); // 2,4,6,8,10
}

// --- 3. Reverse loop: countdown from 5 to 1 ---

for (let i = 5; i > 0; i--) {
    console.log("Countdown:", i); // 5,4,3,2,1
}

// --- 4. Nested loops: printing a 3x3 grid coordinates ---

for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += `[${row},${col}] `;
    }
    console.log(line.trim());
}
// Output:
// [1,1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

// --- 5. Using `continue`: skip multiples of 3 in 1 to 10 ---

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue; // skip multiples of 3
    }
    console.log("Not multiple of 3:", i);
}

// --- 6. Using `break`: stop loop when number divisible by 7 found ---

for (let i = 1; i <= 20; i++) {
    if (i % 7 === 0) {
        console.log("Found multiple of 7:", i);
        break; // exit loop early
    }
    console.log("Checking:", i);
}

// --- 7. Looping over an array and filtering active users ---

const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
];

for (let i = 0; i < users.length; i++) {
    if (!users[i].active) {
        continue; // skip inactive users
    }
    console.log("Active user:", users[i].name);
}

// --- 8. Summation: calculate sum of even numbers from 1 to 20 ---

let sumEven = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("Sum of even numbers 1-20:", sumEven);
