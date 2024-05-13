let buffer = '0';
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
    console.log(buffer);
}

const handleSymbol = (symbol) => {

    switch(symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            console.log('equals');
            break;
        case '←':
            if(buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
            break;
        case '-':
            break;
        case 'x':
            console.log('math symbol')
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