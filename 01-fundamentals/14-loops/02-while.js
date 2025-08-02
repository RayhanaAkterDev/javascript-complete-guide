/*
  Topic: while.js (Step-by-step Advanced Examples)

  Demonstrates usage of the `while` loop, starting from basic concepts
  and progressing to more advanced patterns:
    - Basic counting
    - Conditional accumulation
    - Infinite loop prevention
    - Nested while loops
    - User-defined conditions
    - Filtering data in arrays
    - Loop control using break and continue
*/

// --- 1. Basic while loop: count from 0 to 2 ---

let i = 0;

while (i < 3) {
    console.log("While loop count:", i); // 0,1,2
    i++;
}

// --- 2. Accumulate sum while total is less than 10 ---

let sum = 0;
let num = 1;

while (sum < 10) {
    sum += num;
    console.log("Sum is now:", sum);
    num++;
}

// --- 3. Reverse while loop: count down from 3 to 1 ---

let j = 3;

while (j > 0) {
    console.log("Countdown:", j); // 3,2,1
    j--;
}

// --- 4. Infinite loop with break (simulated safe loop) ---

let count = 0;

while (true) {
    if (count === 3) break; // avoid infinite loop
    console.log("Safe break at:", count);
    count++;
}

// --- 5. Nested while loops: print 2x2 grid coordinates ---

let row = 1;

while (row <= 2) {
    let col = 1;
    let line = "";
    while (col <= 2) {
        line += `[${row},${col}] `;
        col++;
    }
    console.log(line.trim());
    row++;
}
// Output:
// [1,1] [1,2]
// [2,1] [2,2]

// --- 6. Use `continue` to skip even numbers between 1 to 5 ---

let k = 1;

while (k <= 5) {
    if (k % 2 === 0) {
        k++;
        continue;
    }
    console.log("Odd number:", k); // 1,3,5
    k++;
}

// --- 7. Filtering an array using while loop ---

const nums = [4, 7, 10, 3, 6];
let index = 0;

while (index < nums.length) {
    if (nums[index] > 5) {
        console.log("Filtered (greater than 5):", nums[index]);
    }
    index++;
}

// --- 8. While loop with user-defined condition simulation ---

let items = ["apple", "banana", "grape"];
let target = "banana";
let idx = 0;

while (idx < items.length) {
    if (items[idx] === target) {
        console.log("🍌 Found:", items[idx]);
        break;
    }
    idx++;
}
