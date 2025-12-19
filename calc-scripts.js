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

console.log(divide(9, 3))
console.log(multiply(9, 2))
console.log(subtract(6, 2))
console.log(add(4, 8))

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

console.log(operate('+', 10, 5)); 
console.log(operate('*', 4, 3)); 


let firstNumber = 1;
let operator = '+';
let secondNumber = 2;
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
            }else {
                firstNumber = Number(currentNumber);
                currentNumber = '';
            
            }
            currentOperator = btn.dataset.operator;
            console.log('Fisrst Number:', firstNumber, 'Operator:', currentOperator);
        }

        if (btn.dataset.action === '=') {
            console.log('Action:', btn.dataset.action);
        }
        console.log(btn.dataset)
        
    })
        
})















// LESSON 5 — Display Logic (Input Handling)
// 🎯 Objective
// Make digit buttons update the display.
// 🧩 Concepts
// Event listeners
// String vs number
// Controlled input
// 🪜 Guided Steps
// When a digit is clicked:
// Update the display
// Store the value in a variable
// Do NOT calculate yet.
// ⚠️ Key Insight
// Numbers start as strings when typed.
// ✅ Checkpoint
// Why should digits append as strings first?
// When do we convert to numbers?



// LESSON 6 — Operator Logic (State Changes)
// 🎯 Objective
// Correctly handle operator clicks.
// 🧩 Concepts
// State transitions
// “Pausing” input
// Deferred execution
// 🪜 Guided Steps
// When an operator is clicked:
// Store the current display as firstNumber
// Store the operator
// Prepare for the next number
// Do NOT calculate yet (unless conditions are met).
// 🧠 This Is Big
// This is where calculators usually break.
// ✅ Checkpoint
// What should happen if the user presses + twice?
// Should the display change when an operator is clicked?



// LESSON 7 — Equals Button (Execution Moment)
// 🎯 Objective
// Run the calculation only when appropriate.
// 🧩 Concepts
// Validation
// Guard clauses
// Safe execution
// 🪜 Guided Steps
// When = is clicked:
// Ensure firstNumber, operator, and secondNumber exist
// Call operate
// Update the display
// Store the result for chaining.
// ✅ Checkpoint
// Why shouldn’t = do anything if data is missing?
// Why store the result instead of resetting everything?



// LESSON 8 — Chaining Operations (The “Gotcha”)
// 🎯 Objective
// Handle sequences like 12 + 7 - 1 =
// 🧩 Concepts
// Reusing results
// Partial evaluation
// Calculator realism
// 🪜 Guided Steps
// When a new operator is clicked after a second number:
// Evaluate immediately
// Display the result
// Use it as the next firstNumber
// ✅ Checkpoint
// Why does a calculator evaluate when a second operator is pressed?
// What breaks if you don’t do this?



// LESSON 9 — Edge Cases & UX Polish
// 🎯 Objective
// Make it feel like a real calculator.
// 🧩 Concepts
// Defensive programming
// User expectations
// Topics You’ll Handle
// Divide by zero (snarky error 😈)
// Rounding long decimals
// Clear button = FULL reset
// Pressing digits after result starts fresh
// Ignoring invalid sequences
// ✅ Final Checkpoint
// You should be able to explain:
// Every variable’s purpose
// Every state change
// Why bugs happen — and how you prevented them
// 🚀 Next Step
// If you want, we can:
// Start Lesson 1 together right now
// Or I can turn this into a printable checklist
// Or we can pair-program lesson by lesson
// 👉 What lesson do you want to start with?