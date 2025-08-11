# 13 - Conditionals

Conditionals allow your program to **make decisions** based on different conditions or values.  
They control the flow of execution and enable dynamic behavior.

---

## ⚡ Quick Summary (TL;DR)

- Conditionals execute code blocks based on whether conditions are true or false  
- Use `if`, `if...else`, `if...else if...else`, `switch`, and ternary (`? :`) statements  
- Always use strict equality `===` to avoid unexpected type coercion  
- Keep conditional logic simple and readable for maintainability  

---

📂 **Code Reference:**

_Practice conditional statements with:_

- [`conditionals.js`](conditionals.js)  

---

## 1. What Are Conditionals?

A conditional statement executes code only if a specified condition evaluates to `true`.

```js
if (true) {
  console.log("This runs because condition is true.");
}
```

---

## 2. Types of Conditional Statements

### 2.1 The `if` Statement

- Executes a block of code when the condition is truthy.

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### 2.2 The `if...else` Statement

- Executes one block if condition is true, another if false.

```js
let hour = 10;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
```

### 2.3 The `if...else if...else` Ladder

- Tests multiple conditions sequentially.

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C or below");
}
```

### 2.4 The `switch` Statement

- Compares a value against multiple cases and executes matching block.  
- Use `break` to prevent fall-through between cases.

```js
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;  // Prevents fall-through
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

### 2.5 Ternary Operator (`? :`)

- Shorthand for simple if...else expressions.

```js
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access);
```

---

## 💡 Best Practices

- ✅ Use `===` for comparisons to avoid type coercion bugs  
- ✅ Use `switch` for clearer multi-choice logic  
- ✅ Keep conditions simple and readable  
- ✅ Prefer ternary for concise conditional assignments  
- 🚫 Avoid deep nested `if...else`; refactor or use functions for complex logic  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 14 - Loops](../14-loops/README.md)  
  _Automate repetitive tasks with `for`, `while`, and `do...while` loops._

### 🔙 Previous Topic

- [← 12 - String Manipulation](../12-string-manipulation/README.md)  
  _Work with strings using built-in methods and template literals._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  _Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
  _Return to the full roadmap and module list._
