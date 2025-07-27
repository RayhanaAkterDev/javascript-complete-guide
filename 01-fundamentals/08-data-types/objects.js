/*
    Topic: objects.js

    This file demonstrates JavaScript reference data types, focusing on:
        - Objects, Arrays, Functions, Dates, RegExp
        - How references work (assignment, mutation)
        - Shared references and equality by reference
        - Mutation examples and cloning basics
*/

/* ---------------------------------
    1. Objects — key-value collections
--------------------------------- */
const person = {
    name: 'Sumaya',
    age: 23,
};

console.log('person:', person); // { name: 'Sumaya', age: 23 }

/* ---------------------------------
    2. Arrays — ordered lists
--------------------------------- */
const numbers = [1, 2, 3];
console.log('numbers:', numbers); // [1, 2, 3]

/* ---------------------------------
    3. Functions — callable objects
--------------------------------- */
function greet() {
    console.log('Hello!');
}
greet(); // Hello!

/* ---------------------------------
    4. Date — date and time object
--------------------------------- */
const now = new Date();
console.log('Date now:', now);

/* ---------------------------------
    5. RegExp — regular expressions
--------------------------------- */
const pattern = /abc/gi;
console.log('RegExp:', pattern);

/* ---------------------------------
    6. Reference behavior: Assignment & Mutation
    Variables hold references to the objects,
    so mutations affect all references.
--------------------------------- */
const obj1 = { value: 10 };
const obj2 = obj1; // obj2 references the same object

obj2.value = 20; // Mutate via obj2
console.log('obj1.value:', obj1.value); // 20 (changed)
console.log('obj2.value:', obj2.value); // 20

console.log('------');

/* ---------------------------------
    7. Equality by reference
--------------------------------- */
const o1 = { a: 1 };
const o2 = { a: 1 };
const o3 = o1;

console.log(o1 === o2); // false (different objects)
console.log(o1 === o3); // true  (same reference)

console.log('------');

/* ---------------------------------
    8. Shallow Cloning Objects
    Copy top-level properties only
--------------------------------- */
const original = { x: 1, y: { z: 2 } };
const clone = Object.assign({}, original);

clone.x = 10;
clone.y.z = 20; // Mutates original.y.z because it's nested reference

console.log('original:', original); // { x:1, y: { z: 20 } }
console.log('clone:', clone); // { x:10, y: { z: 20 } }

/*
    🔗 Note:
    Reference types store addresses pointing to objects.
    Mutations affect all references to the same object.
    Deep cloning requires libraries or custom functions.
    See type-checking.js for how to detect these types.
*/
