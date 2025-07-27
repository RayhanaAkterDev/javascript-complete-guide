# 05 - JavaScript Keywords

**Tags:** `javascript`, `keywords`, `syntax`, `reserved-words`, `best-practices`  
**Purpose:** Understand what JavaScript keywords are, why they matter, and how they affect your ability to name variables or use language features.  
**Overview:** JavaScript includes a list of reserved words (keywords) that have special meanings in the language. These cannot be used as variable names, function names, or identifiers. This topic introduces keywords by category, demonstrates correct and incorrect usage, and highlights naming pitfalls to avoid.

---

_Table of Contents:_

- [05 - JavaScript Keywords](#05---javascript-keywords)
  - [1. What Are JavaScript Keywords?](#1-what-are-javascript-keywords)
  - [2. Common JavaScript Keywords](#2-common-javascript-keywords)
    - [2.1 Variable Declarations](#21-variable-declarations)
    - [2.2 Control Flow](#22-control-flow)
    - [2.3 Functions](#23-functions)
    - [2.4 Error Handling](#24-error-handling)
    - [2.5 Classes \& Modules](#25-classes--modules)
    - [2.6 Logical \& Contextual](#26-logical--contextual)
    - [2.7 Strict Mode](#27-strict-mode)
  - [3. Invalid Keyword Usage](#3-invalid-keyword-usage)
  - [4. Best Practices](#4-best-practices)
  - [5. Code Example Files](#5-code-example-files)
  - [6. Next Topic](#6-next-topic)
  - [7. Navigation](#7-navigation)

---

## 1. What Are JavaScript Keywords?

Keywords are **reserved words** that have predefined meanings in JavaScript syntax.  
They form the language structure and control flow. You **cannot** use them as identifiers for variables, functions, or class names.

**Example:**

```js
let return = 5; // ❌ SyntaxError: Unexpected token 'return'
```

---

## 2. Common JavaScript Keywords

Here’s a categorized list of commonly used keywords:

### 2.1 Variable Declarations

- `var` — Declares a function-scoped variable
- `let` — Declares a block-scoped variable (ES6)
- `const` — Declares a block-scoped constant (ES6)

### 2.2 Control Flow

- `if`, `else`, `switch`, `case`, `default`
- `for`, `while`, `do`
- `break`, `continue`

### 2.3 Functions

- `function`, `return`
- `yield` — Used in generator functions (ES6)

### 2.4 Error Handling

- `try`, `catch`, `finally`, `throw`

### 2.5 Classes & Modules

- `class`, `extends`, `constructor`, `super`
- `import`, `export`, `default`

### 2.6 Logical & Contextual

- `true`, `false`, `null`, `undefined`
- `this`, `typeof`, `instanceof`, `in`, `new`, `delete`, `void`

### 2.7 Strict Mode

- "`use strict`" — Not a keyword, but a directive that activates stricter parsing and error handling

---

## 3. Invalid Keyword Usage

You cannot use reserved keywords as variable names or function identifiers.

```js
let let = 5;           // ❌ SyntaxError
function return() {}   // ❌ SyntaxError
const if = 10;         // ❌ SyntaxError
```

---

## 4. Best Practices

- Always use descriptive, non-reserved names for variables and functions.  
- Avoid words like `default`, `class`, `new`, or `return` in identifiers.  
- Prefix identifiers with meaningful context (`isValid`, `userCount`, `appConfig`) to reduce conflicts.  
- Stay updated on new keywords added in ECMAScript versions (e.g., `await`, `yield`, `import`).

---

## 5. Code Example Files

See files in the _`05-keywords`_ folder for usage examples:

- [`index.js`](index.js)

---

## 6. Next Topic

➡️ **[06 - comments](../06-comments/README.md)** — Learn how to declare and manage variables using `var`, `let`, and `const`.

---

## 7. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
