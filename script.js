let input = {
    a : 0,
    b : 0,
    operator : '',
}

const buttons = document.querySelectorAll('.button');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourtBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixByn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const zeroBtn = document.querySelector('.zero');
const equalsBtn = document.querySelector('.equals');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const signDisplay = document.querySelector('.sign-display');

multiplyBtn.type = 'x';
addBtn.type = '+';
clearBtn.type = 'CE';
divideBtn.type = '/';
subtractBtn.type = '-';
equalsBtn.type = '=';

let inputString = '';
let lastPressed = 'number';

buttons.forEach((button) =>
    {
        if (button.classList.contains('number')) {
            button.addEventListener('click', (e) => {
                buttonPressed(e, 'number')
            })
        } else if (button.classList.contains('special')) {
            button.addEventListener('click', (e) => {
                buttonPressed(e, 'special')
            })
        }
    }
)

function updateDisplay() {
    display.textContent = inputString;
    signDisplay.textContent = input.operator
}

function buttonPressed(button, type) {
    const buttonPressed = button.target;
    console.log(buttonPressed)

    if (type == 'special') {
        lastPressed = 'special';
        if (buttonPressed.type == 'clear') {
            clearAll()
            return
        }

        if (buttonPressed.type == 'equals') {
            if (input.a && input.operator) {
                input.b = inputString;
                compute();
            }
            return
        }
         

        if (!input.a) {
            input.a = inputString;
            input.operator = buttonPressed.type;
            inputString = '';
            updateDisplay();
        } else if (!input.b) {
            input.b = inputString;
            compute();
        }
        return;
    }
    if (lastPressed == 'special') {
        inputString ='';
        updateDisplay()
    }
    inputString += buttonPressed.textContent
    lastPressed = 'number'
    updateDisplay();
    return;
}

function clearAll() {
    input = {
        a:0,
        b:0,
        operator: '',
    };
    inputString = '';
    updateDisplay();
}

function compute() {
    inputString = evaluate(+input.a, +input.b, input.operator);
    updateDisplay();
    input = {
        a: inputString,
        b: 0,
        operator: '',
    };
}

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
        case 'x':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
    }
}