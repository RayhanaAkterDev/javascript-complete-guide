# 07.1 - Naming Conventions for Variables

Naming conventions help write clean, readable, and maintainable code by following consistent rules for naming variables.

---

## 1. Rules for Writing Variable Names

- Variable names are **case-sensitive** (`myVar` and `myvar` are different).  
- Names **cannot contain spaces**.  
- Allowed characters: letters, digits, underscores `_`, and dollar signs `$`.  
- Names must **begin** with a letter, underscore `_`, or dollar sign `$`.  
- Avoid using **reserved keywords** like `if`, `const`, `return`.  
- Use **descriptive names** that convey meaning (e.g., `sellingPrice` instead of `x`).  
- Since JavaScript is dynamically typed, indicating variable type in the name can help (e.g., `orderNumber` for numeric ID).

---

## 2. Common Naming Conventions

### 2.1 Variables and Functions

Use `camelCase` (lowercase first word, capitalize subsequent words).

```js
var dogName = "Droopy";

function getName(dogName, ownerName) {
  return `${dogName} ${ownerName}`;
}
```

### 2.2 Boolean Variables

Prefix with `is` or `has` for clarity.

```js
var isBarking = false;
var hasOwner = true;
```

### 2.3 Constants

Use uppercase letters with underscores (`UPPER_SNAKE_CASE`) for values that do not change.

```js
const DAYS_IN_WEEK = 7;
const MAX_USERS = 1000;
```

### 2.4 Class and Component Names

Use PascalCase (capitalize first letter of each word).

```js
class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }
}

function DogCartoonComponent(props) {
  return (
    <div>
      <span>Dog Name: {props.dogName}</span>
      <span>Owner Name: {props.ownerName}</span>
    </div>
  );
}
```

> Note: PascalCase is commonly used for React components and classes.

---

## 3. Invalid Variable Names

### 3.1 Name Starts with Digit

Names cannot start with a digit or contain hyphens:

```js
let 1a;        // Invalid: starts with a digit
let my-name;   // Invalid: contains hyphen
```

### 3.2 Using Implicit Globals

Avoid assigning values to undeclared variables. This creates implicit globals, which can lead to bugs and hard-to-maintain code. In strict mode, this causes errors.

```js
// Without "use strict", this creates a global variable (bad practice)
num = 5;

// With strict mode, this causes an error:
"use strict";
num = 5;  // ReferenceError: num is not defined
```

### 3.3 Reserved Keywords

Reserved keywords cannot be used as variable names.

```js
let let = 5;      // SyntaxError
let return = 10;  // SyntaxError
```

See the full list of reserved words on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

---

## 4. Navigation

🔙 [Back to Variables](README.md)
