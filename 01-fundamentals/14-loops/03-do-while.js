/*
  Topic: do-while.js (Step-by-step Advanced Examples)

  Demonstrates usage of the `do...while` loop starting from basic concepts
  and progressing to more advanced patterns:
    - Guaranteed one-time execution
    - Conditional repetition
    - Attempt simulation
    - User input-like logic
    - Filtering and validation
    - Safe break conditions
    - Nested loops
*/

// --- 1. Basic do-while: log at least once even when false ---

let loginSuccess = false;

do {
    console.log("🔐 Checking credentials... (runs at least once)");
} while (loginSuccess);

// --- 2. Standard counting: print numbers from 1 to 3 ---

let count = 1;

do {
    console.log("Counting:", count); // 1, 2, 3
    count++;
} while (count <= 3);

// --- 3. Reverse counting: from 3 down to 1 ---

let down = 3;

do {
    console.log("Countdown:", down); // 3, 2, 1
    down--;
} while (down > 0);

// --- 4. Simulated attempt loop: retry up to 3 times ---

let tries = 0;
const maxTries = 3;

do {
    console.log("Attempt number:", tries + 1);
    tries++;
} while (tries < maxTries);

// --- 5. Value increase until valid condition (simulated input logic) ---

let age = 0;

do {
    age++; // Simulating user re-entry until valid
    console.log("Entered age:", age);
} while (age < 18);

console.log("✅ Age accepted:", age);

// --- 6. Use `break`: stop when number divisible by 4 is found ---

let n = 1;

do {
    if (n % 4 === 0) {
        console.log("Found divisible by 4:", n);
        break;
    }
    console.log("Checking:", n);
    n++;
} while (n <= 10);

// --- 7. Filter even numbers from array using do-while ---

const numbers = [5, 12, 7, 6, 9];
let i = 0;

do {
    if (numbers[i] % 2 === 0) {
        console.log("Even number:", numbers[i]);
    }
    i++;
} while (i < numbers.length);

// --- 8. Nested do-while: 2x2 grid coordinates ---

let row = 1;

do {
    let col = 1;
    let line = "";

    do {
        line += `[${row},${col}] `;
        col++;
    } while (col <= 2);

    console.log(line.trim());
    row++;
} while (row <= 2);

// Output:
// [1,1] [1,2]
// [2,1] [2,2]
