# 17 - Hoisting

Hoisting is JavaScript’s behavior of **moving declarations to the top** of their scope before code runs.  
Understanding hoisting helps prevent bugs and makes code more predictable.

---

## ⚡ Quick Summary (TL;DR)

- **Hoisting** moves variable and function declarations to the top of their scope  
- **Function Declarations** → fully hoisted (can be called before defined)  
- **var** → hoisted but initialized with `undefined`  
- **let / const** → hoisted but in **Temporal Dead Zone (TDZ)** until declared  
- Knowing hoisting helps avoid confusion and errors

---

📂 **Code Reference:**

_View complete examples in the context._

- [hoisting.js](hoisting.js)

---

## 1. What Is Hoisting?

In JavaScript, variable and function declarations are processed before any code runs.  
This means you can use them earlier than they appear — with some important differences.

**Example:**

```js
console.log(greet()); // ✅ Works (function hoisted)

function greet() {
  return "Hello!";
}

console.log(x); // undefined (var hoisted but not initialized)
var x = 5;
```

---

## 2. How Hoisting Works

### 2.1 Function Declarations

- Entire function definitions are hoisted.  
- You can call them before they appear in code.

```js
sayHi(); // ✅ Works

function sayHi() {
  console.log("Hi there!");
}
```

---

### 2.2 Variables with `var`

- Hoisted but initialized as `undefined`.  
- Using them before assignment gives `undefined`.

```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

---

### 2.3 Variables with `let` and `const`

- Hoisted but not initialized.  
- Accessing them before declaration causes **ReferenceError** due to the **Temporal Dead Zone (TDZ)**.

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

---

## 💡 Best Practices

- ✅ Always declare variables before using them  
- ✅ Prefer `let` and `const` over `var`  
- ✅ Don’t rely on hoisting for clarity  
- ✅ Use function declarations when predictable hoisting is useful  
- ✅ Understand TDZ for safer `let`/`const` use  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 18 - Strict Mode](../18-strict-mode/README.md)  
_Learn how strict mode makes JavaScript safer by catching errors and restricting unsafe practices._

### 🔙 Previous Topic

- [← 16 - Scope](../16-scope/README.md)  
_Discover how variable and function visibility works in different contexts._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
