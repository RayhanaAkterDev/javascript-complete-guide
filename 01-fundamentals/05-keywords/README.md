# 05 - JavaScript Keywords

JavaScript keywords are **reserved words** with special meaning in the language syntax.  
They form the language structure and cannot be used as variable, function, or class names.  
Understanding keywords helps avoid syntax errors and naming conflicts.

---

## 1. What Are JavaScript Keywords?

Keywords are predefined and reserved by JavaScript to define program structure and control flow.  
Using them as identifiers results in syntax errors.

```js
let return = 5; // ❌ SyntaxError: Unexpected token 'return'
```

---

## 2. Common JavaScript Keywords

### 2.1 Variable Declarations

- `var` — function-scoped variable
- `let` — block-scoped variable (ES6)
- `const` — block-scoped constant (ES6)

### 2.2 Control Flow

- `if`, `else`, `switch`, `case`, `default`
- `for`, `while`, `do`
- `break`, `continue`

### 2.3 Functions

- `function`, `return`
- `yield` — generator functions (ES6)

### 2.4 Error Handling

- `try`, `catch`, `finally`, `throw`

### 2.5 Classes & Modules

- `class`, `extends`, `constructor`, `super`
- `import`, `export`, `default`

### 2.6 Logical & Contextual

- `true`, `false`, `null`, `undefined`
- `this`, `typeof`, `instanceof`, `in`, `new`, `delete`, `void`

### 2.7 Strict Mode

- "`use strict`" — directive to enforce stricter parsing (not a keyword)

---

## 3. Invalid Keyword Usage

You cannot use reserved keywords as variable or function names:

```js
let let = 5;           // ❌ SyntaxError
function return() {}   // ❌ SyntaxError
const if = 10;         // ❌ SyntaxError
```

---

## 💡 Best Practices

✅ Use clear, descriptive names that are not reserved keywords  
✅ Avoid using or mimicking keywords in identifiers  
✅ Use meaningful prefixes like `is`, `has`, `get`, `set` to avoid conflicts  
✅ Keep updated with new ECMAScript keywords like `await`, `yield`, `import`  

---

## 📂 Demo Files

Explore the examples to practice `keyword` concepts:

- [`index.js`](index.js)

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - JavaScript Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) — Comprehensive list and explanation of reserved keywords in JavaScript
- [W3Schools - JavaScript Reserved Words](https://www.w3schools.com/js/js_reserved.asp) — Beginner-friendly list of reserved keywords with examples

---

## 🔗 Next Topic

**[→ 06 - comments](../06-comments/README.md)** — Learn how to declare and manage variables using `var`, `let`, and `const`.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
