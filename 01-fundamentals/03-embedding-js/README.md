# 03 - Embedding JavaScript

**Embedding JavaScript** means adding JavaScript code to your HTML pages to create interactivity, logic, and dynamic behavior.  
There are three main ways to embed JavaScript, each with its own use cases, benefits, and drawbacks.

---

## ⚡ Quick Summary (TL;DR)

- **Inline JavaScript:** Code inside HTML attributes; quick but not recommended.  
- **Internal JavaScript:** Code inside `<script>` tags within HTML; good for small demos.  
- **External JavaScript:** Code in separate `.js` files linked to HTML; best for production.  
- Use script tag attributes (`defer`, `async`, `type="module"`) to control how and when scripts run.

---

## 1. Inline JavaScript

**Inline JavaScript** is code written directly inside an HTML element’s attribute, like `onclick`.  
Think of it as a quick way to trigger JavaScript behavior attached to specific HTML elements.

- Fast for quick tests or small snippets  
- Breaks separation of concerns by mixing content and behavior  
- Raises security risks such as Cross-Site Scripting (XSS)  
- Not recommended for production environments  
- Prefer using JavaScript event listeners for better maintainability

**Example:**

```html
<button onclick="alert('Hello!')">Click Me</button>
```

---

## 2. Internal JavaScript

**Internal JavaScript** is code placed inside `<script>` tags within the HTML file itself, usually in the `<head>` or before the closing `</body>` tag.  
Think of it as embedding your JavaScript directly into your HTML document.

- Useful for small projects and quick demos  
- Can mix markup and script, which reduces maintainability for larger projects  
- Scripts in the `<head>` can block page rendering unless `defer` is used  
- Best practice is to place scripts before `</body>` or use the `defer` attribute

**Example:**

```html
<script>
  console.log("Internal script running");
</script>
```

---

## 3. External JavaScript

**External JavaScript** is code stored in separate `.js` files that you link to your HTML using the `src` attribute.  
Think of it as separating your JavaScript logic from your HTML content completely.

- Recommended for all production-level projects  
- Promotes modularity, reusability, and easier maintenance  
- Allows browsers to cache scripts, speeding up page loads on repeat visits  
- Make sure the file path is correct relative to your HTML file (relative vs absolute paths matter!)

**Example:**

```html
<script src="./script.js" defer></script>
```

In `script.js`:

```js
console.log("External script loaded");
```

> ⚠️ **Tip:** Using incorrect file paths (relative or absolute) is a common beginner mistake that causes scripts to fail loading. Always verify your file locations and paths carefully.

---

## 4. Script Tag Attributes for Loading Control

Script tags support attributes that affect when and how scripts are loaded and executed.

| Attribute       | Description                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|
| `defer`         | Loads script asynchronously and executes it **after** the HTML parsing is complete (recommended) |
| `async`         | Loads script asynchronously and executes it **as soon as ready**, potentially out of order. Good for independent scripts like analytics or ads that don’t rely on other scripts. |
| `type="module"` | Treats the script as an ES module, enables `import`/`export`, runs in strict mode, implies `defer` |

- Use `defer` or `type="module"` for non-blocking, predictable script execution  
- Use `async` for scripts that are independent and don’t depend on the DOM or other scripts  
- Avoid `async` for scripts that must run in order or rely on DOM elements not yet loaded

---

## 💡 Pro Tips

- ✅ Use **external JavaScript files** to keep code clean and maintainable  
- ✅ Prefer `defer` or `type="module"` attributes for better loading behavior  
- ✅ Place `<script>` tags just before `</body>` if not using `defer` or modules  
- 🚫 Avoid inline JavaScript to improve security and maintainability  
- 🔐 Use Content Security Policy (CSP) headers to reduce risks if inline scripts are unavoidable  
- 🛠️ For larger projects, consider module bundlers or build tools to manage scripts efficiently

---

## 📂 Practice with Demo Files

Try practicing these embedding methods with the following demo files:

- [`index.html`](./index.html)  
- [`script.js`](./script.js)

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 04 - Statements & Expressions](../04-statements-expressions/README.md)  
  *Learn how JavaScript statements and expressions structure your code.*

### 🔙 Previous Topic

- [← 02 - JavaScript Runtime](../02-js-runtime/README.md)  
  *Understand how JavaScript runs in the browser environment.*

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  *Browse other foundational JavaScript topics.*

- [🏠 Main JavaScript Guide](../../README.md)  
  *Return to the full JavaScript roadmap.*
