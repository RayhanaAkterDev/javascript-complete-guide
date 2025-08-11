# 06 - Comments

Comments are **non-executable notes** in your code that help explain, clarify, and annotate.  
They improve code readability, aid debugging, and support teamwork without affecting program execution.

---

## ⚡ Quick Summary (TL;DR)

- Comments do **not run**; they’re for developers only  
- Use `//` for **single-line comments** and `/* ... */` for **multi-line comments**  
- Comments explain *why* code exists or clarify complex logic  
- Keep comments clear, concise, and up-to-date  

---

📂 **Code Reference:**

*See practical examples with comments.*

- [comments.js](./comments.js)  

---

## 1. What Are Comments?

Comments are ignored by JavaScript but essential for human readers. They:

- Explain purpose or reasoning behind code  
- Clarify complicated or tricky parts  
- Leave reminders, TODOs, or debugging notes  

---

## 2. Types of Comments

| Comment Type        | Syntax                  | Description                      |
|---------------------|-------------------------|---------------------------------|
| Single-line Comment  | `//`                    | Comments till the end of line   |
| Multi-line Comment   | `/* ... */`             | Comments spanning multiple lines|

**Examples:**

```js
// This is a single-line comment
let x = 10; // Inline comment

/*
  This is a multi-line comment.
  Useful for longer explanations.
*/
let y = 20;
```

---

## 3. Why Use Comments?

- Document *why* code does something, not just *what* it does  
- Mark code for future fixes or improvements (`TODO`, `FIXME`)  
- Temporarily disable code for testing or debugging  
- Add context for complex logic or algorithms  

---

## 💡 Pro Tips

- ✅ Write meaningful, relevant comments — avoid obvious statements  
- ✅ Focus on explaining *why* the code works that way  
- ✅ Keep comments updated as code changes  
- ✅ Use consistent formatting and style for clarity  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 07 - Variables](../07-variables/README.md)  
*Learn how to declare and manage variables with `var`, `let`, and `const`.*

### 🔙 Previous Topic

- [← 05 - Keywords](../05-keywords/README.md)  
_Discover JavaScript’s reserved words and their roles.

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
*Browse foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
*Return to the full roadmap and module list.*
