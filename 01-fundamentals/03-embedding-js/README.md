# Embedding JavaScript

**Tags:** `javascript`, `embedding`, `scripts`, `html`, `basics`  
**Purpose:** Understand how to properly embed JavaScript into HTML using different methods.  
**Overview:** This guide covers inline, internal, and external script embedding in HTML. It explains their differences, use cases, and best practices for real-world projects.

---

_Table of Contents:_

- [Embedding JavaScript](#embedding-javascript)
  - [1. Inline JavaScript](#1-inline-javascript)
  - [2. Internal JavaScript](#2-internal-javascript)
  - [3. External JavaScript](#3-external-javascript)
  - [4. Script Tag Attributes](#4-script-tag-attributes)
  - [5. Best Practices](#5-best-practices)
  - [6. Code Example Files](#6-code-example-files)
  - [7. Next Topic](#7-next-topic)
  - [8. Navigation](#8-navigation)

---

## 1. Inline JavaScript

JavaScript code written directly inside HTML element attributes such as `onclick`.

**Example:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

This method is simple but not recommended in real-world projects due to security concerns (e.g., XSS attacks) and poor maintainability.

---

## 2. Internal JavaScript

JavaScript code placed inside `<script>` tags within the same HTML file, typically inside `<head>` or `<body>`.

**Example:**

```html
<script>
  console.log("Internal script running");
</script>
```

Use for small, page-specific logic or temporary scripts during development.

---

## 3. External JavaScript

JavaScript stored in a separate .js file and linked using the `<script src="...">` element.  
Promotes separation of concerns, better caching, and reusability.

**Example:**

```html
<script src="scripts/app.js"></script>
```

---

## 4. Script Tag Attributes

- `defer`: Executes the script after the HTML document has been parsed (only applies to external scripts).  
- `async`: Loads and executes the script asynchronously as soon as it’s ready (may run out of order).  
- `type="module"`: Treats the script as an ES6 module, allowing use of `import`/`export`.

These attributes help optimize load performance and control execution order.

---

## 5. Best Practices

- Use external scripts to keep code modular and maintainable.  
- Prefer `defer` or `async` to avoid render-blocking.  
- Avoid inline scripts to prevent XSS vulnerabilities and improve security.  
- If not using `defer`, place `<script>` tags just before the closing `</body>` tag.

---

## 6. Code Example Files

- [index.html](index.html)  
- [script.js](script.js)

---

## 7. Next Topic

**[→ Statements & Expressions](../04-statements-expressions/README.md)** — Understand JavaScript syntax building blocks and how they work.

---

## 8. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
