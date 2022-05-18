module.exports = operLimitValidation = function(currentNumArr, currentOperArr, numArr) {
    // validate the operators meet the limit. 
    // The limit is operators length should be less than numbers length - 1
    // If the limit is passed, empty the current arrays and ask user to correct. 
    
    if (currentOperArr.length > (numArr.length + currentNumArr.length - 1)) {
        // undo the current arrays concatenation for numArr and operArr
        // use the current arrays length, remove the last els concatenated with numArr and operArr
        // I might not need to do the undo becuase the concatenate has not happen yet. 

        // if (currentNumArr.length > 1) {
        //     numArr.splice(-currentNumArr.length)
        // }
        // if (currentOperArr.length > 1) {
        //     operArr.splice(-currentOperArr.length)
        // }

        console.log(`2nd validation - Input operators are over the limit. The total operators should be one less than the input numbers plus previous numbers. Current input data is reset and previous input data is saved. please re-enter valid numbers and operators`)
        console.log(`curent oper length: ${currentOperArr.length}`)
        currentNumArr = []
        currentOperArr = []
        console.log(`curent oper length after reset: ${currentOperArr.length}`)
    } 
    console.log('2nd validation - end')
}