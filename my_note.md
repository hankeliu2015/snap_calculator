examples:

> 5 5 5 8 + + -
> -13.0 [-13] []
> 13 +
> 0.0

5 + 8 = 13; 5 + 13 = 18; 5 - 18 = -13

> 5
> 5
> 9 [5, 9]
> 9
> 1 [5, 9, 1]
> 1
>
> - 8 [5, 8] []
>   5 / 8

inquirer.prompt([
{name: 'name',
message: 'Please type your input values or operators seperated by space:'
}])
.then((answers) => {
inputStr = answers.name
console.log(`input string is: ${inputStr}`)
})
.catch((error) => {
if (error.isTtyError) {
// Prompt couldn't be rendered in the current environment
} else {
// Something else went wrong
}});
