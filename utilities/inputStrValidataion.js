module.exports = inputStrValidation = function(cmdLineStr, currentNumArr = [], currentOperArr = []) {
    // if str operators ahead of numbers in the string, ask user to re-type
    // need counter to track when the numbers trun into operator 
    let operInputStarted = false
    // need the index 
    for( let i = 0; i < cmdLineStr.length; i ++) {
        // how to know if the operInput started? 
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
            // operInputStarted is true, more none numbers operator inputs 
            currentOperArr.push(currentChar)
        } else if (operInputStarted && parseInt(currentChar)) {
            // if operIuptuStarted is true and current char is a number. reset the currentCharArr and currentOperArr. remind user to retype the input. 
            // break current loop, go to the commmand line input prompt
            currentNumArr = []
            currentOperArr = []
            console.log('This is a postFix calculator, the operators must follow numbers. Please check your numbers/operators order and re-type.')
            break

        } else {
            // concat the current arrays into the final arrays for arithmetic operations. 
            // how to invoke the calcLogic? 
        }
        
        // need a condition to return true or flase, whihc will decide if invoke caclLogic
    }
    console.log(`current number: ${currentNumArr}; current oper: ${currentOperArr}`)

    // if operators more than numbers could perform, ask user retype - wip. 
}