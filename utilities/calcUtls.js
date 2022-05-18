// calc utility function and user instructions
const userInstruction = `
    cmd    description
    --------------------
    q       quit the app
    exit    quit the app
    show    show number array & operator array
    clear   clear up all numbers stored in calculator
    --------------------
    examples: 
    enter       | output
    1           | 1
    1 2 +       | 3
    1 2 3 + -   | -4
`
module.exports = calcUtility = function(cmdLineStr, numArr, operArr, currentNumArr, currentOperArr) {
    // a show command to verify numbers and operators left - show
    // a clear command clear all numbers and operators. clear - wip
    if (cmdLineStr === 'show') {
        console.log(`numbers: ${numArr} | operators: ${operArr} | current num: ${currentNumArr}| current operators: ${currentOperArr} `)
    } else if(cmdLineStr === 'help') {
        console.log(userInstruction)
    } else if(cmdLineStr === 'clear') {
        numArr.splice(0)
        console.log('numbers stored in calculator all cleared')
    }
}
