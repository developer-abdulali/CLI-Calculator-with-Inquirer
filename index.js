import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter 1st number",
    },
    {
        name: "num2",
        type: "number",
        message: "enter 2nd number",
    },
    {
        name: "operator",
        type: "list",
        message: "Select the operator",
        choices: ["Add", "Substract", "Multiply", "Division", "Percentage"]
    }
]);
let result;
if (answer.operator === "Add") {
    result = answer.num1 + answer.num2;
}
else if (answer.operator === "Substract") {
    result = answer.num1 - answer.num2;
}
else if (answer.operator === "Multiply") {
    result = answer.num1 * answer.num2;
}
else if (answer.operator === "Division") {
    result = answer.num1 / answer.num2;
}

console.log(answer);
console.log(`Result: ${result}`);
