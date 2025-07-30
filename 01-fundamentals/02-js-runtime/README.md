# 02 - JavaScript Runtime

JavaScript doesn’t run magically — it operates inside powerful **engines** that convert code into actions.  
This topic explains how JavaScript is executed in the browser or Node.js: from call stacks and memory to how async code is handled with the event loop.

---

## 1. JavaScript Engines

Modern browsers and platforms run JavaScript using **JS engines**:

| Engine         | Used In         |
|----------------|-----------------|
| V8             | Chrome, Node.js |
| SpiderMonkey   | Firefox         |
| JavaScriptCore | Safari          |

These engines parse your code, optimize it, and execute it efficiently.

---

## 2. Execution Context

Every time a script or function runs, an **execution context** is created.

It contains:

- The current **scope** (variables, functions)
- The **value of `this`**
- References to outer environments (lexical environment)

---

## 3. Call Stack

The **call stack** keeps track of function execution.

- It works in **LIFO** (Last In, First Out) order.
- Each function call is "pushed" onto the stack.
- When a function completes, it is "popped" off.

If the stack grows too large (e.g., infinite recursion), you get a **stack overflow**.

---

## 4. Memory Heap

The **heap** is where objects and reference data are stored.

- Memory is allocated dynamically.
- JavaScript uses **automatic garbage collection** to clean up unused memory.

---

## 5. Event Loop & Task Queue

JavaScript is **single-threaded** but handles async behavior via:

- The **Event Loop**: Watches the stack and the task queue.
- The **Task Queue (Callback Queue)**: Stores async callbacks (e.g., from `setTimeout`, events).

Once the stack is empty, the loop moves queued tasks onto the stack one at a time.

---

## 6. Single-Threaded, Non-Blocking

JavaScript handles concurrency with **non-blocking async APIs**, not multiple threads.

This makes it efficient for tasks like:

- UI rendering
- Network requests
- Real-time events

---

## 7. Browser vs Node.js Runtime

| Feature        | Browser                    | Node.js                         |
|----------------|----------------------------|----------------------------------|
| APIs           | DOM, `alert`, `fetch`      | `fs`, `http`, OS, modules       |
| Engine         | Usually V8                 | V8                              |
| Use Case       | UI and frontend             | Server-side scripting           |

---

## 📚 Further Reading

- [MDN - JavaScript Engine Concepts](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info - Execution Context](https://javascript.info/execution-context)

---

## 🔗 Next Topic

**[→ 03 - Embedding JavaScript](../03-embedding-js/README.md)** — Learn how to add JavaScript to HTML via inline, internal, and external scripts.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
