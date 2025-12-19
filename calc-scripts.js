// Calc-Scripts.js
// A JavaScript Calculator for the browser
// By: Tink
// Dec. 2025




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) return 'error: no division by 0';
            return divide(num1, num2);
        default:
            return 'error: invalid operator'
    }
}

let firstNumber = null;
let currentNumber = '';
let currentOperator = '';
let shouldResetDisplay = false;

const display = document.getElementById('display')
const btns = document.querySelectorAll('.btn') //selects all buttons and makes them into a node list

btns.forEach((button) => { //loops through each button individually 
    button.addEventListener('click', (e) => { // attaches 'click' listener to each button
        const btn = e.target; // what button was actually clicked
        if (btn.dataset.number) {
            if (shouldResetDisplay) {
                currentNumber = '';
                shouldResetDisplay = false;
            }
            currentNumber += btn.dataset.number;
            display.value = currentNumber;
            console.log('Number:', btn.dataset.number);
        }

        if (btn.dataset.operator) {
            if (firstNumber !== null && currentOperator && currentNumber) {
                const result = operate(currentOperator, firstNumber, Number(currentNumber));
                display.value = result;
                firstNumber = result;
                currentNumber = '';
                shouldResetDisplay = false;
            }else {
                firstNumber = Number(currentNumber);
                currentNumber = '';
                shouldResetDisplay = false;
            
            }
            currentOperator = btn.dataset.operator;
            console.log('Fisrst Number:', firstNumber, 'Operator:', currentOperator);
        }

        if (btn.dataset.action === '=') {
            if (firstNumber !== null && currentOperator && currentNumber) {
                const result = operate(currentOperator, firstNumber, Number(currentNumber))
                display.value = result;
                firstNumber = result;
                currentNumber = result.toString();
                currentOperator = '';
                shouldResetDisplay = true;
            }
            console.log('Action:', btn.dataset.action);
        }
        if (btn.dataset.action === 'clear') {
            firstNumber = null;
            currentOperator = '';
            currentNumber = '';
            shouldResetDisplay = false;
            display.value = '';
            console.log('Display Cleared');
        }
        if (btn.dataset.decimal) {
            if (shouldResetDisplay) {
                currentNumber = '0.';
                firstNumber = null;
                currentOperator = '';
                display.value = currentNumber;
                shouldResetDisplay = false;
                return;
            }
            if (currentNumber === '' && currentOperator) {
                currentNumber = '0.';
                display.value = currentNumber;
                return;
            }
            if (currentNumber === '' && !currentOperator && firstNumber === null) {
                currentNumber = '0.';
                display.value = currentNumber;
                return;
            }
            if (currentNumber.includes('.')) {
                return; 
            }
            currentNumber += '.';
            display.value = currentNumber;
        }
        if (btn.dataset.action === 'backspace') {
            if (shouldResetDisplay) {
                clearCalculator();
                display.value = '0';
                return;
            }
            if (!currentNumber || currentNumber === '0') {
                return;
            }
            currentNumber = currentNumber.slice(0, -1);
            if (currentNumber === '') {
                currentNumber = '0';
            }
            if (currentNumber === '-') {
                currentNumber = '0';
            }   
            display.value = currentNumber;
        }
        console.log(btn.dataset)
        
    })
        
})















