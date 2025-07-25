# How JavaScript Runs

**Tags:** `javascript`, `runtime`, `js-engine`, `execution-context`  
**Purpose:** Understand how JavaScript code executes via JS engines in browsers and Node.js.  
**Overview:** Explains the JS runtime environment including the event loop, call stack, execution contexts, and differences between browser and Node.js runtimes.

---

_Table of Contents:_

- [How JavaScript Runs](#how-javascript-runs)
  - [1. JavaScript Engines](#1-javascript-engines)
  - [2. Execution Context](#2-execution-context)
  - [3. Call Stack](#3-call-stack)
  - [4. Memory Heap](#4-memory-heap)
  - [5. Event Loop and Task Queue](#5-event-loop-and-task-queue)
  - [6. Single-threaded Nature of JavaScript](#6-single-threaded-nature-of-javascript)
  - [7. Browser vs Node.js Runtime](#7-browser-vs-nodejs-runtime)
  - [8. Next Topic](#8-next-topic)
  - [9. Navigation](#9-navigation)

---

## 1. JavaScript Engines

- Engines like **V8 (Chrome)**, **SpiderMonkey (Firefox)**, and **JavaScriptCore (Safari)** parse, compile, and execute JS.  
- Convert JS code into machine code or bytecode, optimizing for performance.

---

## 2. Execution Context

- Created for each running scope (global, function, eval).  
- Holds variables, functions, and the current `this` value.

---

## 3. Call Stack

- Manages function calls using **LIFO** (Last In, First Out) principle.  
- Tracks execution order and handles return values.

---

## 4. Memory Heap

- Stores objects, variables, and data during runtime.  
- Includes automatic garbage collection to free unused memory.

---

## 5. Event Loop and Task Queue

- Enables asynchronous behavior in a single-threaded environment.  
- Event loop monitors call stack and moves tasks from the queue to the stack when it's empty.

---

## 6. Single-threaded Nature of JavaScript

- Executes one operation at a time but uses event-driven, non-blocking IO for concurrency.

---

## 7. Browser vs Node.js Runtime

- Browsers provide APIs for DOM manipulation, timers, fetch, etc.  
- Node.js provides server-side features like file system access and networking.

---

## 8. Next Topic

**[→ 03 - Embedding JavaScript](../03-embedding-js/README.md)** — Learn how to add JavaScript to HTML via inline, internal, and external scripts.

---

## 9. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
