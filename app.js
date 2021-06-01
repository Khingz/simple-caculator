const getResult = () => {
    return document.getElementById('result').innerText;
}

const printResult = num => {
    return document.getElementById('result').innerText = formattedNumber(num)
}

const getArthm = () => {
    return document.getElementById('arthm').innerText;
}

const printArthm = num => {
    if(num == '') {
        return document.getElementById('arthm').innerText = num;
    } else {
        return document.getElementById('arthm').innerText = formattedNumber(num)
    }
}

const formattedNumber = num => {
    let n = Number(num);
    formNumber = n.toLocaleString('en');
    return formNumber;
}

const reverseFormattedNumber = num => {
    return Number(num.replace(/,/g, ''));
}

const numbers = document.querySelectorAll('.number');
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        let output = reverseFormattedNumber(getArthm());
        output += numbers[i].innerText;

        printArthm(output)
    })
}

const operators = document.querySelectorAll('.operator');
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', () => {
        let output = reverseFormattedNumber(getArthm());
        let signs = operators[i].innerText;

        output += signs;
        printArthm(output);
        console.log(document.getElementById('arthm').innerText);
    })
}

