// 🟦 Statement: Variable declaration with an expression
let number = 5; // '5' is the expression, entire line is a statement

// 🟦 Statement: Assignment with an arithmetic expression
let doubled = number * 2; // 'number * 2' is the expression

// 🟦 Statement: Conditional with expression inside
if (doubled > 5) { // 'doubled > 5' is an expression
    console.log('Doubled value is greater than 5'); // statement
}

// 🟦 Statement: Function declaration with expression in return
function greet(name) {
    return 'Hello, ' + name; // 'Hello, ' + name is the expression
}

// 🟦 Statement: Function call as expression inside console.log
console.log(greet('Sumaya')); // 'greet("Sumaya")' is an expression

// 🟦 Just an expression (no effect, but valid)
3 + 4; // expression by itself (valid but unused)
