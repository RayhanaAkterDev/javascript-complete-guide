# 12 - String Manipulation

JavaScript provides powerful built-in methods to **handle and manipulate text**.  
Strings are commonly used for input/output, formatting messages, and dynamic content.

---

## ⚡ Quick Summary (TL;DR)

- Strings are sequences of characters used to represent text  
- Can be created with single `'...'`, double `"..."`, or backtick `` `...` `` quotes  
- Strings have useful properties like `.length` and methods for access and manipulation  
- Template literals (backticks) allow easy interpolation and multiline strings  
- Strings are immutable — methods return new strings without changing originals  

---

📂 **Code Reference:**

_Practice string concepts using these demo files:_

- [`01-basics.js`](01-basics.js)  
- [`02-properties-access.js`](02-properties-access.js)  
- [`03-common-methods.js`](03-common-methods.js)  
- [`04-convert-array.js`](04-convert-array.js)  
- [`05-template-literals.js`](05-template-literals.js)  
- [`06-escape-concat.js`](06-escape-concat.js)  
- [`07-immutability.js`](07-immutability.js)  

---

## 1. What Are Strings in JavaScript?

A **string** is a sequence of characters used to represent text.

```js
let greeting = "Hello, world!";
```

Strings can be created using single (`'`), double (`"`) or backtick (`` ` ``) quotes.

---

## 2. String Properties and Access

### 2.1 `.length`

- Returns the number of characters in the string

```js
let text = "JavaScript";
console.log(text.length); // 10
```

### 2.2 Index Access

- Strings are zero-indexed  
- Use bracket notation to access specific characters

```js
console.log(text[0]);              // 'J'
console.log(text[text.length - 1]); // 't'
```

### 2.3 `.charAt()` and `.charCodeAt()`

- `.charAt(index)` returns the character at `index`  
- `.charCodeAt(index)` returns the Unicode code of the character

```js
console.log(text.charAt(0));      // 'J'
console.log(text.charCodeAt(0));  // 74
```

---

## 3. Common String Methods

### 3.1 `.toUpperCase()` / `.toLowerCase()`

- Convert string to uppercase or lowercase

```js
let city = "Dhaka";
console.log(city.toUpperCase());  // 'DHAKA'
console.log(city.toLowerCase());  // 'dhaka'
```

### 3.2 `.includes()`

- Check if substring exists in string  
- Returns `true` or `false`

```js
let msg = "JavaScript is awesome!";
console.log(msg.includes("awesome")); // true
```

### 3.3 `.startsWith()` and `.endsWith()`

- Check if string starts or ends with a substring

```js
console.log(msg.startsWith("Java")); // true
console.log(msg.endsWith("!"));      // true
```

### 3.4 `.indexOf()` and `.lastIndexOf()`

- Find index of first/last occurrence of substring  
- Returns `-1` if not found

```js
console.log(msg.indexOf("is"));     // 11
console.log(msg.lastIndexOf("a"));  // 3
```

### 3.5 `.slice()`, `.substring()`, and `.substr()`

- Extract portions of a string  
- `.slice()` and `.substring()` take start and end indexes (end exclusive)  
- `.substr()` takes start index and length (legacy)

```js
console.log(msg.slice(0, 10));       // 'JavaScript'
console.log(msg.substring(11, 13));  // 'is'
console.log(msg.substr(11, 2));      // 'is'
```

### 3.6 `.trim()`

- Remove whitespace from both ends

```js
let raw = "   Learn JS!   ";
console.log(raw.trim()); // 'Learn JS!'
```

### 3.7 `.replace()` and `.replaceAll()`

- Replace part(s) of string with new text

```js
console.log(raw.replace("JS", "JavaScript")); // '   Learn JavaScript!   '
console.log(raw.replaceAll(" ", "-"));        // '---Learn-JS!---'
```

### 3.8 `.repeat()`

- Repeat string multiple times

```js
console.log("abc".repeat(3)); // 'abcabcabc'
```

---

## 4. Converting Strings to Arrays

### 4.1 `.split()` and `.join()`

- `.split()` converts a string into an array  
- `.join()` converts an array into a string

```js
let tags = "js,html,css";
let list = tags.split(",");
console.log(list);             // ['js', 'html', 'css']
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

- Template literals support multiline without `\n`

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

- Use `\` to insert special characters like newline `\n`, tab `\t`, quotes `\"`, backslash `\\`

```js
let multiline = "Line1\nLine2\nLine3";
console.log(multiline);

let quote = "He said, \"JavaScript is awesome!\"";
console.log(quote);
```

### 6.2 Concatenation with `+`

- Combine strings using `+` (older method before template literals)

```js
let greeting = "Hello, " + name + "!";
console.log(greeting);
```

---

## 7. Immutability of Strings

Strings are **immutable** — methods return new strings and do not change originals.

```js
let original = "test";
let upper = original.toUpperCase();
console.log(original); // 'test' (unchanged)
console.log(upper);    // 'TEST'
```

---

## 💡 Best Practices

- ✅ Use `.trim()` when handling user input  
- ✅ Prefer template literals for cleaner dynamic strings  
- ✅ Use `.toLowerCase()` or `.toUpperCase()` for case-insensitive comparisons  
- ✅ Use `.startsWith()` / `.endsWith()` for clear substring checks  
- ✅ Remember strings are immutable — store method results  
- ✅ Use `.replaceAll()` for multiple replacements  
- ✅ Properly escape special characters with backslash  

---

## 🔗 Navigation

### 🔜 Next Topic

- [→ 13 - Conditionals](../13-conditionals/README.md)  
  _Control program flow with if, else, and switch statements._

### 🔙 Previous Topic

- [← 11 - Input & Output Methods](../11-io-methods/README.md)  
  _Interact with users and display information using built-in methods._

---

### 📂 Explore More

- [← Back to Fundamentals Overview](../README.md)  
  _Browse foundational JavaScript topics._

- [🏠 Main JavaScript Guide](../../README.md)  
  _Return to the full roadmap and module list._
