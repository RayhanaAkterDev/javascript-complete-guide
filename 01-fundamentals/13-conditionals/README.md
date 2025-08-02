# 13 - Conditionals

Conditionals allow your program to **make decisions** based on different conditions or values.  
They control the flow of execution and enable dynamic behavior.

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
- **Remember**: Use break to prevent fall-through to the next case.

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

✅ Use `===` for comparisons to avoid type coercion  
✅ Use `switch` for clearer multi-choice decisions  
✅ Keep conditions simple and readable  
✅ Prefer ternary for short conditional assignments  
✅ Use nested `if...else` sparingly—prefer to simplify logic or use functions for complex branching

---

## 📂 Demo Files

Explore these examples for conditional logic practice:

- [`index.js`](index.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) — Official, detailed reference for if-else statements  
- [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) — Comprehensive guide on switch statements and usage  
- [JavaScript.info - Conditional operators](https://javascript.info/ifelse) — Clear, beginner-friendly explanations of conditional statements  

---

## 🔗 Next Topic

**[→ 14 - Loops](../14-loops/README.md)** — Automate repetitive tasks with `for`, `while`, and `do...while`.

---

## 🧭 Navigation

[← Back to String Manipulation](../12-string-manipulation/README.md) | [🏠 Main README](../../README.md)
