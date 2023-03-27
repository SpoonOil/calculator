let input = {
    a : 0,
    b : 0,
    operator : '',
}

const buttons = document.querySelectorAll('.button');
const oneBtn = document.querySelector('one')
const twoBtn = document.querySelector('two');
const threeBtn = document.querySelector('three');
const fourtBtn = document.querySelector('four');
const fiveBtn = document.querySelector('five');
const sixByn = document.querySelector('six');
const sevenBtn = document.querySelector('seven');
const eightBtn = document.querySelector('eight');
const nineBtn = document.querySelector('nine');
const zeroBtn = document.querySelector('zero');
const equalsBtn = document.querySelector('equals');
const subtractBtn = document.querySelector('subtract');
const addBtn = document.querySelector('add');
const divideBtn = document.querySelector('divide');
const multiplyBtn = document.querySelector('multiply');
const clearBtn = document.querySelector('clear');


let inputString = '';

function subtract(a, b) {
    return a-b
}

function add(a,b) {
    return a+b;
}

function divide(a, b) {
    return a/b;
}

function multiply(a, b) {
    return a*b;
}

function evaluate(a, b, operator) {
    switch (operator) {
        case 'multiply':
            return multiply(a, b)
            break;
        case 'divide':
            return divide(a, b)
            break;
        case 'add':
            return add(a, b)
            break;
        case 'subtract':
            return subtract(a, b)
            break;
    }
}