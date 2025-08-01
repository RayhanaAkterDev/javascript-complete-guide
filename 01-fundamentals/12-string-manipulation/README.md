# 12 - String Manipulation

JavaScript provides powerful built-in methods to **handle and manipulate text**.  
Strings are commonly used for input/output, formatting messages, and dynamic content.

---

## 1. What Are Strings in JavaScript?

A **string** is a sequence of characters used to represent text.

```js
let greeting = "Hello, world!";
```

Strings can be created using single (`'`), double (`"`) or backtick (`` ` ``) quotes.

---

## 2. String Properties and Access

### 2.1 .length

- Returns the number of characters in the string

```js
let text = "JavaScript";
console.log(text.length); // 10
```

### 2.2 Index Access

- Strings are indexed starting from 0  
- Use bracket notation to access specific characters

```js
console.log(text[0]); // 'J'
console.log(text[text.length - 1]); // 't'
```

### 2.3 .charAt() and .charCodeAt()

- `.charAt(index)` returns the character at the specified index  
- `.charCodeAt(index)` returns the Unicode value of the character

```js
console.log(text.charAt(0));    // 'J'
console.log(text.charCodeAt(0)); // 74
```

---

## 3. Common String Methods

### 3.1 .toUpperCase() / .toLowerCase()

- Converts string to all uppercase or all lowercase

```js
let city = "Dhaka";
console.log(city.toUpperCase()); // 'DHAKA'
console.log(city.toLowerCase()); // 'dhaka'
```

### 3.2 .includes()

- Checks if a substring exists in the string  
- Returns `true` or `false`

```js
let msg = "JavaScript is awesome!";
console.log(msg.includes("awesome")); // true
```

### 3.3 .startsWith() and .endsWith()

- Checks if a string starts or ends with a given substring

```js
console.log(msg.startsWith("Java")); // true
console.log(msg.endsWith("!"));      // true
```

### 3.4 .indexOf() and .lastIndexOf()

- Finds the index of the first/last occurrence of a substring  
- Returns `-1` if not found

```js
console.log(msg.indexOf("is"));     // 11
console.log(msg.lastIndexOf("a"));  // 3
```

### 3.5 .slice(), .substring(), and .substr()

- Extracts a portion of a string  
- `.slice()` and `.substring()` accept start and end indexes (end non-inclusive)  
- `.substr()` accepts start index and length (legacy method)

```js
console.log(msg.slice(0, 10));       // 'JavaScript'
console.log(msg.substring(11, 13));  // 'is'
console.log(msg.substr(11, 2));      // 'is'
```

### 3.6 .trim()

- Removes whitespace from both ends of a string

```js
let raw = "   Learn JS!   ";
console.log(raw.trim()); // 'Learn JS!'
```

### 3.7 .replace() and .replaceAll()

- Replaces part(s) of a string with new text

```js
console.log(raw.replace("JS", "JavaScript")); // '   Learn JavaScript!   '
console.log(raw.replaceAll(" ", "-"));         // '---Learn-JS!---'
```

### 3.8 .repeat()

- Repeats the string a specified number of times

```js
console.log("abc".repeat(3)); // 'abcabcabc'
```

---

## 4. Converting Strings to Arrays

### 4.1 .split() and .join()

- `.split()` turns a string into an array  
- `.join()` combines an array into a string

```js
let tags = "js,html,css";
let list = tags.split(",");
console.log(list); // ['js', 'html', 'css']

console.log(list.join(" | ")); // 'js | html | css'
```

---

## 5. Template Literals

### 5.1 Basic Usage

- Use backticks (`` ` ``) instead of quotes  
- Insert variables with `${}`

```js
let name = "Sumaya";
let score = 95;
let message = `Hello ${name}, your score is ${score}/100.`;
console.log(message); // Hello Sumaya, your score is 95/100.
```

### 5.2 Multiline Strings

Template literals allow multiline formatting without `\n`

```js
let html = `
  <div>
    <h1>Welcome, ${name}</h1>
    <p>Score: ${score}</p>
  </div>
`;
console.log(html);
```

---

## 6. Escape Characters and String Concatenation

### 6.1 Escape Characters

- Use backslash `\` to insert special characters like newline `\n`, tab `\t`, quotes `\"`, backslash `\\`

```js
let multiline = "Line1\nLine2\nLine3";
console.log(multiline);

let quote = "He said, \"JavaScript is awesome!\"";
console.log(quote);
```

### 6.2 Concatenation with `+`

- Combine strings using the `+` operator (older approach before template literals)

```js
let greeting = "Hello, " + name + "!";
console.log(greeting);
```

---

## 7. Immutability of Strings

Strings in JavaScript are **immutable**, meaning methods return new strings but do not change the original.

```js
let original = "test";
let upper = original.toUpperCase();
console.log(original); // 'test' (unchanged)
console.log(upper);    // 'TEST'
```

---

## 💡 Best Practices

✅ Use `.trim()` when working with user input  
✅ Use template literals for cleaner dynamic messages  
✅ Use `.toLowerCase()` or `.toUpperCase()` for case-insensitive comparisons  
✅ Use `.startsWith()` / `.endsWith()` for readable substring checks  
✅ Store the result of string methods (strings are immutable)  
✅ Use `.replaceAll()` instead of `.replace()` for multiple replacements  
✅ Escape special characters properly with backslash

---

## 📂 Demo Files

Explore the examples grouped by topic for better clarity and easier practice:

- [`01-basics.js`](01-basics.js) — String declaration and quote usage  
- [`02-properties-access.js`](02-properties-access.js) — Length, index, charAt, charCodeAt  
- [`03-common-methods.js`](03-common-methods.js) — Case changes, includes, slice, etc.  
- [`04-convert-array.js`](04-convert-array.js) — Split and join  
- [`05-template-literals.js`](05-template-literals.js) — Interpolation and multiline text  
- [`06-escape-concat.js`](06-escape-concat.js) — Escape characters and string concatenation  
- [`07-immutability.js`](07-immutability.js) — Immutable nature of strings

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) — Comprehensive reference  
- [JavaScript.info - Strings](https://javascript.info/string) — Beginner-friendly explanations  
- [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) — Detailed guide

---

## 🔗 Next Topic

**[→ 13 - Conditionals](../13-conditionals/README.md)** — Use `if`, `else`, and `switch` to control program logic.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
