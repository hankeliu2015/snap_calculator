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
    // while(operArr.length !== 0) {

    // }
    

}
console.log(calc([5,5,5,8,'+','+','-']))
// console.log(calc('5 5 5 8 + + -'))