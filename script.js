// addition
const add = function(num1, num2) {
    return num1 + num2
}

// subtraction
const subtract = function(num1, num2) {
    return num1 - num2
}

// multiplication
const multiply = function(num1, num2) {
    return num1 * num2
}

// division
const divide = function(num1, num2) {
    return num1 / num2
}

// array for nums on Display
let numsArray = [];

// results Array
let resultsArray = [];

// indexes for operators
let operate = function() {
const indexOfPlus = numsArray.indexOf('+');
const indexOfMinus = numsArray.indexOf('-');
const indexOfMulti = numsArray.indexOf('×');
const indexOfDivi = numsArray.indexOf('÷');

// first num for addition
let num1AddArray = numsArray.filter(function(num, index) {
 return index < indexOfPlus && typeof num === "string";
});
let num1AddStr = num1AddArray.toString().replace(/,/g,'');
let num1Add = parseFloat(num1AddStr);
console.log(num1AddStr)
console.log(num1Add);


// second num for addition
let num2AddArray = numsArray.filter(function(num, index) {
    return indexOfPlus < index && typeof num === "string";
   });
   let num2AddStr = num2AddArray.toString().replace(/,/g,'');
   let num2Add = parseFloat(num2AddStr);
//  console.log(num2Add);

// first num for subtratcion
let num1SubArray = numsArray.filter(function(num, index) {
    return index < indexOfMinus && typeof num === "string";
   });
   let num1SubStr = num1SubArray.toString().replace(/,/g,'');
   let num1Sub = parseFloat(num1SubStr);
    // console.log(num1Sub);
   
// second num for subtraction
let num2SubArray = numsArray.filter(function(num, index) {
    return indexOfMinus < index && typeof num === "string";
    });
    let num2SubStr = num2SubArray.toString().replace(/,/g,'');
    let num2Sub = parseFloat(num2SubStr);
    // console.log(num2Sub);

// first num for multi
let num1MultArray = numsArray.filter(function(num, index) {
    return index < indexOfMulti && typeof num === "string";
   });
   let num1MultStr = num1MultArray.toString().replace(/,/g,'');
   let num1Mult = parseFloat(num1MultStr);
//    console.log(num1Mult);
   
// second num for multi
let num2MultArray = numsArray.filter(function(num, index) {
    return indexOfMulti < index && typeof num === "string";
    });
    let num2MultStr = num2MultArray.toString().replace(/,/g,'');
    let num2Mult = parseFloat(num2MultStr);
    // console.log(num2Mult);

// first num for divi
let num1DiviArray = numsArray.filter(function(num, index) {
    return index < indexOfDivi && typeof num === "string";
   });
   let num1DiviStr = num1DiviArray.toString().replace(/,/g,'');
   let num1Divi = parseFloat(num1DiviStr);
//    console.log(num1Divi);
   
// second num for divi
let num2DiviArray = numsArray.filter(function(num, index) {
    return indexOfDivi < index && typeof num === "string";
    });
    let num2DiviStr = num2DiviArray.toString().replace(/,/g,'');
    let num2Divi = parseFloat(num2DiviStr);
    // console.log(num2Divi);


// actually operate on numbers
    if (numsArray.includes('+') && resultsArray.length === 0) {
        let add1 = add(num1Add, num2Add);
        console.log('ADD:', add1)
        let smallAdd1 = Math.round(add1*100)/100;
        botDisplay.innerText = smallAdd1;
        resultsArray.push(add1);
        // buttonsGrid.disabled = true;
    } 
    
    // if results array is not empty and the first character in numsArray is '+' take the results array and replace the first number in numsArray with resultsArray and calculate addition of newNum1Add (results Array) + num2Add

    if (resultsArray !== 0 && numsArray[0] == '+') {
        numsArray[0] = resultsArray.innerText;
        let num1Add = resultsArray.innertext;
        console.log(num1Add)
        console.log('yay')
            
        }

    if (numsArray.includes('-')) {
        let sub1 = subtract(num1Sub, num2Sub);
        console.log('SUBTRACT:', sub1);
        let smallSub1 = Math.round(sub1*100)/100;
        botDisplay.innerText = smallSub1;
        resultsArray.push(smallSub1);
    } if (numsArray.includes('×')) {
        let mult1 = multiply(num1Mult, num2Mult);
        console.log('MULTIPLY:', mult1);
        let smallMult1 = Math.round(mult1*100)/100;
        botDisplay.innerText = mult1;
        resultsArray.push(smallMult1);
    } if (numsArray.includes('÷')) {
        let divi1 = divide(num1Divi, num2Divi);
        console.log('DIVIDE:', divi1)
        let smallDivi1 = Math.round(divi1*100)/100;
        botDisplay.innerText = smallDivi1;
        resultsArray.push(divi1);
    } if (numsArray.includes('÷') && num2Divi === 0){
        botDisplay.innerText = 'Snarky Error Message'
    } else  
        return 'Please enter a valid operator'
}

