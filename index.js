import chalk from 'chalk';
import {inputStrValidation} from './utilities/inputStrValidataion.js';
import operLimitValidation from './utilities/operLimitValidation.js';
import calcUtility from './utilities/calcUtls.js';
import readline from 'readline';

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

    // console.log('before arithmetic operation | number array:', numArr, 'Operator array:', operArr, 'currentNumArr:', currentNumArr, 'currentOperArr:', currentOperArr )
    
    let calcResult = numArr[numArr.length - 1]
    // if there are only numbers input without any operators, not perform arithmetic operation. Just output the calcResult, which is the last element in the numArr
    if(operArr.length === 0) {
        console.log(calcResult)
    } else {
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
                    break;
                    // default: 
                }
                // remove the last 2 els from numArr
                // push the operation result into numArr. 
                numArr.splice(-2, 2, calcResult)
            } 
        }
    }
    // console.log('after arithmetic operation | Numbers array:', numArr, 'Operators array:', operArr)
    console.log('calculator output:',calcResult)   
    // return the calcResult as a number and add a outputDecimal module to control the decimal places. 
    // return calcResult
}

// async function manages cmd-line input and exit program
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const calc = async function() {
    console.log(chalk.yellow("Welcome to Postfix Calculator! \nPlease enter numbers first and operators later. \nType 'q' to quit. \nType 'help' for instructions and examples"))
    
    try {
        for await ( let cmdLineInput of rl) {
            // use ctrl + d to stop the process - for users who unfamiliar with the app commands. 
            process.stdin.on('keypress', (str, key) => {
                if (key.ctrl && key.name === 'd')  {
                    console.log("Process stdin is stopped by ctrl + d")
                    process.exit(); 
                }
            })
                        
            // treaming leading and trailing whitespaces
            let cmdLineStr = cmdLineInput.replace(/^\s+|\s+$/g, '')
    
            if ( cmdLineStr === 'q' || cmdLineStr === 'exit') {
                 break 
            } else if ( cmdLineStr === 'show' || cmdLineStr === 'help' || cmdLineStr === 'clear') {
                calcUtility(cmdLineStr, numArr, operArr, currentNumArr, currentOperArr)
            } else {
                inputStrValidation(cmdLineStr, currentNumArr, currentOperArr)
                // no need pass in operArr for operLimitvalidation
                operLimitValidation(currentNumArr, currentOperArr, numArr)
                calcLogic()
            }
        }
    } catch(error) {
        // catch any unexpected errors
        console.log('Calculator encounter unexpected Errors:', error)
    }
    console.log(chalk.green('Thanks for using Postfix Calculator!'))
    rl.close()
}

calc()