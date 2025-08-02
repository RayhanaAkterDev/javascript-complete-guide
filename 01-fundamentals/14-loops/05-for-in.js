/*
  Topic: for-in.js (Step-by-step Advanced Examples)

  Demonstrates usage of the `for...in` loop, starting from simple key iteration
  and advancing into safer, more realistic patterns:
    - Basic object key iteration
    - Checking own properties with hasOwnProperty
    - Skipping inherited properties
    - Nested object iteration
    - Filtering by condition
    - Array usage warning
    - Comparison with `for...of`
*/

// --- 1. Basic object key iteration ---

const user = {
    name: "Sumaya",
    age: 21,
    country: "BD",
};

for (const key in user) {
    console.log(`${key}:`, user[key]);
}
// Output:
// name: Sumaya
// age: 21
// country: BD

// --- 2. Safe iteration: only own properties (avoiding prototype) ---

for (const key in user) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
        console.log(`Own property → ${key}:`, user[key]);
    }
}

// --- 3. Inherited property check demo ---

const baseUser = {
    role: "member",
};

const member = Object.create(baseUser);
member.name = "Rayhan";
member.age = 25;

for (const key in member) {
    console.log(`[Includes prototype] ${key}:`, member[key]);
}
// Now filtering only own:
for (const key in member) {
    if (Object.prototype.hasOwnProperty.call(member, key)) {
        console.log(`[Own only] ${key}:`, member[key]);
    }
}

// --- 4. Iterating nested object (multi-level loop) ---

const student = {
    name: "Nisa",
    marks: {
        math: 90,
        science: 88,
        english: 92,
    },
};

for (const subject in student.marks) {
    console.log(`${subject} → ${student.marks[subject]}`);
}

// --- 5. Filtering properties by condition (numeric values only) ---

const data = {
    name: "Laptop",
    price: 800,
    available: true,
    rating: 4.5,
};

for (const key in data) {
    if (typeof data[key] === "number") {
        console.log(`Numeric → ${key}:`, data[key]);
    }
}

// --- 6. ⚠️ Avoid using for...in on arrays (use for...of instead) ---

const colors = ["red", "green", "blue"];

console.log("Using for...in on array:");
for (const index in colors) {
    console.log(index, ":", colors[index]); // index as string
}

console.log("Using for...of on array:");
for (const color of colors) {
    console.log("Color:", color); // cleaner and safer
}

// --- 7. Dynamic object update with for...in ---

const profile = {
    name: "Rima",
    age: 22,
    city: "Dhaka",
};

for (const key in profile) {
    profile[key] = String(profile[key]).toUpperCase();
}
console.log("Updated profile:", profile);
// All values are now uppercase strings
