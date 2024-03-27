#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
const pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin: ",
        type: "number",
    },
]);
if (pinanswer.pin == myPin) {
    console.log("You Entered Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check-balance", "fast-cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount: ",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance!");
        }
        else {
            //=, -=, +=
            myBalance -= amountAns.amount;
            console.log(`${"Your Remaining Balance is: "} ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check-balance") {
        console.log(`${"Your Balnce is:"} ${myBalance}`);
    }
    else if (operationAns.operation === "fast-cash") {
        let amountSelect = await inquirer.prompt([
            {
                name: "fast",
                message: "Please Select Option",
                type: "list",
                choices: ["500", "1000", "5000", "10000"],
            },
        ]);
        myBalance -= amountSelect.fast;
        console.log(`${"Your Remaining Amount Is:"} ${myBalance}`);
    }
}
else {
    console.log("You Entered WRONG Pin Code!!!");
}
