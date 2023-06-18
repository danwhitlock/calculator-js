// Addition

function add (a, b) {
    let c = a + b;
    return c;
}

//console.log(add(5, 5)); // 10

// Subtraction

function subtract (a, b) {
    let c = a - b;
    return c;
}

//console.log(subtract(5, 5)); // 0

// Multiplication

function multiply (a, b) {
    let c = a * b;
    return c;
}

//console.log(multiply(5, 5)); // 25

// Division

function divide (a, b) {
    let c = a / b;
    return c;
}

//console.log(divide(10, 2)); // 5

// Operator function to take the operator and two numbers, and call one of the above functions on the numbers

let firstNum = '';
let operator = '';
let secondNum = '';
let displayValue = '';

function operate(num1, op, num2) {
    switch (op) {
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

//console.log(result);

// Updating the display

function updateDisplay(value = '0') {
    if (operator === '') {
        if (firstNum === '0') {
            firstNum = value;
        } else {
            firstNum += value;
        }
        document.getElementById('display').textContent = firstNum;
    } else {
        secondNum += value;
        document.getElementById('display').textContent = secondNum;
    }
}

updateDisplay();

// Clear function

document.getElementById('clear').addEventListener('click', function() {
    firstNum = '';
    operator = '';
    secondNum = '';
    displayValue = '0';
    document.getElementById('display').textContent = displayValue;
  });

// Event listeners for number buttons

document.getElementById('zero').addEventListener('click', function() {
    updateDisplay(0);
});

document.getElementById('one').addEventListener('click', function() {
    updateDisplay(1);
});

document.getElementById('two').addEventListener('click', function() {
    updateDisplay(2);
});

document.getElementById('three').addEventListener('click', function() {
    updateDisplay(3);
});

document.getElementById('four').addEventListener('click', function() {
    updateDisplay(4);
});

document.getElementById('five').addEventListener('click', function() {
    updateDisplay(5);
});

document.getElementById('six').addEventListener('click', function() {
    updateDisplay(6);
});

document.getElementById('seven').addEventListener('click', function() {
    updateDisplay(7);
});

document.getElementById('eight').addEventListener('click', function() {
    updateDisplay(8);
});

document.getElementById('nine').addEventListener('click', function() {
    updateDisplay(9);
});

// Decimal

document.getElementById('decimal').addEventListener('click', function() {
    updateDisplay('.');
});

// Operators

document.getElementById('add').addEventListener('click', function() {
    operator = '+';
});

document.getElementById('subtract').addEventListener('click', function() {
    operator = '-';
});

document.getElementById('multiply').addEventListener('click', function() {
    operator = '*';
});

document.getElementById('divide').addEventListener('click', function() {
    operator = '/';
});

// Equals

document.getElementById('equals').addEventListener('click', function() {
    doTheMaths();
});

// Do the  maths

function doTheMaths() {
    if (firstNum === '' || operator === '' || secondNum === '') {
        return;
    }
    
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    
    let result = operate(num1, operator, num2);
    
    firstNum = result.toString();
    operator = '';
    secondNum = '';
    
    displayResult();
}

function displayResult() {
    document.getElementById('display').textContent = firstNum;
}