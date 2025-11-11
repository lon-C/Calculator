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

let display = document.querySelector('.display');
const container = document.querySelector('.container');
let onscreen = [];

container.addEventListener("click", (event) => {
    onscreen += event.target.textContent;
    display.textContent = onscreen;
    console.log(onscreen);
});
