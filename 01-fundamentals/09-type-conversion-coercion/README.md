# 09 - Type Conversion & Coercion

Type conversion and coercion explain how JavaScript changes data types — either manually or automatically.  
Understanding these helps avoid bugs when working with mixed data types.

---

## ⚡ Quick Summary (TL;DR)

- **Type Conversion (Explicit):** You manually change a value’s type using `String()`, `Number()`, `Boolean()`, etc.  
- **Type Coercion (Implicit):** JavaScript automatically converts types during operations like `+`, `-`, or comparisons.  
- **Truthy & Falsy:** Values convert to `true` or `false` in conditions.  
- Prefer **explicit conversion** and **strict equality** (`===`) to avoid unexpected results.

---

## 1. What Is Type Conversion vs Coercion?

JavaScript changes value types in two ways:

- **Type Conversion (Explicit):** You intentionally convert a value using built-in functions.  
- **Type Coercion (Implicit):** JavaScript automatically converts the value type when needed.

---

## 2. Type Conversion (Explicit)

Manual conversion of values using built-in functions or methods.

```js
String(123);        // "123"
Number("42");       // 42
Boolean("");        // false
parseInt("42px");   // 42
parseFloat("3.14"); // 3.14
```

Using `.toString()` on most values (except `null` or `undefined`):

```js
(10).toString();   // "10"
true.toString();   // "true"
```

---

## 3. Type Coercion (Implicit)

Automatic type conversion in mixed-type expressions.

```js
"5" + 1        // "51"  → number coerced to string
"5" - 1        // 4     → string coerced to number
true + 1       // 2     → true becomes 1
false + 1      // 1
null + 1       // 1
undefined + 1  // NaN
```

---

## 4. Truthy & Falsy Values

Values converted to boolean in conditional checks.

**Falsy values:**

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**.

```js
if ("") console.log("will not run");
if ("hello") console.log("runs"); // ✅
```

---

## 5. Coercion in Equality Comparisons

- `==` (loose equality) allows type coercion.  
- `===` (strict equality) compares values without type conversion.

```js
"5" == 5;          // true
0 == false;        // true
"" == false;       // true
null == undefined; // true

"5" === 5;         // false
0 === false;       // false
```

⚠️ Prefer `===` to avoid surprises.

---

## 💡 Pro Tips

- ✅ Use **strict equality** `===` & `!==`.  
- ✅ Prefer **explicit conversion**: `Number()`, `String()`, `Boolean()`.  
- 🚫 Avoid relying on implicit coercion in conditionals.  
- ✅ Use `Number.isNaN()` to safely detect `NaN`.

---

## 📂 Practice with Demo Files

Try these examples to practice:

- [`01-explicit-conversion.js`](./01-explicit-conversion.js)  
- [`02-implicit-coercion.js`](./02-implicit-coercion.js)  
- [`03-equality-coercion.js`](./03-equality-coercion.js)  
 Clear breakdown with examples  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 10 - Operators](../10-operators/README.md)  
  *Learn how JavaScript operators behave with different data types.*

### 🔙 Previous Topic

- [← 08 - Data Types](../08-data-types/README.md)  
  *Understand the kinds of values JavaScript can work with.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to the full roadmap and module list.*
