let add = function add(num1, num2) {
    return num1 + num2;
};

let subtract = function subtract(num1, num2) {
    return num1 - num2;
};

let multiply = function multiply(num1, num2) {
    return num1 * num2;
};

let divide = function divide(num1, num2) {
    return num1 / num2;
};

const firstNumber = 5;
const secondNumber = 3;
const operator = add;

function operate(a, action, b) {
    return action(a, b);
};

console.log(operate(firstNumber, operator, secondNumber));
