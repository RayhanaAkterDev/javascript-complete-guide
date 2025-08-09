# 05 - JavaScript Keywords

JavaScript keywords are **reserved words** with special meaning in the language syntax. They form the language structure and cannot be used as variable, function, or class names.  

Understanding keywords helps avoid syntax errors and naming conflicts.

---

## ⚡ Quick Summary (TL;DR)

- Keywords are **predefined** and **reserved** by JavaScript  
- They define **program structure** and **control flow**  
- Using **keywords as identifiers causes syntax errors**  
- Keep identifiers clear and avoid reserved words  

---

## 1. What Are JavaScript Keywords?

Keywords are special words that JavaScript uses to define its syntax and structure.  
Trying to use them as variable or function names will cause errors.

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

### 2.7 Strict Mode Directive

- `"use strict"` — enables stricter parsing and error handling (not a keyword)  

---

> 📚 For a complete list of JavaScript reserved keywords, see [MDN JavaScript Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)

---

## 3. Invalid Keyword Usage

Using reserved keywords as identifiers causes syntax errors:

```js
let let = 5;           // ❌ SyntaxError
function return() {}   // ❌ SyntaxError
const if = 10;         // ❌ SyntaxError
```

---

## 💡 Pro Tips

- ✅ Use clear, descriptive names that avoid reserved keywords  
- ✅ Avoid mimicking keywords in variable or function names  
- ✅ Use prefixes like `is`, `has`, `get`, `set` to reduce conflicts  
- ✅ Stay updated with new keywords like `await`, `yield`, and `import`  

---

## 📂 Practice with Demo Files

Try the examples to practice keyword concepts:

- [`index.js`](index.js)

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 06 - Comments](../06-comments/README.md)  
  *Learn how to write and use comments in JavaScript.*

### 🔙 Previous Topic

- [← 04 - Statements & Expressions](../04-statements-expressions/README.md)  
  *Understand the fundamental building blocks of JavaScript.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse other core foundational topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to full roadmap and module list.*
