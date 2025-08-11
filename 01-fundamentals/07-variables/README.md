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

📂 **Code Reference:**

_View complete examples in the context._

- [variables.js](./variables.js)  

---

## 1. What Are Variables?

A **variable** is like a labeled box where you store data so your program can use it later.

- Store numbers, strings, objects, arrays, functions, etc.  
- Names should be descriptive for clarity  
- Values can change (except when using `const` for constants)

**Example:**

```js
let name = "Sumaya";  // String
let score = 95;       // Number
let passed = true;    // Boolean
```

---

## 2. Declaring Variables

JavaScript provides three keywords to declare variables:

| Keyword   | Scope           | Reassignable | Must Initialize? | Notes                    |
|-----------|-----------------|--------------|------------------|--------------------------|
| `let`     | Block-scoped    | Yes          | No               | Modern, recommended      |
| `const`   | Block-scoped    | No           | Yes              | Immutable after init     |
| `var`     | Function-scoped | Yes          | No               | Legacy, avoid in new code|

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
- **Common practice:** Use **camelCase** for variable names (e.g., `userName`, `totalScore`)

✅ **Good:** `userName`, `_total`, `$price`  
🚫 **Bad:** `2ndPlace`, `let`

> See the [Naming Conventions](naming-conventions.md) for more tips.

---

## 4. Variable Scope

| Scope Type     | Declared With    | Accessible Where?                      |
|----------------|------------------|---------------------------------------|
| Block Scope    | `let`, `const`   | Inside the block `{ ... }` only        |
| Function Scope | `var`            | Inside the function where declared     |
| Global Scope   | Any keyword outside functions | Anywhere in the program |

> See also: [scope.js](../16-scope/scope.js) for practical examples.

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

- `var` declarations are hoisted (moved to top) and initialized as `undefined`  
- `let` and `const` are hoisted but **not** initialized, causing the **Temporal Dead Zone** before declaration  
- **TDZ exists to prevent accessing variables before they are initialized, avoiding potential bugs**

**Example (Hoisting):**

```js
console.log(a); // undefined
var a = 10;
```

**Example (TDZ):**

```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

---

## 💡 Pro Tips

- ✅ Use `const` by default; switch to `let` only if reassignment is needed  
- ✅ Use meaningful, descriptive names  
- ✅ Prefer `const` to help maintain code integrity and prevent accidental reassignment bugs  
- 🚫 Avoid `var` to prevent scope-related bugs  
- ✅ Keep variable scope as small as possible  

---

## 🔎 Related Concepts

- [16 - Scope](../16-scope/README.md) → Understand block vs function scope and visibility  
- [17 - Hoisting](../17-hoisting/README.md) → Learn how declarations move before execution and how TDZ works  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 08 - Data Types](../08-data-types/README.md)  
_Understand different kinds of data you can store in variables._

### 🔙 Previous Topic

- [← 06 - Comments](../06-comments/README.md)  
_Learn how to add helpful notes to your code._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
