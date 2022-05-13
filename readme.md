# Postfix Calculator

A command line postfix calculator app build upon node.js

## Description

- use 2 arrays to store numbers and operators. CMD-Line Inputed numbers will be stacked in numArr. LILO: the last 2 elements perform arithmetic operation, their result pushed to the end of numArr array and repeat the operation until numArr is empty. CMD-line inputed operators(+, -, \*, /) will be quecued in operArr. FIFO: the first operator in the array will be served first until operArr is empty.

- calcLogic() function defines arithmetic logic and performs arithmetic operation
- calcUtility() function manages calcuator features to improve user experience, such as command line instructions and demo input/output examples. More features can be added here base on users feedbacks.
- use ReadLine module to obtain bash terminal command line input string

- choose an asynchronous calcInput() function to manage user interactive runtime command line input/output. Did not use recursive function to manage interactive runtime input. JavaScript Promise's Async/await is more efficient to manage. Recursive function also consumes more memory space and time comlexity.

- calculation input error checking 1: If user add operators more than the numbers can perform, console log a message to ask user re-input and remove the entire numbers and operators. Will add a condition to seperate the previously stored data and user currently input data.

- calculation input error checking 2: if user mixed operators inside numbers, have not able to detect. Might add a pre-check before stacking numbers and queuing operators.

- calculator utility features 1 - have not gaven user an option to clear out all the data. Need to add the promise error catch block to handle the promise rejection.

- calculator utility features 2 - user should have an undo command to undo clear-all-data. Might create 2 seperate arrays to backup deleted array elements. Also can add a clear backup data command.

- user instruction and examples: need more details content and better format.

- decimal palce: before getting into it, I would rather collect more user feedback.

### Build With

- Node.js
- Readline module
- JavaScript

## Getting started

- Clone the repo on local drive and run npm install

## Executing program

- Inside cloned local repo folder, run: node index.js
- Follow the command prompt instructions.
- Type 'help' for instructions and examples
- Type 'q' to quit the app.

## Version History

- 1.0.0 Initial Release
