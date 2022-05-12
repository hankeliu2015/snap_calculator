const inquirer = require('inquirer')
const { stringify } = require('querystring')
const readline = require('readline')

const numArr = [], operArr = []

const calc = function(inputStr) {
    const inputArr = inputStr.split(' ')
    //convert the input string to arr. 
    // seperate arr els into number and operator array
    for (let el of inputArr) {
        if(parseInt(el)) {
            numArr.push(parseInt(el))
        } else if (el === '+' || el === '-' || el === '*' || el === '/') {
            operArr.push(el)
        } else {
            throw new Error('Input data must be valid integer or operator')
        }
    }
    console.log('Number array:', numArr, 'Operator array:', operArr)

    // check if the the operArr and numArr length before perform arithmetic operations  
    let newLastNumArr = numArr[numArr.length - 1]
    // there is only one number argument without any operator arguments
    if(numArr.length === 1 && operArr.length === 0) {
        console.log('Single number argument output:',newLastNumArr)
    } else if(operArr.length >= 1) {
        // when function received on or more operator arguments
        // perform operation for the last 2 numArr els
        // need data validation and throw errors for numbers and operators mismatch - wip
        while(operArr.length > 0) {
            // obtain the first operator and remove it from the operArr
            let currentOper = operArr.shift()
            // if the last 2 number arr els are true and operArr still has one element , perform the operation
            if(numArr.length >= 2 && operArr.length >=1) {
                switch (currentOper) {
                    case '+': 
                    newLastNumArr = numArr[numArr.length - 2] + numArr[numArr.length - 1]
                    break;
                    case '-': 
                    newLastNumArr = numArr[numArr.length - 2] - numArr[numArr.length - 1]
                    break;
                    case '*': 
                    newLastNumArr = numArr[numArr.length - 2] * numArr[numArr.length - 1]
                    break;
                    case '/': 
                    newLastNumArr = numArr[numArr.length - 2] / numArr[numArr.length - 1]
                    // break;
                    // default: 
                    // throw new Error(`arithmetic operator ${currenOper}  is not included in this app`)
                }
                // replace the last 2 els with newLastNumArr to num arr
                numArr.splice(-2, 2, newLastNumArr)
            } 
        }
    }
    console.log(newLastNumArr)
}
// console.log(calc('5 5 5 8 + + -'))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const calcInput = function() {
    let strInput = ''
    
    rl.question('Please type your input values and/or operators:', function (cmdLineInput) {
        if(cmdLineInput === 'q') { return rl.close()}   //base case
        strInput = cmdLineInput
        calc(strInput)
        calcInput()     //call recursive
        })
}

calcInput()



  