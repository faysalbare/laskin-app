document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator__display');
    const keys = document.querySelector('.calculator__keys');

    keys.addEventListener('click', function(event) {
        if (!event.target.matches('button')) return;

        const key = event.target;
        const action = key.dataset.action;
        const keyValue = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyValue;
            } else {
                display.textContent = displayedNum + keyValue;
            }
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
        }

        if (action === 'clear') {
            display.textContent = '0';
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            // Store the first number and operator
            display.dataset.firstNum = displayedNum;
            display.dataset.operator = action;
            display.textContent = '0';
        }

        if (action === 'calculate') {
            const firstNum = parseFloat(display.dataset.firstNum);
            const operator = display.dataset.operator;
            const secondNum = parseFloat(displayedNum);

            if (operator === 'add') {
                display.textContent = firstNum + secondNum;
            } else if (operator === 'subtract') {
                display.textContent = firstNum - secondNum;
            } else if (operator === 'multiply') {
                display.textContent = firstNum * secondNum;
            } else if (operator === 'divide') {
                display.textContent = firstNum / secondNum;
            }
        }
    });
});
