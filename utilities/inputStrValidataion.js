module.exports = inputStrValidation = function(cmdLineStr, currentNumArr = [], currentOperArr = []) {
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
            // if current char is a number and operInputStarted is false, push char to number array
            currentNumArr.push(parseInt(currentChar))
        } else if (operInputStarted && !parseInt(currentChar)) {
            // if operInputStarted is true, more operators push into oper array 
            currentOperArr.push(currentChar)
        } else if (operInputStarted && parseInt(currentChar)) {
            // if operIuptuStarted is true and current char is a number. reset the currentCharArr and currentOperArr. remind user to check the cmd-line input and retype corrected input. 
            // break current loop
            currentNumArr = []
            currentOperArr = []
            console.log('In postFix calculator, the operators must follow numbers. Please check your numbers/operators order and re-type.')
            break

        } else {
            // if operators more than numbers could perform, ask user retype - wip. 
        }
    }
    console.log(`current number: ${currentNumArr}; current oper: ${currentOperArr}`)
}