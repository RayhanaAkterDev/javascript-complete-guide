/*
  Topic: 02-array-methods.js
  Demonstrates commonly used array methods for:
    - Iteration
    - Transformation
    - Filtering
    - Searching
    - Looping with for and for...of

  📌 Note:
  These methods do not mutate the original array unless noted.
  Designed for everyday usage in JavaScript projects.
*/

// Sample array
const nums = [10, 20, 30, 40, 50];

// --- 1. Traditional for loop ---

for (let i = 0; i < nums.length; i++) {
    console.log(`for loop index ${i}:`, nums[i]);
}

// --- 2. for...of loop ---

for (const num of nums) {
    console.log("for...of value:", num);
}

// --- 3. forEach(): loop over elements (no return) ---

nums.forEach((num, index) => {
    console.log(`forEach index ${index}:`, num);
});

// --- 4. map(): transform each item, returns new array ---

const doubled = nums.map(num => num * 2);
console.log("Doubled:", doubled); // [20, 40, 60, 80, 100]

// --- 5. filter(): extract items that meet condition ---

const over30 = nums.filter(num => num > 30);
console.log("Filtered > 30:", over30); // [40, 50]

// --- 6. find(): find first match based on condition ---

const firstOver25 = nums.find(num => num > 25);
console.log("First > 25:", firstOver25); // 30

// --- 7. includes(): check existence of value ---

console.log("Includes 20?", nums.includes(20)); // true

// --- 8. indexOf(): get index of first match (or -1) ---

console.log("Index of 30:", nums.indexOf(30)); // 2
console.log("Index of 99:", nums.indexOf(99)); // -1
