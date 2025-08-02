# 14 - Loops

Loops allow your program to **repeat tasks** efficiently without writing redundant code.  
They help automate iteration and streamline operations like traversing arrays or retrying conditions.

---

## 1. What Are Loops?

A loop is a control structure that **executes a block of code multiple times** based on a condition.

```js
let i = 0;
while (i < 3) {
  console.log("Looping:", i);
  i++;
}
```

---

## 2. Types of Loops

### 2.1 The `for` Loop

- Executes a block of code a specific number of times.
- Useful when you know how many times to iterate.

```js
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
```

### 2.2 The `while` Loop

- Executes a block as long as the condition is true.
- Best when the iteration count is uncertain.

```js
let n = 0;
while (n < 3) {
  console.log("Value:", n);
  n++;
}
```

### 2.3 The `do...while` Loop

- Executes the block at least once, then repeats if the condition is true.

```js
let x = 0;
do {
  console.log("Number:", x);
  x++;
} while (x < 2);
```

### 2.4 The `for...of` Loop

- Iterates over iterable values like arrays or strings.

```js
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### 2.5 The `for...in` Loop

- Iterates over enumerable keys in an object.

```js
let user = { name: "Alice", age: 25 };

for (let key in user) {
  console.log(key + ":", user[key]);
}
```

---

## 💡 Best Practices

✅ Use for when looping by index or for a known count  
✅ Use for...of to iterate through array or string values  
✅ Use for...in cautiously—avoid it with arrays  
✅ Always include an exit condition in while and do...while to prevent infinite loops  
✅ Prefer modern loops (for...of) for better readability when possible  

---

## 📂 Demo Files

Explore these examples for loop practice:

- [`01-for.js`](01-for.js)
- [`02-while.js`](02-while.js)
- [`03-do-while.js`](03-do-while.js)
- [`04-for-of.js`](04-for-of.js)
- [`05-for-in.js`](05-for-in.js)

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) — Official docs on for loop  
- [MDN - while and do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) — Guide on while loops  
- [JavaScript.info - Loops](https://javascript.info/while-for) — Beginner-friendly explanation and loop patterns  

---

## 🔗 Next Topic

**[→ 15 - Functions](../15-functions/README.md)** — Define reusable blocks of code using `function` and arrow syntax.

---

## 🧭 Navigation

[← Back to String Manipulation](../12-string-manipulation/README.md) | [🏠 Main README](../../README.md)
