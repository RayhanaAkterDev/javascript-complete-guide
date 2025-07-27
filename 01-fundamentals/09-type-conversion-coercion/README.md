# 09 - Type Conversion & Coercion

**Tags:** `javascript`, `type-conversion`, `type-coercion`, `implicit-conversion`, `explicit-conversion`  
**Purpose:** Learn how JavaScript converts data types implicitly and explicitly, and how to handle conversions correctly in real-world scenarios.  
**Overview:** JavaScript is a loosely typed language, which means values can automatically convert from one type to another. This process can happen **implicitly (coercion)** or **explicitly (conversion)**. Understanding these mechanisms is essential for writing bug-free logic, especially in arithmetic operations, comparisons, and conditionals.

---

_Table of Contents:_

- [09 - Type Conversion \& Coercion](#09---type-conversion--coercion)
  - [1. What is Type Conversion vs Coercion?](#1-what-is-type-conversion-vs-coercion)
  - [2. Type Conversion (Explicit)](#2-type-conversion-explicit)
  - [3. Type Coercion (Implicit)](#3-type-coercion-implicit)
  - [4. Truthy \& Falsy Values](#4-truthy--falsy-values)
  - [5. Coercion in Equality Comparisons](#5-coercion-in-equality-comparisons)
  - [6. Best Practices](#6-best-practices)
  - [7. Code Example Files](#7-code-example-files)
  - [8. Next Topic](#8-next-topic)
  - [9. Further Reading](#9-further-reading)
  - [10. Navigation](#10-navigation)

---

## 1. What is Type Conversion vs Coercion?

JavaScript handles different data types (like strings, numbers, booleans) flexibly and often converts them as needed. This happens in two ways:

- **Type Conversion** (also called _explicit conversion_):  
  You manually convert a value from one type to another using built-in functions like `String()`, `Number()`, or `Boolean()`.

- **Type Coercion** (also called _implicit conversion_):
  JavaScript automatically converts types when operating on mixed types (e.g., a string and a number).

Understanding how and when these conversions happen is **critical** for writing clean, predictable code.

---

## 2. Type Conversion (Explicit)

Explicit conversion is done manually using global functions or methods.

```js
String(123)      // "123"
Number("42")     // 42
Boolean("")      // false
parseInt("42px") // 42
parseFloat("3.14") // 3.14
```

You can also use .toString() on most values (except null or undefined):

```js
(10).toString()   // "10"
true.toString()   // "true"
```

---

## 3. Type Coercion (Implicit)

JavaScript automatically converts types in expressions where mismatched types occur.

```js
"5" + 1    // "51"  (number is coerced to string)
"5" - 1    // 4     (string is coerced to number)
true + 1   // 2     (true becomes 1)
false + 1  // 1
null + 1   // 1
undefined + 1 // NaN
```

Type coercion often happens in:

- Arithmetic operations (`+`, `-`, `*`, `/`)
- Comparisons (`==`)
- Logical expressions

---

## 4. Truthy & Falsy Values

In boolean contexts (e.g., `if` conditions), JavaScript coerces values to either `true` or `false`.

**Falsy values:**

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

```js
if ("") console.log("will not run");
if ("hello") console.log("runs"); // ✅
```

## 5. Coercion in Equality Comparisons

The `==` (loose equality) operator allows coercion:

```js
"5" == 5        // true
0 == false      // true
"" == false     // true
null == undefined // true
```

The `===` (strict equality) operator checks both value and type:

```js
"5" === 5       // false
0 === false     // false
```

> ⚠️ Avoid using `==` unless you're fully aware of coercion behavior.

---

## 6. Best Practices

- Always prefer `===` and `!==` over `==` and `!=`.
- Use explicit conversions for clarity (`Number()`, `String()`, `Boolean()`).
- Avoid relying on automatic coercion in expressions.
- Use `Number.isNaN()` for safely checking `NaN`.

---

## 7. Code Example Files

See files in the _`09-type-conversion-coercion`_ folder for working demos:

- [`explicit-conversion.js`](explicit-conversion.js) — Manual conversions using `String()`, `Number()`, `Boolean()`, etc.
- [`implicit-coercion.js`](implicit-coercion.js) — Automatic conversions in expressions and conditionals.
- [`equality-coercion.js`](equality-coercion.js) — Examples of loose vs strict equality.

---

## 8. Next Topic

**[→ 10 - Operators & Expressions](../10-operators-expressions/README.md)** — Explore how different JavaScript operators work and interact with values and types.

---

## 9. Further Reading

- [MDN Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_conversion)  
- [MDN Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)  
- [JavaScript.info: Type Conversions](https://javascript.info/type-conversions)

---

## 10. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
