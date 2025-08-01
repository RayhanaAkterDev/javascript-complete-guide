# 08 - Data Types

Data types define the kind of data a variable can hold in JavaScript.  
They are categorized into **primitive types** (which store actual values) and **reference types** (which store memory addresses).  
Understanding data types helps you write clean, reliable, and bug-free code.

---

## 1. Primitive Data Types

Primitive values are stored **directly in the variable’s memory**, meaning they contain the actual value. They are **immutable**, so any operation creates a **new value** instead of changing the original.

JavaScript has 7 primitive types.  

- String — sequence of characters  
- Number — numeric values (integers and floats)  
- Boolean — true or false values  
- Null — intentional absence of any value  
- Undefined — declared but not assigned  
- Symbol — unique identifiers  
- BigInt — large integers beyond Number limits  

**Example:**

```js
let name = "Sumaya";
let age = 25;
let isActive = true;
let id = Symbol("id");
let bigNumber = 9007199254740991n;
```

---

## 2. Reference Data Types

Reference types store a **reference (memory address)** to the actual object or structure in memory.  
They are **mutable**, meaning their content can be changed, and they are compared by **reference**, not by value.

- Object — key-value pairs  
- Array — ordered list of values  
- Function — callable code blocks  
- Date — date and time objects  
- RegExp — regular expressions  

When you assign one object or array to another variable, they both point to the **same memory**, so changes made through one variable affect the other.

**Example:**

```js
const user = { name: "Sumaya", age: 23 };
const scores = [95, 88, 76];
function greet() {
  console.log("Hello");
}
```

---

## 3. Type Checking

JavaScript provides multiple ways to check types — each has specific use cases.

### 3.1 Using `typeof`

The `typeof` operator returns a string representing the type of a value.  
It works well for **primitives**, but has quirks with objects like `null` and arrays.

```js
typeof "hello";       // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof Symbol();      // "symbol"
typeof 10n;           // "bigint"
typeof null;          // "object" // JavaScript quirk
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"
```

### 3.2 Using `instanceof`

Checks whether a value is an **instance of a constructor**, useful for objects and custom types.

```js
[] instanceof Array;         // true
new Date() instanceof Date;  // true
(function() {}) instanceof Function; // true
{} instanceof Object;        // true
```

### 3.3 Reliable Checks for Arrays and Null

Since `typeof []` and `typeof null` both return `"object"`, use these safer alternatives:

```js
Array.isArray([]); // true
null === null;     // true
```

---

## 4. Common Pitfalls

Be aware of some unintuitive behavior when working with types:

- `typeof null` returns `"object"` — use strict checks instead.  
- Arrays are objects — `typeof []` is `"object"`; use `Array.isArray()` instead.  
- Comparing two objects/arrays with `===` checks reference, not content.  
- `NaN` is a `number` but not equal to itself (`NaN !== NaN`). Use `Number.isNaN()`.

```js
Number.isNaN(NaN); // true
NaN === NaN;       // false
```

---

## 💡 Best Practices

✅ Use `typeof` to check primitives.  
✅ Use `Array.isArray()` for arrays.  
✅ Use `instanceof` for objects and classes.  
✅ Use strict equality `===` to avoid unexpected type coercion.  
✅ Check for `null` explicitly.  
✅ Use `Number.isNaN()` for safe NaN checks.

---

## 📂 Demo Files

Explore the examples to practice `data-types` concepts:

- [`primitives.js`](primitives.js)  
- [`reference.js`](reference.js)  
- [`type-checking.js`](type-checking.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values) — In-depth explanation  
- [JavaScript.info: Data Types](https://javascript.info/types) — Beginner-friendly guide

---

## 🔗 Next Topic

**[→ 09 - Type Conversion & Coercion](../09-type-conversion-coercion/README.md)** — Understand how JavaScript converts and coerces data types automatically or explicitly.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
