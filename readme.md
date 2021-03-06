# Postfix Calculator

:tv: A command line postfix calculator app build upon node.js

<!---
![This is an user command line input/output example image](./images/user_input_example.png?style=centerme)
--->

<p align="center"><img src="./images/user_input_example.png"></p>

## Description

- Use 2 sets of arrays to store numbers and operators. CMD-Line Inputed numbers will be stacked(LILO) in numArr. The last 2 number elements perform arithmetic operation, their result is pushed to the end of numArr array and repeat the operation until operator array is empty. CMD-line inputed operators(+, -, \*, /) will be queued(FIFO) in operArr. The first operator in the array will be served first until operArr is empty.

- CalcLogic() function defines arithmetic logic and performs arithmetic operations after input data validated
- Choose an asynchronous calcInput() function to manage user interactive runtime command line input/output. Did not use recursive function to manage interactive runtime input. JavaScript Promise's Async/await is more efficient to manage. Recursive function also consumes more memory space and time comlexity.

- Use ReadLine module to obtain bash terminal command line input string and control exit commands
- CalcUtility() function manages calcuator features to improve user experience, such as command line instructions and demo input/output examples. More features can be added here base on users feedbacks.
- InputStrValidation() funciton validate the current user input. Provide user options to re-enter corrected data.
- OperLimitValidation() function validates operator limits. Operators must be less then the total numbers - 1. Indicate none supported operators.

- Identify postive/negative number and plus/minus operator: Converting the cmdLine input into a mixed array is necessary becuase each array element is eaiser to be identified as negative/postive number or minus/plus operator. Identifying each string with the same way is more complex.

- Input data validation 1: if user mixed operators inside numbers, inputStrValidation() function will not process data and console log a message to remind user to enter the correct data.

  ![screenshot example image 1](./images/input_data_validate_1.png)

- Input data validation 2: If user entered operators more than the numbers can operate, operLimitValidation() function will console log a message to ask user re-enter. Also, the function will remove the invalid data user previouly entered.

  ![screenshot example image 2](./images/input_data_validate_2.png)

- :white_check_mark: Add text colors for command line output messages

- :white_check_mark: add 'clear' command for user to clear up all numbers 'saved' in calculator

- :white_check_mark: add a message when user choose to quit or press ctrl+d
- :white_check_mark: handle unexpected operators user entered.

- :white_check_mark: Adjust output decimal places 1: Change parseInt() to parseFloat() in inputStrValidation() function. This would convert input number string into float-point number and perserve decimal places.

- :writing_hand: Adjust output decimal places 2: Gave user options to choose decimal places. Need to add a outputDecimal(calcResult, decimalOutput) function to manage decimal places. Declare a varible decimalOutput = 0. CalcUtils() control the decimalOutput value base on users input.

- :writing_hand: User instruction and examples: need more details content, better format and colors.
- :writing_hand: user might want an undo command, such as undo clear data.

- :writing_hand: refactor calcLogic() function with reduceRight, 'accumulate' the numbers array from right to left.
- :writing_hand: use functional programming method to pipe through input data and validation fuctions.

- :writing_hand: Upgrading to a WebSocket connection. Create a WebSocket constructor on the client side and implement Node.js webSocket library on the backend. More data vlidations modules might be required.

### Build With

- Node.js
- JavaScript
- Readline module
- Chalk

## Getting started

- Clone the repo on local drive and run npm install

## Executing program

- Inside cloned local repo folder, run: node index.js
- Follow the command prompt instructions.
- Type 'help' for instructions and examples
- Type 'q' to quit the app.

## Version History

- 1.0.0 Initial Release
