# 04 - Statements & Expressions

**Tags:** `javascript`, `syntax`, `expressions`, `statements`, `language-core`  
**Purpose:** Understand the foundational syntax building blocks of JavaScript—statements and expressions—and how they form the structure of executable code.  
**Overview:** This topic explains the core difference between expressions and statements, where each is used, and why understanding this distinction is essential for writing valid, clean JavaScript logic.

---

_Table of Contents:_

- [04 - Statements \& Expressions](#04---statements--expressions)
  - [1. What Are Expressions?](#1-what-are-expressions)
  - [2. What Are Statements?](#2-what-are-statements)
  - [3. Key Differences](#3-key-differences)
  - [4. Common Examples](#4-common-examples)
  - [5. Best Practices](#5-best-practices)
  - [6. Code Example Files](#6-code-example-files)
  - [7. Next Topic](#7-next-topic)
  - [8. Navigation](#8-navigation)

---

## 1. What Are Expressions?

An **expression** is any valid unit of code that evaluates to a value.

- It does **not** require a semicolon unless it's used as a statement.
- Expressions can be **standalone** or **embedded inside statements**.
- Can be assigned, passed as arguments, or returned from functions.

**Examples:**

```js
5 + 3            // Expression → evaluates to 8
"Hi" + " there"  // Expression → evaluates to "Hi there"
true             // Expression → value is true
x * 2            // Expression → evaluates based on variable value
```

---

## 2. What Are Statements?

A **statement** is a complete instruction that performs an action.

- Typically ends with a semicolon (`;`)
- Can contain one or more expressions
- Controls the flow of execution in the program

**Examples:**

```js
// Declaration statement
let x = 10;

// Assignment statement with expression
x = x + 5;

// Conditional statement
if (x > 10) {
  console.log("x is big");
}

// Loop statement
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## 3. Key Differences

| Aspect             | Expression                | Statement                |
| ------------------ | ------------------------- | ------------------------ |
| Resolves to        | A value                   | An action or instruction |
| Usage              | Can be part of other code | Forms a full instruction |
| Can end with `;`   | Not always necessary      | Usually ends with `;`    |
| Executes           | As part of a statement    | Executes a full task     |
| Example            | `2 * 3`                   | `let x = 2 * 3;`         |

---

## 4. Common Examples

- Expression inside a statement:

```js
let total = price * quantity;  // "price * quantity" is the expression
```

- Expression-only return:

```js
return a + b; // "a + b" is the expression
```

- Statement containing expressions:

```js
if (x > 5) {
  console.log("Greater than 5");
}
```

---

## 5. Best Practices

- Avoid confusing expressions with statements when writing conditional or return logic.  
- Keep expressions small and clear when nested inside statements.  
- Always terminate statements with `;` for consistency and to avoid automatic semicolon insertion pitfalls.  
- Use expressions to keep logic **modular** and **reusable**, such as storing them in functions or variables.  

---

## 6. Code Example Files

See files in the _`04-statements-expressions`_ folder for a working demo:

- [`index.js`](index.js)

---

## 7. Next Topic

**[→ 05 - Keywords](../05-keywords/README.md)** — Understand reserved words in JavaScript, their usage in syntax, and how to avoid naming conflicts in your code.

---

## 8. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
