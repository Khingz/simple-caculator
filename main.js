const result = document.querySelector('#result');
const operand = document.querySelector('#arthm');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalTo = document.querySelector('#equal-to');
const cancelAll = document.querySelector('.cancel-all');
const cancel = document.querySelector('.cancel');
const dot = document.querySelector('.dot');


let operandsValue = '';
let lastOperand = '';
let hasPoint = false;
let isOperator = false;
let resultValue = '';
let operandValues = '';

dot.addEventListener('click', e => {
    if(hasPoint) {
        return;
    } else {
        operandsValue += e.target.innerText;
        operand.innerText = operandsValue
        hasPoint = true;
    }
});

numbers.forEach(number => {
    number.addEventListener('click', e => {
        operandsValue += e.target.innerText;
        operand.innerText = operandsValue;
        resultValue = eval(operandsValue);
        result.innerText = resultValue;
        isOperator = false;      
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if(isOperator) {
           return;
        } else {
            operandsValue += e.target.innerText;
            operand.innerText = operandsValue
            isOperator = true;
            hasPoint = false;
        }
    })
})

equalTo.addEventListener('click', () => {
    operand.innerText = resultValue;
    result.innerText = '';
    operandsValue = operand.innerText
});

cancelAll.addEventListener('click', () => {
     operandsValue = '';
     lastOperand = '';
     hasPoint = false;
     isOperator = false;
     resultValue = '';
     operandValues = '';
     result.innerText = '';
     operand.innerText = '';
});

cancel.addEventListener('click', () => {
    let num = operandsValue.slice(0, -1);
    operandsValue = num;
    operand.innerText = operandsValue;
    resultValue = eval(operandsValue);
    result.innerText = resultValue;
    isOperator = false;
    console.log(typeofoperandsValue);      
});
