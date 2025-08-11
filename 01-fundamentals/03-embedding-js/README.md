# 03 - Embedding JavaScript

**Embedding JavaScript** means adding JavaScript code to your HTML pages to create interactivity, logic, and dynamic behavior.

There are three main ways to embed JavaScript, each with its own use cases, benefits, and drawbacks.

---

## ⚡ Quick Summary (TL;DR)

- **Inline JavaScript:** Code inside HTML attributes; quick but not recommended  
- **Internal JavaScript:** Code inside `<script>` tags within HTML; good for small demos  
- **External JavaScript:** Code in separate `.js` files linked to HTML; best for production  
- Use script tag attributes (`defer`, `async`, `type="module"`) to control how and when scripts run

---

📂 **Code Reference:**  

_View complete examples in the context._

- [`index.html`](./index.html)  
- [`script.js`](./script.js)

---

## 1. What Is Embedding JavaScript?

Embedding JavaScript means putting your JavaScript code into HTML documents to add behavior and interactivity.

- Allows your pages to respond to user actions  
- Adds logic and dynamic content  
- Can be done in different ways depending on project size and needs

---

## 2. Inline JavaScript

Inline JavaScript is code written directly inside an HTML element’s attribute (e.g., `onclick`).

- Quick to add small behavior  
- Mixes HTML and JS, reducing maintainability  
- Introduces security risks like Cross-Site Scripting (XSS)  
- Not recommended for production code  
- Better to use JavaScript event listeners instead

**Example:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

---

## 3. Internal JavaScript

Internal JavaScript is code placed inside `<script>` tags within the HTML file.

- Useful for small projects or demos  
- Can slow page rendering if placed in `<head>` without `defer`  
- Best placed before closing `</body>` tag or use `defer` attribute  
- Mixing markup and script can reduce maintainability in larger projects

**Example:**

```html
<script>
  console.log("Internal script running");
</script>
```

---

## 4. External JavaScript

External JavaScript stores code in separate `.js` files linked via `src` attribute.

- Recommended for production  
- Improves modularity, reusability, and maintainability  
- Enables browser caching, speeding repeat loads  
- Ensure file paths are correct (relative vs absolute)

**Example:**

```html
<script src="./script.js" defer></script>
```

In `script.js`:

```js
console.log("External script loaded");
```

> ⚠️ **Tip:** Incorrect file paths are a common beginner mistake causing scripts to fail. Verify your paths carefully.

---

## 5. Script Tag Attributes for Loading Control

| Attribute       | Description                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------|
| `defer`         | Loads script asynchronously and executes it **after** HTML parsing (recommended)                 |
| `async`         | Loads script asynchronously and executes **as soon as ready**, possibly out of order             |
| `type="module"` | Treats script as an ES module, enables `import`/`export`, runs in strict mode, implies `defer`  |

- Use `defer` or `type="module"` for non-blocking, predictable execution  
- Use `async` only for scripts independent of DOM or other scripts  
- Avoid `async` for scripts that must run in order or depend on DOM elements

---

## 💡 Pro Tips

- ✅ Use **external JavaScript files** to keep code clean and maintainable  
- ✅ Prefer `defer` or `type="module"` attributes for better loading behavior  
- ✅ Place `<script>` tags just before `</body>` if not using `defer` or modules  
- 🚫 Avoid inline JavaScript to improve security and maintainability  
- 🔐 Use Content Security Policy (CSP) headers to reduce risks if inline scripts are unavoidable  
- 🛠️ For larger projects, consider module bundlers or build tools to manage scripts efficiently

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 04 - Statements & Expressions](../04-statements-expressions/README.md)  
_Understand how JavaScript statements and expressions structure your code._

### 🔙 Previous Topic

- [← 02 - JavaScript Runtime](../02-js-runtime/README.md)  
_Learn how JavaScript runs in the browser environment._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
_Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
_Return to the full roadmap and module list._
