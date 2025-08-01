/*
  Topic: 03 - Common String Methods

  Includes:
    - Case conversion
    - Substring checks
    - Index searching
    - Extracting and slicing
    - Trimming
    - Replacing
    - Repeating
*/

let city = "Dhaka";

// --- Case conversion ---
console.log("Uppercase:", city.toUpperCase()); // 'DHAKA'
console.log("Lowercase:", city.toLowerCase()); // 'dhaka'

let msg = "JavaScript is awesome!";

// --- Substring checks ---
console.log("Includes 'awesome':", msg.includes("awesome")); // true
console.log("Starts with 'Java':", msg.startsWith("Java"));  // true
console.log("Ends with '!':", msg.endsWith("!"));            // true

// --- Index searching ---
console.log("indexOf 'is':", msg.indexOf("is"));         // 11
console.log("lastIndexOf 'a':", msg.lastIndexOf("a"));   // 3

// --- Extracting substrings ---
console.log("slice(0,10):", msg.slice(0, 10));           // 'JavaScript'
console.log("substring(11,13):", msg.substring(11, 13)); // 'is'
console.log("substr(11,2):", msg.substr(11, 2));         // 'is' (legacy)

// --- Trimming ---
let raw = "   Learn JS!   ";
console.log("trim():", raw.trim());                      // 'Learn JS!'

// --- Replacing ---
console.log("replace():", raw.replace("JS", "JavaScript")); // '   Learn JavaScript!   '
console.log("replaceAll():", raw.replaceAll(" ", "-"));     // '---Learn-JS!---'

// --- Repeating ---
console.log("Repeat 3 times:", "abc".repeat(3)); // 'abcabcabc'
