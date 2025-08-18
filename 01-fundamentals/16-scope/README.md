# 16 - Scope

Scope defines **where variables and functions are accessible** in your code.  
Understanding scope helps avoid bugs and write predictable, maintainable programs.

---

## ⚡ Quick Summary (TL;DR)

- **Scope** determines the visibility and lifetime of variables/functions  
- Main types:  
  - **Global Scope** → Accessible everywhere  
  - **Function Scope** → Accessible only inside a function  
  - **Block Scope** → Accessible only inside `{}` blocks  
  - **Lexical Scope** → Inner functions can access parent scope variables  
- Good scope management improves **clarity**, **safety**, and **maintainability**

---

📂 **Code Reference:**

_View complete examples in the context._

- [scope.js](scope.js)

---

## 1. What Is Scope?

Scope determines the **visibility and lifetime** of variables and functions.  
JavaScript primarily has **global scope**, **function scope**, and **block scope**.

**Example:**

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

- Declared outside any function/block  
- Accessible anywhere in the code  

```js
let globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible here
}

console.log(globalVar); // ✅ Accessible here
```

---

### 2.2 Function Scope

- Declared inside a function  
- Accessible only within that function  

```js
function test() {
  let localVar = "I am local";
  console.log(localVar); // ✅ Works here
}

test();
// console.log(localVar); // ❌ ReferenceError
```

---

### 2.3 Block Scope

- Declared with `let` or `const` inside `{}`  
- Accessible only within that block  

```js
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // ✅ Works here
}

// console.log(blockVar); // ❌ ReferenceError
```

---

### 2.4 Lexical Scope

- Inner functions can access variables from their outer (parent) scope  
- Scope depends on **where functions are defined**, not where called  

```js
function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // ✅ Access parent scope
  }

  inner();
}

outer();
```

---

## 💡 Best Practices

- ✅ Use `let` or `const` instead of `var`  
- ✅ Keep scope as **narrow** as possible  
- ✅ Avoid polluting the **global scope**  
- ✅ Be mindful of **closures** and lexical scope  
- ✅ Use clear names to prevent variable shadowing  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 17 - Hoisting](../17-hoisting/README.md)  
_Learn how JavaScript moves declarations to the top before running code._

### 🔙 Previous Topic

- [← 15 - Functions](../15-functions/README.md)  
_Group reusable logic into named or anonymous blocks of code._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
