// calc utility function and user instructions
const userInstruction = `
    q       quit the app
    exit    quit the app
    show    show number array and operator array
    examples: 
            type in: 1 2 3 + - 
            output: -4
`
module.exports = calcUtility = function(cmdLineStr, numArr, operArr, currentNumArr, currentOperArr) {
    // a show command to verify numbers and operators left - show
    // a clear command clear all numbers and operators. confirm clear command - wip
    if (cmdLineStr === 'show') {
        console.log(`numbers: ${numArr} | operators: ${operArr} | current num: ${currentNumArr}| current operators: ${currentOperArr} `)
    } else if(cmdLineStr === 'help') {
        console.log(userInstruction)
    }
}
