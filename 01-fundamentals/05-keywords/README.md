# 05 - JavaScript Keywords

JavaScript keywords are **reserved words** that have special meaning in the language syntax.  
They form the core structure of JavaScript programs and cannot be used as variable, function, or class names.

---

## ⚡ Quick Summary (TL;DR)

- Keywords are **reserved** and predefined by JavaScript  
- They define program structure and control flow  
- Using keywords as identifiers causes **syntax errors**  
- Knowing keywords helps avoid naming conflicts and errors  

---

📂 **Code Reference:**

_Try out examples to understand keyword usage and restrictions._

- [keywords.js](./keywords.js)

---

## 1. What Are JavaScript Keywords?

Keywords are special words built into JavaScript that define the language’s syntax.  
They are not allowed to be used as names for variables, functions, or classes.

**Example:**

```js
let return = 5; // ❌ SyntaxError: Unexpected token 'return'
```

---

## 2. Common JavaScript Keywords

| Category            | Keywords                                                   |
|---------------------|------------------------------------------------------------|
| Variable Declarations| `var`, `let`, `const`                                      |
| Control Flow        | `if`, `else`, `switch`, `case`, `default`, `for`, `while`, `do`, `break`, `continue` |
| Functions           | `function`, `return`, `yield`                              |
| Error Handling      | `try`, `catch`, `finally`, `throw`                         |
| Classes & Modules   | `class`, `extends`, `constructor`, `super`, `import`, `export`, `default` |
| Logical & Contextual| `true`, `false`, `null`, `undefined`, `this`, `typeof`, `instanceof`, `in`, `new`, `delete`, `void` |
| Strict Mode Directive| `"use strict"` (directive, not a keyword)                 |

---

## 3. Invalid Keyword Usage

Using keywords as identifiers results in syntax errors:

```js
let let = 10;           // ❌ SyntaxError
function class() {}     // ❌ SyntaxError
const if = 5;           // ❌ SyntaxError
```

---

## 💡 Pro Tips

- ✅ Use clear, descriptive names that avoid keywords  
- ✅ Avoid names that resemble keywords  
- ✅ Use prefixes like `is`, `has`, `can`, `get` to reduce conflicts  
- ✅ Keep updated with new keywords such as `await`, `yield`, `import`  
- 🚫 Never use keywords as variable or function names  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 06 - Comments](../06-comments/README.md)  
  _Learn how to write and use comments in JavaScript._

### 🔙 Previous Topic

- [← 04 - Statements & Expressions](../04-statements-expressions/README.md)  
  _Understand fundamental JavaScript syntax elements._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  _Browse other core JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
  _Return to full roadmap and module list._
