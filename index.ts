#! /usr/bin/env node

import inquirer from 'inquirer';

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select Operator: "
    },
]);

const { numberOne, numberTwo, operator } = answers;
if (numberOne !== undefined && numberTwo !== undefined && operator) {
    let result: number = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    } else if (operator === "-") {
        result = numberOne - numberTwo;
    } else if (operator === "*") {
        result = numberOne * numberTwo;
    } else if (operator === "/") {
        if (numberTwo !== 0) {
            result = numberOne / numberTwo;
        } else {
            console.log("Cannot divide by zero.");
            process.exit(1); // Terminate the process
        }
    }

    console.log("Your result is:", result);
} else {
    console.log("Kindly enter valid numbers and operator.");
}
