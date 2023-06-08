function printMatrix(n) {
    return new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')));
}

console.log(printMatrix(7));