/*
  Topic: conditionals.js

  Demonstrates:
    - if, if...else, if...else if...else
    - switch statement with break
    - ternary operator
    - nested conditionals

  For simple examples, see: README.md
*/

// --- if: execute block when condition is true ---

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("✅ Welcome back, user!"); // Runs if true
}

// --- if...else: choose between two paths ---

let isPremiumUser = false;

if (isPremiumUser) {
    console.log("🚚 Free shipping for premium users.");
} else {
    console.log("💰 Standard shipping charge applies.");
}

// --- if...else if...else: multiple condition branches ---

let yearsOfExperience = 6;

if (yearsOfExperience >= 10) {
    console.log("🏅 You get a 20% bonus!");
} else if (yearsOfExperience >= 5) {
    console.log("🎖️ You get a 10% bonus!");
} else {
    console.log("👍 Keep going! Bonus coming soon.");
}

// --- switch: match specific value to a case ---

let userRole = "editor";

switch (userRole) {
case "admin":
    console.log("🔐 Full access to all dashboards.");
    break;
case "editor":
    console.log("📝 Access to content management tools.");
    break;
case "viewer":
    console.log("👁️ Read-only access.");
    break;
default:
    console.log("❌ Role not recognized.");
}

// --- ternary: concise if...else expression ---

let currentHour = new Date().getHours();

let greeting = currentHour < 12
    ? "☀️ Good morning!"
    : currentHour < 18
        ? "🌤️ Good afternoon!"
        : "🌙 Good evening!";

console.log(greeting);

// --- nested if...else: decision tree logic (use sparingly) ---

let hasCard = true;
let cardValid = false;

if (hasCard) {
    if (cardValid) {
        console.log("💳 Transaction approved.");
    } else {
        console.log("❗ Card invalid. Transaction denied.");
    }
} else {
    console.log("❌ No card found.");
}

/*
  🔗 Notes:
    - Use if...else for branching logic.
    - Use switch for matching discrete values, always include break.
    - Ternary operators are great for concise simple conditions but avoid complex nesting.
    - Nested conditionals can reduce readability; consider refactoring if deeply nested.
*/
