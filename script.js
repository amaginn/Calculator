// array for nums on Display
let numsArray = [];

// results Array
let resultsArray = [];

// indexes for operators
let operate = function() {
  
const operations = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};
  
const indexOfPlus = numsArray.indexOf('+');
const indexOfMinus = numsArray.indexOf('-');
const indexOfMulti = numsArray.indexOf('×');
const indexOfDivi = numsArray.indexOf('÷');

const numbers = {
    add1: parseInt(numsArray.filter((num, index) => index < indexOfPlus && typeof num === "string").join('')),
    add2: parseInt(numsArray.filter((num, index) => index > indexOfPlus && typeof num === "string").join('')),
    sub1: parseInt(numsArray.filter((num, index) => index < indexOfMinus && typeof num === "string").join('')),
    sub2: parseInt(numsArray.filter((num, index) => index > indexOfMinus && typeof num === "string").join('')),
    mult1: parseInt(numsArray.filter((num, index) => index < indexOfMulti && typeof num === "string").join('')),
    mult2: parseInt(numsArray.filter((num, index) => index > indexOfMulti && typeof num === "string").join('')),
    divi1: parseInt(numsArray.filter((num, index) => index < indexOfDivi && typeof num === "string").join('')),
    divi2: parseInt(numsArray.filter((num, index) => index > indexOfDivi && typeof num === "string").join(''))
};

// actually operate on numbers
    if (numsArray.includes('+')) {
        let add1 = operations.add(numbers.add1, numbers.add2);
        console.log('ADD:', add1)
        botDisplay.innerText = add1;
        resultsArray.push(add1);
        // buttonsGrid.disabled = true;
    } if (numsArray.includes('-')) {
        let sub1 = operations.subtract(numbers.sub1, numbers.sub2);
        console.log('SUBTRACT:', sub1);
        botDisplay.innerText = sub1;
        resultsArray.push(sub1);
    } if (numsArray.includes('×')) {
        let mult1 = operations.multiply(numbers.mult1, numbers.mult2);
        console.log('MULTIPLY:', mult1);
        botDisplay.innerText = mult1;
        resultsArray.push(mult1);
    } if (numsArray.includes('÷')) {
        let divi1 = operations.divide(numbers.divi1, numbers.divi2);
        console.log('DIVIDE:', divi1)
        botDisplay.innerText = divi1;
        resultsArray.push(divi1);
    } else  
        return 'Please enter a valid operator'
}

// add DOM listeners
let display = document.querySelector('#display');
let clearBtn = document.querySelector('#clearBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let btnContainer = document.querySelector('#buttons-grid');

// function for displaying clicked numbers
const addToDisplay = function(e) {
        if (e.target.classList.contains('btn')) {
        let newNum = e.target.innerText;
        numsArray.push(newNum);
        let numString2 = numsArray.toString().replace(/,/g,'');
        topDisplay.innerText = numString2;
   }
}
btnContainer.addEventListener('click', addToDisplay);

// function for clearing display and both arrays
const clearDisplay = function() {
    topDisplay.innerText = '0'
    botDisplay.innerText = ''
    numsArray.length = 0
    resultsArray.length = 0
}
clearBtn.addEventListener('click', clearDisplay);

// function for deleting one number
// const deleteNum = function () {
//     let delete1 = display.innerText.slice(0, -1);
//     display.innerText = delete1;
// }
// deleteBtn.addEventListener('click', deleteNum);

const clearNumsArray = function() {
   numsArray.length = 0
    console.log('Results Array:', resultsArray);
}
// add = return event listener
let equalsBtn = document.querySelector('#equalsBtn')
equalsBtn.addEventListener('click', function() {
    operate();
    clearNumsArray();
});