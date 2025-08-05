const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'
console.log(fruits[3]); // Output: undefined

console.log(fruits.length); // Output: 3
console.log(fruits[fruits.length - 1]); // Output: 'cherry'
console.log(fruits[fruits.length - 2]); // Output: 'banana'

// ---------------------------------------------

const scores = new Array (10,20);
console.log(scores); // Output: [ 10, 20]
console.log(scores.length); // Output: 2

const empty = new Array(4);
console.log(empty); // Output: [ <4 empty items> ]
console.log(empty.length); // Output: 4;

// ---------------------------------------------

const arr1 = new Array(3);
arr1.forEach(x => console.log(x)); // No output, because slots are empty

// const arr2 = [undefined, undefined, undefined];
// arr2.forEach(x => console.log(x));

// Output:
//      undefined
//      undefined
//      undefined

const arr = [undefined, undefined, undefined]; // explicit elements
const arr2 = Array.from({ length: 3 });       // creates array with 3 undefined elements

console.log(arr); // Output: [ undefined, undefined, undefined ]
console.log(arr2); // Output: [ undefined, undefined, undefined ]

// ---------------------------------------------

// array access and modify

const nums = [5, 10, 15];
console.log(nums[0]); // 5

nums[0] = 25; // modify first element
console.log(nums[0]); // 25

// basic array methods
nums.push(40); // add element to the end
console.log(nums); // Output: [ 25, 10, 15, 40 ]

nums.pop(); // remove last element
console.log(nums); // Output: [ 25, 10, 15 ]

nums.shift(); // remove first element
console.log(nums); // Output: [ 10, 15 ]

nums.unshift(20); // add element to the beginning
console.log(nums); // Output: [ 20, 10, 15 ]

// ----------------------------------------------

// loops in array

for(let i = 0; i<fruits.length; i++){
    console.log("use of `for` loop in array: " + fruits[i]);
}

for(let fruit of fruits){
    console.log("use of `for...of` loop in array: "+fruit);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

// ---------------------------------------------

// advanced array methods

const numbers = [1,2,3,4,5];

const doubled = numbers.map(n=>n*2);
console.log(doubled); // Output: [ 2, 4, 6, 8, 10 ]

const odd = numbers.filter(n=> n%2 !== 0);
console.log(odd); // Output: [ 1, 3, 5 ]

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15

/* here accumulator starts at 0 and adds each number in the array. Basically accumulater is a callback function and current is the current value in the array. */

const found = numbers.find(n => n < 3);
console.log(found); // Output: 1 (as the first element less than 3)

// ---------------------------------------------

const digits = [4, 11, 8, 43, 79, 28, 15, 2, 9, 6];
