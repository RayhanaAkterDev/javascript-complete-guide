# 10 - Operators & Expressions

**Tags:** `javascript`, `operators`, `expressions`, `arithmetic`, `logical`, `comparison`, `assignment`  
**Purpose:** Understand JavaScript operators and how expressions are evaluated in different contexts, enabling precise control over logic, arithmetic, and program flow.  
**Overview:** JavaScript uses operators to perform actions on values. These form **expressions**, which are evaluated to produce new values. This topic covers the main operator types and explains their behavior through examples and best practices.

---

_Table of Contents:_

- [10 - Operators \& Expressions](#10---operators--expressions)
  - [1. What is an Operator?](#1-what-is-an-operator)
  - [2. Operator Categories](#2-operator-categories)
    - [2.1 Arithmetic Operators](#21-arithmetic-operators)
    - [2.2 Assignment Operators](#22-assignment-operators)
    - [2.3 Comparison Operators](#23-comparison-operators)
    - [2.4 Logical Operators](#24-logical-operators)
    - [2.5 Unary Operators](#25-unary-operators)
    - [2.6 Ternary Operator](#26-ternary-operator)
    - [2.7 String Concatenation](#27-string-concatenation)
    - [2.8 Bitwise Operators](#28-bitwise-operators)
  - [3. Operator Precedence](#3-operator-precedence)
  - [4. Best Practices](#4-best-practices)
  - [5. Code Example Files](#5-code-example-files)
  - [6. Next Topic](#6-next-topic)
  - [7. Further Reading](#7-further-reading)
  - [8. Navigation](#8-navigation)

---

## 1. What is an Operator?

An **operator** is a symbol or keyword that tells the JavaScript engine to perform a specific operation on one or more values (called operands) and return a result.

For example:

```js
5 + 3      // '+' is the addition operator
x = 10     // '=' is the assignment operator
a > b      // '>' is the comparison operator
```

---

## 2. Operator Categories

### 2.1 Arithmetic Operators

Used for mathematical operations:

| Operator | Description         | Example      |
| -------- | ------------------- | ------------ |
| `+`      | Addition            | `2 + 3` → 5  |
| `-`      | Subtraction         | `5 - 2` → 3  |
| `*`      | Multiplication      | `4 * 2` → 8  |
| `/`      | Division            | `6 / 3` → 2  |
| `%`      | Modulus (remainder) | `7 % 3` → 1  |
| `**`     | Exponentiation      | `2 ** 3` → 8 |
| `++`     | Increment           | `i++`        |
| `--`     | Decrement           | `i--`        |

---

### 2.2 Assignment Operators

Assign values to variables:

| Operator | Example  | Meaning        |
| -------- | -------- | -------------- |
| `=`      | `x = 10` | Assign 10 to x |
| `+=`     | `x += 5` | x = x + 5      |
| `-=`     | `x -= 2` | x = x - 2      |
| `*=`     | `x *= 3` | x = x \* 3     |
| `/=`     | `x /= 4` | x = x / 4      |

---

### 2.3 Comparison Operators

Used to compare values:

| Operator | Description           |
| -------- | --------------------- |
| `==`     | Equal (with coercion) |
| `===`    | Equal (strict)        |
| `!=`     | Not equal             |
| `!==`    | Strict not equal      |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

---

### 2.4 Logical Operators

Used for boolean logic:

| Operator | Description             |
| -------- | ----------------------- |
| `&&`     | AND (both must be true) |
| `\|\|`   | OR (either must be true)|
| `!`      | NOT (invert truthiness) |

---

### 2.5 Unary Operators

Operate on a single operand:

| Operator     | Description               |
|--------------|---------------------------|
| `typeof`     | Checks the type of operand|
| `!`          | Logical NOT (negation)    |
| `++` / `--`  | Increment / Decrement     |
| `delete`     | Removes object properties |

---

### 2.6 Ternary Operator

Shorthand for `if-else`:

```js
let result = age >= 18 ? "adult" : "minor";
```

---

### 2.7 String Concatenation

The `+` operator joins strings:

```js
"Hello " + "Sumaya"  // "Hello Sumaya"
```

---

### 2.8 Bitwise Operators

Operate on 32-bit binary representations:

- `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

> Not commonly used in beginner projects.

---

## 3. Operator Precedence

Determines the order in which expressions are evaluated.

```js
let result = 2 + 3 * 4; // 14, not 20
```

Use parentheses to make precedence explicit:

```js
let result = (2 + 3) * 4; // 20
```

Full reference: [MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

## 4. Best Practices

- Prefer `===` and `!==` to avoid coercion bugs.
- Use parentheses to clarify complex expressions.
- Avoid mixing types in expressions (`"5" + 1`)
- Know when to use ternary vs full `if-else`
- Use `typeof` and `instanceof` wisely for type checks

---

## 5. Code Example Files

See files in the _`10-operators-expressions`_ folder:

- [`arithmetic.js`](arithmetic.js)
- [`assignment.js`](assignment.js)
- [`comparison.js`](comparison.js)
- [`logical.js`](logical.js)
- [`ternary.js`](ternary.js)
- [`precedence.js`](precedence.js)

---

## 6. Next Topic

**[→ 11 - Input & Output](../11-io-methods/README.md)** — Learn how to interact with the browser using `console.log`, `alert`, `prompt`, and `confirm`.

---

## 7. Further Reading

- [MDN JavaScript Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)  
- [JavaScript.info: Operators](https://javascript.info/operators)

---

## 8. Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
