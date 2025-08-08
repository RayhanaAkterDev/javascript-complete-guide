# 02 - JavaScript Runtime

JavaScript doesn’t run magically — it operates inside powerful **engines** that turn code into actions.  

This topic gives you a practical understanding of how JavaScript executes inside browsers or Node.js: from call stacks and memory management to handling asynchronous tasks with the event loop.

---

## What is the JavaScript Runtime?

A **runtime** is the environment where JavaScript code is executed.

It includes:

- The **JavaScript engine** (e.g., V8 in Chrome/Node.js)
- APIs provided by the host (e.g., DOM in browsers, `fs` in Node.js)
- Systems like the **call stack**, **heap memory**, and **event loop**

Together, these elements allow JS to function — even though it's single-threaded — without blocking user interactions.

---

## Key Components of the Runtime

### 1. JavaScript Engines

JavaScript runs through optimized engines built into platforms:

| Engine         | Used In         |
|----------------|-----------------|
| **V8**         | Chrome, Node.js |
| **SpiderMonkey** | Firefox       |
| **JavaScriptCore** | Safari      |

These engines parse your code, optimize it, and convert it to machine instructions for execution.

---

### 2. Execution Context

Each time code runs, an **execution context** is created.

It includes:

- The **scope** and variable environment
- The current value of **`this`**
- References to the **lexical environment**

Example:

```js
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Sumaya"); // Creates a new execution context
```

Multiple execution contexts are managed during code execution, especially when functions are called.

---

### 3. Call Stack

The **call stack** tracks function execution in a **LIFO (Last In, First Out)** manner:

- Functions are "pushed" when invoked
- Once done, they are "popped" off the stack

Example:

```js
function greet() {
  console.log("Hello");
}
greet();
```

If the stack overflows (e.g., from infinite recursion), it results in a **stack overflow error**.

---

### 4. Memory Heap

The heap stores all dynamically allocated memory — such as objects and arrays.

- JavaScript allocates memory as needed
- Garbage collection automatically removes unused data
- **Note**: Primitive values (numbers, strings, booleans) are usually stored on the stack, while objects live in the heap

You don’t manage memory manually, but understanding heap behavior helps with performance tuning.

---

### 5. Event Loop & Task Queue

JavaScript handles async behavior through:

- **The Call Stack**: Runs synchronous code.  
- **The Task Queue**: Holds callback functions (from `setTimeout`, DOM events, etc.).  
- **The Event Loop**: Bridges the two — constantly checks if the stack is empty and then pushes tasks from the queue.  

This is how JS stays **non-blocking** while being **single-threaded**.

---

### 6. Single-Threaded, Non-Blocking Model

JavaScript uses a **single thread** for execution, but doesn't block thanks to **async APIs**.  
This makes it ideal for:

- Real-time interactions.  
- Smooth UI updates.  
- Fast server responses (e.g., with Node.js).

---

### 7. Browser vs Node.js Runtime

| Feature | Browser              | Node.js                  |
|---------|----------------------|--------------------------|
| APIs    | DOM, `alert`, `fetch`| `fs`, `http`, OS, modules |
| Engine  | Usually V8           | V8                       |
| Use Case| Frontend, UI logic   | Server-side scripting    |

Both share the core JS engine, but expose different sets of tools and APIs.

---

## 💡 **Pro Tip: Mastering the Runtime = Debugging Power**

If you understand how JS runs — stacks, heaps, event loops —  
you’ll debug smarter, write better async code, and avoid performance bottlenecks.

---

## 🔗 Navigation

### 🔜 Next Topic

- → [03 - Embedding JavaScript](../03-embedding-js/README.md)  
*Learn how to add JavaScript to HTML using inline, internal, and external methods.*

### 🔙 Previous Topic

- [← 01 - JS Introduction](../01-js-intro/README.md)  
  *Learn the basics of JavaScript, its history, and how it works.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse other core foundational topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to full roadmap and module list.*
