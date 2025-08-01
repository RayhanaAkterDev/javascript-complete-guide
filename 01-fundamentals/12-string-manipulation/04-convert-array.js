/*
  Topic: 04 - Convert Strings to Arrays

  Demonstrates:
    - .split()
    - .join()
*/

let tags = "js,html,css";

// --- Convert string to array ---
let list = tags.split(",");
console.log("split():", list); // ['js', 'html', 'css']

// --- Convert array to string ---
console.log("join():", list.join(" | ")); // 'js | html | css'
