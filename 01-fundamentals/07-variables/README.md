# 06 - Variables

**Tags:** `javascript`, `variables`, `let`, `const`, `var`, `scope`, `hoisting`  
**Purpose:** Learn how to declare, assign, and manage variables in JavaScript using `var`, `let`, and `const` with clear understanding of scope and hoisting behaviors.  
**Overview:** This topic covers the concept of variables in JavaScript, how to declare them with different keywords, how scope affects variable visibility, and the hoisting mechanism including the Temporal Dead Zone.

---

_Table of Contents:_

- [06 - Variables](#06---variables)
  - [1. What Are Variables?](#1-what-are-variables)
  - [2. Declaring Variables](#2-declaring-variables)
  - [3. Scope of Variables](#3-scope-of-variables)
  - [4. Hoisting and Temporal Dead Zone](#4-hoisting-and-temporal-dead-zone)
  - [5. Naming Conventions](#5-naming-conventions)
  - [6. Code Example Files](#6-code-example-files)
  - [7. Next Topic](#7-next-topic)
  - [8. Navigation](#8-navigation)

---

## 1. What Are Variables?

Variables are containers used to store data in JavaScript.

- They have a **name**, a **value**, and a **scope**.
- Variables let you hold and manipulate data dynamically.
- The value of a variable can be changed unless declared with `const`.

---

## 2. Declaring Variables

JavaScript supports three declaration keywords:

- `var`: Function-scoped; hoisted; can be redeclared and reassigned.
- `let`: Block-scoped; can be reassigned but not redeclared in the same scope.
- `const`: Block-scoped; cannot be reassigned or redeclared.

Example:

```js
var a = 10;
let b = 20;
const c = 30;
```

---

## 3. Scope of Variables

Scope determines where a variable is accessible:

- `var` is function-scoped.
- `let` and `const` are block-scoped.
- Global variables are accessible everywhere.
- Block scope includes `{}` inside functions, loops, and conditionals.

---

## 4. Hoisting and Temporal Dead Zone

- Hoisting moves variable declarations to the top of their scope during compilation.
- Variables declared with `var` are hoisted and initialized with `undefined`.
- Variables declared with `let` and `const` are hoisted but not initialized.
- Accessing `let` or `const` variables before declaration results in a Temporal Dead Zone (TDZ) error.

---

## 5. Naming Conventions

- Use descriptive, meaningful names.  
- Use `camelCase` for variables.  
- Constants use uppercase with underscores (`ALL_CAPS`).  
- Avoid reserved words and special characters.  

For detailed rules and best practices, see the [Naming Conventions README](naming-conventions.md).

---

## 6. Code Example Files

See files in the _`06-variables`_ folder for working demos:

- [`var-let-const.js`](var-let-const.js)
- [`scope.js`](scope.js)
- [`hoisting-tdz.js`](hoisting-tdz.js)

---

## 7. Next Topic

**[→ 07 - Data Types](../07-data-types/README.md)** — Explore primitive and reference data types, type checking, and how JavaScript handles different forms of data.

---

## 8. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
