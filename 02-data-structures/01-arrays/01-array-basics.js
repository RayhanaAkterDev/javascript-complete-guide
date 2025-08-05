/*
  Topic: 01-array-basics.js
  Covers the core concepts of JavaScript arrays:
    - Declaring arrays
    - Indexing elements
    - Modifying elements
    - Checking array length
    - Basic array operations
    - Using Array constructor

  📌 Note:
  This file provides beginner-friendly examples to build a solid array foundation.
*/

// --- 1. Declare arrays using [] syntax ---

const fruits = ["apple", "banana", "cherry"];
const numbers = [10, 20, 30, 40];

console.log("Fruits:", fruits);           // ['apple', 'banana', 'cherry']
console.log("Numbers:", numbers);         // [10, 20, 30, 40]

// --- 2. Declare arrays using Array constructor ---

const scores1 = new Array(10, 20, 30);    // array with values
const scores2 = new Array(3);              // array with length 3 (empty slots)

console.log("Array with values:", scores1); // [10, 20, 30]
console.log("Empty array length 3:", scores2); // [ <3 empty items> ]

// --- 3. Access elements using zero-based indexing ---

console.log("First fruit:", fruits[0]);   // apple
console.log("Second number:", numbers[1]); // 20

// --- 4. Modify array elements by index ---

fruits[1] = "blueberry";                  // replace 'banana' with 'blueberry'
console.log("Modified fruits:", fruits);  // ['apple', 'blueberry', 'cherry']

// --- 5. Add new elements by index or using push() ---

fruits[3] = "date";                       // manually add at index 3
fruits.push("elderberry");               // add to the end

console.log("After adding:", fruits);     // ['apple', 'blueberry', 'cherry', 'date', 'elderberry']

// --- 6. Check length of array ---

console.log("Total fruits:", fruits.length); // 5

// --- 7. Remove elements using pop() and shift() ---

const last = fruits.pop();               // removes last item → elderberry
const first = fruits.shift();            // removes first item → apple

console.log("Removed (last):", last);     // elderberry
console.log("Removed (first):", first);   // apple
console.log("Remaining fruits:", fruits); // ['blueberry', 'cherry', 'date']

// --- 8. Add elements at the beginning using unshift() ---

fruits.unshift("avocado");
console.log("After unshift:", fruits);    // ['avocado', 'blueberry', 'cherry', 'date']
