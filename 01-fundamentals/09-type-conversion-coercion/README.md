# 09 - Type Conversion & Coercion

Type conversion and coercion explain how JavaScript automatically or manually changes data types.  
This helps in working smoothly with mixed data types and avoids bugs in comparisons and operations.

---

## 1. What is Type Conversion vs Coercion?

JavaScript converts values between types in two ways:

- **Type Conversion (Explicit):**  
  You manually change types using functions like `String()`, `Number()`, or `Boolean()`.

- **Type Coercion (Implicit):**  
  JavaScript automatically converts types during operations like addition or comparison.

---

## 2. Type Conversion (Explicit)

Manual conversion of values using built-in functions or methods.

```js
String(123);       // "123"
Number("42");      // 42
Boolean("");       // false
parseInt("42px");  // 42
parseFloat("3.14");// 3.14
```

Use .toString() on most values (except null or undefined):

```js
(10).toString()   // "10"
true.toString()   // "true"
```

---

## 3. Type Coercion (Implicit)

Automatic conversion by JavaScript in mixed-type expressions.  
Coercion happens in arithmetic, comparisons, and logical operations.

```js
"5" + 1    // "51"  (number is coerced to string)
"5" - 1    // 4     (string is coerced to number)
true + 1   // 2     (true becomes 1)
false + 1  // 1
null + 1   // 1
undefined + 1 // NaN
```

---

## 4. Truthy & Falsy Values

Values converted to boolean `true` or `false` in conditions.

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

The `==` (loose equality) allows type coercion, but `===` (strict equality) operator does not.

```js
"5" == 5;          // true
0 == false;        // true
"" == false;       // true
null == undefined; // true

"5" === 5;         // false
0 === false;       // false
```

⚠️ _Prefer === to avoid unexpected bugs._

---

## 💡 Best Practices

✅ Use strict equality `===` and `!==` to avoid type confusion.  
✅ Prefer explicit conversion: `Number()`, `String()`, `Boolean()`.  
✅ Avoid relying on implicit coercion in conditional logic.  
✅ Use `Number.isNaN()` to safely detect `NaN` values.

---

## 📂 Demo Files

Explore the examples to practice `type-conversion` and `coercion`:

- [`explicit-conversion.js`](explicit-conversion.js)  
- [`implicit-coercion.js`](implicit-coercion.js)  
- [`equality-coercion.js`](equality-coercion.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS  

---

## 📚 Further Reading

- [MDN Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_conversion) — Official docs  
- [MDN Equality Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — Guide to `==` vs `===`  
- [JavaScript.info: Type Conversions](https://javascript.info/type-conversions) — Clear breakdown with examples  

---

## 🔗 Next Topic

**[→ 10 - Operators](../10-operators/README.md)** — Learn how JavaScript operators behave with different data types.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
