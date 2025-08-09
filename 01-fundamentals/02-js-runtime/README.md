# 02 - JavaScript Runtime

JavaScript doesn’t run magically — it operates inside powerful **engines** and an environment called the **runtime** that turns code into actions.  

This topic gives you a practical understanding of how JavaScript executes inside browsers or Node.js: from call stacks and memory management to handling asynchronous tasks with the event loop.

---

## ⚡ Quick Summary (TL;DR)

- The **runtime** is the environment where JavaScript code executes.  
- It includes the **JavaScript engine**, host APIs, memory management, and the event loop.  
- Understanding the runtime helps write better, more efficient, and non-blocking code.

---

## 1. What Is the JavaScript Runtime?

The **runtime** is the environment where your JavaScript code runs.

It consists of:

- The **JavaScript engine** (e.g., V8 in Chrome/Node.js)  
- Host-provided APIs (e.g., DOM in browsers, `fs` in Node.js)  
- Systems like the **call stack**, **memory heap**, and **event loop**

Together, these components allow JavaScript to execute, manage memory, and handle asynchronous tasks.

---

## 2. JavaScript Engines

A **JavaScript engine** is a program that reads, compiles, and runs your JavaScript code.

Common engines include:

| Engine           | Used In         |
|------------------|-----------------|
| **V8**           | Chrome, Node.js |
| **SpiderMonkey** | Firefox         |
| **JavaScriptCore** | Safari        |

---

## 3. Execution Context

An **execution context** is created every time code runs, managing scope, variables, and the current value of `this`.

It includes:

- Variable environment and scope  
- The value of **`this`**  
- Lexical environment references

**Example:**

```js
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Sumaya"); // Creates a new execution context
```

---

## 4. Call Stack

The **call stack** keeps track of function execution order using a **LIFO (Last In, First Out)** structure.

- Functions are **pushed** onto the stack when called  
- Removed or **popped** when execution finishes

**Example:**

```js
function greet() {
  console.log("Hello");
}
greet();
```

A stack overflow error occurs if too many calls stack up, such as with infinite recursion.

---

## 5. Memory Heap

The **memory heap** stores all dynamically allocated data like objects and arrays.

- Memory is allocated here as needed  
- Garbage collection frees unused memory automatically  
- Primitive values (numbers, strings, booleans) are usually stored on the stack instead

---

## 6. Event Loop & Task Queue

JavaScript handles asynchronous tasks with:

- The **Call Stack** — runs synchronous code  
- The **Task Queue** — stores callbacks from async operations (`setTimeout`, events, etc.)  
- The **Event Loop** — checks if the call stack is empty, then pushes tasks from the queue for execution

This model keeps JavaScript **non-blocking** despite being single-threaded.

---

## 7. Single-Threaded, Non-Blocking Model

JavaScript uses a **single thread** but achieves concurrency through asynchronous APIs.

This allows:

- Smooth UI interactions  
- Real-time updates  
- Efficient server responses (e.g., with Node.js)

---

## 8. Browser vs Node.js Runtime

| Feature | Browser              | Node.js                  |
|---------|----------------------|--------------------------|
| APIs    | DOM, `alert`, `fetch`| `fs`, `http`, OS, modules|
| Engine  | Usually V8           | V8                       |
| Use Case| Frontend, UI logic   | Server-side scripting    |

Both share the core JS engine but expose different APIs depending on the environment.

---

## 💡 Pro Tip

If you understand how JS runs — stacks, heaps, event loops —  
you’ll debug smarter, write better asynchronous code, and avoid performance bottlenecks.

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 03 - Embedding JavaScript](../03-embedding-js/README.md)  
  *Learn how to add JavaScript to HTML using inline, internal, and external methods.*

### 🔙 Previous Topic

- [← 01 - JS Introduction](../01-js-intro/README.md)  
  *Learn the basics of JavaScript, its history, and how it works.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to the full roadmap and module list.*
