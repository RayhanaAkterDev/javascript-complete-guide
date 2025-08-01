# 11 - Input & Output Methods

JavaScript provides built-in methods to **interact with users** and **display information**.  
These I/O methods help with debugging, user input, and simple browser dialogs.

---

## 1. What is I/O in JavaScript?

I/O stands for **Input/Output**.

- **Input:** Data received from the user  
- **Output:** Data sent to the user or developer (e.g., logs, alerts)

JavaScript uses browser APIs to handle both input and output.

---

## 2. Input Methods

### 2.1 `prompt()`

- Displays a dialog box asking the user to input text
- Returns a string or null if canceled

```js
let name = prompt("What is your name?");
console.log("User's name is:", name);
```

---

### 2.2 `confirm()`

- Displays a dialog with OK and Cancel buttons
- Returns true if OK is clicked, otherwise false

```js
let isConfirmed = confirm("Do you want to continue?");
console.log("User confirmed:", isConfirmed);
```

Returns `true` (OK) or `false` (Cancel).

---

## 3. Output Methods

### 3.1 `console.log()`

- Prints messages to the browser's developer console  
- Useful for debugging and inspecting values

```js
console.log("Hello, Sumaya!");
```

---

### 3.2 `console.error()` and `console.warn()`

- Display error and warning messages in the console
- Visually distinguished by colors (red for errors, yellow for warnings)

```js
console.error("Something went wrong!");
console.warn("This is a warning!");
```

---

### 3.3 `alert()`

- Shows a popup dialog with a message
- Pauses script execution until user clicks OK

```js
alert("Welcome to JavaScript!");
```

---

### 3.4 `document.write()`

- Writes HTML/text directly into the webpage
- Generally discouraged as it can overwrite the entire page

```js
document.write("This is printed on the page.");
```

---

## 4. Practical Usage Patterns

- Use `console.log()` for debugging during development
- Use `alert()` only for simple feedback in small scripts
- Combine `prompt()` with conditionals for interactive logic:

```js
let age = prompt("Enter your age:");
if (age >= 18) {
  alert("You are an adult!");
} else {
  alert("You are a minor!");
}
```

- Avoid using document.write() in modern development

---

## 💡 Best Practices

✅ Use `console.log()` to debug and inspect values  
✅ Prefer `alert()` sparingly for simple notifications  
✅ Use `prompt()` for basic user input, but validate carefully  
✅ Use `confirm()` for user confirmation dialogs  
❌ Avoid `document.write()` in production code  

---

## 📂 Demo Files

Explore the examples to practice input/output methods:

- [`index.js`](index.js)  

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS  

---

## 📚 Further Reading

- [JavaScript.info: Interaction](https://javascript.info/alert-prompt-confirm) — Beginner-friendly guide  

---

## 🔗 Next Topic

**[→ 12 - String Manipulation](../12-string-manipulation/README.md)** — Learn how to work with strings using built-in methods and template literals.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
