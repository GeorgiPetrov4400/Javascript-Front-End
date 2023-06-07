function calculations(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (sum, num) => sum - num;

    return subtract(sum(firstNum, secondNum), thirdNum);
}

console.log(calculations(15, 2, 3));