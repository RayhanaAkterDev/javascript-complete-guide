# 15 - Functions

Functions let you **group reusable logic** into named or anonymous blocks of code.  
They help reduce repetition, improve clarity, and organize your program into logical steps.

---

## ⚡ Quick Summary (TL;DR)

- A **function** is a reusable block of code that performs a specific task  
- Functions can take **parameters** (inputs) and return **values** (outputs)  
- Common types:  
  - Function Declaration → Named, hoisted  
  - Function Expression → Assigned to variable, not hoisted  
  - Arrow Function → Concise syntax, ideal for short logic and callbacks  
  - Anonymous Function → No name, often used inline  
  - Callback Function → Passed into another function to run later  
  - IIFE (Immediately Invoked Function Expression) → Runs immediately after definition  
- Functions improve code **reuse**, **clarity**, and **organization**

---

📂 **Code Reference:**

_View complete examples in the context._

- [01-declaration.js](01-declaration.js)  
- [02-expression.js](02-expression.js)  
- [03-arrow.js](03-arrow.js)  
- [04-callback.js](04-callback.js)  

---

## 1. What Are Functions?

A **function** is a named or anonymous block of code designed to perform a specific task.

- Avoids code repetition  
- Can accept inputs and return outputs  
- Helps organize code into logical pieces

**Example:**

```js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Sumaya")); // Hello, Sumaya!
```

---

## 2. Types of Functions

### 2.1 Function Declaration

- Named function that can be **hoisted** (called before definition)

**Example:**

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

### 2.2 Function Expression

- Function assigned to a variable; not hoisted

**Example:**

```js
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 5)); // 20
```

---

### 2.3 Arrow Function

- Concise ES6 syntax, ideal for short logic and callbacks

**Example:**

```js
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5
```

---

### 2.4 Anonymous Function

- Function without a name, often passed as arguments

**Example:**

```js
setTimeout(function() {
  console.log("Anonymous function ran after 1 second");
}, 1000);
```

---

### 2.5 Callback Function

- Function passed into another function to be executed later

**Example:**

```js
function process(callback) {
  callback("📦 Task completed");
}

process(function(msg) {
  console.log("Callback received:", msg);
});
```

---

### 2.6 IIFE (Immediately Invoked Function Expression)

- Runs immediately after it's defined

**Example:**

```js
(function() {
  console.log("IIFE: runs immediately!");
})();
```

---

## 💡 Best Practices

- ✅ Use function declarations for reusable logic  
- ✅ Use arrow functions for short, inline callbacks  
- ✅ Name functions clearly to reflect their purpose  
- ✅ Keep functions focused on a single task  
- ✅ Extract complex logic into helper functions  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 16 - Scope](../16-scope/README.md)  
_Understand where variables and functions are accessible._

### 🔙 Previous Topic

- [← 14 - Loops](../14-loops/README.md)  
_Learn how to repeat code efficiently with loops._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