// add DOM listeners
let display = document.querySelector('#display');
let topDisplay = document.querySelector('#topDisplay');
let botDisplay = document.querySelector('#botDisplay');
let clearBtn = document.querySelector('#clearBtn');
let deleteBtn = document.querySelector('#deleteBtn');
let btnContainer = document.querySelector('#buttons-grid');

// buttons grid
let sevenBtn = document.querySelector('#sevenBtn');
let eightBtn = document.querySelector('#eightBtn');
let nineBtn = document.querySelector('#nineBtn');
let divideBtn = document.querySelector('#divideBtn');
let fourBtn = document.querySelector('#fourBtn');
let fiveBtn = document.querySelector('#fiveBtn');
let sixBtn = document.querySelector('#sixBtn');
let multBtn = document.querySelector('#multBtn');
let oneBtn = document.querySelector('#oneBtn');
let twoBtn = document.querySelector('#twoBtn');
let threeBtn = document.querySelector('#threeBtn');
let minusBtn = document.querySelector('#minusBtn');
let dotBtn = document.querySelector('#dotBtn');
let zeroBtn = document.querySelector('#zeroBtn');
let plusBtn = document.querySelector('#plusBtn');


// function for displaying clicked numbers
const addToDisplay = function(e) {
    if(e.target.classList.contains('btn') && display.innerText == ''){
        let newNum = e.target.innerText;
        numsArray.push(newNum);
        console.log(numsArray);
        let numString1 = numsArray.toString()
        topDisplay.innerText = numString1;
    } else if (e.target.classList.contains('btn') && display.innerText !== '') {
        let newNum = e.target.innerText;
        numsArray.push(newNum);
        console.log(numsArray);
        let numString = numsArray.toString();
        let numString2 = numString.replace(/,/g,'');
        topDisplay.innerText = numString2;
}
}
btnContainer.addEventListener('click', addToDisplay);

// function for clearing display and both arrays
const clearDisplay = function() {
    topDisplay.innerText = ''
    botDisplay.innerText = ''
    numsArray.length = 0
    resultsArray.length = 0
}
clearBtn.addEventListener('click', clearDisplay);

// add = return event listener
let equalsBtn = document.querySelector('#equalsBtn')
equalsBtn.addEventListener('click', operate)

// clear nums Array for equlasBtn
const clearNumsArray = function() {
    numsArray.length = 0
    console.log('Results Array:', resultsArray);
    }

equalsBtn.addEventListener('click', clearNumsArray);


// Extra code:

// disabling buttons TRUE
    // sevenBtn.disabled = true;
    // eightBtn.disabled = true;
    // nineBtn.disabled = true;
    // divideBtn.disabled = true;
    // fourBtn.disabled = true;
    // fiveBtn.disabled = true;
    // sixBtn.disabled = true;
    // multBtn.disabled = true;
    // oneBtn.disabled = true;
    // twoBtn.disabled = true;
    // threeBtn.disabled = true;
    // minusBtn.disabled = true;
    // dotBtn.disabled = true;
    // zeroBtn.disabled = true;
    // plusBtn.disabled = true;
    // equalsBtn.disabled = true;
    // deleteBtn.disabled = true;
// disabling buttons FALSE
    // sevenBtn.disabled = false;
    // eightBtn.disabled = false;
    // nineBtn.disabled = false;
    // divideBtn.disabled = false;
    // fourBtn.disabled = false;
    // fiveBtn.disabled = false;
    // sixBtn.disabled = false;
    // multBtn.disabled = false;
    // oneBtn.disabled = false;
    // twoBtn.disabled = false;
    // threeBtn.disabled = false;
    // minusBtn.disabled = false;
    // dotBtn.disabled = false;
    // zeroBtn.disabled = false;
    // plusBtn.disabled = false;
    // equalsBtn.disabled = false;
    // deleteBtn.disabled = false;

// function for deleting one number
    // const deleteNum = function () {
    //     let delete1 = display.innerText.slice(0, -1);
    //     display.innerText = delete1;
    // }
    // deleteBtn.addEventListener('click', deleteNum);
