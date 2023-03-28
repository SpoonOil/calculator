let input = {
    a : '',
    b : '',
    operator : '',
}

const buttons = document.querySelectorAll('.button');
// const oneBtn = document.querySelector('.one');
// const twoBtn = document.querySelector('.two');
// const threeBtn = document.querySelector('.three');
// const fourtBtn = document.querySelector('.four');
// const fiveBtn = document.querySelector('.five');
// const sixByn = document.querySelector('.six');
// const sevenBtn = document.querySelector('.seven');
// const eightBtn = document.querySelector('.eight');
// const nineBtn = document.querySelector('.nine');
// const zeroBtn = document.querySelector('.zero');
const equalsBtn = document.querySelector('.equals');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
const signDisplay = document.querySelector('.sign-display');
const backspaceBtn = document.querySelector('.backspace');

multiplyBtn.type = 'x';
addBtn.type = '+';
clearBtn.type = 'CE';
divideBtn.type = '/';
subtractBtn.type = '-';
equalsBtn.type = '=';
backspaceBtn.type = 'delete'

let inputString = '';
let lastPressed = 'number';

updateDisplay();

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
    if (!inputString) {
        display.textContent = 0
    } else {
        display.textContent = inputString;
    }
    signDisplay.textContent = `${roundNumber(input.a)} ${input.operator} ${roundNumber(input.b)}`
}

function roundNumber(num) {
    let newNum = num
    if (!newNum) {
        return '';
    }
    newNum = (Math.floor(newNum*100000000))/100000000
    newNum = newNum.toString();
    newNum = newNum.substring(0,9)
    newNum = newNum.replace(/\.$/g, '')

    return newNum
}

//TODO: ALLOW KEYBOARD INPUT

//TODO: ALLOW BACKSPACE
function buttonPressed(button, type) {
    const buttonPressed = button.target;
    console.log(buttonPressed)

    if (type == 'special') {
        lastPressed = 'special';
        if (buttonPressed.type == 'CE') {
            clearAll()
            return
        }

        if (buttonPressed.type == '=') {
            if (input.a && input.operator) {
                input.b = inputString;
                compute();
            }
            return
        }

        if (buttonPressed.type == 'delete') {
            inputString = inputString.substring(0, inputString.length-1);
            updateDisplay();
            return;
        }
         

        if (!input.a) {
            input.a = inputString;
            input.operator = buttonPressed.type;
            inputString = '';
            updateDisplay();
        } else if (!input.operator) {
            input.operator = buttonPressed.type;
            updateDisplay();
        } else if (!input.b) {
            input.b = inputString;
            compute();
            input.operator = buttonPressed.type;
            updateDisplay();
        }
        return;
    }
    if (lastPressed == 'special') {
        if (input.operator == '=' || !input.operator) {
            clearAll();
        }
        inputString ='';
        updateDisplay();
    }
    inputString += buttonPressed.textContent
    lastPressed = 'number'
    updateDisplay();
    return;
}

function clearAll() {
    input = {
        a:'',
        b:'',
        operator: '',
    };
    inputString = '';
    updateDisplay();
}

// TODO: ALLOW FUNCTION CHAINING
function compute() {
    inputString = roundNumber(evaluate(+input.a, +input.b, input.operator));
    updateDisplay();
    input = {
        a: evaluate(+input.a, +input.b, input.operator),
        b: '',
        operator: '',
    };
    inputString = '';
}

function subtract(a, b) {
    return a-b
}

function add(a,b) {
    return a+b;
}

function divide(a, b) {
    if (b == 0) {return 0}
    return a/b;
}

function multiply(a, b) {
    return a*b;
}

//TODO: ADD DECIMAL SUPPORT
function evaluate(a, b, operator) {
    let result;
    switch (operator) {
        case 'x':
            result = multiply(a, b)
            break;
        case '/':
            result = divide(a, b)
            break;
        case '+':
            result = add(a, b)
            break;
        case '-':
            result = subtract(a, b)
            break;
    }
    if (result > 999999999) {
        result = 999999999;
    }
    return result;
}