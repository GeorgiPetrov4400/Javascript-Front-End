let numbers = [1, 2, 3];
let [first, second, third, fourth] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

let array = [1, 2, 3, ...[4, 5, 6]];
console.log(array);

let output = array.join(', ');
console.log(output);

let matrix = [[1,2,3], [5,6,7], [8,9], [10,11], [12], [13]];
console.table(matrix);
