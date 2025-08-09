# 07 - Variables

Variables are **named storage containers** used to hold data values in a program.  
They allow you to store, update, and retrieve information dynamically during code execution.

---

## ⚡ Quick Summary (TL;DR)

- **Variables** store values for later use in the program  
- Can be updated and reused as needed  
- Declared using `let`, `const`, or `var` (prefer `let` & `const` in modern JS)  
- Scope and hoisting affect where and when variables can be accessed  

---

## 1. What Are Variables?

A **variable** is like a labeled box where you keep data so your program can use it later.

- Store numbers, strings, objects, arrays, functions, etc.  
- Name should be descriptive for clarity  
- Values can change (except when using `const` for constants)

**Why Use Variables?**

Variables let you store and change data dynamically, making your programs flexible and interactive.

**Example:**

```js
let name = "Sumaya";  // String
let score = 95;       // Number
let passed = true;    // Boolean
```

---

## 2. Declaring Variables

JavaScript provides three keywords to declare variables:

| Keyword  | Scope         | Reassignable | Must Initialize? | Notes                    |
|----------|---------------|--------------|------------------|--------------------------|
| `let`    | Block-scoped  | Yes          | No               | Modern, recommended      |
| `const`  | Block-scoped  | No           | Yes              | Immutable after init     |
| `var`    | Function-scoped | Yes        | No               | Legacy, avoid in new code|

**Example:**

```js
let age = 21;       // Mutable
const PI = 3.1416;  // Immutable
var city = "Dhaka"; // Function-scoped (not recommended)
```

---

## 3. Naming Rules

- Must start with a letter, `_`, or `$`  
- Cannot start with a number  
- Cannot use reserved JavaScript keywords  
- Case-sensitive (`name` and `Name` are different)

✅ Good: `userName`, `_total`, `$price`  
🚫 Bad: `2ndPlace`, `let`

> For details, see the [Naming Conventions](naming-conventions.md) guide.

---

## 4. Variable Scope

| Scope Type       | Declared With  | Accessible Where?                      |
|------------------|----------------|---------------------------------------|
| Block Scope      | `let`, `const` | Inside the block `{ ... }` only        |
| Function Scope   | `var`          | Inside the function where declared     |
| Global Scope     | Any keyword (outside all functions) | Anywhere in the program |

---

## 5. Reassigning Variables

```js
let count = 5;
count = 10; // ✅ Works

const pi = 3.14;
pi = 3.1416; // ❌ Error: Assignment to constant variable
```

---

## 6. Hoisting & Temporal Dead Zone (TDZ)

- **`var`** declarations are hoisted (moved to the top) and initialized as `undefined`  
- **`let`** & **`const`** are hoisted but not initialized, causing a Temporal Dead Zone before declaration

**Example:**

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

**Gotcha:**

```js
console.log(foo); // undefined (var is hoisted)
var foo = "Hello";

console.log(bar); // ❌ ReferenceError (let not initialized yet)
let bar = "World";
```

---

## 💡 Pro Tips

- ✅ Use `const` by default, switch to `let` only when reassignment is needed  
- ✅ Use meaningful, descriptive variable names  
- 🚫 Avoid `var` in modern JavaScript to prevent scope-related bugs  
- ✅ Keep variable scope as small as possible to avoid conflicts

---

## 📂 Practice with Demo Files

Try these examples to practice:

- [`index.js`](./index.js)

---

## 🔎 Related Concepts

Some concepts introduced in this topic are covered in more depth:

- [16 - Scope](../16-scope/README.md) → Understand block vs function scope and visibility  
- [17 - Hoisting](../17-hoisting/README.md) → Learn how declarations move before execution and how TDZ works  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 08 - Data Types](../08-data-types/README.md)  
  *Understand different kinds of data you can store in variables.*

### 🔙 Previous Topic

- [← 06 - Comments](../06-comments/README.md)  
  *Learn how to add helpful notes to your code.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to the full roadmap and module list.*
