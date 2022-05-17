const inputStrValidation = require('./utilities/inputStrValidataion')
const readline = require('readline')

let numArr = []
let operArr = []
let currentNumArr = [] 
let currentOperArr = []

const calcLogic = function(inputStr) {
   // concat current input numbers and operators with numArr and operArr 
   numArr = numArr.concat(currentNumArr)
   operArr = operArr.concat(currentOperArr)
    // after concatenation, clear out currentNumberArr and currentOperArr
    currentNumArr = []
    currentOperArr = []

   let calcResult = numArr[numArr.length - 1]
   console.log('concatenated arrays | number array:', numArr, 'Operator array:', operArr)

    // if there are only numbers input without any operators, not perform arithmetic operation
    if(operArr.length === 0) {
        // output the current input number, which is the last el in the numArr
        console.log(calcResult)
        // when operators added in arguments  
    } else if (operArr.length === 1 && numArr.length < 2) {
        console.log('this is postfix calculator. Please keep enough numbers ahead of operators')
        operArr.pop()
    } else if (operArr.length + 1 > numArr.length) {
        console.log('this is postfix calculator. Please check the operators inputs must be one less than the number inputs ahead of them. Please try again')
        // only need to remove the current input numbers and operators and keep the original numbers - wip
        // numArr = []
        // operArr = []
    } else if(operArr.length >= 1) {
        // when operArr has at least one el, perform operation for the last 2 numArr els

        while(operArr.length > 0) {
            // obtain the first operator and remove it from the operArr
            let currentOper = operArr.shift()
            // if numberArr has 2 or more els, perform the operation
            if(numArr.length >= 2) {
                switch (currentOper) {
                    case '+': 
                    calcResult = numArr[numArr.length - 2] + numArr[numArr.length - 1]
                    break;
                    case '-': 
                    calcResult = numArr[numArr.length - 2] - numArr[numArr.length - 1]
                    break;
                    case '*': 
                    calcResult = numArr[numArr.length - 2] * numArr[numArr.length - 1]
                    break;
                    case '/': 
                    calcResult = numArr[numArr.length - 2] / numArr[numArr.length - 1]
                    // break;
                    // default: 
                    // throw new Error(`arithmetic operator ${currenOper} is not included in this app`)
                }
                // remove the last 2 els from numArr
                // save the operation result and push it into numArr. 
                numArr.splice(-2, 2, calcResult)
            } 
        }
    }
    console.log('after arithmetic operation | Numbers array:', numArr, 'Operators array:', operArr)
    console.log('calc output:',calcResult)   
}
// console.log(calcLogic('5 5 5 8 + + -'))

// calc utility function 
const userInstruction = `
    q       quit the app
    exit    quit the app
    show    show number array and operator array
    examples: 
            type in: 1 2 3 + - 
            output: -4
`
const calcUtility = function(cmdLineStr) {
    // a show command to verify numbers and operators left - show
    // a clear command clear all numbers and operators. confirm clear command - wip
    if (cmdLineStr === 'show') {
        console.log(`Numbers: ${numArr} | Operators: ${operArr}`)
    } else if(cmdLineStr === 'help') {
        console.log(userInstruction)
    }
}

// async solution to manage cmd-line input and exit program
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const calcInput = async function() {
    console.log("welcome to Postfix calculator! \nType numbers first and operators later. \nType 'q' to quit. \nType 'help' for instructions and examples")
    for await ( let cmdLineInput of rl) {
        // treaming leading and trailing whitespaces
        let cmdLineStr = cmdLineInput.replace(/^\s+|\s+$/g, '')

        if ( cmdLineStr === 'q' || cmdLineStr === 'exit') {
             break 
            } else if ( cmdLineStr === 'show' || cmdLineStr === 'help') {
                calcUtility(cmdLineStr)
            } else {
                inputStrValidation(cmdLineStr, currentNumArr, currentOperArr)
                calcLogic()
            }
    }
}

calcInput()