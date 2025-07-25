# 📘 02 - How JavaScript Runs

> **Tags:** javascript, runtime, js-engine, execution-context  
> **Purpose:** Understand how JavaScript code is executed by JS engines in browsers and Node.js.  
> **Overview:** This section explains JavaScript’s runtime environment, the event loop, call stack, and execution contexts that allow JS code to run.

---

📝 **Table of Contents**

- [📘 02 - How JavaScript Runs](#-02---how-javascript-runs)
  - [1️⃣ JavaScript Engines](#1️⃣-javascript-engines)
  - [2️⃣ Execution Context](#2️⃣-execution-context)
  - [3️⃣ Call Stack](#3️⃣-call-stack)
  - [4️⃣ Memory Heap](#4️⃣-memory-heap)
  - [5️⃣ Event Loop and Task Queue](#5️⃣-event-loop-and-task-queue)
  - [6️⃣ Single-threaded nature of JS](#6️⃣-single-threaded-nature-of-js)
  - [7️⃣ Browser vs Node.js Runtime](#7️⃣-browser-vs-nodejs-runtime)
  - [▶️ Next Up](#️-next-up)
  - [🔁 Navigation](#-navigation)

---

## 1️⃣ JavaScript Engines

- JS engines like **V8 (Chrome)**, **SpiderMonkey (Firefox)**, and **JavaScriptCore (Safari)** parse, compile, and execute JS code.  
- Engines convert code to machine code or bytecode and optimize it for fast execution.

---

## 2️⃣ Execution Context

- When JS runs, it creates an **execution context** for the current scope: global, function, or eval.  
- Context stores variables, functions, and `this` binding relevant to the running code.

---

## 3️⃣ Call Stack

- The call stack manages function invocation order.  
- It follows **LIFO** (Last In, First Out) — the last function called is the first to return.

---

## 4️⃣ Memory Heap

- Memory heap stores objects, variables, and data needed during execution.  
- JS automatically manages memory allocation and garbage collection.

---

## 5️⃣ Event Loop and Task Queue

- JS is single-threaded but handles async tasks via the **event loop**.  
- The event loop waits for call stack to clear, then pushes queued tasks to execute.

---

## 6️⃣ Single-threaded nature of JS

- JS executes one command at a time but uses event-driven, non-blocking IO for concurrency.

---

## 7️⃣ Browser vs Node.js Runtime

- Browsers provide APIs like DOM, timers, and fetch.  
- Node.js offers server-side APIs, file system access, and networking.

---

## ▶️ Next Up

**[→ 03 - Embedding JavaScript](../03-embedding-js/README.md)** — Learn how to add JS to HTML via inline, internal, and external scripts.

---

## 🔁 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
