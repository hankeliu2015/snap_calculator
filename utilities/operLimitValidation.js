import chalk from 'chalk';

const operLimitValidation = function(currentNumArr, currentOperArr, numArr) {
    // validate the operators are able to be processed by all numbers. 
    // operators length has a limit, it should be less than all numbers arrays length - 1
    // If over the limit, empty both current number/oper arrays and ask user to retype. 
    
    if (currentOperArr.length > (numArr.length + currentNumArr.length - 1)) {

        console.log(chalk.red(`Total input operators are over the limit. The amount of operators should be one less than the input numbers plus saved numbers. Current input data is deleted. Please re-enter valid numbers and operators. Type 'help' for more instructions`))
        // console.log(`2nd validation: curent oper length: ${currentOperArr.length}`)
        
        // reset currentNumberArr and currentOperArr when operators lenght over the limit
        currentNumArr.splice(0)
        currentOperArr.splice(0)

        // console.log(`curent oper length after reset: ${currentOperArr.length}`)
    } 
    // console.log('2nd validation - end')
}

export default operLimitValidation