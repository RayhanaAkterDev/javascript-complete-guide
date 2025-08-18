# 18 - Strict Mode

Strict mode is a way to opt in to a restricted version of JavaScript that **enforces stricter parsing and error handling**.  
It helps catch mistakes early, improves code quality, and makes programs more secure.

---

## ⚡ Quick Summary (TL;DR)

- Enable with `"use strict";` at the top of a script or function  
- Prevents **undeclared variables**  
- Converts **silent errors** into visible errors  
- Changes `this` in functions (defaults to `undefined`)  
- Disallows **duplicate names** and **with statements**  
- Helps write **cleaner, safer, and more maintainable code**

---

📂 **Code Reference:**

_View complete examples in the context._

- [strict-mode.js](strict-mode.js)  
- [differences.js](differences.js)

---

## 1. What Is Strict Mode?

Strict mode applies tighter rules to JavaScript.  
It makes debugging easier and prevents hidden issues.

**Example:**

```js
"use strict";

x = 10; 
// ❌ ReferenceError: x is not defined
// Without strict mode, this would create a global variable
```

---

## 2. How Strict Mode Works

### 2.1 Enabling Strict Mode

- Add `"use strict";` at the start of a script (global) or a function (local).

```js
"use strict"; // Applies globally

function test() {
  "use strict"; // Applies only inside this function
}
```

---

### 2.2 Key Differences in Strict Mode

- ❌ Assigning to undeclared variables → `ReferenceError`  
- ❌ Silent errors (e.g., writing to read-only properties) → Throw errors  
- ❌ `this` inside plain functions → `undefined` (not `window`/`global`)  
- ❌ Duplicate function parameters or object keys → `SyntaxError`  
- ❌ `with` statement → Not allowed  
- ❌ Reserved keywords (like `package`, `interface`) → Cannot be used  

**Example:**

```js
"use strict";

function demo(a, a) { } 
// ❌ SyntaxError: Duplicate parameter name
```

---

## 💡 Best Practices

- ✅ Always use `"use strict";` in scripts or modules  
- ✅ Prefer `let` and `const` to avoid accidental globals  
- ✅ Write clean, explicit code instead of relying on defaults  
- ✅ Avoid features banned by strict mode (`with`, duplicates)  
- ✅ Use strict mode early to catch mistakes faster  

---

## 🔗 Navigation

### 🔜 Next Topic

- [02 - Core JavaScript Mechanics (Part 1)](../../02-js-mechanism-part-1/README.md)  
_Learn how JavaScript executes code, manages scope, handles closures, and uses the `this` keyword._

### 🔙 Previous Topic

- [← 17 - Hoisting](../17-hoisting/README.md)  
_Understand how JavaScript moves declarations before execution._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
