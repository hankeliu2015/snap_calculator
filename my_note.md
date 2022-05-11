node comamnd line interactive app
run time user inputs - inquirer.js
use while loop to set the exit command.
exit command q or ctrl D for the app

calc logic
1st function take in an argument and return a innner function, take in another paramenter, return 2nd inner function take in the operator sgin as argument.
the first 2 returned function must take in integers and the last returned function must take in arithmatic operators.
use lodash and ramda to curry the argument.

what is the complexity.

mutiple interactive input arguments | should treat all as multiple arguments | focus on the logic

> 5 5 5 8 + + -
> -13.0 [-13] []
> 13 + mixed numer and operator arguments input. [-13, 13] [+], if result is 0, just remove both elements
> 0.0

how to process multiple operators? 5 + 8 = 13; 5 + 13 = 18; 5 - 18 = -13

1. split the argument by empty space, got an array.
2. iterate the args array. need to find a way to process this mix element array.
3. if the el is integer, put into number arr. if el is one of the operators, push into operator array.
4. if operator array [+, +, -] length is not equal to 0, need to perform mathmetic operations on number array [5, 5, 5, 8] .
5. the 2nd last num el and the last num el perform with the first operator el. both number els remove from array, the result push back into number array.
6. remove the operator el from operator array. until the operator array lenght equal to 0, return the last number el.

single interactive input

> 5 push the number argument into number array [5] []
> 5 if operator array lenght is 0. return the last number array el.
> 9 [5, 9]
> 9 return last number el since operator array is []
> 1 [5, 9, 1]
> 1
>
> -     if the argument is an operator, push the operator into operator array [-]. if the operator array length greater than 0, the 2nd last el - the last el, both els remove from number array, their result push back to the number array [5, 8], returrn the last nubmer el. remove the first el from operator array.
>   8 if the operator array length is 0, return the last number array el. [5, 8] []
>   / if the arg is an operator, perform above process.
>   0.625 // 5 / 8

store the integer data into an array. [1, 2, 3, 4]

use the operator argument value as the condition to perform mathmetic operation. update the array and return value.
