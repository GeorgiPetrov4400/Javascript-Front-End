function simpleCalculator(firstNum, secondNum, operation) {
    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    switch (operation) {
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return substract(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
        default:
            console.log('Invalid operation');
            break;
    }
}

console.log(simpleCalculator(40, 8, 'divide'));