# 🧠 JavaScript Complete Guide

A complete roadmap from beginner to advanced JavaScript

This guide takes you from the basics of JavaScript to advanced concepts like closures, async/await, and design patterns. It’s built to help you understand how JavaScript works — not just how to write it.

Whether you're learning from scratch, reviewing fundamentals, or preparing for real-world work with tools like React, each topic is broken down with clear explanations and hands-on examples. You'll build a strong mental model of JavaScript — from variables and loops to scope, memory, and performance.

---

## 🗂️ Topics covered

### 1. JavaScript Fundamentals

> Core concepts every developer must master to write basic scripts. Covers how JavaScript runs, syntax, data types, control flow, and foundational mechanics.

- [JS Introduction](./01-fundamentals/01-js-intro/README.md)  
- [How JavaScript Runs](./01-fundamentals/02-js-runtime/README.md)  
- [Embedding JavaScript](./01-fundamentals/03-embedding-js/README.md)  
- [Statements & Expressions](./01-fundamentals/04-statements-expressions/README.md)  
- [Keywords](./01-fundamentals/05-keywords/README.md)  
- [Comments](./01-fundamentals/06-comments/README.md)  
- [Variables](./01-fundamentals/07-variables/README.md)  
  - [Naming Conventions](./01-fundamentals/07-variables/naming-conventions.md)  
- [Data Types](./01-fundamentals/08-data-types/README.md)  
  - [Primitives](./01-fundamentals/08-data-types/01-primitives.js)  
  - [Reference Types](./01-fundamentals/08-data-types/02-reference.js)  
  - [Type Checking](./01-fundamentals/08-data-types/03-type-checking.js)  
- [Type Conversion & Coercion](./01-fundamentals/09-type-conversion-coercion/README.md)  
  - [Equality Coercion](./01-fundamentals/09-type-conversion-coercion/equality-coercion.js)  
  - [Explicit Coercion](./01-fundamentals/09-type-conversion-coercion/explicit-conversion.js)  
  - [Implicit Coercion](./01-fundamentals/09-type-conversion-coercion/implicit-coercion.js)  
- [Operators](./01-fundamentals/10-operators/README.md)  
  - [Arithmetic](./01-fundamentals/10-operators/01-arithmetic.js)  
  - [Assignment](./01-fundamentals/10-operators/02-assignment.js)  
  - [Comparison](./01-fundamentals/10-operators/03-comparison.js)  
  - [Logical](./01-fundamentals/10-operators/04-logical.js)  
  - [Ternary](./01-fundamentals/10-operators/05-ternary.js)  
  - [Precedence](./01-fundamentals/10-operators/06-precedence.js)  
- [Input & Output](./01-fundamentals/11-io-methods/README.md)  
- [String Manipulation](./01-fundamentals/12-string-manipulation/README.md)  
  - [Basics](./01-fundamentals/12-string-manipulation/01-basics.js)  
  - [Properties Access](./01-fundamentals/12-string-manipulation/02-properties-access.js)  
  - [Common Methods](./01-fundamentals/12-string-manipulation/03-common-methods.js)  
  - [Convert Array](./01-fundamentals/12-string-manipulation/04-convert-array.js)  
  - [Template Literals](./01-fundamentals/12-string-manipulation/05-template-literals.js)  
  - [Escape-Concat](./01-fundamentals/12-string-manipulation/06-escape-concat.js)  
  - [Immutability](./01-fundamentals/12-string-manipulation/07-immutability.js)  
- [Conditionals](./01-fundamentals/13-conditionals/README.md)  
- [Loops](./01-fundamentals/14-loops/README.md)  
  - [For loop](./01-fundamentals/14-loops/01-for.js)  
  - [While loop](./01-fundamentals/14-loops/02-while.js)  
  - [Do while loop](./01-fundamentals/14-loops/03-do-while.js)  
  - [For of loop](./01-fundamentals/14-loops/04-for-of.js)  
  - [For in loop](./01-fundamentals/14-loops/05-for-in.js)  
- [Functions](./01-fundamentals/15-functions/README.md)  
  - [Declaration](./01-fundamentals/15-functions/01-declaration.js)  
  - [Expression](./01-fundamentals/15-functions/02-expression.js)  
  - [Arrow Function](./01-fundamentals/15-functions/03-arrow.js)  
  - [Function Callback](./01-fundamentals/15-functions/04-callback.js)  
