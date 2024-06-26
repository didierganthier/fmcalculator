let buffer = '0';
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector('.screen');

const buttonClick = (value) => {
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

const handleNumber = (number) => {
    if(buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}


const handleMath = (value) => {
    if(buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = '0';
}

const flushOperation = (intBuffer) => {
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    } else if(previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if(previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

const handleSymbol = (symbol) => {

    switch(symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            if(previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = '' + runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
            handleMath(symbol);
            break;
    }
}

const init = () => {
    document.querySelector('.calc-buttons')
    .addEventListener('click', (event) => {
        buttonClick(event.target.innerText);
    })
}

const rerender = () => {
    screen.innerText = buffer;
}

init();