# 04 - Statements & Expressions

JavaScript programs are made up of two essential building blocks: **expressions** and **statements**.  
Mastering these helps you write bug-free, readable code.  

Understanding how they work—and why they differ—unlocks clearer and more predictable programs.

---

## ⚡ Quick Summary (TL;DR)

- **Expressions** produce values (like answers)  
- **Statements** perform actions (like instructions)  
- Always **end statements with semicolons `;`** to avoid tricky bugs from ASI (Automatic Semicolon Insertion)

---

📂 **Code Reference:**  

_View complete examples in the context._  

- [statement-expression.js](./statement-expression.js)

---

## 1. What Are Expressions?

An **expression** is a piece of code that **produces a value**.  
Think of it as answering the question: _“What is the value?”_

- Can be simple (numbers, strings) or complex (calculations, function calls)  
- Can be used inside statements or assigned to variables

**Examples:**

```js
42                  // Number expression
"Hello, world!"     // String expression
score + 10          // Arithmetic expression
Math.max(a, b)      // Function call expression
{ name: "Sumaya" }  // Object literal expression
() => 5 + 3         // Arrow function expression
condition ? "Yes" : "No"  // Ternary expression
```

---

## 2. What Are Statements?

A **statement** is an instruction that **performs an action**.  
Think of it as a full sentence telling the computer what to do.

- Includes variable declarations, loops, conditionals, function declarations  
- Usually ends with a semicolon (`;`)

**Examples:**

```js
let total = 100;               // Declare variable
total = total + 50;            // Update variable
if (total > 120) {             // Conditional statement
  console.log("You reached your goal!");
}
for (let i = 0; i < 5; i++) { // Loop statement
  console.log(i);
}
```

---

## 3. Key Differences at a Glance

| Feature          | Expression                         | Statement                       |
|------------------|----------------------------------|--------------------------------|
| What it does     | Produces a value                  | Performs an action              |
| Usage            | Inside statements or standalone  | Standalone, controls flow       |
| Semicolon        | Often optional                   | Usually required                |
| Purpose          | Calculate or return data          | Declare, loop, or control flow  |
| Example          | `a + b`                          | `let sum = a + b;`              |

---

## 4. Semicolons & Automatic Semicolon Insertion (ASI)

- Statements end with semicolons `;` to mark their end  
- JavaScript can insert semicolons automatically (ASI), but this may cause bugs  
- **Avoid errors by always ending statements with semicolons**

**Problem example without semicolon:**

```js
let a = 5
let b = 10

// This throws an error due to ASI inserting a semicolon after 'b = 10'
a
(1 + b).toString()
```

---

## 5. Expression Statements

Some statements are just expressions used alone, called _expression statements_.

```js
a = b + c;    // Assignment expression as statement
foo();        // Function call expression as statement
```

---

## 6. Real-World Examples

- **Expression inside a statement:**

```js
let finalPrice = price * quantity;
```

- **Expression as return value:**

```js
return user.age + 1;
```

- **Statement using expression in condition:**

```js
if (score >= passingScore) {
  console.log("You passed!");
}
```

---

## 💡 Pro Tips

- ✅ Expressions produce values; statements perform actions  
- ✅ Keep expressions simple and readable inside statements  
- ✅ Always end statements with semicolons to avoid tricky bugs from ASI (Automatic Semicolon Insertion)  
- 🚫 Avoid mixing expressions and statements incorrectly to save debugging time

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 05 - Keywords](../05-keywords/README.md)  
_Discover JavaScript’s reserved words and their roles._

### 🔙 Previous Topic

- [← 03 - Embedding JavaScript](../03-embedding-js/README.md)  
_Learn effective ways to include JavaScript in HTML._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
