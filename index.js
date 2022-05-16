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
    
    let calcResult = numArr[numArr.length - 1]

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
        // need to remove the multiple numbers and operators and keep the original else - wip
        numArr = []
        operArr = []
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

    console.log('after operation | Numbers array:', numArr, 'Operators array:', operArr)
    console.log('calc output:',calcResult)   
}
// console.log(calcLogic('5 5 +'))
// console.log(calcLogic('5 5 5 8 + + -'))
// console.log(calcLogic('5 5 5 + -'))

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
        if ( cmdLineStr === 'q' || 'exit') {
             break 
            } else if ( cmdLineStr === 'show' || cmdLineStr === 'help') {
                calcUtility(cmdLineStr)
            } else {
                calcLogic(cmdLineStr)
            }
    }
}

calcInput()