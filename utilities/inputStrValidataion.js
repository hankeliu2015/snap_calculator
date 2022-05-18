module.exports = inputStrValidation = function(cmdLineStr, currentNumArr = [], currentOperArr = [], numArr = [], operArr = []) {
    // convert the string into array
    let mixedInputArr = cmdLineStr.split(' ')
    // track when operatord started to add 
    let operInputStarted = false
    for( let i = 0; i < mixedInputArr.length; i ++) {
        let currentEl = mixedInputArr[i]
        
        if (currentEl === '+' || currentEl === '-' || currentEl === '*' || currentEl === '/') {
            operInputStarted = true
            currentOperArr.push(currentEl)
        } else if (!operInputStarted && parseInt(currentEl)) {
            // if current char is a number and operInputStarted is false, push char to number array
            currentNumArr.push(parseInt(currentEl))
        } else if (operInputStarted && !parseInt(currentEl)) {
            // if operInputStarted is true, more operators push into oper array 
            currentOperArr.push(currentEl)
        } else if (operInputStarted && parseInt(currentEl)) {
            // if operIuptuStarted is true and current char is a number. reset the currentNumArr and currentOperArr. remind user to check the cmd-line input and corrected errors. 
            // break current loop
            currentNumArr = []
            currentOperArr = []
            console.log('In postFix calculator, the operators must follow numbers. Please check your numbers/operators order and re-type.')
            break
        } 
    }
    console.log(`current number: ${currentNumArr}; current oper: ${currentOperArr}`)
}