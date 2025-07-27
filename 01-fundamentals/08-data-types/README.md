# 07 - Data Types

**Tags:** `javascript`, `data-types`, `primitives`, `reference-types`, `type-checking`  
**Purpose:** Understand the distinction between primitive and reference data types in JavaScript, their behavior, and how to reliably check their types.  
**Overview:** This topic covers JavaScript’s primitive and reference data types, explains their characteristics such as immutability and reference behavior, and explores type checking with `typeof`, `instanceof`, and other reliable methods.

---

_Table of Contents:_

- [07 - Data Types](#07---data-types)
  - [1. Primitive Data Types](#1-primitive-data-types)
  - [2. Reference Data Types](#2-reference-data-types)
  - [3. Type Checking](#3-type-checking)
    - [3.1 Using `typeof`](#31-using-typeof)
    - [3.2 Using `instanceof`](#32-using-instanceof)
    - [3.3 Reliable type checks for arrays and null](#33-reliable-type-checks-for-arrays-and-null)
  - [4. Common Pitfalls](#4-common-pitfalls)
  - [5. Best Practices](#5-best-practices)
  - [6. Code Example Files](#6-code-example-files)
  - [7. Next Topic](#7-next-topic)
  - [8. Further Reading](#8-further-reading)
  - [9. Navigation](#9-navigation)

---

## 1. Primitive Data Types

JavaScript has 7 primitive types. They hold **actual values** and are **immutable** (cannot be changed once created).

| Type       | Description                                  | Example                      |
|------------|----------------------------------------------|------------------------------|
| `String`   | Sequence of characters                        | `"hello"`                    |
| `Number`   | Numeric values (both integers and floats)    | `42`, `3.14`                 |
| `Boolean`  | Logical true or false                         | `true`, `false`              |
| `Null`     | Intentional absence of any object value      | `null`                      |
| `Undefined`| Variable declared but not assigned a value   | `undefined`                  |
| `Symbol`   | Unique and immutable identifiers             | `Symbol('id')`               |
| `BigInt`   | Arbitrary precision integers                  | `9007199254740991n`          |

- Primitives are stored directly in the variable's memory.
- Operations on primitives return new values (immutable behavior).
- Primitives are compared by **value**.

---

## 2. Reference Data Types

Reference types store **references (memory addresses)** to the actual objects in memory. Variables hold these references, not the objects themselves.

| Type       | Description                                  | Example                      |
|------------|----------------------------------------------|------------------------------|
| `Object`   | General key-value container                   | `{ name: "Sumaya", age: 23 }`|
| `Array`    | Ordered list of values                         | `[1, 2, 3]`                  |
| `Function` | Callable objects                              | `function greet() {}`        |
| `Date`     | Represents date and time                       | `new Date()`                 |
| `RegExp`   | Regular expressions                           | `/ab+c/`                     |

- Reference types are **mutable** — properties and elements can be changed.
- Two variables can reference the same object, so changes via one variable affect the other.
- Reference types are compared by **reference (memory location)**, not value.

---

## 3. Type Checking

### 3.1 Using `typeof`

The `typeof` operator returns a string representing the type of the operand.

```js
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof Symbol()     // "symbol"
typeof 10n          // "bigint"
typeof null         // "object"  // Known JavaScript quirk
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

> Note: typeof null returning "object" is a historic bug in JavaScript.

### 3.2 Using `instanceof`

`instanceof` checks whether an object is in the prototype chain of a constructor function.

```js
[] instanceof Array         // true
new Date() instanceof Date  // true
(function() {}) instanceof Function // true
{} instanceof Object       // true
```

### 3.3 Reliable type checks for arrays and null

Because `typeof` returns `"object"` for arrays and null, use:

---

## 4. Common Pitfalls

1. `typeof null` returns `"object"`, which can confuse type checks.
2. Arrays are objects, so `typeof []` is `"object"`; use `Array.isArray()` instead.
3. Comparing objects with `==` or `===` compares references, not content.
4. `NaN` (Not-a-Number) is a `number` type but is not equal to itself.

```js
NaN === NaN   // false
Number.isNaN(NaN) // true
```

---

## 5. Best Practices

- Use `typeof` for checking primitives.
- Use `Array.isArray()` to check for arrays.
- Use `instanceof` for custom objects and classes.
- Use strict equality `===` to avoid implicit type coercion.
- Handle `null` explicitly where necessary.
- Use `Number.isNaN()` to detect `NaN` safely.

---

## 6. Code Example Files

See files in the _`08-data-types`_ folder for working demos:

- [`primitives.js`](primitives.js) — Examples of primitive types and immutability.
- [`objects.js`](objects.js) — Demonstrations of reference types and mutation.
- [`type-checking.js`](type-checking.js) — Various type checking methods and pitfalls.

---

## 7. Next Topic

**[→ 09 - Type Conversion & Coercion](../09-type-conversion-coercion/README.md)** — Learn how JavaScript converts values between types implicitly and explicitly.

---

## 8. Further Reading

For more detailed explanations and official documentation, consider exploring:

- [MDN JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)  
- [MDN Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  
- [JavaScript.info: Data Types](https://javascript.info/types)  
- [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/types%20%26%20grammar)

---

## 9. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
