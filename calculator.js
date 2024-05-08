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
    console.log("symbol");
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