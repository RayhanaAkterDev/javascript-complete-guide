/*
  Topic: execution-context.js

  Demonstrates:
    - Global Execution Context creation
    - Function Execution Contexts
    - Call Stack behavior (push & pop)
    - Execution order in JavaScript
    - `this` value in global and function contexts
*/

// --- 1. Global Execution Context (created before code runs) ---

console.log("Start of script"); // Executed in Global Execution Context
console.log(this); // Global EC: window (browser) or global (Node.js)

// --- 2. Function definitions (stored in memory, not executed yet) ---

function firstFunc() {
    console.log("Inside firstFunc"); // Runs when firstFunc EC is active
    console.log(this); // `this` depends on how function is called
    secondFunc(); // Push secondFunc() onto the stack
}

function secondFunc() {
    console.log("Inside secondFunc"); // Runs when secondFunc EC is active
    console.log(this);
    thirdFunc(); // Push thirdFunc() onto the stack
}

function thirdFunc() {
    console.log("Inside thirdFunc"); // Runs when thirdFunc EC is active
    console.log(this);
    // No further calls → will be popped after execution
}

// --- 3. Execution starts ---

firstFunc(); // Push firstFunc() onto the stack

console.log("End of script"); // Back to Global EC after functions finish

/*
  📊 Call Stack Behavior (step by step):

  1. Global Execution Context created
     → "Start of script", `this` in global EC

  2. firstFunc() is called
     → firstFunc Execution Context pushed

  3. Inside firstFunc → calls secondFunc()
     → secondFunc Execution Context pushed

  4. Inside secondFunc → calls thirdFunc()
     → thirdFunc Execution Context pushed

  5. thirdFunc finishes → popped off stack

  6. secondFunc finishes → popped off stack

  7. firstFunc finishes → popped off stack

  8. Back to Global context
     → "End of script"
*/
