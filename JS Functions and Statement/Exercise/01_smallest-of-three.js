function smallestOfThree(firstNum, secondNum, thirdNum) {
    let min = Math.min(firstNum, secondNum, thirdNum);
    return min;
}

const smallestOfThree2 = (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum);

console.log(smallestOfThree(1, 2, -3));
console.log(smallestOfThree2(8, -8, -9));
