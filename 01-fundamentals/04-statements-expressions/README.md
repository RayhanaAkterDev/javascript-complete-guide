# 04 - Statements & Expressions

JavaScript is written using two core building blocks: **expressions** and **statements**.  
Understanding how they work—and how they differ—is crucial for writing correct, clean, and predictable code.

---

## 1. What Are Expressions?

An **expression** is any piece of code that **produces a value**.

- Can be assigned to variables, returned from functions, or used inside statements  
- Can be simple (a literal) or complex (with operators)  
- Often used inside other expressions or as part of statements

**Examples:**

```js
5 + 3            // ➝ 8
"Hi" + " there"  // ➝ "Hi there"
true             // ➝ true
x * 2            // ➝ depends on value of x
```

---

## 2. What Are Statements?

A **statement** is a complete instruction that performs an action.

- Usually ends with a semicolon `;`  
- Can include one or more expressions  
- Used to declare, assign, loop, or control program flow

**Examples:**

```js
let x = 10;               // Declaration + assignment
x = x + 5;                // Assignment
if (x > 10) {...}         // Conditional
for (let i = 0; ...) {...}  // Loop
```

---

## 3. Key Differences

| Feature      | Expression                  | Statement                    |
|--------------|-----------------------------|-------------------------------|
| Output       | Produces a value            | Performs an action            |
| Usage        | Part of statements or other expressions | Stands alone as a complete unit |
| Ends With `;`| Optional (unless standalone) | Usually required              |
| Purpose      | Calculate, return, assign   | Declare, branch, loop, control flow |
| Example      | `2 * 3`                     | `let x = 2 * 3;`              |

---

## 4. Common Examples

- **Expression inside a statement:**

```js
let total = price * quantity;
```

- **Expression used as return:**

```js
return a + b;
```

- **Statement using expression in condition:**

```js
if (x > 5) {
  console.log("Greater than 5");
}
```

---

## 5. 💡 Best Practices

✅ Use expressions to write flexible, modular logic  
✅ Keep expressions clean and focused when used inside statements  
✅ Always end statements with `;` to avoid ASI issues  
❌ Don’t confuse an expression for a statement—especially in conditionals

---

## 📂 Demo Files

Explore the examples to practice statements and expression concept:

- [`index.js`](./index.js)

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [freeCodeCamp – Statement vs Expression in Programming](https://www.freecodecamp.org/news/statement-vs-expression-whats-the-difference-in-programming/) — Provides clear, foundational definitions and relatable examples :contentReference
- [Launch School – JavaScript Expressions and Statements](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74) — Separates definitions and shows how assignment both fits and blurs roles
- [Josh W. Comeau – Statements vs Expressions Explained](https://www.joshwcomeau.com/javascript/statements-vs-expressions/) — Beginner-friendly explanation with practical analogies and modern context

---

## 🔗 Next Topic

**[→ 05 - Keywords](../05-keywords/README.md)** — Learn the role of reserved words in JavaScript and how to avoid naming conflicts.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