- [Scope](./01-fundamentals/16-scope/README.md)  
- [Hoisting](./01-fundamentals/17-hoisting/README.md)  
- [Strict Mode](./01-fundamentals/18-strict-mode/README.md)  

---

### 2. Core JavaScript Mechanics (Part 1)

> Internal concepts essential for understanding how JS works under the hood. A must before moving into functions and async code.

- [Execution Context & Call Stack](./02-js-mechanism-par-1/execution-context-call-stack.md)
- [Lexical Scope & Scope Chain](./02-js-mechanism-par-1/lexical-scope-scope-chain.md)
- [Closures](./02-js-mechanism-par-1/closures.md)
- [`this` Keyword (Function, Object, Arrow)](./02-js-mechanism-par-1/this-keyword.md)

---

### 3. Data Structures & Functional Programming

> Learn to work with JavaScript’s core data types and apply functional programming patterns to write clean, reusable logic.

- **JavaScript Data Structures**  
  - [Arrays](./03-data-structures/arrays.md)  
  - [Objects](./03-data-structures/objects.md)  
  - [Nested Structures](./03-data-structures/nested-structures.md)  
  - [Sets](./03-data-structures/sets.md)  
  - [Maps](./03-data-structures/maps.md)  
  - [JSON](./03-data-structures/json.md)  

- **Functional JavaScript**  
  - [First-Class & Higher-Order Functions](./03-data-structures/functional-js/first-class-functions.md)  
  - [Pure Functions](./03-data-structures/functional-js/pure-functions.md)  
  - [Immutability](./03-data-structures/functional-js/immutability.md)  
  - [Function Composition](./03-data-structures/functional-js/function-composition.md)  
  - [Managing Side Effects](./03-data-structures/functional-js/managing-side-effects.md)  

---

### 4. Advanced Functions & Asynchronous JavaScript

> Dive into powerful patterns like callbacks, promises, and async/await. Master how JavaScript handles non-blocking behavior.

- **Advanced Functions**  
  - [Function Declarations vs Expressions](./04-advanced-functions/function-declarations-vs-expressions.md)  
  - [Arrow Functions](./04-advanced-functions/arrow-functions.md)  
  - [Callback Functions](./04-advanced-functions/callback-functions.md)  
  - [Higher-Order Functions](./04-advanced-functions/higher-order-functions.md)  
  - [Function Currying](./04-advanced-functions/function-currying.md)  
  - [Recursion](./04-advanced-functions/recursion.md)  
  - [IIFE (Immediately Invoked Function Expression)](./04-advanced-functions/iife.md)  
  - [Debounce & Throttle](./04-advanced-functions/debounce-throttle.md)  

- **Asynchronous JavaScript**  
  - [Sync vs Async](./04-advanced-functions/async-js/sync-vs-async.md)  
  - [Timers: setTimeout & setInterval](./04-advanced-functions/async-js/timers.md)  
  - [Callbacks & Callback Hell](./04-advanced-functions/async-js/callbacks.md)  
  - [Promises](./04-advanced-functions/async-js/promises.md)  
  - [Async/Await](./04-advanced-functions/async-js/async-await.md)  
  - [Error Handling in Async Code](./04-advanced-functions/async-js/error-handling.md)  
  - [Promise Utilities](./04-advanced-functions/async-js/promise-utilities.md)  

---

### 5. DOM Manipulation & Browser APIs

> Understand how JavaScript interacts with the browser — manipulate the DOM, handle events, and use built-in browser APIs.

- **DOM Manipulation**  
  - [What is the DOM?](./05-dom-browser/dom/what-is-dom.md)  
  - [Selecting & Traversing Elements](./05-dom-browser/dom/selecting-traversing.md)  
  - [Modifying Content & Attributes](./05-dom-browser/dom/modifying-content.md)  
  - [Styling Elements](./05-dom-browser/dom/styling-elements.md)  
  - [Creating & Removing Elements](./05-dom-browser/dom/creating-removing.md)  

- **Events**  
  - [Event Basics & Listeners](./05-dom-browser/events/event-basics.md)  
  - [Event Object](./05-dom-browser/events/event-object.md)  
  - [Event Delegation](./05-dom-browser/events/event-delegation.md)  
  - [Prevent Default & Stop Propagation](./05-dom-browser/events/prevent-default-stop-propagation.md)  
  - [Custom Events](./05-dom-browser/events/custom-events.md)  
  - [Forms & Validation](./05-dom-browser/events/forms-validation.md)  

