# 04 - Arrays

Arrays are **ordered collections** used to store multiple values in a single variable. They are essential for grouping and organizing related data, and they offer powerful methods for iteration, transformation, and manipulation.

---

## 1. What Are Arrays?

An array is a data structure that stores multiple values in a single variable, accessible by their index (starting from 0).

- Stores elements in sequential order
- Elements can be of any data type
- Index-based access to values

```js
const fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // "banana"
```

---

## 2. Creating Arrays

### 2.1 Using Bracket Notation (`[]`)

This is the most common and preferred way to create arrays.

- Creates a literal array with defined elements
- Easy to read and write

```js
const colors = ["red", "green", "blue"];
```

### 2.2 Using `Array` Constructor

Less commonly used. Behaves differently based on the number of arguments.

- Multiple arguments create array with those values
- Single number creates an empty array of that length

```js
const scores = new Array(10, 20, 30);  // [10, 20, 30]
const empty = new Array(3);           // [ <3 empty items> ]
```

✅ **Tip:** Prefer `[]` unless dynamic length is required.

---

## 3. Accessing & Modifying Elements

- Use bracket notation to access or update elements
- Indices start at `0`
- Can modify individual elements by assignment

```js
const nums = [5, 10, 15];
console.log(nums[0]); // 5

nums[1] = 20;         // Update second item
console.log(nums);    // [5, 20, 15]
```

---

## 4. Basic Array Methods

### 4.1 `push()` and `pop()`

- `push()` adds item(s) to the end of the array
- `pop()` removes and returns the last item

```js
let items = [1, 2];
items.push(3);     // [1, 2, 3]
items.pop();       // [1, 2]
```

### 4.2 `unshift()` and `shift()`

- `unshift()` adds item(s) to the start of the array
- `shift()` removes and returns the first item

```js
let items = [2, 3];
items.unshift(1);  // [1, 2, 3]
items.shift();     // [2, 3]
```

---

## 5. Looping Through Arrays

### 5.1 `for` Loop

A traditional loop that gives full control over the index and flow.

- Gives direct access to the index (i)
- Supports break and continue
- Useful when looping conditionally or skipping steps

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### 5.2 `for...of`

A modern and readable loop that iterates over the values of an array.

- Cleaner syntax than `for`
- Automatically gives each item (not the index)
- 3Cannot be used to access the index unless combined with `.entries()`

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### 5.3 `forEach()`

A higher-order array method that runs a function once per array element.

- Ideal for side effects (logging, DOM manipulation, etc.)
- Does not return a value
- Cannot use break or continue (loop cannot exit early)

```js
fruits.forEach((fruit) => console.log(fruit));
```

---

## 6. Advanced Array Methods

### 6.1 `map()` – Transform Each Element

- Returns a new array by applying a function to every item
- Does not mutate the original array

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
```

### 6.2 `filter()` – Select Items Based on Condition

- Returns a new array with items that match a condition

```js
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

### 6.3 `reduce()` – Accumulate to a Single Value

- Applies a function cumulatively and returns a single value
- Ideal for sums, products, etc.

```js
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6
```

### 6.4 `find()` – Find First Match

- Returns the first item that matches a condition

```js
const found = [1, 3, 5, 7].find(n => n > 4); // 5
```

---

## 7. Bonus Advanced Methods (Optional)

### 7.1 `sort()` – Sort Elements

- Converts elements to strings and sorts them lexicographically by default

```js
const nums = [30, 4, 21];
nums.sort(); // [21, 30, 4] – wrong result for numbers!

nums.sort((a, b) => a - b); // [4, 21, 30] – correct numeric sort
```

### 7.2 `slice()` – Extract a Portion

- Returns a shallow copy of a part of an array
- Does **not** modify the original array

```js
const names = ["A", "B", "C", "D"];
const part = names.slice(1, 3); // ["B", "C"]
```

### 7.3 `splice()` – Modify Array In-Place

- Can add/remove elements in an array

```js
const nums = [10, 20, 30];
nums.splice(1, 1, 25); // [10, 25, 30]
```

### 7.4 `Array.isArray()` – Check if Value Is Array

- Returns `true` if value is an array

```js
Array.isArray([1, 2, 3]); // true
Array.isArray("abc");   // false
```

### 7.5 `Array.from()` – Create Array from Iterable

- Converts string or iterable to array

```js
Array.from("Sumaya"); // ['S', 'u', 'm', 'a', 'y', 'a']
```

---

## 💡 Best Practices

✅ Use `const` for arrays you won’t reassign  
✅ Name arrays with plural nouns (e.g., `users`, `tasks`)  
✅ Avoid sparse arrays (e.g., skipping indices)  
✅ Prefer `map`, `filter`, `reduce` for clean logic  
✅ Use `for...of` or `forEach()` over `for` unless index is required

---

## 📂 Demo Files

Explore the examples to practice array concepts:

- [`01-array-basics.js`](01-array-basics.js)
- [`02-array-methods.js`](02-array-methods.js)
- [`03-advanced-array-methods.js`](03-advanced-array-methods.js)
- [`04-bonus-array-methods.js`](04-bonus-array-methods.js)

---

## 🔎 Related Concepts

Some concepts that support array logic or build upon it:

- [02 - Objects](../02-objects/README.md) → Objects used inside arrays and vice versa  
- [03 - Nested Structures](../03-nested-structures/README.md) → Accessing deeply nested arrays or objects  
- [06 - JSON](../06-json/README.md) → Arrays in real-world data formats

---

## 🧪 Try It Online

Try the examples interactively on:

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS

---

## 📚 Further Reading

- [MDN - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
- [JavaScript.info - Arrays](https://javascript.info/array)  
- [freeCodeCamp - Array Guide](https://www.freecodecamp.org/news/javascript-array-methods/)

---

## 🔗 Next Topic

**[→ 05 - Objects](../02-objects/README.md)** — Learn about JavaScript’s key-value storage with dot and bracket notation.

---

## 🧭 Navigation

[← Back to Fundamentals](../README.md) | [🏠 Main README](../../README.md)
