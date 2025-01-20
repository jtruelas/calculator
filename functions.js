// Create basic math functions
function add(num1, num2) { return parseInt(num1) + parseInt(num2); }

function subtract(num1, num2) { return parseInt(num1) - parseInt(num2); }

function multiply(num1, num2) { return parseInt(num1) * parseInt(num2); }

function divide(num1, num2) { return parseInt(num1) / parseInt(num2); }


// Initialize variables
let num1;
let num2;
let sign;

// Function for whole calculator
function operate(sign, num1, num2) {
    return sign == '+' ? add(num1, num2) :
        sign == '-' ? subtract(num1, num2) :
            sign == '*' ? multiply(num1, num2) :
                sign == '/' ? divide(num1, num2) : 'Error';
}

// Create elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.num');
const operandButtons = document.querySelectorAll('.operation');
const resultButton = document.getElementById('=');
const clrButton = document.getElementById('clr');

// Create listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch (display.textContent) {
            case '0':
            case '+':
            case '-':
            case '*':
            case '/':
                display.textContent = button.textContent;
                break;
            default:
                if(sign) {display.textContent = button.textContent; num2 = display.textContent;}
                else {display.textContent += button.textContent;}
                break;
        }
    });
});

operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(!num1) {
            num1 = display.textContent;
            sign = button.textContent;
            display.textContent = sign;
        }
        else if(num1 && !num2) {
            num2 = display.textContent;
            console.log('elseIF')
            display.textContent = operate(sign, num1, num2);
            num1 = display.textContent;
            sign = button.textContent;
        }
        else if(num1 && num2) {
            console.log('bot');
            display.textContent = operate(sign, num1, num2);
            sign = button.textContent;
            num1 = display.textContent;
            num2 = '';
        }
    });
});

resultButton.addEventListener('click', () => {
    num2 = display.textContent
    display.textContent = operate(sign, num1, num2);
});

clrButton.addEventListener('click', () => {
    display.textContent = '0';
    num1 = '';
    num2 = '';
});