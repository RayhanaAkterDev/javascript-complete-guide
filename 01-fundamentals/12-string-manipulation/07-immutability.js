/*
  Topic: 07 - String Immutability

  Shows that string methods return new values, not modify original string.
*/

let original = "test";

// --- Uppercase returns new string ---
let upper = original.toUpperCase();

console.log("Original:", original); // 'test'
console.log("Uppercase:", upper);   // 'TEST'

// Original string is not modified