- **Browser APIs**  
  - [Browser Environment & Global Objects](./05-dom-browser/browser-apis/environment.md)  
  - [Dialogs: alert(), prompt(), confirm()](./05-dom-browser/browser-apis/dialogs.md)  
  - [Web Storage (localStorage, sessionStorage)](./05-dom-browser/browser-apis/web-storage.md)  
  - [Cookies](./05-dom-browser/browser-apis/cookies.md)  
  - [Forms & Form Events](./05-dom-browser/browser-apis/forms-events.md)  

---

### 6. Core JavaScript Mechanics (Part 2)

> Now that you're working with the browser and complex logic, dive deeper into JavaScript internals and memory behavior.

- [Prototype & Prototype Chain](./06-js-mechanism-par-2/prototype-chain.md)  
- [Shadowing & Variable Lookup](./06-js-mechanism-par-2/shadowing-variable-lookup.md)  
- [Memory Management](./06-js-mechanism-par-2/memory-management.md)  
- [Garbage Collection](./06-js-mechanism-par-2/garbage-collection.md)  

---

### 7. Modules, HTTP & Tooling

> Learn how to structure large codebases, make API calls, and improve developer workflow with modern tools.

- **HTTP & Fetch API**  
  - [HTTP Basics](./07-modules-http-tooling/http-basics.md)  
  - [Using fetch()](./07-modules-http-tooling/using-fetch.md)  
  - [Handling JSON Responses](./07-modules-http-tooling/json-responses.md)  
  - [Sending Data](./07-modules-http-tooling/sending-data.md)  
  - [Headers & Authentication](./07-modules-http-tooling/headers-authentication.md)  
  - [Async/Await with fetch](./07-modules-http-tooling/async-await-fetch.md)  
  - [RESTful API Practices](./07-modules-http-tooling/restful-api.md)  

- **Modules & Tooling**  
  - [ES6 Modules (import/export)](./07-modules-http-tooling/es6-modules.md)  
  - [Bundlers & Transpilers (Webpack, Babel)](./07-modules-http-tooling/bundlers-transpilers.md)  
  - [Linting & Formatting](./07-modules-http-tooling/linting-formatting.md)  
  - [Clean Code Practices](./07-modules-http-tooling/clean-code.md)  
  - [Naming Conventions & Folder Structure](./07-modules-http-tooling/naming-folder-structure.md)  

---

### 8. Object-Oriented JavaScript & Design Patterns

> Master JavaScript’s OOP system and reusable design patterns used in scalable applications.

- **OOP in JavaScript**  
  - [Object Literals & Factory Functions](./08-oop-design-patterns/oop/object-literals-factory.md)  
  - [Constructor Functions](./08-oop-design-patterns/oop/constructor-functions.md)  
  - [Classes & Inheritance](./08-oop-design-patterns/oop/classes-inheritance.md)  
  - [Encapsulation & Private Members](./08-oop-design-patterns/oop/encapsulation-private.md)  
  - [Polymorphism](./08-oop-design-patterns/oop/polymorphism.md)  
  - [Static Methods](./08-oop-design-patterns/oop/static-methods.md)  
  - [`this` in Classes](./08-oop-design-patterns/oop/this-in-classes.md)  

- **Design Patterns**  
  - [Revealing Module Pattern](./08-oop-design-patterns/patterns/revealing-module.md)  
  - [Factory Pattern](./08-oop-design-patterns/patterns/factory.md)  
  - [Singleton Pattern](./08-oop-design-patterns/patterns/singleton.md)  
  - [Observer & Pub/Sub Pattern](./08-oop-design-patterns/patterns/observer-pubsub.md)  
  - [MVC Pattern](./08-oop-design-patterns/patterns/mvc.md)  
  - [Clean Component Design Principles](./08-oop-design-patterns/patterns/clean-component-design.md)  

---

### 9. Modern JavaScript Features & Performance

> ES6+ enhancements and performance optimization techniques for efficient, modern development.

