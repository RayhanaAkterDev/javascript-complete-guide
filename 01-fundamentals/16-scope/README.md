# 16 - Scope

Scope defines **where variables and functions are accessible** in your code.  
Understanding scope helps avoid bugs and write predictable, maintainable programs.

---

## 1. What Is Scope?

Scope determines the **visibility and lifetime** of variables and functions.  
JavaScript primarily has **global scope**, **function scope**, and **block scope**.

```js
let x = 10; // global scope

function example() {
  let y = 20; // function scope
  if (true) {
    let z = 30; // block scope
  }
}
```

---

## 2. Types of Scope

### 2.1 Global Scope

- Variables declared outside any function or block
- Accessible anywhere in the code

```js
let globalVar = "I am global";

function test() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Also accessible here
```

### 2.2 Function Scope

- Variables declared inside a function using `var`, `let`, or `const`
- Accessible only within that function

```js
function test() {
  let localVar = "I am local";
  console.log(localVar);
}

test();
// console.log(localVar); // ❌ ReferenceError: localVar is not defined
```

### 2.3 Block Scope

- Variables declared with `let` or `const` inside `{}` blocks
- Not accessible outside the block

```js
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar);
}

// console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
```

## 2.4 Lexical Scope

- Inner functions have access to variables in their outer (parent) scopes
- Scope is determined by where functions are defined, not where they are called

```js
function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // Accesses variable from outer scope
  }

  inner();
}

outer();
```

---

## 💡 Best Practices

✅ Declare variables with `let` or `const` to limit scope  
✅ Avoid polluting global scope—use functions or blocks to encapsulate logic  
✅ Understand closures and lexical scope to manage function behavior  
✅ Use descriptive variable names to avoid shadowing  
✅ Keep scope as narrow as possible for clarity and maintainability

---

## 📂 Demo Files

Explore these examples for scope concepts:

- [`index.js`](index.js)

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) — Detailed scope overview  
- [JavaScript.info - Scope](https://javascript.info/closure#lexical-environment) — In-depth explanations and examples  
- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) — How closures relate to scope

---

## 🔗 Next Topic

**[→ 17 - Objects](../17-objects/README.md)** — Organize data with key-value pairs using objects.

---

## 🧭 Navigation

[← Back to Functions](../15-functions/README.md) | [🏠 Main README](../../README.md)
