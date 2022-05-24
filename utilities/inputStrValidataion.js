import chalk from 'chalk';

export function inputStrValidation(cmdLineStr, currentNumArr = [], currentOperArr = [], numArr = [], operArr = []) {
    // convert the string into array. this is necessary for identify negative number and minus. 
    let mixedInputArr = cmdLineStr.split(' ')
    // track when operator started to add 
    let operInputStarted = false
    for( let i = 0; i < mixedInputArr.length; i ++) {
        let currentEl = mixedInputArr[i]
        
        if (currentEl === '+' || currentEl === '-' || currentEl === '*' || currentEl === '/') {
            operInputStarted = true
            // only stopped the last operator before input char turn into number again. 
            // how to undo the operators already pushed into currentOperArr? 

            currentOperArr.push(currentEl)
        } else if (!operInputStarted && parseFloat(currentEl)) {
            // if current char is a number and operInputStarted is false, push char to number array
            currentNumArr.push(parseFloat(currentEl))
        } else if (operInputStarted && !parseFloat(currentEl)) {
            // if operInputStarted is true, more operators push into oper array 
            currentOperArr.push(currentEl)
        } else if (operInputStarted && parseFloat(currentEl)) {
            // if operIuptuStarted is true and current char is a number. reset the currentNumArr and currentOperArr. remind user to check the cmd-line input and corrected errors. 
            // break current loop
            currentNumArr.splice(0)
            currentOperArr.splice(0)
            console.log(chalk.red('In postFix calculator, the operators input must follow the numbers. Please check your numbers/operators order and re-enter.'))
            break
        } else {
            console.log(chalk.red(`${currentEl} is an invalid operator or an invalid command. Please enter 'help' for a list of supported operators and commands`))
            break
        }
    }
    // console.log(`1st validation end - current number: ${currentNumArr} | current oper: ${currentOperArr}`)
}