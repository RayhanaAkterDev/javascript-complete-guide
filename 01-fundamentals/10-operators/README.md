# 10 - Operators & Expressions

JavaScript operators perform actions on values (operands) to produce new values.  
Expressions are combinations of operators and operands evaluated by the JavaScript engine.

---

## 1. What is an Operator?

An **operator** is a symbol or keyword that performs operations on one or more operands and returns a result.

Examples:

```js
5 + 3      // '+' addition operator
x = 10     // '=' assignment operator
a > b      // '>' comparison operator
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

Used to assign or update variable values:

| Operator | Example  | Meaning        |
| -------- | -------- | -------------- |
| `=`      | `x = 10` | Assign 10 to x |
| `+=`     | `x += 5` | x = x + 5      |
| `-=`     | `x -= 2` | x = x - 2      |
| `*=`     | `x *= 3` | x = x \* 3     |
| `/=`     | `x /= 4` | x = x / 4      |

---

### 2.3 Comparison Operators

Used to compare two values:

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

Perform boolean logic:

| Operator | Description             |
| -------- | ----------------------- |
| `&&`     | AND (both must be true) |
| `\|\|`   | OR (either must be true)|
| `!`      | NOT (invert truthiness) |

---

### 2.5 Unary Operators

Operate on a single operand:

| Operator    | Description             |
| ----------- | ----------------------- |
| `typeof`    | Returns operand type    |
| `!`         | Logical NOT             |
| `++` / `--` | Increment / Decrement   |
| `delete`    | Deletes object property |

---

### 2.6 Ternary Operator

Short form of if-else:

```js
let result = age >= 18 ? "adult" : "minor";
```

---

### 2.7 String Concatenation

Use `+` operator to join strings:

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

Use parentheses to override precedence:

```js
let result = (2 + 3) * 4; // 20
```

See [MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) for details.

---

## 💡 Best Practices

✅ Use `===` and `!==` to avoid coercion bugs.  
✅ Use parentheses for clarity in complex expressions.  
✅ Avoid mixing data types in expressions (e.g., `"5" + 1`).  
✅ Prefer ternary operator for simple conditions.  
✅ Use `typeof` and `instanceof` wisely for type checks.

---

## 📂 Demo Files

Explore the examples to practice `operators` concepts:

- [`arithmetic.js`](arithmetic.js)  
- [`assignment.js`](assignment.js)  
- [`comparison.js`](comparison.js)  
- [`logical.js`](logical.js)  
- [`ternary.js`](ternary.js)  
- [`precedence.js`](precedence.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN JavaScript Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) — Comprehensive guide  
- [JavaScript.info: Operators](https://javascript.info/operators) — Beginner-friendly explanations  

---

## 🔗 Next Topic

**[→ 11 - Input & Output](../11-io-methods/README.md)** — Learn browser interaction methods like `console.log`, `alert`, `prompt`, and `confirm`.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
