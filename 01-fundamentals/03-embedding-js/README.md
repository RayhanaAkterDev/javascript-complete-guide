# 03 - Embedding JavaScript

JavaScript can be embedded into HTML in multiple ways — inline, internal, or external.  
This topic explains each method with clear examples and teaches when and why to use each in real-world scenarios.

---

## 1. Inline JavaScript

JavaScript code placed directly inside an HTML element’s attribute.

**Example:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

🔸 Simple, but not recommended in real projects due to poor separation of concerns and XSS risks.

---

## 2. Internal JavaScript

Code written inside `<script>` tags within the HTML file.

**Example:**

```html
<script>
  console.log("Internal script running");
</script>
```

✅ Good for small tests or single-page logic during development.

## 3. External JavaScript

JavaScript placed in a separate `.js` file and linked into HTML using `src`.

**Example:**

```html
<script src="./script.js"></script>
```

✅ Best practice. Keeps code organized, reusable, and easier to maintain.

---

## 4. Script Tag Attributes

| Attribute       | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| `defer`         | Runs script after the HTML is parsed (**recommended for most cases**)     |
| `async`         | Runs script as soon as it loads (may run out of order)                    |
| `type="module"` | Treats script as an ES6 module; allows `import`/`export`                  |

Use these to **optimize load performance** and control script execution flow.

---

## ✅ Best Practices

✅ Use **external scripts** for modular, maintainable code  
✅ Prefer `defer` or `type="module"` for non-blocking script loading  
❌ Avoid **inline scripts** to reduce security risks (like XSS)  
✅ Place `<script>` tags at the **bottom of `<body>`** if not using `defer`

---

## 📂 Demo Files

- [`index.html`](./index.html) — Shows all three embedding types  
- [`script.js`](./script.js) — Sample external JavaScript file  

➡️ Open the HTML file in your browser and inspect the **Console** output.

---

## 🧪 Try It Online

Experiment with the code instantly using these online editors:

- [JSConsole](https://jsconsole.com) — Best for quick console-based testing  
- [JSFiddle](https://jsfiddle.net) — Great for combining HTML, CSS, and JavaScript

---

## 🔗 Next Topic

**[→ 04 - Statements & Expressions](../04-statements-expressions/README.md)**  
Learn how JavaScript statements and expressions define logic and structure.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
