// use an array of mixed integer and operator string as the calculator input arguments for now
const calc = function(arr) {
    const numArr = [], operArr = []
    // split and sort arr arguments into both arrays 
    for (let el of arr) {
        if(typeof(el) === 'number') {
            numArr.push(el)
        } else if (el === '+' || el === '-' || el === '*' || el === '/') {
            operArr.push(el)
        } else {
            throw new Error('Input data must be valid integer or operator')
        }
    }
    console.log(numArr, operArr)
    // check if the the operArr length and perform arithmetic operations  
    while(operArr.length !== 0) {
        let currentOper = operArr[0]
        let newLastEl = 0
        // if the last 2 number arr els are true , perform the operation
        if(numArr.length >= 2) {
            // perform the action here
            switch (currentOper) {
                case '+': 
                newLastEl = numArr[numArr.length - 2] + numArr[numArr.length - 1]
                case '-': 
                newLastEl = numArr[numArr.length - 2] - numArr[numArr.length - 1]
                case '*': 
                newLastEl = numArr[numArr.length - 2] * numArr[numArr.length - 1]
                case '/': 
                newLastEl = numArr[numArr.length - 2] / numArr[numArr.length - 1]
            }
            // replace the last 2 els with newLastEl to num arr
            numArr.splice(-2, 2, newLastEl)
            // remove the first el from operArr
            operArr.unshift()
            console.log(numArr[numArr.length - 1])
        } 
        // else {
        //     throw new Error('can not perform arithmetic operation, numbers input much match the operators')
        // }
    }

    
}
console.log(calc([5,5,5,8,'+','+','-']))
// console.log(calc('5 5 5 8 + + -'))