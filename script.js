let numsArray = [];
let resultsArray = [];
let displayNum = "";

let operate = function() {
  
const operations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
};
  
const indexOfPlus = numsArray.indexOf('+');
const indexOfMinus = numsArray.indexOf('-');
const indexOfMulti = numsArray.indexOf('×');
const indexOfDivi = numsArray.indexOf('÷');

const numbers = {
    add1: parseFloat(numsArray.filter((num, index) => index < indexOfPlus && typeof num === "string").join('')),
    add2: parseFloat(numsArray.filter((num, index) => index > indexOfPlus && typeof num === "string").join('')),
    sub1: parseFloat(numsArray.filter((num, index) => index < indexOfMinus && typeof num === "string").join('')),
    sub2: parseFloat(numsArray.filter((num, index) => index > indexOfMinus && typeof num === "string").join('')),
    mult1: parseFloat(numsArray.filter((num, index) => index < indexOfMulti && typeof num === "string").join('')),
    mult2: parseFloat(numsArray.filter((num, index) => index > indexOfMulti && typeof num === "string").join('')),
    divi1: parseFloat(numsArray.filter((num, index) => index < indexOfDivi && typeof num === "string").join('')),
    divi2: parseFloat(numsArray.filter((num, index) => index > indexOfDivi && typeof num === "string").join(''))
};

    if (numsArray.includes('+')) {
        let add1 = operations.add(numbers.add1, numbers.add2);
        botDisplay.innerText = add1;
        resultsArray[0] = add1.toString();
    } if (numsArray.includes('-')) {
        let sub1 = operations.subtract(numbers.sub1, numbers.sub2);
        botDisplay.innerText = sub1;
        resultsArray[0] = sub1;
    } if (numsArray.includes('×')) {
        let mult1 = operations.multiply(numbers.mult1, numbers.mult2);
        botDisplay.innerText = mult1;
        resultsArray[0] = mult1;
    } if (numsArray.includes('÷')) {
        let divi1 = operations.divide(numbers.divi1, numbers.divi2);
        botDisplay.innerText = divi1;
        resultsArray[0] = divi1;
    } else  
        return 'Please enter a valid operator'
}

let display = document.querySelector('#display');
let topDisplay = document.querySelector('#topDisplay')
let botDisplay = document.querySelector('#botDisplay')
let clearBtn = document.querySelector('#clearBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let btnContainer = document.querySelector('#buttons-grid');
let equalsBtn = document.querySelector('#equalsBtn');

const addToDisplay = function(e) {
        if (e.target.classList.contains('btn')) {
        let newNum = e.target.innerText;
        numsArray.push(newNum);
        displayNum = numsArray.toString().replace(/,/g,'');
        topDisplay.innerText = displayNum;
   }
   return displayNum;
}
btnContainer.addEventListener('click', addToDisplay);

const clearDisplay = function() {
    topDisplay.innerText = '0'
    botDisplay.innerText = ''
    numsArray.length = 0
    resultsArray.length = 0
    deleteBtn.disabled = false;
}
clearBtn.addEventListener('click', clearDisplay);

const deleteNum = function () {
    displayNum = displayNum.slice(0, displayNum.length - 1);
    numsArray.pop();
    topDisplay.innerText = displayNum;
}
deleteBtn.addEventListener('click', deleteNum);

const clearNumsArray = function() {
   numsArray = [resultsArray[0].toString()];
}

equalsBtn.addEventListener('click', function() {
    operate();
    clearNumsArray();
    deleteBtn.disabled = true;
});