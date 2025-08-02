# 17 - Hoisting

Hoisting is JavaScript’s default behavior of **moving declarations to the top** of their containing scope before code execution.  
Understanding hoisting helps avoid unexpected bugs and write clearer code.

---

## 1. What Is Hoisting?

In JavaScript, variable and function declarations are processed before any code runs, meaning you can use variables and call functions before they are declared in the code — to some extent.

```js
console.log(greet()); // Works because function declarations are hoisted

function greet() {
  return "Hello!";
}

console.log(x); // undefined due to variable hoisting
var x = 5;
```

---

## 2. How Hoisting Works

### 2.1 Function Declarations

- Entire function declarations are hoisted, so you can call them before they appear in code.

```js
hello();

function hello() {
  console.log("Hi there!");
}
```

### 2.2 Variable Declarations with `var`

- Variables declared with `var` are hoisted but initialized with `undefined`.

```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

### 2.3 Variables with `let` and `const`

- Declarations are hoisted but not initialized.
- Accessing them before declaration causes ReferenceError due to the **Temporal Dead Zone** (TDZ).

```js
console.log(b); // ReferenceError
let b = 20;
```

---

## 💡 Best Practices

✅ Always declare variables at the top of their scope to avoid confusion  
✅ Prefer `let` and `const` over `var` to minimize hoisting-related bugs  
✅ Avoid relying on hoisting for code logic clarity  
✅ Use function declarations for clarity and predictable hoisting  
✅ Understand TDZ to avoid errors with `let` and `const`

---

## 📂 Demo Files

Explore these examples demonstrating hoisting behaviors:

- [`index.js`](index.js)

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) — Detailed explanation and examples  
- [JavaScript.info - Hoisting](https://javascript.info/variables#hoisting) — Clear beginner-friendly guide  
- [MDN - Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_td_zone) — Explanation of TDZ

---

## 🔗 Next Topic

**[→ 18 - Closures](../18-closures/README.md)** — Functions that remember their lexical environment.

---

## 🧭 Navigation

[← Back to Scope](../16-scope/README.md) | [🏠 Main README](../../README.md)
