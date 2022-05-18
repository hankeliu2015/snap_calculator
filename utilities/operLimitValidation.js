module.exports = operLimitValidation = function(currentNumArr, currentOperArr, numArr, operArr) {
    // validate the operators meet the limit, less than numbers length - 1
// if operators more than numbers could perform, ask user retype - wip. 
        // compare operArr length and the current numarray length + numArray length
        // if the operation is undoable, empty the current arrays and ask user to correct
        // if condition meet, loop should break and input data reset
        
        // more condition for only one number without any oper
        // the currentnumArr and currentOper array is not ready yet
        // you have to do this when operInputStart is true. 
        // the numArr and operArr already modified, you did not undo them. 

        // need to put this in another validation function

        // if (operInputStarted && currentOperArr.length > (numArr.length + currentNumArr.length) - 1) {
        //     currentNumArr = []
        //     currentOperArr = []
        //     console.log(`Input operators are over the limit. The total operators should be no more than input numbers plus previous numbers minus one. All current input data reset, please re-enter valid numbers and operators`)
        // } 

        console.log('2nd validation is running')
}