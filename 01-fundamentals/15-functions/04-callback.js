/*
  Topic: 04-callback.js

  Demonstrates usage of callback functions, progressing from simple to more
  advanced patterns:
    - Passing functions as arguments
    - Executing callbacks inside other functions
    - Using callbacks with parameters
    - Common in asynchronous and event-driven programming
*/

// --- 1. Simple callback example ---

function processUserInput(callback) {
    const name = "Sumaya";
    callback(name);
}

processUserInput(function(userName) {
    console.log("Hello, " + userName);
});

// --- 2. Using arrow function as a callback ---

processUserInput(userName => {
    console.log(`Welcome, ${userName}!`);
});

// --- 3. Callback with parameters in iterative tasks ---

function repeatTask(times, task) {
    for (let i = 0; i < times; i++) {
        task(i);
    }
}

repeatTask(3, index => {
    console.log(`Running task iteration ${index + 1}`);
});

// --- 4. Callback with asynchronous simulation (using setTimeout) ---

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, message: "Success" };
        callback(data);
    }, 1500);
}

fetchData(result => {
    console.log("Data received:", result);
});
