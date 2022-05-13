const readline = require('readline')
const numArr = [], operArr = []

const calcLogic = function(inputStr) {
    //convert the input string to arr. 
    const inputArr = inputStr.split(' ')
    console.log('cmd-line input convert to array:',inputArr)
    // filter arr els into number array and operator array
    for (let el of inputArr) {
        if(parseInt(el)) {
            numArr.push(parseInt(el))
        } else if (el === '+' || el === '-' || el === '*' || el === '/') {
            operArr.push(el)
        } else {
            throw new Error('Input data must be valid number or operators')
        }
    }
    console.log('converted arrays | number array:', numArr, 'Operator array:', operArr)
    
    let operResult = numArr[numArr.length - 1]

    // if there are only numbers input without any operators, not perform arithmetic operation
    if(operArr.length === 0) {
        // output the current input number, which is the last el in the numArr
        console.log(operResult)
        // when operators added in arguments  
    } else if (operArr.length === 1 && numArr.length < 2) {
        console.log('this is postfix calculator. Please put enough numbers ahead of operators')
        operArr.pop()
    } else if (operArr.length + 1 > numArr.length) {
        console.log('this is postfix calculator. Please check the operators inputs must be one less than the number inputs ahead of them. Please try again')
        // need to remove the multiple numbers and operators and keep the original els. 
    } else if(operArr.length >= 1) {
        // when operArr has at least one el, perform operation for the last 2 numArr els
        // need data validation and throw errors for numbers and operators mismatch - wip
        // console log the message to remind user Postfix caculator. 
        console.log()

        while(operArr.length > 0) {
            // obtain the first operator and remove it from the operArr
            let currentOper = operArr.shift()
            // if numberArr 2 or more els, perform the operation
            if(numArr.length >= 2) {
                switch (currentOper) {
                    case '+': 
                    operResult = numArr[numArr.length - 2] + numArr[numArr.length - 1]
                    break;
                    case '-': 
                    operResult = numArr[numArr.length - 2] - numArr[numArr.length - 1]
                    break;
                    case '*': 
                    operResult = numArr[numArr.length - 2] * numArr[numArr.length - 1]
                    break;
                    case '/': 
                    operResult = numArr[numArr.length - 2] / numArr[numArr.length - 1]
                    // break;
                    // default: 
                    // throw new Error(`arithmetic operator ${currenOper} is not included in this app`)
                }
                // remove the last 2 els from numArr
                // if there still any els left in numArr, add the new last number el back into numArr
                numArr.splice(-2, 2)
                if(numArr.length > 0) {
                    numArr.push(operResult)
                } 
            } 
        }
    }

    console.log('after operation | Numbers array:', numArr, 'Operators array:', operArr)
    console.log('calc output:',operResult)   
}
// console.log(calcLogic('5 5 +'))
// console.log(calcLogic('5 5 5 8 + + -'))
// console.log(calcLogic('5 5 5 + -'))

// async function solution 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const calcInputLoop = async function() {
    for await ( let cmdLineInput of rl) {
        if ( cmdLineInput === 'q') { break }
        calcLogic(cmdLineInput)
    }
}

calcInputLoop()