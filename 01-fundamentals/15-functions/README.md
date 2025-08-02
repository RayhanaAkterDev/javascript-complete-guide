# 15 - Functions

Functions let you **group reusable logic** into named or anonymous blocks of code.  
They help reduce repetition, improve clarity, and organize your program into logical steps.

---

## 1. What Are Functions?

A function is a reusable block of code that performs a specific task.  
It can take inputs (parameters) and return an output (result).

```js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Sumaya")); // Hello, Sumaya!
```

---

## 2. Types of Functions

### 2.1 Function Declaration

- Named function that can be **hoisted** (used before defined).

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

### 2.2 Function Expression

- Assigned to a variable; not hoisted.

```js
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 5)); // 20
```

### 2.3 Arrow Function (ES6)

- Concise syntax; ideal for short logic and callbacks.

```js
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5
```

### 2.4 Anonymous Function

- Function without a name; often passed as arguments.

```js
setTimeout(function() {
  console.log("Anonymous function ran after 1 second");
}, 1000);
```

### 2.5 Callback Function

- A function passed into another function to be executed later.

```js
function process(callback) {
  callback("📦 Task completed");
}

process(function(msg) {
  console.log("Callback received:", msg);
});
```

_Another real-world example using setTimeout:_

```js
setTimeout(function() {
  console.log("⏳ This runs after 1 second");
}, 1000);
```

### 2.6 IIFE (Immediately Invoked Function Expression)

- A function that runs immediately after it's defined.

```js
(function() {
  console.log("IIFE: runs immediately!");
})();
```

---

## 💡 Best Practices

✅ Use function declarations for top-level, reusable logic  
✅ Use arrow functions for short, inline, or anonymous operations  
✅ Name functions clearly to reflect their purpose  
✅ Avoid deeply nested functions — extract helper functions instead  
✅ Keep each function focused on a single task  

---

## 📂 Demo Files

Explore these examples for function patterns:

- [`01-declaration.js`](01-declaration.js)  
- [`02-expression.js`](02-expression.js)  
- [`03-arrow.js`](03-arrow.js)  
- [`04-callback.js`](04-callback.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) — Full guide on defining and using functions  
- [JavaScript.info - Functions](https://javascript.info/function-basics) — Friendly explanation with use cases  
- [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — ES6 syntax and differences

---

## 🔗 Next Topic

**[→ 16 - Scope](../16-scope/README.md)** — Understand where variables and functions are accessible.

---

## 🧭 Navigation

[← Back to Loops](../14-loops/README.md) | [🏠 Main README](../../README.md)
