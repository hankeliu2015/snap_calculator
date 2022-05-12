const readline = require('readline')
const numArr = [], operArr = []

const calcLogic = function(inputStr) {
    const inputArr = inputStr.split(' ')
    console.log('cmd-line input convert to array:',inputArr)
    //convert the input string to arr. 
    // filter arr els into number array and operator array
    for (let el of inputArr) {
        if(parseInt(el)) {
            numArr.push(parseInt(el))
        } else if (el === '+' || el === '-' || el === '*' || el === '/') {
            operArr.push(el)
        } else {
            throw new Error('Input data must be valid number or operator')
        }
    }
    console.log('converted to 2 arrays | number array:', numArr, 'Operator array:', operArr)

    let newLastNumEl = numArr[numArr.length - 1]
    // if there is only one number argument without any operator arguments
    if(numArr.length === 1 && operArr.length === 0) {
        console.log('calc output for single number:',newLastNumEl)
        // check the operArr and numArr length before perform arithmetic operations  
    } else if(operArr.length >= 1) {
        // when operArr has at least one el, perform operation for the last 2 numArr els
        // need data validation and throw errors for numbers and operators mismatch - wip
        while(operArr.length > 0) {
            // obtain the first operator and remove it from the operArr
            let currentOper = operArr.shift()
            // if numberArr 2 or more els, perform the operation
            if(numArr.length >= 2) {
                switch (currentOper) {
                    case '+': 
                    newLastNumEl = numArr[numArr.length - 2] + numArr[numArr.length - 1]
                    break;
                    case '-': 
                    newLastNumEl = numArr[numArr.length - 2] - numArr[numArr.length - 1]
                    break;
                    case '*': 
                    newLastNumEl = numArr[numArr.length - 2] * numArr[numArr.length - 1]
                    break;
                    case '/': 
                    newLastNumEl = numArr[numArr.length - 2] / numArr[numArr.length - 1]
                    // break;
                    // default: 
                    // throw new Error(`arithmetic operator ${currenOper} is not included in this app`)
                }
                // remove the last 2 els from numArr
                // if there still any els left in numArr, add the new last number el back into numArr
                numArr.splice(-2, 2)
                if(numArr.length > 0) {
                    numArr.push(newLastNumEl)
                } 
            } 
        }
    }

    console.log('after operation | Numbers array:', numArr, 'Operators array:', operArr)
    console.log('calc output:',newLastNumEl)
}
console.log(calcLogic('5 5 +'))
// console.log(calcLogic('5 5 5 8 + + -'))
// console.log(calcLogic('5 5 5 + -'))

/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // recursive solution
const calcInput = function() {
    let strInput = ''
    
    rl.question('Please type your input values and/or operators:', function (cmdLineInput) {
        if(cmdLineInput === 'q') { return rl.close()}   //base case
        strInput = cmdLineInput
        calcLogic(strInput)
        calcInput()     //call recursive
        })
}

// calcInput()

// async function solution 
// const calcInputTest2 = async function() {
//     for await ( let cmdLineInput of rl) {
//         if ( cmdLineInput === 'q') {break}
//         calcLogic(cmdLineInput)
//     }
// }

// calcInputTest2()

*/






  