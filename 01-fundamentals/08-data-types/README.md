# 08 - Data Types

Data types define the kind of data a variable can hold in JavaScript.  
JavaScript is **dynamically typed**, meaning variables can hold any type and can change types at runtime.  
Data types are categorized into **primitive types** (which store actual values) and **reference types** (which store memory addresses).

---

## ⚡ Quick Summary (TL;DR)

- **Primitive types** store actual values and are immutable  
- **Reference types** store memory addresses and are mutable  
- Use `typeof`, `instanceof`, and `Array.isArray()` to check types accurately  

---

📂 **Code Reference:**

_Practice data types with these examples:_

- [01-primitives.js](01-primitives.js)  
- [02-reference.js](02-reference.js)  
- [03-type-checking.js](03-type-checking.js)  

---

## 1. Primitive Data Types

Primitive values are stored **directly in the variable’s memory**, meaning they contain the actual value. They are **immutable**, so any operation creates a **new value** instead of changing the original.

JavaScript has **7 primitive types**:  

- **String** — sequence of characters  
- **Number** — numeric values (integers and floats)  
- **Boolean** — true or false values  
- **Null** — intentional absence of any value (typeof returns `"object"` due to historic bug)  
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

Assigning one object or array to another variable copies the reference, so both variables point to the same memory.

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

JavaScript provides multiple ways to check types — each with specific use cases.

### 3.1 Using `typeof`

Returns a string representing the type of a value. Works well for primitives but has quirks with some objects.

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

Checks if a value is an instance of a constructor, useful for objects and custom types.

```js
[] instanceof Array;         // true
new Date() instanceof Date;  // true
(function() {}) instanceof Function; // true
{} instanceof Object;        // true
```

### 3.3 Reliable Checks for Arrays and Null

Because `typeof []` and `typeof null` both return `"object"`, use these safer checks:

```js
Array.isArray([]); // true
null === null;     // true
```

---

## 4. Common Pitfalls

- `typeof null` returns `"object"` — use strict checks for null  
- Arrays are objects — `typeof []` is `"object"`; use `Array.isArray()`  
- Comparing objects/arrays with `===` compares references, not content  
- `NaN` is a number but `NaN !== NaN`; use `Number.isNaN()` for checking

```js
Number.isNaN(NaN); // true
NaN === NaN;       // false
```

---

## 💡 Best Practices

- ✅ Use `typeof` for primitive type checks  
- ✅ Use `Array.isArray()` for arrays  
- ✅ Use `instanceof` for objects and classes  
- ✅ Use strict equality `===` to avoid unexpected coercion  
- ✅ Check for `null` explicitly  
- ✅ Use `Number.isNaN()` for safe NaN detection  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 09 - Type Conversion & Coercion](../09-type-conversion-coercion/README.md)  
  _Understand how JavaScript converts and coerces data types automatically or explicitly._

### 🔙 Previous Topic

- [← 07 - Variables](../07-variables/README.md)  
  _Learn how to store and manage data with variables._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  _Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
  _Return to the full roadmap and module list._
