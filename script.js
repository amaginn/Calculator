// arrays for appending clicks, key downs, and opearations
let numsArray = [];
let resultsArray = [];
let displayNum = "";

// Operators for calculations
const operators = ['+', '-', '×', '÷'];

// DOM elements
let display = document.querySelector('#display');
let topDisplay = document.querySelector('#topDisplay')
let botDisplay = document.querySelector('#botDisplay')
let clearBtn = document.querySelector('#clearBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let btnContainer = document.querySelector('#buttons-grid');
let equalsBtn = document.querySelector('#equalsBtn');

// grab the operator in the numsArray
const indexOfOperator = (operator) => numsArray.indexOf(operator);

// grab the numbers in the numsArray
const numbers = (operatorIndex) => {
    const num1 = parseFloat(numsArray.slice(0, operatorIndex).join(''));
    const num2 = parseFloat(numsArray.slice(operatorIndex + 1).join(''));
    return [num1, num2];
}

// actual calculations 
const performOperation = (operator, num1, num2) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '×': (a, b) => a * b,
        '÷': (a, b) => a / b,
    };
    return operations[operator](num1, num2);
}

// perform the operation with the selected numbers and operators
let operate = function() {
    let result;

    for (let operator of operators) {
        const index = indexOfOperator(operator);
        if (index !== -1) {
            const [num1, num2] = numbers(index);
            result = performOperation(operator, num1, num2);
            break;
        }
    }

    if (result !== undefined) {
        botDisplay.innerText = result;
        resultsArray[0] = result.toString();
        return result;
    } else {
        return 'Please enter a valid operator';
    }
}

// add the selected numbers and operators to the display
const addToDisplay = (e) => {
        if (e.target.classList.contains('btn')) {
            let newNum = e.target.innerText;
            numsArray.push(newNum);
            displayNum = numsArray.join('');
            topDisplay.innerText = displayNum;
   }
   return displayNum;
};

// clear button
const clearDisplay = () => {
    topDisplay.innerText = '0'
    botDisplay.innerText = ''
    numsArray.length = 0
    resultsArray.length = 0
    deleteBtn.disabled = false;
}

// delete button
const deleteNum = () => {
    displayNum = displayNum.slice(0, displayNum.length - 1);
    numsArray.pop();
    topDisplay.innerText = displayNum;
}

// clears underlying array
const clearNumsArray = function() {
   numsArray = [resultsArray[0].toString()];
}

// attached to equals button (combines operate with clearing the underlying array to avoid issues)
const finalOperation = function() {
    operate();
    clearNumsArray();
    deleteBtn.disabled = true;
}

// using the keyboard to select numbers, operators, delete, clear, and operate
const keyboardToDisplay = function(e) {
    if (e.key >= 0 && e.key <= 9 || e.key === '.' || e.key === '+' || e.key === '-') {
        let newNum = e.key;
        numsArray.push(newNum);
        displayNum = numsArray.join('');
        topDisplay.innerText = displayNum;
}    if (e.key === 'x') {
        let newNum = '×';
        numsArray.push(newNum);
        displayNum = numsArray.join('');
        topDisplay.innerText = displayNum;
}    if (e.key === '/') {
        let newNum = '÷';
        numsArray.push(newNum);
        displayNum = numsArray.join('');
        topDisplay.innerText = displayNum;
}    if (e.key === 'Backspace') deleteNum()
     if (e.key === 'Escape') clearDisplay()
     if (e.key === '=' || e.key === 'Enter') finalOperation()
}

// event listeners
btnContainer.addEventListener('click', addToDisplay);
clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteNum);
equalsBtn.addEventListener('click', finalOperation);
window.addEventListener('keydown', keyboardToDisplay);

// THIS IS A TEST MAN

const testing = () => {

}