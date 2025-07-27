# 06 - Comments

**Tags:** `javascript`, `comments`, `documentation`, `syntax`, `language-core`  
**Purpose:** Learn how to write and use comments effectively in JavaScript to document code, improve readability, and assist debugging.  
**Overview:** This topic covers different types of comments, their syntax, and best practices for writing meaningful comments that help maintain clean and understandable code.

---

_Table of Contents:_

- [06 - Comments](#06---comments)
  - [1. What Are Comments?](#1-what-are-comments)
  - [2. Types of Comments](#2-types-of-comments)
    - [Single-line Comments](#single-line-comments)
    - [Multi-line Comments](#multi-line-comments)
  - [3. Why Use Comments?](#3-why-use-comments)
  - [4. Best Practices](#4-best-practices)
  - [5. Code Example Files](#5-code-example-files)
  - [6. Next Topic](#6-next-topic)
  - [7. Navigation](#7-navigation)

---

## 1. What Are Comments?

Comments are **non-executable lines** in your code used to explain, clarify, or annotate parts of the program.

- They help developers understand the purpose, logic, or context.
- Comments are **ignored by the JavaScript engine** during execution.

---

## 2. Types of Comments

JavaScript supports two types of comments:

### Single-line Comments

Start with `//` and extend to the end of the line.

```js
// This is a single-line comment
let x = 10; // Inline comment explaining the variable
```

### Multi-line Comments

Start with `/*` and end with `*/`, spanning multiple lines.

```js
/*
  This is a multi-line comment.
  It can span several lines.
*/
let y = 20;
```

---

## 3. Why Use Comments?

- Explain complex or non-obvious code logic.  
- Mark TODOs, FIXMEs, or notes for future work.  
- Temporarily disable code during debugging.  
- Provide documentation for functions, classes, or modules.  

---

## 4. Best Practices

- Write clear, concise, and relevant comments.
- Avoid stating the obvious—comments should add value beyond the code itself.
- Keep comments up to date with code changes.
- Use comments to explain why something is done, not what is done.
- Use consistent formatting for easier readability.

---

## 5. Code Example Files

See files in the _`05-comments`_ folder for working demos:

- [`index.js`](index.js)  

---

## 6. Next Topic

**[→ 07 - Variables](../07-variables/README.md)** — Learn how to declare and manage variables using `var`, `let`, and `const`, including scoping and hoisting behaviors.

---

## 7. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
