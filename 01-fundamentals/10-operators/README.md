# 10 - Operators & Expressions

Operators are **symbols or keywords** that perform operations on one or more values (operands).  
Expressions are combinations of operators and operands that JavaScript evaluates to produce a value.

---

## ⚡ Quick Summary (TL;DR)

- Operators perform actions like arithmetic, assignment, comparison, and logical operations  
- Expressions combine operands and operators to compute values  
- Operator precedence controls the order of evaluation  
- Use parentheses `()` to explicitly set evaluation order  

---

📂 **Code Reference:**

_Explore practical examples and exercises._

- [`01-arithmetic.js`](01-arithmetic.js)  
- [`02-assignment.js`](02-assignment.js)  
- [`03-comparison.js`](03-comparison.js)  
- [`04-logical.js`](04-logical.js)  
- [`05-ternary.js`](05-ternary.js)  
- [`06-precedence.js`](06-precedence.js)  

---

## 1. What Are Operators?

An **operator** acts on operands (values or variables) to perform a specific operation and return a result.

**Examples:**

```js
5 + 3      // Addition operator returns 8
x = 10     // Assignment operator assigns 10 to x
a > b      // Comparison operator checks if a is greater than b
```

---

## 2. Operator Categories

### 2.1 Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Description         | Example        |
| -------- | ------------------- | -------------- |
| `+`      | Addition            | `2 + 3` → 5    |
| `-`      | Subtraction         | `5 - 2` → 3    |
| `*`      | Multiplication      | `4 * 2` → 8    |
| `/`      | Division            | `6 / 3` → 2    |
| `%`      | Modulus (remainder) | `7 % 3` → 1    |
| `**`     | Exponentiation      | `2 ** 3` → 8   |
| `++`     | Increment           | `i++` increments i by 1 |
| `--`     | Decrement           | `i--` decrements i by 1 |

---

### 2.2 Assignment Operators

Assign or update values in variables.

| Operator | Example  | Meaning                |
| -------- | -------- | ---------------------- |
| `=`      | `x = 10` | Assign 10 to variable x|
| `+=`     | `x += 5` | Add 5 to x (x = x + 5)|
| `-=`     | `x -= 2` | Subtract 2 from x      |
| `*=`     | `x *= 3` | Multiply x by 3        |
| `/=`     | `x /= 4` | Divide x by 4          |

---

### 2.3 Comparison Operators

Compare two values, returning `true` or `false`.

| Operator | Description            |
| -------- | ---------------------- |
| `==`     | Equal (with coercion)  |
| `===`    | Strict equal (no coercion) |
| `!=`     | Not equal              |
| `!==`    | Strict not equal       |
| `>`      | Greater than           |
| `<`      | Less than              |
| `>=`     | Greater than or equal  |
| `<=`     | Less than or equal     |

---

### 2.4 Logical Operators

Perform boolean logic operations.

| Operator | Description               |
| -------- | ------------------------- |
| `&&`     | Logical AND (both true)   |
| `\|\|`    | Logical OR (one or both true) |
| `!`      | Logical NOT (invert value)|

---

### 2.5 Unary Operators

Operate on a single operand.

| Operator    | Description                 |
| ----------- | --------------------------- |
| `typeof`    | Returns type as a string    |
| `!`         | Logical NOT                 |
| `++` / `--` | Increment / Decrement       |
| `delete`    | Deletes object property     |

---

### 2.6 Ternary Operator

Short-hand conditional expression.

```js
let status = age >= 18 ? "adult" : "minor";
```

---

### 2.7 String Concatenation

Join strings using the `+` operator.

```js
"Hello " + "Sumaya";  // "Hello Sumaya"
```

---

### 2.8 Bitwise Operators

Operate on 32-bit binary representations.

| Operators                  |
| -------------------------- |
| `&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>` |

_Usually for advanced use cases._

---

## 3. Operator Precedence

Determines the order operators are evaluated.

```js
let result = 2 + 3 * 4; // 14 (multiplication before addition)
```

Use parentheses to override precedence:

```js
let result = (2 + 3) * 4; // 20
```

---

## 💡 Pro Tips

- ✅ Use strict equality (`===` and `!==`) to avoid unexpected coercion  
- ✅ Use parentheses to clarify complex expressions  
- ✅ Avoid mixing data types in operations  
- ✅ Use ternary operator for concise conditional logic  
- ✅ Use `typeof` and `instanceof` for reliable type checks  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 11 - Input & Output](../11-io-methods/README.md)  
  _Learn about browser interaction using `console.log`, `alert`, `prompt`, and `confirm`._

### 🔙 Previous Topic

- [← 09 - Type Conversion & Coercion](../09-type-conversion-coercion/README.md)  
  _Understand how JavaScript converts and coerces types._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  _Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
  _Return to the full roadmap and module list._
