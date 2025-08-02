# 18 - Strict Mode

Strict mode is a way to opt in to a restricted variant of JavaScript, which **enforces stricter parsing and error handling**.  
It helps catch common coding mistakes, improves performance, and makes your code more secure and easier to debug.

---

## 1. What Is Strict Mode?

Strict mode changes the behavior of JavaScript by introducing more rigorous error checking and disabling some problematic features.  
It is enabled by placing `"use strict";` at the beginning of a script or a function.

```js
"use strict";

x = 10; // ReferenceError: x is not defined (assignment to undeclared variable)
```

Without strict mode, this would create a global variable implicitly, which can lead to bugs.

---

## 2. How Strict Mode Works

### 2.1 Enabling Strict Mode

Strict mode can be applied globally to an entire script or locally inside individual functions by placing "use strict"; at the beginning.

```js
"use strict";

function test() {
  "use strict";
  // Strict mode here too
}
```

### 2.2 Key Differences Under Strict Mode

Strict mode introduces the following changes to normal JavaScript behavior:

- ❌ **Undeclared variables** are not allowed. Assignments without declaration throw `ReferenceError`.  
- ❌ **Silent errors** become visible — for example, writing to a non-writable property throws a `TypeError`.  
- ❌ **`this` is `undefined`** in functions not called as object methods.
- ❌ **Duplicate parameters or property names** in objects/functions cause `SyntaxError`.  
- ❌ **`with` statements** are disallowed entirely.  
- ❌ **Future reserved keywords** (e.g., `interface`, `package`) cannot be used as identifiers.  

📌 _See all working examples in_: [`differences.js`](differences.js)

---

## 💡 Best Practices

✅ Always use strict mode in your scripts and modules  
✅ Write code that avoids implicit globals to reduce bugs  
✅ Use `const` and `let` to declare variables explicitly  
✅ Avoid deprecated or error-prone features disallowed by strict mode  
✅ Test code in strict mode early to catch mistakes sooner  

---

## 📂 Demo Files

Try these examples to see strict mode in action:

- [`index.js`](index.js)
- [`differences.js`](differences.js)

---

## 🧪 Try It Online

Practice strict mode examples interactively on:

- [JSFiddle](https://jsfiddle.net)  
- [CodePen](https://codepen.io)  

---

## 📚 Further Reading

- [MDN - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) — Comprehensive guide  
- [JavaScript.info - Strict mode](https://javascript.info/strict-mode) — Beginner-friendly explanation  
- [ECMAScript Language Specification - Strict Mode](https://tc39.es/ecma262/#sec-strict-mode-code) — Official spec details  

---

## 🔗 Next Topic

**[→ 02 - Data Structures](../../02-data-structures/README.md)**  
Continue with foundational data structures next.

---

## 🧭 Navigation

[← Back to Hoisting](../17-hoisting/README.md) | [🏠 Main README](../../README.md)
