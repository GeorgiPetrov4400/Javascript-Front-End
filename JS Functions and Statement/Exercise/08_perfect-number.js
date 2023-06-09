function perfectNumber(number) {
    let divisors = [];

    for (let currentNum = 1; currentNum < number; currentNum++) {
        if (number % currentNum === 0) {
            divisors.push(currentNum);
        }
    }

    let divisorSum = divisors.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    if (number === divisorSum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);