# 08 - Data Types

Data types define the kind of data a variable can hold in JavaScript.  
JavaScript is **dynamically typed**, meaning variables can hold any type and can change types at runtime.  
Data types are categorized into **primitive types** (which store actual values) and **reference types** (which store memory addresses).  

Understanding data types helps you write clean, reliable, and bug-free code.

---

## ⚡ Quick Summary (TL;DR)

- **Primitive types** store actual values and are immutable  
- **Reference types** store memory addresses and are mutable  
- Use `typeof`, `instanceof`, and `Array.isArray()` to check types accurately

---

## 1. Primitive Data Types

Primitive values are stored **directly in the variable’s memory**, meaning they contain the actual value. They are **immutable**, so any operation creates a **new value** instead of changing the original.

**JavaScript has 7 primitive types:**  

- **String** — sequence of characters  
- **Number** — numeric values (integers and floats)  
- **Boolean** — true or false values  
- **Null** — intentional absence of any value (typeof returns `"object"` due to a historic bug)  
- **Undefined** — declared but not assigned  
- **Symbol** — unique identifiers  
- **BigInt** — large integers beyond Number limits  

**Example:**

```js
let name = "Sumaya";
let age = 25;
let isActive = true;
let id = Symbol("id");
let bigNumber = 9007199254740991n;
console.log(bigNumber + 10n); // 9007199254741001n
```

---

## 2. Reference Data Types

Reference types store a **reference (memory address)** to the actual object or structure in memory.  
They are **mutable**, meaning their content can be changed, and they are compared by **reference**, not by value.

- **Object** — key-value pairs  
- **Array** — ordered list of values  
- **Function** — callable code blocks (functions are special callable objects)  
- **Date** — date and time objects  
- **RegExp** — regular expressions  

When you assign one object or array to another variable, they both point to the **same memory**, so changes made through one variable affect the other.

**Example:**

```js
const user = { name: "Sumaya", age: 23 };
const scores = [95, 88, 76];
function greet() {
  console.log("Hello");
}

const arr = [1, 2, 3];
const arrCopy = arr;
arrCopy.push(4);
console.log(arr); // [1, 2, 3, 4] — both variables point to the same array
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
typeof null;          // "object" // historic bug
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

- ✅ Use `typeof` to check primitives  
- ✅ Use `Array.isArray()` for arrays  
- ✅ Use `instanceof` for objects and classes  
- ✅ Use strict equality `===` to avoid unexpected type coercion  
- ✅ Check for `null` explicitly  
- ✅ Use `Number.isNaN()` for safe NaN checks

---

## 📂 Practice with Demo Files

Try these examples to practice:

- [`01-primitives.js`](01-primitives.js)  
- [`02-reference.js`](02-reference.js)  
- [`03-type-checking.js`](03-type-checking.js)  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 09 - Type Conversion & Coercion](../09-type-conversion-coercion/README.md)  
  *Understand how JavaScript converts and coerces data types automatically or explicitly.*

### 🔙 Previous Topic

- [← 07 - Variables](../07-variables/README.md)  
  *Learn how to store and manage data with variables.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to the full roadmap and module list.*
