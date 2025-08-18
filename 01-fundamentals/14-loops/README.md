# 14 - Loops

Loops allow your program to **repeat tasks** efficiently without writing redundant code.  
They help automate iteration and streamline operations like traversing arrays or retrying conditions.

---

## ⚡ Quick Summary (TL;DR)

- **Loops** let you run the same block of code multiple times automatically  
- Common types:  
  - `for` → Fixed number of iterations (known count)  
  - `while` → Runs while a condition is true (unknown count)  
  - `do...while` → Runs at least once, then checks the condition  
  - `for...of` → Iterates over values of arrays, strings, etc.  
  - `for...in` → Iterates over keys of objects  
- **Best choice tips:**  
  - Use `for` for indexed iteration  
  - Use `for...of` for cleaner array/string loops  
  - Use `for...in` only for objects  
- Always have a **termination condition** to avoid infinite loops  

---

📂 **Code Reference:**

_View complete examples in the context._

- [01-for.js](01-for.js)  
- [02-while.js](02-while.js)  
- [03-do-while.js](03-do-while.js)  
- [04-for-of.js](04-for-of.js)  
- [05-for-in.js](05-for-in.js)  

---

## 1. What Are Loops?

A **loop** is a control structure that executes a block of code multiple times based on a condition.

- Automates repetitive tasks  
- Useful for traversing arrays, objects, or ranges  
- Prevents redundancy in code

**Example:**

```js
let i = 0;
while (i < 3) {
  console.log("Looping:", i);
  i++;
}
```

---

## 2. Types of Loops

### 2.1 `for` Loop

- Executes a block of code a specific number of times  
- Best when the number of iterations is known in advance  

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
```

---

### 2.2 `while` Loop

- Runs as long as the condition evaluates to `true`  
- Best when iteration count is uncertain  

**Example:**

```js
let n = 0;
while (n < 3) {
  console.log("Value:", n);
  n++;
}
```

---

### 2.3 `do...while` Loop

- Executes the block at least once, then checks the condition  

**Example:**

```js
let x = 0;
do {
  console.log("Number:", x);
  x++;
} while (x < 2);
```

---

### 2.4 `for...of` Loop

- Iterates over **values** of an iterable (arrays, strings, etc.)  

**Example:**

```js
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 2.5 `for...in` Loop

- Iterates over **keys** of an object  
- Avoid using it for arrays as order is not guaranteed  

**Example:**

```js
let user = { name: "Alice", age: 25 };

for (let key in user) {
  console.log(key + ":", user[key]);
}
```

---

## 💡 Best Practices

- ✅ Break loops early with `break` when the goal is achieved  
- ✅ Use `continue` to skip unnecessary iterations  
- ✅ Keep loop logic minimal; move complex tasks into functions  
- 🚫 Avoid deeply nested loops for readability and performance  
- ✅ Test loop termination conditions to prevent infinite loops  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 15 - Functions](../15-functions/README.md)  
_Learn how to define reusable blocks of code using `function` and arrow syntax._

### 🔙 Previous Topic

- [← 13 - String Manipulation](../12-string-manipulation/README.md)  
_Discover ways to work with and transform strings._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