- **ES6+ Deep Dive**  
  - [Destructuring](./09-modern-js-performance/es6/destructuring.md)  
  - [Spread & Rest Operators](./09-modern-js-performance/es6/spread-rest.md)  
  - [Default Parameters](./09-modern-js-performance/es6/default-parameters.md)  
  - [Optional Chaining (?.)](./09-modern-js-performance/es6/optional-chaining.md)  
  - [Nullish Coalescing (??)](./09-modern-js-performance/es6/nullish-coalescing.md)  
  - [Template Literals](./09-modern-js-performance/es6/template-literals.md)  
  - [Symbol & BigInt](./09-modern-js-performance/es6/symbol-bigint.md)  
  - [Iterators & Generators](./09-modern-js-performance/es6/iterators-generators.md)  

- **Performance & Optimization**  
  - [Reflows & Repaints](./09-modern-js-performance/performance/reflows-repaints.md)  
  - [Memory Leaks](./09-modern-js-performance/performance/memory-leaks.md)  
  - [Efficient DOM Manipulation](./09-modern-js-performance/performance/efficient-dom.md)  
  - [Lazy Loading & Code Splitting](./09-modern-js-performance/performance/lazy-loading-code-splitting.md)  
  - [Optimizing Loops & Listeners](./09-modern-js-performance/performance/optimizing-loops-listeners.md)  
  - [Debounce vs Throttle](./09-modern-js-performance/performance/debounce-throttle.md)  

---

### 10. Testing, Debugging & Reliability

> Ensure your JavaScript code is stable, testable, and easier to debug and maintain in real-world projects.

- **Debugging & Error Handling**  
  - [Runtime vs Syntax Errors](./10-testing-debugging/reliability/runtime-vs-syntax-errors.md)  
  - [Try, Catch, Finally](./10-testing-debugging/reliability/try-catch-finally.md)  
  - [Throwing Custom Errors](./10-testing-debugging/reliability/custom-errors.md)  
  - [Console Methods](./10-testing-debugging/reliability/console-methods.md)  
  - [`debugger` Keyword](./10-testing-debugging/reliability/debugger-keyword.md)  
  - [DevTools Tips](./10-testing-debugging/reliability/devtools-tips.md)  

- **Testing JavaScript Code**  
  - [Why Testing Matters](./10-testing-debugging/testing/why-testing.md)  
  - [Manual Testing Techniques](./10-testing-debugging/testing/manual-testing.md)  
  - [Unit Testing Concepts](./10-testing-debugging/testing/unit-testing.md)  
  - [Intro to Jest](./10-testing-debugging/testing/jest-intro.md)  
  - [Writing Simple Test Cases](./10-testing-debugging/testing/simple-test-cases.md)  

---

## 🚀 Quick Start Guide

```bash
# Clone the repository
git clone https://github.com/RayhanaAkterDev/javascript-core-concepts.git
```

Or just browse topics and copy-paste .js code into your browser console. No setup required!

---

## 🧪 How to Run JavaScript Code

### ✅ Option 1: Use Your Browser’s Console

- Open a blank browser tab  
- Right-click → Inspect → Open the **Console** tab  
- Paste any code from the `.js` files  
- Press `Enter` and see the output  

### ✅ Option 2: Use an Online Playground

- [JSConsole](https://jsconsole.com) — Quick JS-only testing  
- [JSFiddle](https://jsfiddle.net) — Test JS with HTML/CSS  

Just paste the code and run. Super quick!

### ⚠️ Some Topics Use `index.html`

Certain topics (like `alert()`, `prompt()`, DOM, etc.) need browser interaction.  
Open the included `index.html` file in your browser for those cases.

---

## 👩‍💻 Who Is This For?

- Beginners who want a structured, clean path  
- Self-learners tired of scattered tutorials  
- Bootcamp grads who want to solidify fundamentals  
- Interview preppers and JS refreshers  

---

## 💡 Learning Tips

- Start from `01-fundamentals` and go in order  
- Each folder is self-contained: read the `README`, run the code  
- Practice by modifying the code — break things and rebuild  
- Use the DevTools console as your sandbox 🧪  

---

## 📜 License

Free and open-source for educational use.  
Feel free to fork, remix, or build your own roadmap from it.

---

## ✨ Maintained by

**Rayhana Akter Sumaya**  
👩‍💻 Frontend Developer in Progress  
📬 [rayhanaaktersumaya.dev@gmail.com](mailto:rayhanaaktersumaya.dev@gmail.com)  
🌐 [GitHub Profile](https://github.com/RayhanaAkterDev)
