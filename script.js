// Addition

function add (a, b) {
    let c = a + b;
    return c;
}

console.log(add(5, 5)); // 10

// Subtraction

function subtract (a, b) {
    let c = a - b;
    return c;
}

console.log(subtract(5, 5)); // 0

// Multiplication

function multiply (a, b) {
    let c = a * b;
    return c;
}

console.log(multiply(5, 5)); // 25

// Division

function divide (a, b) {
    let c = a / b;
    return c;
}

console.log(divide(10, 2)); // 5

// Operator function to tke the operator and two numbers, and call one of the above functions on the numbers

let firstNum = 10;
let operator = '+';
let secondNum = 2;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
          return add(num1, num2);
        case '-':
          return subtract(num1, num2);
        case '*':
          return multiply(num1, num2);
        case '/':
          return divide(num1, num2);
      }
}

let result = operate(firstNum, operator, secondNum);

console.log(result);


