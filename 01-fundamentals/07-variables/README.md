# 07 - Variables

Variables are **named storage containers** used to hold data values in the program.  
They allow you to store, update, and retrieve information dynamically during code execution.

---

## 1. What Are Variables?

Variables are named containers that store information used throughout a program.

- Store values for later use  
- Update data dynamically  
- Reuse and interact with stored data

**Example:**

```js
let name = "Sumaya";
let score = 95;
```

---

## 2. Declaring Variables in JavaScript

JavaScript provides three keywords for variable declaration:

- `var`
- `let`
- `const`

### 2.1 `var`

- Function-scoped  
- Redeclarable and reassignable  
- Hoisted and initialized with `undefined`  
- Generally discouraged in modern JS

```js
var age = 25;
var age = 30; // ✅ Redeclaration allowed
```

### 2.2 `let`

- Block-scoped  
- Cannot be redeclared in the same scope  
- Reassignable  
- Hoisted but not initialized (TDZ applies)

```js
let score = 100;
score = 110; // ✅ Reassignment allowed
```

### 2.3 `const`

- Block-scoped  
- Cannot be redeclared or reassigned  
- Must be initialized during declaration  
- Ideal for values that should never change

```js
const PI = 3.1416;
// PI = 3.14; // ❌ Error: Assignment to constant variable
```

---

## 3. Scope of Variables

Scope defines where a variable is accessible:

- `var` → Function-scoped
- `let` and `const` → Block-scoped
- Global variables → Accessible everywhere

```js
function example() {
  var a = 10;  // function-scoped
  let b = 20;  // block-scoped
}
```

---

## 4. Hoisting and Temporal Dead Zone (TDZ)

Variable declarations are hoisted to the top of their scope. Accessing them before declaration causes a ReferenceError (TDZ).

- `var`: Hoisted + initialized with `undefined`  
- `let` & `const`: Hoisted but **not initialized**  

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

---

## 5. Variable Naming Rules and Best Practices

✅ Must begin with a letter, `_`, or `$`  
✅ Case-sensitive  
✅ Use `camelCase` for variables  
✅ Use `UPPER_SNAKE_CASE` for constants  
❌ Avoid reserved words and special characters  
✅ Use meaningful, descriptive names

```js
/* ❌ Avoid */
var temp = 123;
let data = "stuff";

/* ✅ Prefer */
let userName = "Sumaya";
const MAX_RETRIES = 5;
```

For details, see the [Naming Conventions](naming-conventions.md) guide.

---

## 6. Why Use Variables?

- Store user input, calculations, and data dynamically  
- Make code flexible and reusable  
- Keep your program organized and maintainable  
- Enable interaction and manipulation of data at runtime

---

## 💡 Best Practices

✅ Use `const` by default for values that don’t change  
✅ Use `let` only when reassignment is needed  
✅ Avoid `var` unless required for legacy code  
✅ Always initialize variables  
✅ Minimize variable scope  
✅ Choose names that reflect the purpose

---

## 📂 Demo Files

Explore the examples to practice `variable` concepts:

- [`index.js`](index.js)

---

## 🔎 Related Concepts

Some concepts introduced in this topic are covered in more depth:

- [16 - Scope](../16-scope/README.md) → Understand block vs function scope and visibility  
- [17 - Hoisting](../17-hoisting/README.md) → Learn how declarations move before execution and how TDZ works  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) — In-depth explanation  
- [JavaScript.info - Variables](https://javascript.info/variables) — Beginner-friendly guide  
- [freeCodeCamp - JavaScript Variables](https://www.freecodecamp.org/news/javascript-variables-explained/) — Practical use cases

---

## 🔗 Next Topic

**[→ 08 - Data Types](../08-data-types/README.md)** — Learn about the different types of data you can store in JavaScript variables.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
