module.exports = operLimitValidation = function(currentNumArr, currentOperArr, numArr) {
    // validate the operators are able to be processed by all numbers. 
    // operators length has a limit, it should be less than all numbers arrays length - 1
    // If over the limit, empty both current number/oper arrays and ask user to retype. 
    
    if (currentOperArr.length > (numArr.length + currentNumArr.length - 1)) {

        console.log(`2nd validation - Input operators are over the limit. The total operators should be one less than the input numbers plus previous numbers. Current input data is reset. Please re-enter valid numbers and operators`)
        console.log(`curent oper length: ${currentOperArr.length}`)
        
        // reset currentNumberArr and currentOperArr when operators lenght over the limit
        currentNumArr = []
        currentOperArr = []

        console.log(`curent oper length after reset: ${currentOperArr.length}`)
    } 
    console.log('2nd validation - end')
}