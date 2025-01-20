function add (num1, num2) {return num1 + num2;}

function subtract(num1, num2) {return num1 - num2;}

function multiply(num1, num2) {return num1 * num2;}

function divide(num1, num2) {return num1 / num2;}

let num1;
let num2;
let sign;

function operate(sign, num1, num2) {
    return sign == '+' ? add(num1, num2) : 
    sign == '-' ? subtract(num1, num2) :
    sign == '*' ? multiply(num1, num2) :
    sign == '/' ? divide(num1, num2) : 'Error';
}