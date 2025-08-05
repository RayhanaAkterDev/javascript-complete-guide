/*
  Topic: 03-advanced-array-methods.js
  Demonstrates more advanced methods for:
    - Aggregation
    - Testing
    - Sorting
    - Flattening
    - Extracting and modifying parts of arrays (slice, splice)

  ⚠️ Note:
  Some methods like `sort()` and `splice()` mutate the array.
  Use spread syntax or slice() to avoid unwanted mutation.
*/

const scores = [45, 80, 29, 100, 67];

// --- 1. reduce(): accumulate into a single value ---

const total = scores.reduce((acc, val) => acc + val, 0);
console.log("Total score:", total); // 321

// --- 2. some(): at least one passes test ---

const hasFail = scores.some(score => score < 33);
console.log("Has fail?", hasFail); // true

// --- 3. every(): all items must pass test ---

const allPassed = scores.every(score => score >= 30);
console.log("All passed?", allPassed); // false

// --- 4. sort(): sorts by default as strings, so use compare function ---

const sortedScores = [...scores].sort((a, b) => a - b); // ascending
console.log("Sorted:", sortedScores); // [29, 45, 67, 80, 100]

// --- 5. flat(): flattens nested arrays (1 level by default) ---

const nested = [1, 2, [3, 4], [5, [6]]];
const flattened = nested.flat(); // one level flatten
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5, [6]]

// --- 6. slice(): create shallow copy of part of array ---

const names = ["A", "B", "C", "D"];
const part = names.slice(1, 3); // ["B", "C"]
console.log("Slice part:", part);

// --- 7. splice(): modify array in-place (remove, replace, add) ---

const nums = [10, 20, 30];
nums.splice(1, 1, 25); // remove 1 item at index 1 and add 25
console.log("After splice:", nums); // [10, 25, 30]
