// 1.
printStars(8);

function printStars(count) {
    console.log('*'.repeat(count));
}

printStars(5);

// 2.
const printStars2 = function(count2) {
    return '*'.repeat(count2);
}

for (let index = 0; index < 20; index++) {
    console.log(printStars2(3));
    console.log(' ');
}