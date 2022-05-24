// calc utility function and user instructions
import chalk from 'chalk';

const userInstruction = `
    cmd    description
    --------------------
    q       quit the app
    exit    quit the app
    show    show number array & operator array
    clear   clear up all numbers stored in calculator
    --------------------
    Valid Operators         + - * /
    Output decimal places   work in progress
    undo                    work in progress
    --------------------
    examples input  | example output
    1               | 1
    1 2 +           | 3
    1 2 3 + -       | -4
`
const calcUtility = function(cmdLineStr, numArr, operArr, currentNumArr, currentOperArr) {
    // a show command to verify numbers and operators stored in calculator
    // a clear command clear all numbers
    if (cmdLineStr === 'show') {
        console.log(`numbers: ${numArr} | operators: ${operArr} | current num: ${currentNumArr}| current operators: ${currentOperArr} `)
    } else if(cmdLineStr === 'help') {
        console.log(chalk.green(userInstruction))
    } else if(cmdLineStr === 'clear') {
        numArr.splice(0)
        console.log('numbers stored in calculator all cleared')
    }
}

export default calcUtility
