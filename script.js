// Mathematical functions, ensuring results are limited to 9 decimal places

function roundDecimals(num) {
    return parseFloat(num.toFixed(9));
}

function add (a, b) {
    let c = a + b;
    return roundDecimals(c);
}

function subtract (a, b) {
    let c = a - b;
    return roundDecimals(c);
}

function multiply (a, b) {
    let c = a * b;
    return roundDecimals(c);
}

function divide (a, b) {
    if (b === 0) {
        return 0;
    }
    let c = a / b;
    return roundDecimals(c);
}

// Variables to store the data points required

let firstNum = '';
let operator = '';
let secondNum = '';
let displayValue = '';
let currentResult = '';

// Operator function which determines which operator to perform based upon the user selection

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

// Function to update the display with the input & results

function updateDisplay(value = '0') { // display is zero to begin with
    if (operator === '') {
        if (firstNum.length >= 10) { // limits input of the number to 10 digits
            return;
        }
        if (firstNum === '0' && value !== '.') { //ensures decimals display correctly
            firstNum = value;
        } else {
            firstNum += value; // concatenates the figures for multi-digit numbers
        }
        document.getElementById('display').textContent = firstNum;
    } else {
        if (secondNum.length >= 10) {
            return;
        }
        secondNum += value;
        document.getElementById('display').textContent = secondNum;
    }
}

// Function to clear the results/display

function clearDisplay() {
    firstNum = '';  // clear the variables
    operator = '';
    secondNum = '';
    currentResult = '';
    displayValue = '0';
    document.getElementById('display').textContent = displayValue;
  };

  document.getElementById('clear').addEventListener('click', clearDisplay);

// Event listeners for Number buttons

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

// Event listener for Decimal button

document.getElementById('decimal').addEventListener('click', function() {
    updateDisplay('.');
});

// Event listeners for Operator buttons

document.getElementById('add').addEventListener('click', function() {
    if (operator !== '') { // ensures more than one calculation can be chained
        doTheMaths();
    }
    operator = '+';
});

document.getElementById('subtract').addEventListener('click', function() {
    if (operator !== '') {
        doTheMaths();
    }
    operator = '-';
});

document.getElementById('multiply').addEventListener('click', function() {
    if (operator !== '') {
        doTheMaths();
    }
    operator = '*';
});

document.getElementById('divide').addEventListener('click', function() {
    if (operator !== '') {
        doTheMaths();
    }
    operator = '/';
});

// Event listener for Equals button

document.getElementById('equals').addEventListener('click', function() {
    doTheMaths();
});

// Function to do the maths and update the result

function doTheMaths() {
    if (firstNum === '' || operator === '' || secondNum === '') {
        return; // Ensures nothing happens if input is missing
    }
    
    let num1 = parseFloat(firstNum); // ensures the inputs are treated as numbers
    let num2 = parseFloat(secondNum);
    
    let result = operate(num1, operator, num2);
    
    firstNum = result.toString(); // turns back into a string
    operator = '';
    secondNum = '';
    
    currentResult = result;
    displayResult();
}

function displayResult() {
    document.getElementById('display').textContent = currentResult.toString();
    secondNum = ''; // ensures a new number starts when calculating with more than two numbers
}

