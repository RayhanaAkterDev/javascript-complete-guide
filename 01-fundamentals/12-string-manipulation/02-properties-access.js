/*
  Topic: 02 - String Properties and Access

  Covers:
    - .length
    - Index access using brackets
    - .charAt()
    - .charCodeAt()
*/

let text = "JavaScript";

// --- .length property ---
console.log("Length:", text.length); // 10

// --- Index access using [ ] ---
console.log("First char:", text[0]);                 // 'J'
console.log("Last char:", text[text.length - 1]);    // 't'

// --- .charAt(index) ---
console.log("charAt(0):", text.charAt(0));           // 'J'

// --- .charCodeAt(index) ---
console.log("charCodeAt(0):", text.charCodeAt(0));   // 74
