// const inputStrValidation = require('./utilities/inputStrValidataion')

const readline = require('readline')
let numArr = []
let operArr = []
let currentNumArr = [] 
let currentOperArr = []

const inputStrValidation = function(cmdLineStr) {
    // if str operators ahead of numbers in the string, ask user to re-type
    // track when the numbers turn into operator 
    let operInputStarted = false
    for( let i = 0; i < cmdLineStr.length; i ++) {
        let currentChar = cmdLineStr.charAt(i)

        if (currentChar === '+' || currentChar === '-' || currentChar === '*' || currentChar === '/') {
            operInputStarted = true
            currentOperArr.push(currentChar)
        } else if (currentChar === ' ') {
            // if the char is a space, continue the loop and do nothing, 
            continue
        }else if (!operInputStarted && parseInt(currentChar)) {
            // if current char is a number and operInputStarted is false
            currentNumArr.push(parseInt(currentChar))
        } else if (operInputStarted && !parseInt(currentChar)) {
            // operInputStarted is true, more operator inputs 
            currentOperArr.push(currentChar)
        } else if (operInputStarted && parseInt(currentChar)) {
            // if operIuptuStarted is true and current char is a number. reset the currentCharArr and currentOperArr. remind user to retype the input. 
            // break current loop
            currentNumArr = []
            currentOperArr = []
            console.log('This is a postFix calculator, the operators must follow numbers. Please check your numbers/operators order and re-type.')
            break
        } else {
            // if operators more than numbers could perform, ask user retype - wip. 
        }
    }
    console.log(`current number: ${currentNumArr}; current oper: ${currentOperArr}`)
}

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
                inputStrValidation(cmdLineStr)
                calcLogic()
            }
    }
}

calcInput()