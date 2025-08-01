/*
  Topic: 05 - Template Literals

  Covers:
    - Variable interpolation
    - Multiline formatting
*/

let name = "Sumaya";
let score = 95;

// --- Basic usage ---
let message = `Hello ${name}, your score is ${score}/100.`;
console.log(message);

// --- Multiline template ---
let html = `
  <div>
    <h1>Welcome, ${name}</h1>
    <p>Score: ${score}</p>
  </div>
`;
console.log(html);
